const SLOTS = [
  {
    key: "landscape-photo",
    label: "摄影 / 风景",
    profile: "landscapePhoto",
    sources: [
      { type: "commons", queries: ["featured landscape photography", "mountain landscape photograph", "seascape photograph"] },
      { type: "met", queries: ["landscape photograph"] },
    ],
  },
  {
    key: "portrait-photo",
    label: "摄影 / 人像",
    profile: "portraitPhoto",
    sources: [
      { type: "commons", queries: ["portrait photograph featured picture", "black and white portrait photograph", "historic portrait photograph"] },
      { type: "met", queries: ["portrait photograph"] },
    ],
  },
  {
    key: "documentary-photo",
    label: "摄影 / 纪实",
    profile: "documentaryPhoto",
    sources: [
      { type: "commons", queries: ["documentary photography street scene", "urban documentary photograph", "workers photograph"] },
      { type: "met", queries: ["documentary photograph"] },
    ],
  },
  {
    key: "landscape-painting",
    label: "绘画 / 风景",
    profile: "landscapePainting",
    sources: [
      { type: "met", queries: ["landscape painting", "river landscape painting", "mountain painting"] },
      { type: "commons", queries: ["public domain landscape painting", "featured landscape painting"] },
    ],
  },
  {
    key: "portrait-painting",
    label: "绘画 / 人物",
    profile: "portraitPainting",
    sources: [
      { type: "met", queries: ["portrait painting", "figure painting", "self portrait painting"] },
      { type: "commons", queries: ["public domain portrait painting", "featured portrait painting"] },
    ],
  },
  {
    key: "color-painting",
    label: "绘画 / 色彩",
    profile: "colorPainting",
    sources: [
      { type: "met", queries: ["abstract painting color", "modern painting color", "color study painting"] },
      { type: "commons", queries: ["public domain abstract painting color", "featured abstract painting"] },
    ],
  },
  {
    key: "print-design",
    label: "版画 / 平面",
    profile: "printDesign",
    sources: [
      { type: "met", queries: ["Japanese woodblock print", "woodcut print", "poster print"] },
      { type: "commons", queries: ["Japanese woodblock print public domain", "public domain poster print"] },
    ],
  },
  {
    key: "architecture-space",
    label: "建筑 / 空间",
    profile: "architecture",
    sources: [
      { type: "commons", queries: ["architecture featured picture interior", "modern architecture photograph", "historic architecture photograph"] },
      { type: "met", queries: ["architectural photograph"] },
    ],
  },
  {
    key: "sculpture-object",
    label: "雕塑 / 器物",
    profile: "sculpture",
    sources: [
      { type: "met", queries: ["sculpture", "statue", "ceramic vessel"] },
      { type: "commons", queries: ["featured sculpture photograph", "public domain ceramic vessel"] },
    ],
  },
  {
    key: "film-frame",
    label: "影像 / 电影帧",
    profile: "filmFrame",
    sources: [
      { type: "commons", queries: ["silent film still public domain", "film still screenshot public domain", "cinema frame public domain"] },
      { type: "commons", queries: ["movie scene still silent film", "film frame"] },
    ],
  },
];

