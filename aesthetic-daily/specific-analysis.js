(() => {
  const labelProfiles = {
    "时尚 / 造型": "fashion",
    "商业 / 美妆": "product",
    "生活 / 餐饮": "food",
    "生活 / 居家": "interior",
    "商业 / 空间": "retail",
    "生活 / 街头": "street",
    "旅行 / 酒店": "travel",
    "品牌 / 包装": "branding",
    "商业 / 科技": "product",
    "商业 / 人物": "workplace",
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
    [/fashion|style|outfit|clothing|dress|model|wardrobe|时尚|造型/i, ["服装轮廓", "层次与配饰", "人物姿态", "城市背景"]],
    [/cosmetic|skincare|perfume|bottle|electronics|vehicle|product|美妆|科技/i, ["产品轮廓", "材质高光", "道具与台面", "品牌留白"]],
    [/coffee|cafe|restaurant|food|dish|drink|dessert|餐饮/i, ["主体食物", "器皿边缘", "桌面道具", "光泽与热气"]],
    [/retail|boutique|store|shop|window display|商业 \/ 空间/i, ["入口动线", "陈列节奏", "灯光层次", "品牌识别"]],
    [/interior|home|kitchen|living room|居家/i, ["空间轴线", "家具组合", "灯具与窗光", "材质交界"]],
    [/hotel|resort|hospitality|travel|酒店|旅行/i, ["抵达视角", "休憩区域", "景观开口", "服务细节"]],
    [/packaging|package|brand|label|包装|品牌/i, ["包装轮廓", "标识层级", "材质与印刷", "系列陈列"]],
    [/workplace|office|professional|team|人物/i, ["人物关系", "动作状态", "工作环境", "职业细节"]],
    [/urban|street|city|walking|街头/i, ["人物动线", "街道层次", "店面与标识", "日常动作"]],
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
    if (/fashion|style|outfit|clothing/i.test(title)) return "fashion";
    if (/cosmetic|skincare|perfume|product|electronics|vehicle/i.test(title)) return "product";
    if (/coffee|cafe|restaurant|food|dish|drink/i.test(title)) return "food";
    if (/retail|boutique|store|shop|display/i.test(title)) return "retail";
    if (/interior|home|kitchen|living room/i.test(title)) return "interior";
    if (/hotel|resort|hospitality|travel/i.test(title)) return "travel";
    if (/packaging|package|brand|label/i.test(title)) return "branding";
    if (/workplace|office|professional|team/i.test(title)) return "workplace";
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
      fashion: "服装、肤色和环境没有同时争抢注意力，造型因此既醒目又保留可借鉴性。",
      product: "主色负责品牌识别，背景色负责托住材质，商业主体因此更容易在一眼内被认出。",
      food: "食物的暖色与器皿、桌面的中性色形成食欲和质感之间的平衡。",
      interior: "木、石、织物和光线被控制在同一色温里，空间因此显得完整而适合真实生活。",
      retail: "色彩既在划分区域，也在强化品牌记忆，顾客能快速理解空间重点。",
      street: "环境色保持真实，局部服装或招牌成为视觉锚点，生活感和时尚感可以同时成立。",
      travel: "冷暖关系把舒适、开阔或度假感转成直观情绪，这是酒店与旅行影像常用的吸引方式。",
      branding: "有限而重复的品牌色让系列产品形成家族感，也提升了货架和屏幕上的辨识度。",
      workplace: "人物肤色、服装与办公环境有清楚主次，职业感不会显得僵硬或过度摆拍。",
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
    if (profile === "fashion") return `《${title}》的商业价值在于把${cues.join("、")}放进同一个可模仿的造型场景${detail}。它不只展示衣服，也展示一种人设、生活方式和穿着语境。`;
    if (profile === "product") return `《${title}》围绕${cues.join("、")}建立产品卖点${detail}。观众先认出品类，再感知材质、价格感和使用场景，这正是商业产品图需要完成的信息顺序。`;
    if (profile === "food") return `《${title}》通过${cues.join("、")}把味觉转成视觉暗示${detail}。新鲜度、温度和用餐氛围都被拍进画面，因此它既生活化，也具备菜单或社交传播价值。`;
    if (profile === "interior") return `《${title}》让${cues.join("、")}共同说明“人会怎样住在这里”${detail}。空间不是样板间背景，而是家具尺度、收纳和日常动线组成的生活提案。`;
    if (profile === "retail") return `《${title}》把${cues.join("、")}组织成一次消费路径${detail}。好的商业空间图能让人同时读到品牌定位、商品重点和进入空间后的行动顺序。`;
    if (profile === "street") return `《${title}》的看点是${cues.join("、")}如何共同构成当下城市生活${detail}。它保留真实偶然性，同时又能成为穿搭、店铺或城市品牌的情绪参考。`;
    if (profile === "travel") return `《${title}》用${cues.join("、")}出售的不是房间本身，而是一种抵达后的感受${detail}。舒适、松弛和地点特征被转成了可想象的体验。`;
    if (profile === "branding") return `《${title}》通过${cues.join("、")}把产品变成品牌系统${detail}。单件要清楚，成组又要有秩序，这决定它能否在货架和社交媒体上被快速记住。`;
    if (profile === "workplace") return `《${title}》借助${cues.join("、")}建立可信的职业形象${detail}。重点不是摆出“工作”的样子，而是让能力、协作和环境文化自然出现。`;
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

  const meaningText = (title, label, profile, cues, meta, source, license) => {
    const parts = [`标题《${title}》`];
    if (label) parts.push(`类型“${label}”`);
    if (source) parts.push(`来源“${source}”`);
    if (license) parts.push(`授权“${license}”`);
    if (meta) parts.push(meta);
    const info = `这张图的信息层包括：${parts.join("，")}。`;
    if (profile === "fashion") {
      return `${info} 它表达的是一种可被认同和模仿的生活身份；${cues.slice(0, 3).join("、")}把服装从单品变成态度，也让造型具有商业传播力。`;
    }
    if (profile === "product") {
      return `${info} 它的含义是把功能物件转成值得拥有的对象；${cues.slice(0, 3).join("、")}共同暗示品质、价格区间和目标人群。`;
    }
    if (profile === "food") {
      return `${info} 它把日常饮食转成关于享受、分享和生活节奏的想象；${cues.slice(0, 3).join("、")}让观看者几乎能预感味道与温度。`;
    }
    if (profile === "interior") {
      return `${info} 它表达的不只是装修风格，而是一种生活秩序；${cues.slice(0, 3).join("、")}在说明人在空间里如何停留、使用和感到舒适。`;
    }
    if (profile === "retail") {
      return `${info} 它的含义在于把品牌价值变成可以进入的空间；${cues.slice(0, 3).join("、")}既服务销售，也塑造顾客对品牌的第一印象。`;
    }
    if (profile === "street") {
      return `${info} 它记录的是当下生活方式如何真实发生；${cues.slice(0, 3).join("、")}让趋势不再只是概念，而是进入街道、动作与日常关系。`;
    }
    if (profile === "travel") {
      return `${info} 它表达的是对另一种时间节奏的邀请；${cues.slice(0, 3).join("、")}把目的地转化成可以提前想象的体验。`;
    }
    if (profile === "branding") {
      return `${info} 它的含义是用视觉秩序建立信任和记忆；${cues.slice(0, 3).join("、")}让消费者在看到品牌名之前，也能识别它的气质。`;
    }
    if (profile === "workplace") {
      return `${info} 它表达的是一种现代职业身份；${cues.slice(0, 3).join("、")}让专业、亲和力和组织文化同时被看见。`;
    }
    if (profile === "documentary") {
      return `${info} 它的含义不在于把城市拍得漂亮，而在于把公共设施、交通入口和日常秩序变成可观察的对象；你看到的是城市如何被使用、管理和经过。`;
    }
    if (profile === "architecture") {
      return `${info} 它的含义是把建筑从“外观”转成“空间经验”：${cues.slice(0, 3).join("、")}说明人如何接近、进入或理解这个场所。`;
    }
    if (profile === "landscape") {
      return `${info} 它的含义在于把自然或环境组织成一种情绪空间；${cues.slice(0, 3).join("、")}让观看者感到距离、时间和气候，而不只是知道那里有什么。`;
    }
    if (profile === "portrait") {
      return `${info} 它的含义来自人物被观看的方式：${cues.slice(0, 3).join("、")}共同塑造身份、性格和时代感。`;
    }
    if (profile === "color") {
      return `${info} 它的含义不依赖故事，而依赖视觉关系本身；${cues.slice(0, 3).join("、")}像语法一样组织节奏、冲突和平衡。`;
    }
    if (profile === "print") {
      return `${info} 它的含义来自图像被压缩成符号后的传播力；${cues.slice(0, 3).join("、")}让复杂信息变得快速、清楚、可记忆。`;
    }
    if (profile === "sculpture") {
      return `${info} 它的含义在于物体的存在感：${cues.slice(0, 3).join("、")}让材质、重量和精神状态同时出现。`;
    }
    if (profile === "film") {
      return `${info} 它的含义来自单帧里的叙事压力；${cues.slice(0, 3).join("、")}让你能想象这一刻之前和之后发生了什么。`;
    }
    return `${info} 它的含义来自${cues.slice(0, 3).join("、")}如何共同指向主题。`;
  };

  const compositionText = (title, profile, cues, aspect) => {
    if (profile === "fashion") return `《${title}》围绕${cues.slice(0, 3).join("、")}安排视觉顺序：先看到整体造型，再读配饰和环境。主体足够明确，背景又能补充生活方式，因此兼具编辑感和商业可读性。${aspect}`;
    if (profile === "product") return `《${title}》用${cues.slice(0, 3).join("、")}把注意力锁在商品上。轮廓负责快速识别，光线和道具负责解释材质与使用情境，留白则给文案和品牌标识留下空间。${aspect}`;
    if (profile === "food") return `《${title}》通过${cues.slice(0, 3).join("、")}建立从主菜到细节的观看路径。器皿边界控制秩序，局部光泽制造新鲜感，桌面环境补充真实用餐氛围。${aspect}`;
    if (profile === "interior") return `《${title}》以${cues.slice(0, 3).join("、")}组织空间。大结构先说明格局，中等家具给出尺度，小型生活物件让空间不显空泛，所以画面既整洁又可居住。${aspect}`;
    if (profile === "retail") return `《${title}》把${cues.slice(0, 3).join("、")}排成清楚的商业动线。视线会像顾客一样先确认入口，再扫过主陈列和品牌焦点，空间因此容易理解也容易记住。${aspect}`;
    if (profile === "street") return `《${title}》利用${cues.slice(0, 3).join("、")}形成有秩序的偶然感。人物动作给画面节奏，街道和店面提供层次，使生活现场看起来真实却不松散。${aspect}`;
    if (profile === "travel") return `《${title}》通过${cues.slice(0, 3).join("、")}制造“我正站在这里”的代入感。前景提供抵达感，中段安排停留位置，远处景观负责吸引和想象。${aspect}`;
    if (profile === "branding") return `《${title}》以${cues.slice(0, 3).join("、")}建立品牌层级。单件包装有明确主面，多件陈列形成重复节奏，整体因此适合货架、电商和社交媒体传播。${aspect}`;
    if (profile === "workplace") return `《${title}》围绕${cues.slice(0, 3).join("、")}安排人物与环境。姿态是第一信息，工作物件提供职业证据，背景控制亲近或专业的观看距离。${aspect}`;
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
    if (profile === "fashion") return `把《${title}》里的服装、人物和背景分别遮住一次，判断哪一层在负责“好看”，哪一层在负责“想成为这样的人”。`;
    if (profile === "product") return `把《${title}》缩成手机商品列表大小，检查产品是否仍能一眼认出；再放大看材质高光是否在证明品质。`;
    if (profile === "food") return `观察《${title}》最亮的三个位置是否都在帮助食物显得新鲜；如果亮点跑到无关道具上，食欲就会被分散。`;
    if (profile === "interior") return `沿《${title}》中的行走路线想象自己进入空间，依次写下会经过、坐下和触碰的对象，判断设计是否真的服务生活。`;
    if (profile === "retail") return `假设你只看《${title}》三秒，记下最先认出的品牌信息和商品区域；这能检验商业空间的视觉层级。`;
    if (profile === "street") return `圈出《${title}》里最有时代感的三个细节，判断它们来自穿着、店面、动作还是城市设施。`;
    if (profile === "travel") return `写下《${title}》承诺的三个体验词，再找出分别支撑它们的画面证据，训练把情绪落实到具体视觉元素。`;
    if (profile === "branding") return `遮住《${title}》中的品牌文字，只看颜色、形状和材质，判断这一组包装是否仍然像同一个品牌。`;
    if (profile === "workplace") return `区分《${title}》里的真实工作线索和摆拍线索，思考怎样调整动作或环境，能让职业形象更可信。`;
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
    const source = clean(card.querySelector(".source-pill")?.textContent || "", 36);
    const license = clean(card.querySelector(".license-text")?.textContent || "", 36);
    const img = card.querySelector("img");
    const colors = Array.from(card.querySelectorAll(".swatch")).map((node) => node.title || node.style.backgroundColor).filter(Boolean).slice(0, 5);
    const profile = profileFor(title, label);
    const cues = cuesFor(title, label);
    const aspect = aspectText(img, title);

    setText(card, "composition", compositionText(title, profile, cues, aspect));
    setText(card, "content", contentText(title, profile, cues, meta));
    setText(card, "color", colorText(title, profile, colors));
    setText(card, "meaning", meaningText(title, label, profile, cues, meta, source, license));
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
