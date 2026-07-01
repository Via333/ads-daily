(() => {
  const labelProfiles = {
    "摄影 / 风景": "landscape",
    "摄影 / 人像": "portrait",
    "摄影 / 纪实": "documentary",
    "绘画 / 风景": "landscape",
    "绘画 / 人物": "portrait",
    "绘画 / 色彩": "color",
    "版画 / 平面": "print",
    "建筑 / 空间": "architecture",
    "雕塑 / 器物": "sculpture",
    "影像 / 电影帧": "film",
  };

  const cueRules = [
    [/station|subway|metro|exit|workers|stadium|street|road|urban|gate/i, ["出入口标识", "顶棚和门禁", "栏杆与台阶", "街树和路面"]],
    [/mountain|forest|river|lake|sea|landscape|garden|valley/i, ["前景地貌", "远处轮廓", "天空或水面", "植被色块"]],
    [/portrait|self-portrait|actor|actress|figure|person|head/i, ["脸部朝向", "肩线或手势", "服饰", "背景留白"]],
    [/abstract|composition|color|study/i, ["大色块", "色块边界", "重复节奏", "空白关系"]],
    [/woodblock|print|poster|engraving|etching/i, ["黑白线条", "平面色块", "裁切边缘", "图像符号"]],
    [/architecture|building|castle|interior|facade|temple|door/i, ["垂直线", "入口或立面", "透视线", "材料表面"]],
    [/sculpture|statue|ceramic|vessel|bronze|stone|bodhisattva/i, ["外轮廓", "体量转折", "材质光泽", "阴影"]],
    [/film|movie|cinema|still|frame|scene/i, ["人物或动作", "场景边界", "明暗气氛", "叙事道具"]],
  ];

  const clean = (value, limit = 90) => {
    const text = String(value || "").replace(/^File:/i, "").replace(/\.[a-z0-9]+$/i, "").replace(/\s+/g, " ").trim();
    return text.length > limit ? `${text.slice(0, limit - 1)}...` : text;
  };

  const setText = (card, key, value) => {
    const node = card.querySelector(`[data-analysis="${key}"]`);
    if (node && node.textContent !== value) node.textContent = value;
  };

  const cuesFor = (title, label) => {
    const text = `${title} ${label}`;
    const match = cueRules.find(([rule]) => rule.test(text));
    return match ? match[1] : ["主体", "背景", "边缘细节", "留白"];
  };

  const profileFor = (title, label) => {
    if (labelProfiles[label]) return labelProfiles[label];
    if (/station|street|exit|urban/i.test(title)) return "documentary";
    if (/architecture|building|castle/i.test(title)) return "architecture";
    if (/portrait|figure|person/i.test(title)) return "portrait";
    if (/film|movie|still|frame/i.test(title)) return "film";
    return "documentary";
  };

  const aspectText = (img, title) => {
    const width = img?.naturalWidth || img?.clientWidth || 0;
    const height = img?.naturalHeight || img?.clientHeight || 0;
    if (!width || !height) return "";
    const ratio = width / height;
    if (ratio > 1.55) return `《${title}》是横向画幅，环境能从左到右展开，主体不会像证件照一样孤立。`;
    if (ratio < 0.78) return `《${title}》是竖向画幅，视线会自然上下移动，主体更容易有纪念性。`;
    if (ratio > 0.9 && ratio < 1.12) return `《${title}》接近方形，重点会落在中心与四边的平衡。`;
    return `《${title}》的画幅比例中性，关键是主体和边缘信息是否互相支撑。`;
  };

  const hexToRgb = (hex) => {
    const text = String(hex || "").replace("#", "").slice(0, 6);
    if (text.length !== 6) return null;
    return {
      r: parseInt(text.slice(0, 2), 16),
      g: parseInt(text.slice(2, 4), 16),
      b: parseInt(text.slice(4, 6), 16),
    };
  };

  const paletteStats = (colors) => {
    const rgbs = colors.map(hexToRgb).filter(Boolean);
    if (!rgbs.length) return null;
    const average = rgbs.reduce((acc, color) => ({
      r: acc.r + color.r / rgbs.length,
      g: acc.g + color.g / rgbs.length,
      b: acc.b + color.b / rgbs.length,
    }), { r: 0, g: 0, b: 0 });
    const brightness = (0.2126 * average.r + 0.7152 * average.g + 0.0722 * average.b) / 255;
    const max = Math.max(average.r, average.g, average.b);
    const min = Math.min(average.r, average.g, average.b);
    const saturation = max ? (max - min) / max : 0;
    const warmth = average.r > average.b ? "暖色略多" : "冷色略多";
    return { brightness, saturation, warmth };
  };

  const colorText = (title, profile, colors) => {
    if (!colors.length) return `等主色读取后，这里会结合《${title}》的实际冷暖、明暗和饱和度解释它为什么耐看。`;
    const stats = paletteStats(colors);
    const light = stats.brightness < 0.38 ? "整体偏暗，暗部给画面压住重量" : stats.brightness > 0.68 ? "整体偏亮，画面显得开放、轻" : "明度在中间区间，画面比较稳";
    const sat = stats.saturation < 0.22 ? "饱和度低，质感和结构比鲜艳度更重要" : stats.saturation > 0.42 ? "饱和度高，颜色本身承担吸引力" : "饱和度有节制，颜色不会互相抢戏";
    const reason = {
      documentary: "这种偏现场的色彩让它不像宣传照，而更像真实城市切片。",
      architecture: "色彩退到材料和光线后面，空间结构就更容易被读出来。",
      landscape: "冷暖和明度差会影响空气感，也决定远近层次是否成立。",
      portrait: "只要人物区域不被背景抢走，肖像的观看重心就稳。",
      color: "色彩本身就是结构，主色和次色的面积关系决定画面的力度。",
      print: "有限色数会强化识别度，适合观察色块如何互相扣住。",
      sculpture: "低饱和色更能突出材质、体积和阴影转折。",
      film: "电影帧的颜色会决定这一刻的情绪温度和叙事压力。",
    }[profile] || "这些色彩关系决定了画面为什么耐看。";
    return `《${title}》的主色约为 ${colors.join("、")}。${light}；${sat}；${stats.warmth}。${reason}`;
  };

  const contentText = (title, profile, cues, meta) => {
    const detail = meta ? `，并且通过“${meta}”补充具体信息` : "";
    if (profile === "documentary") return `《${title}》好在具体：${cues.join("、")}不是装饰，而是在交代地点、功能、时间和城市使用痕迹${detail}。它让你看到“这里正在被生活使用”，所以比一张干净的建筑宣传照更有信息密度。`;
    if (profile === "architecture") return `《${title}》不只是拍建筑外形，而是在说明空间怎样被进入、经过或使用${detail}。设计、尺度和现场感被放在同一张图里。`;
    if (profile === "landscape") return `《${title}》吸引人的地方在于把${cues.join("、")}组织成一种可停留的空间${detail}。景物不是背景素材，而是在引导你感受距离、天气和时间。`;
    if (profile === "portrait") return `《${title}》的内容看点在人物如何被呈现：${cues.join("、")}一起决定身份、性格和观看距离${detail}。`;
    if (profile === "color") return `《${title}》的主题落在视觉关系本身：${cues.join("、")}制造张力、平衡或速度感${detail}。它好不是因为“像什么”，而是因为关系被安排得清楚。`;
    if (profile === "print") return `《${title}》把${cues.join("、")}压缩成清晰符号${detail}。信息进入得快，局部线条又能让人停下来反复看。`;
    if (profile === "sculpture") return `《${title}》的内容价值在${cues.join("、")}${detail}：题材、材质和姿态结合起来，让对象有重量，也有精神状态。`;
    if (profile === "film") return `《${title}》作为单帧成立，是因为${cues.join("、")}暗示了前后文${detail}。你能从一个静止瞬间推测刚发生什么、接下来可能发生什么。`;
    return `《${title}》的内容看点是${cues.join("、")}怎样共同说明主题${detail}。`;
  };

  const compositionText = (title, profile, cues, aspect) => {
    if (profile === "documentary") return `这张《${title}》好在没有只拍一个孤立物件，而是把${cues.slice(0, 3).join("、")}同时纳入画面。观众先读到地点信息，再顺着周边设施和环境细节确认它是一个真实现场。${aspect}`;
    if (profile === "architecture") return `这张《${title}》的结构感来自${cues.slice(0, 3).join("、")}的相互咬合：硬边线条建立秩序，环境细节负责给尺度。${aspect}`;
    if (profile === "landscape") return `这张《${title}》的空间层次主要靠${cues.slice(0, 3).join("、")}拉开。它不是平均铺景，而是让近处、中段和远处各自承担不同观看距离。${aspect}`;
    if (profile === "portrait") return `这张《${title}》的重心在${cues.slice(0, 3).join("、")}之间的关系：人物不是单纯摆在中央，而是通过姿态、服饰和背景距离建立气质。${aspect}`;
    if (profile === "color") return `这张《${title}》的构图重点不是题材叙事，而是${cues.slice(0, 3).join("、")}怎样分配画面重量。大块决定骨架，小块负责节奏。${aspect}`;
    if (profile === "print") return `这张《${title}》强在平面组织：${cues.slice(0, 3).join("、")}让画面一眼可读，同时又保留细看时的线条节奏。${aspect}`;
    if (profile === "sculpture") return `这张《${title}》值得看的是${cues.slice(0, 3).join("、")}：轮廓负责第一眼识别，阴影和转折让体量变得可感。${aspect}`;
    if (profile === "film") return `这帧《${title}》的构图服务于叙事：${cues.slice(0, 3).join("、")}把观众的视线固定在事件发生的位置。${aspect}`;
    return `这张《${title}》的构图价值在于${cues.slice(0, 3).join("、")}共同形成主次。${aspect}`;
  };

  const learningText = (title, profile, cues) => {
    if (profile === "documentary") return `练习时圈出《${title}》里的${cues.slice(0, 3).join("、")}，判断哪一个最先被看见、哪一个提供现场信息。`;
    if (profile === "architecture") return `沿着《${title}》里最长的结构线看一遍，再沿最亮或最暗区域看一遍，比较两条路径是否把你带到同一个主体。`;
    if (profile === "landscape") return `把《${title}》分成近、中、远三层，各写一句它们的作用；如果三层作用不同，画面就有空间组织。`;
    if (profile === "portrait") return `遮住背景，只看人物轮廓；再只看背景。判断《${title}》的气质来自人本身，还是来自环境衬托。`;
    if (profile === "color") return `把《${title}》的主色块按面积从大到小列出来，再看最小色块是否承担点睛或打破平衡的作用。`;
    if (profile === "print") return `把《${title}》缩到很小看是否仍然清楚；再放大看局部线条是否有节奏。`;
    if (profile === "sculpture") return `只看《${title}》的外轮廓，找最有力量的转折；再看阴影是否正好强化了这个转折。`;
    if (profile === "film") return `给《${title}》写一句“上一秒”和一句“下一秒”。如果能写出来，说明这帧叙事信息足够强。`;
    return `先找《${title}》里最先吸引你的元素，再解释它为什么比其他元素更早被看见。`;
  };

  const rewrite = (card) => {
    const title = clean(card.querySelector("h2")?.textContent || "");
    if (!title) return;
    const label = clean(card.querySelector(".type-badge")?.textContent || "", 30);
    const meta = clean(card.querySelector(".artist-line")?.textContent || "", 80);
    const img = card.querySelector("img");
    const colors = Array.from(card.querySelectorAll(".swatch")).map((node) => node.title || node.style.backgroundColor).filter(Boolean).slice(0, 5);
    const profile = profileFor(title, label);
    const cues = cuesFor(title, label);
    const aspect = aspectText(img, title);

    setText(card, "composition", compositionText(title, profile, cues, aspect));
    setText(card, "content", contentText(title, profile, cues, meta));
    setText(card, "color", colorText(title, profile, colors));
    setText(card, "learning", learningText(title, profile, cues));
    card.dataset.specificAnalysis = "true";
  };

  const rewriteAll = () => {
    document.querySelectorAll(".work-card").forEach(rewrite);
  };

  let timer = null;
  const schedule = () => {
    clearTimeout(timer);
    timer = setTimeout(rewriteAll, 120);
  };

  new MutationObserver(schedule).observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: ["style", "title", "src"],
  });

  window.addEventListener("load", rewriteAll);
  document.addEventListener("DOMContentLoaded", rewriteAll);
  setInterval(rewriteAll, 2500);
})();