const PROFILES = {
  landscapePhoto: {
    composition: "画面的价值通常在空间层次：前景给尺度，中景承接视线，远景负责气息。观察地平线、山脊或水岸线如何把视线横向铺开。",
    content: "好的风景摄影不只是地点记录，而是在天气、时间和距离之间建立情绪。它让自然形态变成可阅读的节奏。",
    color: "风景类作品适合看冷暖空气感：天空、水面、植被和土石会形成大面积色块，优秀画面会让这些色块互相支撑。",
    learning: "临摹这张图的明暗大块，只用三个灰阶重画一遍；能成立，说明它的骨架很强。",
  },
  portraitPhoto: {
    composition: "人像的构图重点在脸、眼神、手势与留白的关系。优秀作品会让主体稳定，同时保留一点未说完的空间。",
    content: "看人物如何被光线、服饰、背景和姿态共同定义。真正耐看的肖像会让身份、时代和心理状态同时出现。",
    color: "人像色彩要看肤色、背景和服装的主次。好的处理会让脸部成为视觉锚点，而不是被环境吞掉。",
    learning: "遮住标题，只看眼神方向和身体转向，判断作者希望你先看哪里、再看哪里。",
  },
  documentaryPhoto: {
    composition: "纪实摄影的好常常来自边缘控制：人物、物件和背景在同一瞬间进入恰当位置，画面像被时间轻轻扣住。",
    content: "它的内容价值在具体性。服装、动作、招牌、工具和街道细节会共同给出社会环境，而不是只制造气氛。",
    color: "纪实作品的色彩未必漂亮，但要可信。注意作者如何用黑白灰、局部高饱和或环境色维持现场感。",
    learning: "把画面分成九宫格，找每一格的信息量；好的纪实照片通常没有完全浪费的区域。",
  },
  landscapePainting: {
    composition: "风景画的空间是被组织出来的：树、道路、河流、云层和山体会像乐句一样引导视线，而不只是复制自然。",
    content: "画中景物往往承担情绪功能。小人物、建筑、远山或水面会把观看者放进某种时间感里。",
    color: "看画家如何用冷暖和明度建立距离。远处通常更灰、更冷、更轻，近处则更重、更具体。",
    learning: "找出最亮、最暗、最饱和三个区域，问自己它们为什么不平均分布。",
  },
  portraitPainting: {
    composition: "肖像画的构图要看头部、肩线、手和背景之间的稳定关系。高手会把权力、亲密或疏离感藏在这些比例里。",
    content: "服饰、道具和姿态是人物叙事的一部分。它们会告诉你被画者想如何被看见，以及画家如何理解他。",
    color: "传统肖像常以肤色为核心调和周边颜色。背景若压低，脸和手就会更有存在感。",
    learning: "只看轮廓剪影，判断人物性格是否仍然成立；成立的肖像通常外形设计很准。",
  },
  colorPainting: {
    composition: "色彩型绘画往往用色块本身组织画面。看大块、中块、小块如何形成节奏，而不是只看画了什么。",
    content: "内容可能被抽象化，但视觉关系仍然有主题：张力、平衡、速度、停顿或某种情绪温度。",
    color: "关键在色相、明度、饱和度的分工。好画不会让所有颜色同时喊叫，而会安排主角和陪衬。",
    learning: "把颜色替换成黑白，检查它是否仍有强弱层次；再看原色彩如何让层次变得更有情绪。",
  },
  printDesign: {
    composition: "版画和平面作品重视形状边界、留白和裁切。优秀画面通常一眼清楚，细看又有丰富的节奏。",
    content: "图像会把故事压缩成符号：姿态、纹样、文字、器物或自然元素都可能承担叙事功能。",
    color: "这类作品常用有限色数制造强识别度。观察大色面如何互相咬合，以及线条怎样把色块固定住。",
    learning: "用手挡住一半画面，看剩下部分是否还完整；强平面设计通常局部也有结构。",
  },
  architecture: {
    composition: "建筑摄影的核心是秩序：垂直线、透视线、重复单元和光影边界会共同决定空间是否有力量。",
    content: "建筑作品同时呈现尺度、材料和使用方式。注意人、门窗、楼梯或街道如何给空间增加生活感。",
    color: "建筑色彩多来自材料和光线。好图会让石材、玻璃、木材或混凝土的颜色服务于体量，而不是变成杂讯。",
    learning: "沿着画面中最长的直线看一遍，再沿最强的光影边界看一遍，比较两条路径如何组织空间。",
  },
  sculpture: {
    composition: "雕塑与器物的观看重点是轮廓、体量和转折。好的图像会让你隔着屏幕也能感到重量、方向和触感。",
    content: "材质、工艺和姿态一起构成主题。器物看功能和比例，雕塑看身体张力与精神状态。",
    color: "这类作品的色彩常常含蓄，重点在材质色和阴影。好的光线会让表面质感变得可读。",
    learning: "只看外轮廓，判断它最有力量的转折在哪里；再看阴影是否强化了这个转折。",
  },
  filmFrame: {
    composition: "电影画面的构图服务于叙事：人物站位、视线方向、门窗框架和景深会暗示关系与冲突。",
    content: "单帧也应该带着前后文的压力。看动作停在哪一刻，空间里哪些物件在补充剧情。",
    color: "影像帧的色彩通常承担情绪和时间信息。冷暖、暗部密度和局部高光会决定它是紧张、浪漫还是疏离。",
    learning: "把它当作故事板：写下上一秒发生了什么、下一秒可能发生什么，训练叙事性观看。",
  },
};

