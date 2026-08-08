const SLOTS = [
  {
    key: "fashion-editorial",
    label: "时尚 / 造型",
    profile: "fashion",
    sources: [
      { type: "commons", queries: ["street fashion photography", "fashion editorial photography", "contemporary fashion portrait"] },
    ],
  },
  {
    key: "beauty-wellness",
    label: "商业 / 美妆",
    profile: "product",
    sources: [
      { type: "commons", queries: ["cosmetics product photography", "skincare product photograph", "perfume product photograph"] },
    ],
  },
  {
    key: "food-drink",
    label: "生活 / 餐饮",
    profile: "food",
    sources: [
      { type: "commons", queries: ["specialty coffee food photography", "restaurant dish photography", "modern cafe photography"] },
    ],
  },
  {
    key: "home-interior",
    label: "生活 / 居家",
    profile: "interior",
    sources: [
      { type: "commons", queries: ["modern residential interior design", "contemporary home interior photograph", "modern kitchen interior photograph"] },
    ],
  },
  {
    key: "retail-space",
    label: "商业 / 空间",
    profile: "retail",
    sources: [
      { type: "commons", queries: ["modern retail store interior photograph", "boutique interior design photograph", "shop window display photograph"] },
    ],
  },
  {
    key: "urban-lifestyle",
    label: "生活 / 街头",
    profile: "street",
    sources: [
      { type: "commons", queries: ["urban lifestyle street photography", "city cafe street life photograph", "people walking modern city photograph"] },
    ],
  },
  {
    key: "travel-hospitality",
    label: "旅行 / 酒店",
    profile: "travel",
    sources: [
      { type: "commons", queries: ["boutique hotel interior photograph", "modern resort travel photograph", "rooftop restaurant city view photograph"] },
    ],
  },
  {
    key: "branding-packaging",
    label: "品牌 / 包装",
    profile: "branding",
    sources: [
      { type: "commons", queries: ["contemporary packaging design photograph", "modern product packaging photograph", "creative brand packaging"] },
    ],
  },
  {
    key: "mobility-tech",
    label: "商业 / 科技",
    profile: "product",
    sources: [
      { type: "commons", queries: ["modern electric vehicle product photograph", "consumer electronics product photography", "modern technology product photograph"] },
    ],
  },
  {
    key: "workplace-people",
    label: "商业 / 人物",
    profile: "workplace",
    sources: [
      { type: "commons", queries: ["modern workplace people photograph", "creative office team photograph", "contemporary professional portrait"] },
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

const CACHE_VERSION = "commercial-lifestyle-v1";
const ARCHIVE_START = "2026-06-29";

const gallery = document.querySelector("#gallery");
const statusText = document.querySelector("#statusText");
const progressBar = document.querySelector("#progressBar");
const dateLabel = document.querySelector("#dateLabel");
const pageTitle = document.querySelector("#pageTitle");
const template = document.querySelector("#workTemplate");
const refreshButton = document.querySelector("#refreshButton");
const randomButton = document.querySelector("#randomButton");
const todayButton = document.querySelector("#todayButton");
const archiveButton = document.querySelector("#archiveButton");
const archivePanel = document.querySelector("#archivePanel");
const archiveGroups = document.querySelector("#archiveGroups");
const archiveDatePicker = document.querySelector("#archiveDatePicker");
const previousDayButton = document.querySelector("#previousDayButton");
const nextDayButton = document.querySelector("#nextDayButton");
const viewModeLabel = document.querySelector("#viewModeLabel");
const selectedDateLabel = document.querySelector("#selectedDateLabel");

let runToken = 0;
let currentDateKey = requestedDateKey();

refreshButton.addEventListener("click", () => {
  const dateKey = currentDateKey;
  localStorage.removeItem(cacheKey(dateKey));
  loadDailySet({ dateKey, force: true });
});

randomButton.addEventListener("click", () => {
  const dateKey = `${currentDateKey}-${Math.random().toString(36).slice(2, 8)}`;
  loadDailySet({ dateKey, force: true, transient: true });
});

todayButton.addEventListener("click", () => {
  closeArchive();
  navigateToDate(todayKey());
});

archiveButton.addEventListener("click", () => {
  const willOpen = archivePanel.hidden;
  archivePanel.hidden = !willOpen;
  archiveButton.setAttribute("aria-expanded", String(willOpen));
  updateDateUI();
  if (willOpen) {
    buildArchive();
    archivePanel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});

previousDayButton.addEventListener("click", () => navigateToDate(shiftDateKey(currentDateKey, -1)));
nextDayButton.addEventListener("click", () => navigateToDate(shiftDateKey(currentDateKey, 1)));

archiveDatePicker.addEventListener("change", () => {
  if (!archiveDatePicker.value) return;
  closeArchive();
  navigateToDate(archiveDatePicker.value);
});

window.addEventListener("popstate", () => {
  currentDateKey = requestedDateKey();
  updateDateUI();
  loadDailySet({ dateKey: currentDateKey });
});

buildArchive();
updateDateUI();
syncDateUrl({ replace: true });
loadDailySet({ dateKey: currentDateKey });

async function loadDailySet({ dateKey, force = false, transient = false }) {
  const token = ++runToken;
  const dayLabel = dateKey.slice(0, 10);
  dateLabel.textContent = formatDateLabel(dayLabel);
  gallery.innerHTML = "";
  progressBar.style.width = "0%";

  const stored = !force && !transient ? readCache(cacheKey(dateKey)) : null;
  if (stored?.length) {
    renderWorks(stored, token);
    setStatus(`${dayLabel === todayKey() ? "今日" : "往期"}已准备 ${stored.length} 张作品`, 100);
    return;
  }

  gallery.appendChild(loadingNode(dayLabel));
  setStatus(dayLabel === todayKey() ? "正在连接今日开放馆藏" : "正在载入往期开放馆藏", 4);

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
  setStatus(`${dayLabel === todayKey() ? "今日" : "往期"}已载入 ${works.length} 张高清作品`, 100);
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
    gsrsearch: `filetype:bitmap ${query} -logo -diagram -map -painting -engraving -sculpture -historic -nude -nudity`,
    gsrnamespace: "6",
    gsrlimit: "40",
    gsrsort: "create_timestamp_desc",
    prop: "imageinfo",
    iiprop: "url|mime|size|extmetadata",
    iiurlwidth: "2400",
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
  const categories = stripHtml(metadata.Categories?.value || "");
  const sourceUrl = `https://commons.wikimedia.org/wiki/${encodeURIComponent(page.title.replaceAll(" ", "_"))}`;
  const searchable = [title, objectName, description, categories].join(" ");

  if (!isModernCommercialCandidate(searchable, date)) return null;

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
    subjects: [slot.label, ...categories.split("|").slice(0, 4), title].filter(Boolean),
  });
}

function isModernCommercialCandidate(text, date) {
  const yearMatch = String(date || "").match(/\b(?:19|20)\d{2}\b/);
  if (yearMatch && Number(yearMatch[0]) < 2018) return false;

  return !/(oil on canvas|watercolou?r|engraving|etching|woodcut|lithograph|manuscript|archaeological|museum collection|historical image|ai[- ]generated|midjourney|stable diffusion)/i.test(text);
}

function completeWork(work) {
  return {
    ...work,
    label: work.slot.label,
    profile: work.slot.profile,
    analysis: buildAnalysis({ ...work, label: work.slot.label, profile: work.slot.profile }),
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
  const initialAnalysis = buildAnalysis(work);

  image.src = work.imageUrl;
  image.alt = `${work.title}，${work.creator}`;
  node.querySelector(".type-badge").textContent = work.label;
  node.querySelector(".source-pill").textContent = SOURCE_LABELS[work.source] || work.source;
  node.querySelector(".license-text").textContent = work.license || "";
  node.querySelector("h2").textContent = work.title;
  node.querySelector(".artist-line").textContent = [work.creator, work.date, work.medium].filter(Boolean).join(" · ");
  node.querySelector('[data-analysis="composition"]').textContent = initialAnalysis.composition;
  node.querySelector('[data-analysis="content"]').textContent = initialAnalysis.content;
  node.querySelector('[data-analysis="color"]').textContent = initialAnalysis.color;
  node.querySelector('[data-analysis="meaning"]').textContent = initialAnalysis.meaning;
  node.querySelector('[data-analysis="learning"]').textContent = initialAnalysis.learning;
  node.querySelector('[data-link="original"]').href = work.originalUrl;
  node.querySelector('[data-link="source"]').href = work.sourceUrl;
  swatches.innerHTML = `<span class="muted-note">读取主色中</span>`;

  gallery.appendChild(node);

  extractPalette(work.imageUrl).then((palette) => {
    if (token !== runToken) return;
    if (palette?.colors?.length) {
      const updatedAnalysis = buildAnalysis(work, palette);
      swatches.innerHTML = palette.colors
        .map((color) => `<span class="swatch" title="${color}" style="background:${color}"></span>`)
        .join("");
      node.querySelector('[data-analysis="composition"]').textContent = updatedAnalysis.composition;
      node.querySelector('[data-analysis="content"]').textContent = updatedAnalysis.content;
      node.querySelector('[data-analysis="color"]').textContent = updatedAnalysis.color;
      node.querySelector('[data-analysis="meaning"]').textContent = updatedAnalysis.meaning;
      node.querySelector('[data-analysis="learning"]').textContent = updatedAnalysis.learning;
    } else {
      swatches.innerHTML = "";
    }
  });
}

function loadingNode(dateKey) {
  const div = document.createElement("div");
  div.className = "loading-card";
  div.textContent = dateKey === todayKey() ? "正在抓取今日作品" : "正在载入这一天的作品";
  return div;
}

function setStatus(text, percent) {
  statusText.textContent = text;
  progressBar.style.width = `${Math.max(0, Math.min(100, percent))}%`;
}

function buildAnalysis(work, palette = null) {
  const normalized = normalizeWorkForAnalysis(work);
  const profile = normalized.profile;
  const subject = titleFocus(normalized);
  const cues = visualCues(normalized);
  const aspect = aspectNote(normalized.width, normalized.height, subject);
  return {
    composition: compositionAnalysis(normalized, profile, subject, cues, aspect, palette),
    content: contentAnalysis(normalized, profile, subject, cues),
    color: palette ? colorAnalysis(palette, profile, normalized) : colorFallback(normalized, subject),
    meaning: meaningAnalysis(normalized, profile, subject, cues),
    learning: learningAnalysis(normalized, profile, subject, cues, palette),
  };
}

function normalizeWorkForAnalysis(work) {
  const profile = resolveProfile(work);
  return {
    ...work,
    profile,
    label: work.label || work.slot?.label || profileLabel(profile),
    title: compactText(work.title || "Untitled", 120),
    medium: compactText(work.medium || "", 160),
    creator: compactText(work.creator || "", 120),
    subjects: Array.isArray(work.subjects) ? work.subjects : [],
  };
}

function resolveProfile(work) {
  const labelProfile = {
    "摄影 / 风景": "landscapePhoto",
    "摄影 / 人像": "portraitPhoto",
    "摄影 / 纪实": "documentaryPhoto",
    "绘画 / 风景": "landscapePainting",
    "绘画 / 人物": "portraitPainting",
    "绘画 / 色彩": "colorPainting",
    "版画 / 平面": "printDesign",
    "建筑 / 空间": "architecture",
    "雕塑 / 器物": "sculpture",
    "影像 / 电影帧": "filmFrame",
  }[work.label || work.slot?.label];
  if (labelProfile) return labelProfile;

  const inferred = inferProfile(work);
  const stored = work.profile || work.slot?.profile;
  if (!stored) return inferred;
  if (stored === "colorPainting" && inferred !== "colorPainting") return inferred;
  if (stored.includes("Painting") && inferred.includes("Photo")) return inferred;
  return stored;
}

function inferProfile(work) {
  const text = `${work.label || ""} ${work.title || ""} ${work.medium || ""} ${(work.subjects || []).join(" ")}`.toLowerCase();
  if (/station|street|worker|urban|documentary|exit|subway|metro|road|market/.test(text)) return "documentaryPhoto";
  if (/portrait|self-portrait|person|figure|actress|actor/.test(text)) return /painting|oil|canvas/.test(text) ? "portraitPainting" : "portraitPhoto";
  if (/film|cinema|movie|still|frame/.test(text)) return "filmFrame";
  if (/architecture|building|interior|facade|castle|temple|station/.test(text)) return "architecture";
  if (/sculpture|statue|ceramic|vessel|bronze|stone/.test(text)) return "sculpture";
  if (/woodblock|print|poster|engraving|etching/.test(text)) return "printDesign";
  if (/abstract|composition|color/.test(text)) return "colorPainting";
  if (/landscape|mountain|river|forest|sea|lake|garden/.test(text)) return /painting|oil|canvas/.test(text) ? "landscapePainting" : "landscapePhoto";
  return "documentaryPhoto";
}

function profileLabel(profile) {
  return {
    landscapePhoto: "摄影 / 风景",
    portraitPhoto: "摄影 / 人像",
    documentaryPhoto: "摄影 / 纪实",
    landscapePainting: "绘画 / 风景",
    portraitPainting: "绘画 / 人物",
    colorPainting: "绘画 / 色彩",
    printDesign: "版画 / 平面",
    architecture: "建筑 / 空间",
    sculpture: "雕塑 / 器物",
    filmFrame: "影像 / 电影帧",
  }[profile] || "作品";
}

function titleFocus(work) {
  const clean = compactText(
    String(work.title || "这张作品")
      .replace(/^File:/i, "")
      .replace(/\.[a-z0-9]+$/i, "")
      .replace(/\s+/g, " ")
      .trim(),
    72
  );
  return clean || "这张作品";
}

function visualCues(work) {
  const text = `${work.title || ""} ${work.medium || ""} ${(work.subjects || []).join(" ")}`.toLowerCase();
  if (/station|subway|metro|exit|workers|stadium|street|road|urban/.test(text)) {
    return ["出入口标识", "顶棚和门禁", "栏杆与台阶", "街树和路面"];
  }
  if (/mountain|forest|river|lake|sea|landscape|garden|valley/.test(text)) {
    return ["前景地貌", "远处轮廓", "天空或水面", "植被色块"];
  }
  if (/portrait|self-portrait|actor|actress|figure|person|head/.test(text)) {
    return ["脸部朝向", "肩线或手势", "服饰", "背景留白"];
  }
  if (/abstract|composition|color|study/.test(text)) {
    return ["大色块", "色块边界", "重复节奏", "空白关系"];
  }
  if (/woodblock|print|poster|engraving|etching/.test(text)) {
    return ["黑白线条", "平面色块", "裁切边缘", "图像符号"];
  }
  if (/architecture|building|castle|interior|facade|temple|door|gate/.test(text)) {
    return ["垂直线", "入口或立面", "透视线", "材料表面"];
  }
  if (/sculpture|statue|ceramic|vessel|bronze|stone|bodhisattva/.test(text)) {
    return ["外轮廓", "体量转折", "材质光泽", "阴影"];
  }
  if (/film|movie|cinema|still|frame|scene/.test(text)) {
    return ["人物或动作", "场景边界", "明暗气氛", "叙事道具"];
  }
  return ["主体", "背景", "边缘细节", "留白"];
}

function compositionAnalysis(work, profile, subject, cues, aspect, palette) {
  const layout = palette ? ` ${layoutSentence(palette, profile)}` : "";
  if (profile === "documentaryPhoto") {
    return `这张《${subject}》好在没有只拍一个孤立物件，而是把${cues.slice(0, 3).join("、")}同时纳入画面。观众先读到地点信息，再顺着周边设施和环境细节确认它是一个真实城市现场。${aspect}${layout}`;
  }
  if (profile === "architecture") {
    return `这张《${subject}》的结构感来自${cues.slice(0, 3).join("、")}的相互咬合：硬边线条建立秩序，环境细节负责给尺度。${aspect}${layout}`;
  }
  if (profile === "landscapePhoto" || profile === "landscapePainting") {
    return `这张《${subject}》的空间层次主要靠${cues.slice(0, 3).join("、")}拉开。它不是平均铺景，而是让近处、中段和远处各自承担不同的观看距离。${aspect}${layout}`;
  }
  if (profile === "portraitPhoto" || profile === "portraitPainting") {
    return `这张《${subject}》的重心在${cues.slice(0, 3).join("、")}之间的关系：人物不是单纯摆在中央，而是通过姿态、服饰和背景距离建立气质。${aspect}${layout}`;
  }
  if (profile === "colorPainting") {
    return `这张《${subject}》的构图重点不是题材叙事，而是${cues.slice(0, 3).join("、")}怎样分配画面重量。大块决定骨架，小块负责节奏和停顿。${aspect}${layout}`;
  }
  if (profile === "printDesign") {
    return `这张《${subject}》强在平面组织：${cues.slice(0, 3).join("、")}让画面一眼可读，同时又保留细看时的线条节奏。${aspect}${layout}`;
  }
  if (profile === "sculpture") {
    return `这张《${subject}》值得看的是${cues.slice(0, 3).join("、")}：轮廓负责第一眼的识别，阴影和转折让体量变得可感。${aspect}${layout}`;
  }
  if (profile === "filmFrame") {
    return `这帧《${subject}》的构图服务于叙事：${cues.slice(0, 3).join("、")}把观众的视线固定在事件发生的位置。${aspect}${layout}`;
  }
  return `这张《${subject}》的构图价值在于${cues.slice(0, 3).join("、")}共同形成主次。${aspect}${layout}`;
}

function contentAnalysis(work, profile, subject, cues) {
  const details = subjectNote(work);
  const creatorText = work.creator && work.creator !== "Unknown creator" && work.creator !== "Unknown artist" ? `${work.creator} 选择的` : "";
  if (profile === "documentaryPhoto") {
    return `${creatorText}《${subject}》好在具体：${details || cues.join("、")}不是装饰，而是在交代地点、功能、时间和城市使用痕迹。它让你看到“这里发生日常生活”，所以比一张干净的建筑宣传照更有信息密度。`;
  }
  if (profile === "architecture") {
    return `《${subject}》的内容不只是建筑外形，${details || cues.join("、")}共同说明了空间怎样被进入、经过或使用。好处在于它把设计、尺度和现场感放在同一张图里。`;
  }
  if (profile === "landscapePhoto" || profile === "landscapePainting") {
    return `《${subject}》吸引人的地方在于它把${details || cues.join("、")}组织成一种可停留的空间。景物不是背景素材，而是在引导你感受距离、天气和时间。`;
  }
  if (profile === "portraitPhoto" || profile === "portraitPainting") {
    return `《${subject}》的内容看点在人物如何被呈现：${details || cues.join("、")}一起决定了身份、性格和观看距离。好的肖像会让你既看到一个人，也看到他被观看的方式。`;
  }
  if (profile === "colorPainting") {
    return `《${subject}》的主题落在视觉关系本身：${details || cues.join("、")}让画面产生张力、平衡或速度感。它好不是因为“像什么”，而是因为关系被安排得清楚。`;
  }
  if (profile === "printDesign") {
    return `《${subject}》把${details || cues.join("、")}压缩成清晰符号。好处是信息进入得快，但线条、裁切和局部细节又能让人停下来反复看。`;
  }
  if (profile === "sculpture") {
    return `《${subject}》的内容价值在${details || cues.join("、")}：题材、材质和姿态结合起来，让对象有重量，也有精神状态。`;
  }
  if (profile === "filmFrame") {
    return `《${subject}》作为单帧成立，是因为${details || cues.join("、")}暗示了前后文。你能从一个静止瞬间推测刚发生什么、接下来可能发生什么。`;
  }
  return `《${subject}》的内容看点是${details || cues.join("、")}怎样共同说明主题。`;
}

function meaningAnalysis(work, profile, subject, cues) {
  const meta = [work.creator, work.date, work.medium].filter(Boolean).join(" · ");
  const info = meta ? `这张图的信息层包括：${compactText(meta, 120)}。` : `这张图的信息层首先来自标题《${subject}》和分类“${work.label || "作品"}”。`;
  if (profile === "documentaryPhoto") return `${info} 它的含义不在于把城市拍得漂亮，而在于把公共设施、交通入口和日常秩序变成可观察的对象；你看到的是城市如何被使用、管理和经过。`;
  if (profile === "architecture") return `${info} 它的含义是把建筑从“外观”转成“空间经验”：${cues.slice(0, 3).join("、")}说明人如何接近、进入或理解这个场所。`;
  if (profile === "landscapePhoto" || profile === "landscapePainting") return `${info} 它的含义在于把自然或环境组织成一种情绪空间；${cues.slice(0, 3).join("、")}让观看者感到距离、时间和气候，而不只是知道那里有什么。`;
  if (profile === "portraitPhoto" || profile === "portraitPainting") return `${info} 它的含义来自人物被观看的方式：${cues.slice(0, 3).join("、")}共同塑造身份、性格和时代感。`;
  if (profile === "colorPainting") return `${info} 它的含义不依赖故事，而依赖视觉关系本身；${cues.slice(0, 3).join("、")}像语法一样组织节奏、冲突和平衡。`;
  if (profile === "printDesign") return `${info} 它的含义来自图像被压缩成符号后的传播力；${cues.slice(0, 3).join("、")}让复杂信息变得快速、清楚、可记忆。`;
  if (profile === "sculpture") return `${info} 它的含义在于物体的存在感：${cues.slice(0, 3).join("、")}让材质、重量和精神状态同时出现。`;
  if (profile === "filmFrame") return `${info} 它的含义来自单帧里的叙事压力；${cues.slice(0, 3).join("、")}让你能想象这一刻之前和之后发生了什么。`;
  return `${info} 它的含义来自${cues.slice(0, 3).join("、")}如何共同指向主题。`;
}

function colorFallback(work, subject) {
  const details = subjectNote(work);
  return `等图片主色读取后，这里会结合《${subject}》的实际色彩、明暗和冷暖关系分析。当前可先看${details || "标题和题材"}如何决定画面的情绪方向。`;
}

function learningAnalysis(work, profile, subject, cues, palette) {
  if (profile === "documentaryPhoto") {
    return `练习时不要只问“拍了什么”，而要圈出《${subject}》里的${cues.slice(0, 3).join("、")}，判断哪一个最先被看见、哪一个提供现场信息。`;
  }
  if (profile === "architecture") {
    return `沿着《${subject}》里最长的结构线看一遍，再沿最亮或最暗的区域看一遍，比较两条路径是否把你带到同一个主体。`;
  }
  if (profile === "landscapePhoto" || profile === "landscapePainting") {
    return `把《${subject}》分成近、中、远三层，各用一句话写它们的作用；如果三层作用不同，画面就有空间组织。`;
  }
  if (profile === "portraitPhoto" || profile === "portraitPainting") {
    return `遮住背景，只看人物轮廓；再只看背景。判断《${subject}》的气质是来自人本身，还是来自环境对他的衬托。`;
  }
  if (profile === "colorPainting") {
    return `把《${subject}》的主色块按面积从大到小列出来，再看最小的色块是否承担了点睛或打破平衡的作用。`;
  }
  if (profile === "printDesign") {
    return `把《${subject}》缩到很小看是否仍然清楚；再放大看局部线条是否有节奏。这是平面作品最好的两步检查。`;
  }
  if (profile === "sculpture") {
    return `只看《${subject}》的外轮廓，找最有力量的转折；再看阴影是否正好强化了这个转折。`;
  }
  if (profile === "filmFrame") {
    return `给《${subject}》写一句“上一秒”和一句“下一秒”。如果能写出来，说明这帧的叙事信息足够强。`;
  }
  return `先找《${subject}》里最先吸引你的一个元素，再解释它为什么比其他元素更早被看见。`;
}

function aspectNote(width, height, subject = "这张作品") {
  if (!width || !height) return "";
  const ratio = width / height;
  if (ratio > 1.55) return `《${subject}》采用横向画幅，优点是能让环境从左到右展开，主体不必孤零零地占满画面。`;
  if (ratio < 0.78) return `《${subject}》采用竖向画幅，视线会自然上下移动，主体更容易显得有纪念性。`;
  if (ratio > 0.9 && ratio < 1.12) return `《${subject}》接近方形，方向性被压低，观众会更注意中心与四边的平衡。`;
  return `《${subject}》的画幅比例比较中性，关键在主体位置与边缘信息是否互相支撑。`;
}

function subjectNote(work) {
  const parts = [work.medium, ...(work.subjects || [])]
    .map((item) => compactText(String(item || ""), 36))
    .filter(Boolean);
  return unique(parts).slice(0, 3).join("、");
}

function colorAnalysis(palette, profileKey, work) {
  const brightness = palette.brightness;
  const saturation = palette.saturation;
  const contrast = palette.contrast;
  const warmth = palette.warmth;
  const subject = titleFocus(work);
  const profileNoun = profileKey.includes("Photo") ? "画面" : "作品";
  const lightText = brightness < 0.36 ? "整体偏低明度，暗部承担了主要情绪" : brightness > 0.68 ? "整体偏高明度，画面显得轻、亮、开放" : "明度控制在中间区域，视觉稳定而耐看";
  const contrastText = contrast > 0.24 ? "明暗差比较强，主体更容易跳出来" : contrast < 0.13 ? "明暗差克制，重点转向形状和色相关系" : "明暗对比适中，层次推进比较自然";
  const satText = saturation > 0.42 ? "饱和度较高，颜色本身就是吸引力" : saturation < 0.22 ? "饱和度偏低，质感和光线比鲜艳度更重要" : "饱和度有节制，颜色不会互相抢戏";
  const warmText = warmth > 0.58 ? "暖色占比更高，气氛更亲近" : warmth < 0.42 ? "冷色占比更高，距离感和清洁感更明显" : "冷暖大致均衡，色彩关系比较从容";
  const reason = colorReason(profileKey);

  return `《${subject}》的主色约为 ${palette.colors.join("、")}。${lightText}；${contrastText}；${satText}；${warmText}。${reason}`;
}

function colorReason(profileKey) {
  if (profileKey === "documentaryPhoto") return "这种处理让现场保持日常可信感，不会被修饰成广告式的漂亮。";
  if (profileKey === "architecture") return "色彩退到材料和光线后面，空间结构就更容易被读出来。";
  if (profileKey === "landscapePhoto" || profileKey === "landscapePainting") return "冷暖和明度差会直接影响距离感，也是风景是否有空气感的关键。";
  if (profileKey === "portraitPhoto" || profileKey === "portraitPainting") return "只要肤色或人物区域不被背景抢走，肖像的观看重心就稳。";
  if (profileKey === "colorPainting") return "色彩本身就是结构，主色和次色的面积关系决定了画面的力度。";
  if (profileKey === "printDesign") return "有限色数会强化识别度，适合观察色块如何像拼图一样扣住。";
  if (profileKey === "sculpture") return "低饱和色更能突出材质、体积和阴影转折。";
  if (profileKey === "filmFrame") return "电影帧的颜色会决定这一刻的情绪温度和叙事压力。";
  return "这些色彩关系决定了画面为什么耐看。";
}

function layoutSentence(palette, profileKey) {
  const zones = palette.zones || {};
  const top = zones.top ?? palette.brightness;
  const bottom = zones.bottom ?? palette.brightness;
  const left = zones.left ?? palette.brightness;
  const right = zones.right ?? palette.brightness;
  const edge = palette.edgeDensity || 0;
  const verticalGap = Math.abs(top - bottom);
  const horizontalGap = Math.abs(left - right);
  const sentences = [];

  if (verticalGap > 0.16) {
    sentences.push(top > bottom ? "上方更亮、下方更重，画面因此有清楚的落点" : "下方更亮、上方更压，视线会被推向底部空间");
  }
  if (horizontalGap > 0.14) {
    sentences.push(left > right ? "左侧比右侧更亮，观看会从左边进入再向右寻找主体" : "右侧比左侧更亮，画面有向右展开的牵引力");
  }
  if (edge > 0.2) {
    sentences.push("线条和边缘密度高，说明它主要靠结构关系而不是单一主体取胜");
  } else if (edge < 0.09) {
    sentences.push("边缘变化较少，大面积色面或柔和层次承担了主要气氛");
  }

  if (!sentences.length) {
    return profileKey.includes("Photo") ? "明暗分布比较均衡，画面靠细节和题材信息慢慢成立。" : "明暗分布稳定，画面更强调整体秩序。";
  }
  return sentences.join("；") + "。";
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
        resolve(analyzePixels(pixels, size));
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

function analyzePixels(pixels, size) {
  const buckets = new Map();
  let total = 0;
  let brightnessSum = 0;
  let brightnessSq = 0;
  let saturationSum = 0;
  let warmCount = 0;
  let edgeTotal = 0;
  let edgeCount = 0;
  const zones = {
    top: { sum: 0, count: 0 },
    bottom: { sum: 0, count: 0 },
    left: { sum: 0, count: 0 },
    right: { sum: 0, count: 0 },
    center: { sum: 0, count: 0 },
  };

  for (let y = 0; y < size; y += 2) {
    for (let x = 0; x < size; x += 2) {
    const index = (y * size + x) * 4;
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

    addZone(zones.top, y < size * 0.38, brightness);
    addZone(zones.bottom, y > size * 0.62, brightness);
    addZone(zones.left, x < size * 0.38, brightness);
    addZone(zones.right, x > size * 0.62, brightness);
    addZone(zones.center, x > size * 0.32 && x < size * 0.68 && y > size * 0.32 && y < size * 0.68, brightness);

    if (x + 2 < size && y + 2 < size) {
      const rightIndex = (y * size + x + 2) * 4;
      const downIndex = ((y + 2) * size + x) * 4;
      const rightBrightness = pixelBrightness(pixels[rightIndex], pixels[rightIndex + 1], pixels[rightIndex + 2]);
      const downBrightness = pixelBrightness(pixels[downIndex], pixels[downIndex + 1], pixels[downIndex + 2]);
      edgeTotal += Math.abs(brightness - rightBrightness) + Math.abs(brightness - downBrightness);
      edgeCount += 2;
    }
    }
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
    edgeDensity: edgeCount ? edgeTotal / edgeCount : 0,
    zones: Object.fromEntries(
      Object.entries(zones).map(([key, zone]) => [key, zone.count ? zone.sum / zone.count : brightness])
    ),
  };
}

function addZone(zone, condition, brightness) {
  if (!condition) return;
  zone.sum += brightness;
  zone.count += 1;
}

function pixelBrightness(red, green, blue) {
  return (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;
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

function navigateToDate(dateKey) {
  currentDateKey = clampDateKey(dateKey);
  syncDateUrl();
  updateDateUI();
  loadDailySet({ dateKey: currentDateKey });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function requestedDateKey() {
  const requested = new URLSearchParams(window.location.search).get("date");
  return clampDateKey(requested || todayKey());
}

function clampDateKey(dateKey) {
  if (!isDateKey(dateKey)) return todayKey();
  if (dateKey < ARCHIVE_START) return ARCHIVE_START;
  if (dateKey > todayKey()) return todayKey();
  return dateKey;
}

function syncDateUrl({ replace = false } = {}) {
  const url = new URL(window.location.href);
  if (currentDateKey === todayKey()) url.searchParams.delete("date");
  else url.searchParams.set("date", currentDateKey);
  window.history[replace ? "replaceState" : "pushState"]({ dateKey: currentDateKey }, "", url);
}

function updateDateUI() {
  const isToday = currentDateKey === todayKey();
  const panelOpen = !archivePanel.hidden;
  dateLabel.textContent = formatDateLabel(currentDateKey);
  pageTitle.textContent = isToday ? "今日审美练习" : "往期审美练习";
  viewModeLabel.textContent = isToday ? "今日作品" : "往期作品";
  selectedDateLabel.textContent = formatCompactDate(currentDateKey);
  todayButton.classList.toggle("is-active", isToday && !panelOpen);
  archiveButton.classList.toggle("is-active", !isToday || panelOpen);
  todayButton.setAttribute("aria-current", isToday ? "page" : "false");
  previousDayButton.disabled = currentDateKey <= ARCHIVE_START;
  nextDayButton.disabled = currentDateKey >= todayKey();
  archiveDatePicker.min = ARCHIVE_START;
  archiveDatePicker.max = todayKey();
  archiveDatePicker.value = currentDateKey;
  gallery.setAttribute("aria-label", `${formatDateLabel(currentDateKey)}作品`);
  document.title = isToday ? "今日审美练习" : `${formatCompactDate(currentDateKey)} · 往期审美`;

  archiveGroups.querySelectorAll("[data-date]").forEach((button) => {
    const active = button.dataset.date === currentDateKey;
    button.classList.toggle("is-selected", active);
    button.setAttribute("aria-current", active ? "date" : "false");
  });
}

function closeArchive() {
  archivePanel.hidden = true;
  archiveButton.setAttribute("aria-expanded", "false");
  updateDateUI();
}

function buildArchive() {
  const monthKeys = [];
  const seenMonths = new Set();
  const start = dateFromKey(ARCHIVE_START);
  const cursor = dateFromKey(todayKey());

  while (cursor >= start) {
    const key = dateKeyFromDate(cursor).slice(0, 7);
    if (!seenMonths.has(key)) {
      seenMonths.add(key);
      monthKeys.push(key);
    }
    cursor.setDate(cursor.getDate() - 1);
  }

  const fragment = document.createDocumentFragment();
  monthKeys.forEach((monthKey) => fragment.appendChild(buildArchiveMonth(monthKey)));
  archiveGroups.replaceChildren(fragment);
  updateDateUI();
}

function buildArchiveMonth(monthKey) {
  const [year, month] = monthKey.split("-").map(Number);
  const section = document.createElement("section");
  section.className = "archive-month";

  const heading = document.createElement("h3");
  heading.textContent = `${year}年${month}月`;
  section.appendChild(heading);

  const weekdays = document.createElement("div");
  weekdays.className = "archive-weekdays";
  ["一", "二", "三", "四", "五", "六", "日"].forEach((day) => {
    const label = document.createElement("span");
    label.textContent = day;
    weekdays.appendChild(label);
  });
  section.appendChild(weekdays);

  const calendar = document.createElement("div");
  calendar.className = "archive-calendar";
  const firstDayOffset = (new Date(year, month - 1, 1, 12).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month, 0, 12).getDate();

  for (let index = 0; index < firstDayOffset; index += 1) {
    const blank = document.createElement("span");
    blank.className = "archive-day is-blank";
    blank.setAttribute("aria-hidden", "true");
    calendar.appendChild(blank);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const dateKey = dateKeyFromDate(new Date(year, month - 1, day, 12));
    if (dateKey < ARCHIVE_START || dateKey > todayKey()) {
      const unavailable = document.createElement("span");
      unavailable.className = "archive-day is-unavailable";
      unavailable.textContent = String(day);
      unavailable.setAttribute("aria-hidden", "true");
      calendar.appendChild(unavailable);
      continue;
    }

    const button = document.createElement("button");
    button.className = "archive-day";
    button.type = "button";
    button.dataset.date = dateKey;
    button.textContent = String(day);
    button.title = formatDateLabel(dateKey);
    button.setAttribute("aria-label", formatDateLabel(dateKey));
    button.addEventListener("click", () => {
      closeArchive();
      navigateToDate(dateKey);
    });
    calendar.appendChild(button);
  }

  section.appendChild(calendar);
  return section;
}

function shiftDateKey(dateKey, amount) {
  const date = dateFromKey(dateKey);
  date.setDate(date.getDate() + amount);
  return clampDateKey(dateKeyFromDate(date));
}

function isDateKey(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value || ""))) return false;
  const date = dateFromKey(value);
  return !Number.isNaN(date.getTime()) && dateKeyFromDate(date) === value;
}

function dateFromKey(dateKey) {
  return new Date(`${dateKey}T12:00:00`);
}

function dateKeyFromDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatCompactDate(dateKey) {
  const date = dateFromKey(dateKey);
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
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