const SOURCE_LABELS = {
  met: "The Met",
  aic: "Art Institute of Chicago",
  commons: "Wikimedia Commons",
};

const CACHE_VERSION = "sources-v2";

const gallery = document.querySelector("#gallery");
const statusText = document.querySelector("#statusText");
const progressBar = document.querySelector("#progressBar");
const dateLabel = document.querySelector("#dateLabel");
const template = document.querySelector("#workTemplate");
const refreshButton = document.querySelector("#refreshButton");
const randomButton = document.querySelector("#randomButton");

let runToken = 0;

refreshButton.addEventListener("click", () => {
  const dateKey = todayKey();
  localStorage.removeItem(cacheKey(dateKey));
  loadDailySet({ dateKey, force: true });
});

randomButton.addEventListener("click", () => {
  const dateKey = `${todayKey()}-${Math.random().toString(36).slice(2, 8)}`;
  loadDailySet({ dateKey, force: true, transient: true });
});

loadDailySet({ dateKey: todayKey() });

async function loadDailySet({ dateKey, force = false, transient = false }) {
  const token = ++runToken;
  const dayLabel = dateKey.slice(0, 10);
  dateLabel.textContent = formatDateLabel(dayLabel);
  gallery.innerHTML = "";
  progressBar.style.width = "0%";

  const stored = !force && !transient ? readCache(cacheKey(dateKey)) : null;
  if (stored?.length) {
    renderWorks(stored, token);
    setStatus(`今日已准备 ${stored.length} 张作品`, 100);
    return;
  }

  gallery.appendChild(loadingNode());
  setStatus("正在连接开放馆藏", 4);

  const seed = hashString(dateKey);
  const works = [];
  const used = new Set();
  const slots = shuffle(SLOTS, seed).slice(0, 10);

  for (let index = 0; index < slots.length; index += 1) {
    if (token !== runToken) return;
    const slot = slots[index];
    setStatus(`正在抓取：${slot.label}`, Math.round((index / slots.length) * 84) + 5);
    const work = await loadSlot(slot, seed + index * 101, used);
    if (work) {
      used.add(work.uniqueKey);
      works.push(work);
      if (works.length === 1) gallery.innerHTML = "";
      renderWork(work, token);
    }
  }

  if (token !== runToken) return;

  if (!works.length) {
    gallery.innerHTML = `<div class="empty-state">暂时没有抓到可显示的开放高清作品。稍后再试，或检查网络连接。</div>`;
    setStatus("开放馆藏暂时不可用", 100);
    return;
  }

  if (!transient) writeCache(cacheKey(dateKey), works);
  setStatus(`已抓取 ${works.length} 张高清作品`, 100);
}

async function loadSlot(slot, seed, used) {
  const plans = shuffle(slot.sources, seed).flatMap((source, sourceIndex) => {
    return shuffle(source.queries, seed + sourceIndex * 19).map((query) => ({
      type: source.type,
      query,
    }));
  });

  for (const plan of plans) {
    try {
      const candidates = await fetchCandidates(plan, slot, seed);
      const shuffled = shuffle(candidates, seed + hashString(plan.query));
      const selected = shuffled.find((item) => item.imageUrl && !used.has(item.uniqueKey));
      if (selected) return selected;
    } catch (error) {
      console.warn(`Source failed: ${plan.type}`, error);
    }
  }
  return null;
}

async function fetchCandidates(plan, slot, seed) {
  if (plan.type === "met") return fetchMet(plan.query, slot, seed);
  if (plan.type === "aic") return fetchAic(plan.query, slot, seed);
  return fetchCommons(plan.query, slot);
}

async function fetchMet(query, slot, seed) {
  const searchUrl = `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&isPublicDomain=true&q=${encodeURIComponent(query)}`;
  const search = await fetchJson(searchUrl);
  const ids = shuffle(search.objectIDs || [], seed).slice(0, 10);
  const objects = await Promise.allSettled(
    ids.map((id) => fetchJson(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`))
  );

  return objects
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value)
    .filter((item) => item?.primaryImage && item?.isPublicDomain)
    .map((item) => normalizeMet(item, slot));
}

async function fetchAic(query, slot, seed) {
  const params = new URLSearchParams({
    q: query,
    limit: "45",
    fields: [
      "id",
      "title",
      "artist_display",
      "date_display",
      "image_id",
      "thumbnail",
      "artwork_type_title",
      "department_title",
      "medium_display",
      "place_of_origin",
      "dimensions",
      "is_public_domain",
      "api_link",
      "subject_titles",
      "category_titles",
    ].join(","),
  });
  params.append("query[term][is_public_domain]", "true");

  const data = await fetchJson(`https://api.artic.edu/api/v1/artworks/search?${params.toString()}`);
  const iiifBase = data?.config?.iiif_url || "https://www.artic.edu/iiif/2";
  return shuffle(data.data || [], seed)
    .filter((item) => item.image_id && item.is_public_domain !== false)
    .map((item) => normalizeAic(item, slot, iiifBase));
}

async function fetchCommons(query, slot) {
  const params = new URLSearchParams({
    origin: "*",
    action: "query",
    format: "json",
    generator: "search",
    gsrsearch: `filetype:bitmap ${query} -logo -diagram -map`,
    gsrnamespace: "6",
    gsrlimit: "30",
    prop: "imageinfo",
    iiprop: "url|mime|size|extmetadata",
    iiurlwidth: "2200",
  });

  const data = await fetchJson(`https://commons.wikimedia.org/w/api.php?${params.toString()}`);
  return Object.values(data?.query?.pages || {})
    .map((page) => normalizeCommons(page, slot))
    .filter(Boolean);
}

function normalizeMet(item, slot) {
  const creator = item.artistDisplayName || item.culture || "Unknown artist";
  const date = item.objectDate || "";
  return completeWork({
    uniqueKey: `met:${item.objectID}`,
    slot,
    source: "met",
    sourceUrl: item.objectURL || `https://www.metmuseum.org/art/collection/search/${item.objectID}`,
    originalUrl: item.primaryImage,
    imageUrl: item.primaryImage,
    title: item.title || "Untitled",
    creator,
    date,
    medium: item.medium || item.classification || "",
    dimensions: item.dimensions || "",
    license: "Public Domain",
    width: Number(item.measurements?.[0]?.elementMeasurements?.Width) || null,
    height: Number(item.measurements?.[0]?.elementMeasurements?.Height) || null,
    subjects: [item.department, item.classification, item.objectName].filter(Boolean),
  });
}

function normalizeAic(item, slot, iiifBase) {
  const imageUrl = `${iiifBase}/${item.image_id}/full/2200,/0/default.jpg`;
  const originalUrl = `${iiifBase}/${item.image_id}/full/full/0/default.jpg`;
  return completeWork({
    uniqueKey: `aic:${item.id}`,
    slot,
    source: "aic",
    sourceUrl: `https://www.artic.edu/artworks/${item.id}`,
    originalUrl,
    imageUrl,
    title: item.title || "Untitled",
    creator: cleanArtist(item.artist_display) || "Unknown artist",
    date: item.date_display || "",
    medium: item.medium_display || item.artwork_type_title || "",
    dimensions: item.dimensions || "",
    license: "Public Domain / CC0",
    width: null,
    height: null,
    subjects: [
      item.department_title,
      item.artwork_type_title,
      ...(item.subject_titles || []).slice(0, 3),
      ...(item.category_titles || []).slice(0, 2),
    ].filter(Boolean),
  });
}

function normalizeCommons(page, slot) {
  const info = page.imageinfo?.[0];
  if (!info || !/^image\/(jpeg|png|webp)$/i.test(info.mime || "")) return null;
  if ((info.width || 0) < 900 || (info.height || 0) < 650) return null;

  const metadata = info.extmetadata || {};
  const title = stripFilePrefix(page.title);
  const objectName = stripHtml(metadata.ObjectName?.value || "");
  const creator = stripHtml(metadata.Artist?.value || "") || stripHtml(metadata.Credit?.value || "") || "Unknown creator";
  const description = stripHtml(metadata.ImageDescription?.value || "");
  const license = stripHtml(metadata.LicenseShortName?.value || metadata.UsageTerms?.value || "Open license");
  const date = stripHtml(metadata.DateTimeOriginal?.value || "");
  const sourceUrl = `https://commons.wikimedia.org/wiki/${encodeURIComponent(page.title.replaceAll(" ", "_"))}`;

  return completeWork({
    uniqueKey: `commons:${page.pageid}`,
    slot,
    source: "commons",
    sourceUrl,
    originalUrl: info.url,
    imageUrl: info.thumburl || info.url,
    title: objectName || title,
    creator: compactText(creator, 120),
    date,
    medium: description ? compactText(description, 120) : "Photographic image",
    dimensions: `${info.width} x ${info.height}px`,
    license,
    width: info.width,
    height: info.height,
    subjects: [slot.label, title].filter(Boolean),
  });
}

function completeWork(work) {
  return {
    ...work,
    label: work.slot.label,
    profile: work.slot.profile,
    analysis: buildAnalysis(work),
  };
}

function renderWorks(works, token) {
  gallery.innerHTML = "";
  works.forEach((work) => renderWork(work, token));
}

function renderWork(work, token) {
  const node = template.content.firstElementChild.cloneNode(true);
  const image = node.querySelector("img");
  const swatches = node.querySelector(".swatches");

  image.src = work.imageUrl;
  image.alt = `${work.title}，${work.creator}`;
  node.querySelector(".type-badge").textContent = work.label;
  node.querySelector(".source-pill").textContent = SOURCE_LABELS[work.source] || work.source;
  node.querySelector(".license-text").textContent = work.license || "";
  node.querySelector("h2").textContent = work.title;
  node.querySelector(".artist-line").textContent = [work.creator, work.date, work.medium].filter(Boolean).join(" · ");
  node.querySelector('[data-analysis="composition"]').textContent = work.analysis.composition;
  node.querySelector('[data-analysis="content"]').textContent = work.analysis.content;
  node.querySelector('[data-analysis="color"]').textContent = work.analysis.color;
  node.querySelector('[data-analysis="learning"]').textContent = work.analysis.learning;
  node.querySelector('[data-link="original"]').href = work.originalUrl;
  node.querySelector('[data-link="source"]').href = work.sourceUrl;
  swatches.innerHTML = `<span class="muted-note">读取主色中</span>`;

  gallery.appendChild(node);

  extractPalette(work.imageUrl).then((palette) => {
    if (token !== runToken) return;
    const analysisColor = node.querySelector('[data-analysis="color"]');
    if (palette?.colors?.length) {
      swatches.innerHTML = palette.colors
        .map((color) => `<span class="swatch" title="${color}" style="background:${color}"></span>`)
        .join("");
      analysisColor.textContent = colorAnalysis(palette, work.profile);
    } else {
      swatches.innerHTML = "";
    }
  });
}

function loadingNode() {
  const div = document.createElement("div");
  div.className = "loading-card";
  div.textContent = "正在抓取今日作品";
  return div;
}

function setStatus(text, percent) {
  statusText.textContent = text;
  progressBar.style.width = `${Math.max(0, Math.min(100, percent))}%`;
}

function buildAnalysis(work) {
  const profile = PROFILES[work.profile] || PROFILES.colorPainting;
  const aspect = aspectNote(work.width, work.height);
  const subject = subjectNote(work);
  return {
    composition: `${profile.composition}${aspect ? ` ${aspect}` : ""}`,
    content: `${profile.content}${subject ? ` 这张作品可重点看：${subject}。` : ""}`,
    color: profile.color,
    learning: profile.learning,
  };
}

function aspectNote(width, height) {
  if (!width || !height) return "";
  const ratio = width / height;
  if (ratio > 1.55) return "横向比例会强化场景的展开感，适合观察从左到右的节奏变化。";
  if (ratio < 0.78) return "竖向比例会让主体更有纪念性，也更容易形成上下方向的张力。";
  if (ratio > 0.9 && ratio < 1.12) return "接近方形的比例会削弱叙事方向，让视线更集中在中心和四边的平衡。";
  return "画幅比例比较中性，重点可以放在主体位置与边缘留白的关系。";
}

function subjectNote(work) {
  const parts = [work.medium, ...(work.subjects || [])]
    .map((item) => compactText(String(item || ""), 36))
    .filter(Boolean);
  return unique(parts).slice(0, 3).join("、");
}

function colorAnalysis(palette, profileKey) {
  const brightness = palette.brightness;
  const saturation = palette.saturation;
  const contrast = palette.contrast;
  const warmth = palette.warmth;
  const profileNoun = profileKey.includes("Photo") ? "画面" : "作品";
  const lightText = brightness < 0.36 ? "整体偏低明度，暗部承担了主要情绪" : brightness > 0.68 ? "整体偏高明度，画面显得轻、亮、开放" : "明度控制在中间区域，视觉稳定而耐看";
  const contrastText = contrast > 0.24 ? "明暗差比较强，主体更容易跳出来" : contrast < 0.13 ? "明暗差克制，重点转向形状和色相关系" : "明暗对比适中，层次推进比较自然";
  const satText = saturation > 0.42 ? "饱和度较高，颜色本身就是吸引力" : saturation < 0.22 ? "饱和度偏低，质感和光线比鲜艳度更重要" : "饱和度有节制，颜色不会互相抢戏";
  const warmText = warmth > 0.58 ? "暖色占比更高，气氛更亲近" : warmth < 0.42 ? "冷色占比更高，距离感和清洁感更明显" : "冷暖大致均衡，色彩关系比较从容";

  return `${profileNoun}主色约为 ${palette.colors.join("、")}。${lightText}；${contrastText}；${satText}；${warmText}。`;
}

async function extractPalette(url) {
  return new Promise((resolve) => {
    const image = new Image();
    const timer = window.setTimeout(() => resolve(null), 9000);
    image.crossOrigin = "anonymous";
    image.onload = () => {
      window.clearTimeout(timer);
      try {
        const canvas = document.createElement("canvas");
        const size = 54;
        canvas.width = size;
        canvas.height = size;
        const context = canvas.getContext("2d", { willReadFrequently: true });
        context.drawImage(image, 0, 0, size, size);
        const pixels = context.getImageData(0, 0, size, size).data;
        resolve(analyzePixels(pixels));
      } catch (error) {
        resolve(null);
      }
    };
    image.onerror = () => {
      window.clearTimeout(timer);
      resolve(null);
    };
    image.src = url;
  });
}

function analyzePixels(pixels) {
  const buckets = new Map();
  let total = 0;
  let brightnessSum = 0;
  let brightnessSq = 0;
  let saturationSum = 0;
  let warmCount = 0;

  for (let index = 0; index < pixels.length; index += 16) {
    const alpha = pixels[index + 3];
    if (alpha < 128) continue;
    const red = pixels[index];
    const green = pixels[index + 1];
    const blue = pixels[index + 2];
    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);
    const brightness = (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;
    const saturation = max === 0 ? 0 : (max - min) / max;
    const hue = rgbHue(red, green, blue);
    const bucket = [red, green, blue].map((value) => Math.round(value / 32) * 32).join(",");
    const current = buckets.get(bucket) || { count: 0, r: 0, g: 0, b: 0, saturation: 0 };
    current.count += 1;
    current.r += red;
    current.g += green;
    current.b += blue;
    current.saturation += saturation;
    buckets.set(bucket, current);

    total += 1;
    brightnessSum += brightness;
    brightnessSq += brightness * brightness;
    saturationSum += saturation;
    if (hue < 70 || hue > 330) warmCount += 1;
  }

  if (!total) return null;

  const colors = Array.from(buckets.values())
    .map((bucket) => {
      const count = bucket.count;
      const saturation = bucket.saturation / count;
      return {
        count,
        saturation,
        salience: count * (0.62 + saturation),
        color: rgbToHex(bucket.r / count, bucket.g / count, bucket.b / count),
      };
    })
    .sort((a, b) => b.salience - a.salience)
    .reduce((accumulator, item) => {
      if (accumulator.length >= 5) return accumulator;
      if (accumulator.every((existing) => colorDistance(existing, item.color) > 44)) {
        accumulator.push(item.color);
      }
      return accumulator;
    }, []);

  const brightness = brightnessSum / total;
  return {
    colors,
    brightness,
    contrast: Math.sqrt(Math.max(0, brightnessSq / total - brightness * brightness)),
    saturation: saturationSum / total,
    warmth: warmCount / total,
  };
}

async function fetchJson(url) {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 14000);
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    return await response.json();
  } finally {
    window.clearTimeout(timer);
  }
}

function todayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function cacheKey(dateKey) {
  return `aesthetic-daily:${CACHE_VERSION}:${dateKey}`;
}

function readCache(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return null;
  }
}

function writeCache(key, works) {
  try {
    localStorage.setItem(key, JSON.stringify(works));
  } catch {
    /* Ignore storage limits; the page can still render the live result. */
  }
}

function formatDateLabel(dateKey) {
  const date = new Date(`${dateKey}T00:00:00`);
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  }).format(date);
}

function shuffle(items, seed) {
  const result = [...items];
  let state = seed || 1;
  for (let index = result.length - 1; index > 0; index -= 1) {
    state = (state * 1664525 + 1013904223) >>> 0;
    const swapIndex = state % (index + 1);
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function hashString(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function stripHtml(value) {
  const div = document.createElement("div");
  div.innerHTML = value || "";
  return compactText(div.textContent || div.innerText || "", 220);
}

function stripFilePrefix(value) {
  return (value || "").replace(/^File:/i, "").replace(/\.[a-z0-9]+$/i, "").replaceAll("_", " ");
}

function cleanArtist(value) {
  return compactText((value || "").split("\n")[0], 120);
}

function compactText(value, max = 180) {
  const clean = String(value || "").replace(/\s+/g, " ").trim();
  return clean.length > max ? `${clean.slice(0, max - 1)}…` : clean;
}

function unique(values) {
  return Array.from(new Set(values.map((value) => value.toLowerCase()))).map((key) => {
    return values.find((value) => value.toLowerCase() === key);
  });
}

function rgbHue(red, green, blue) {
  red /= 255;
  green /= 255;
  blue /= 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const delta = max - min;
  if (delta === 0) return 0;
  let hue;
  if (max === red) hue = ((green - blue) / delta) % 6;
  else if (max === green) hue = (blue - red) / delta + 2;
  else hue = (red - green) / delta + 4;
  return Math.round(hue * 60 + (hue < 0 ? 360 : 0));
}

function rgbToHex(red, green, blue) {
  return `#${[red, green, blue]
    .map((value) => Math.max(0, Math.min(255, Math.round(value))).toString(16).padStart(2, "0"))
    .join("")}`;
}

function colorDistance(a, b) {
  const first = hexToRgb(a);
  const second = hexToRgb(b);
  return Math.sqrt(
    (first.r - second.r) ** 2 +
      (first.g - second.g) ** 2 +
      (first.b - second.b) ** 2
  );
}

function hexToRgb(value) {
  const clean = value.replace("#", "");
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  };
}
