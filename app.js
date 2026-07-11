const phases = [
  {
    caption: "一渡赤水 · 摆脱被动，寻找机动空间",
    situation: "土城战斗后，红军面临强敌压迫与地形限制，必须尽快脱离被动局面。",
    hud: "风险：高 · 机动窗口：短",
    narrative: "一渡：土城方向受挫后，红军迅速向西渡赤水，先保存主力，再寻找机动空间。",
    redPath: "M31 50 C34 46 39 45 43 47 C47 49 50 51 55 50",
    enemyPaths: ["M82 52 C72 48 64 48 55 50", "M62 20 C57 30 55 40 55 50"],
    supportPath: "M27 59 C32 56 37 53 43 47",
    zone: "M24 43 L43 39 L56 49 L37 58 Z",
    forces: [
      { type: "red", x: 33, y: 50, label: "红1军团" },
      { type: "red", x: 43, y: 47, label: "中央纵队" },
      { type: "enemy", x: 72, y: 47, label: "追堵部队" },
      { type: "crossing", x: 54, y: 50, label: "渡口" },
    ],
    blasts: [
      { x: 31, y: 52 },
      { x: 39, y: 47 },
    ],
    choices: [
      ["向西渡赤水", "利用敌军判断空隙保存主力，争取战略机动。"],
      ["原地固守", "风险极高，容易被优势兵力压缩。"],
      ["分散突围", "可能短期减压，但会削弱集中指挥。"],
    ],
  },
  {
    caption: "二渡赤水 · 回师遵义，夺回局部主动",
    situation: "敌军主力被调动后，遵义方向出现战机，红军需要判断是否迅速回师。",
    hud: "风险：中 · 战机：正在出现",
    narrative: "二渡：红军抓住敌军判断失误，迅速回师遵义方向，形成局部主动。",
    redPath: "M56 51 C51 48 47 44 43 39 C38 34 35 29 39 22",
    enemyPaths: ["M83 61 C73 58 64 55 56 51", "M78 30 C66 33 54 35 43 39"],
    supportPath: "M50 66 C48 55 45 46 43 39",
    zone: "M35 19 L49 29 L45 42 L31 34 Z",
    forces: [
      { type: "red", x: 43, y: 39, label: "回师遵义" },
      { type: "red", x: 39, y: 22, label: "主力突击" },
      { type: "enemy", x: 69, y: 35, label: "误判西进" },
      { type: "enemy", x: 76, y: 58, label: "尾追" },
    ],
    blasts: [
      { x: 40, y: 25 },
      { x: 44, y: 36 },
    ],
    choices: [
      ["回师遵义", "抓住敌军部署空隙，体现运动战的主动性。"],
      ["继续西进", "可能避开正面压力，但会错失战役主动。"],
      ["等待补给", "补给重要，但迟疑会让敌军重新合围。"],
    ],
  },
  {
    caption: "三渡赤水 · 佯动迷惑，调动围追堵截",
    situation: "敌军试图重新判断红军主攻方向，红军可通过虚实结合牵动敌军。",
    hud: "风险：中高 · 敌情：判断混乱",
    narrative: "三渡：以再次西渡制造错觉，牵动敌军向错误方向集结，给下一步机动创造条件。",
    redPath: "M40 25 C46 31 50 40 56 47 C62 54 68 58 75 63",
    enemyPaths: ["M77 26 C66 35 60 42 56 47", "M90 55 C83 58 79 61 75 63", "M52 72 C58 64 65 61 75 63"],
    supportPath: "M36 35 C44 42 51 45 56 47",
    zone: "M52 39 L82 51 L77 70 L50 55 Z",
    forces: [
      { type: "red", x: 56, y: 47, label: "佯动主力" },
      { type: "red", x: 75, y: 63, label: "西渡方向" },
      { type: "enemy", x: 77, y: 26, label: "北线围堵" },
      { type: "enemy", x: 88, y: 55, label: "东线追击" },
    ],
    blasts: [
      { x: 57, y: 48 },
      { x: 72, y: 61 },
      { x: 64, y: 54 },
    ],
    choices: [
      ["再次西渡佯动", "以行动制造错觉，牵引敌军兵力。"],
      ["公开主攻路线", "会让敌军提前封堵关键通道。"],
      ["单线急行军", "速度快但欺骗性不足。"],
    ],
  },
  {
    caption: "四渡赤水 · 跳出合围，完成战略机动",
    situation: "敌军被持续调动后，红军获得突破合围的机会，需要果断转向。",
    hud: "风险：高 · 突破窗口：短暂",
    narrative: "四渡：敌军被连续调动后，红军秘密东渡并迅速南下，跳出合围。",
    redPath: "M75 63 C69 59 62 55 56 49 C52 45 49 40 46 34 C43 29 39 25 35 21",
    enemyPaths: ["M88 61 C84 64 79 65 75 63", "M70 24 C62 31 57 39 56 49", "M49 72 C52 61 54 54 56 49"],
    supportPath: "M75 63 C70 71 65 78 58 84",
    zone: "M45 32 L65 42 L61 57 L42 48 Z",
    forces: [
      { type: "red", x: 56, y: 49, label: "秘密东渡" },
      { type: "red", x: 35, y: 21, label: "跳出合围" },
      { type: "enemy", x: 88, y: 61, label: "被牵制" },
      { type: "enemy", x: 70, y: 24, label: "判断滞后" },
      { type: "crossing", x: 50, y: 40, label: "渡河点" },
    ],
    blasts: [
      { x: 56, y: 49 },
      { x: 50, y: 40 },
    ],
    choices: [
      ["秘密东渡并南下", "利用敌军错判跳出合围，形成战略转移新局面。"],
      ["与敌决战", "不符合当时敌我力量对比。"],
      ["停留整训", "可能丧失难得的机动窗口。"],
    ],
  },
];

const phaseCaption = document.querySelector("#phaseCaption");
const situation = document.querySelector("#situation");
const hudState = document.querySelector("#hudState");
const choiceList = document.querySelector("#choiceList");
const feedback = document.querySelector("#feedback");
const steps = document.querySelectorAll(".step");
const panorama = document.querySelector("#panorama");
const battleMap = document.querySelector("#battleMap");
const battleLegend = document.querySelector("#battleLegend");
const battleTicker = document.querySelector("#battleTicker");
const warEffects = document.querySelector("#warEffects");
const toast = document.querySelector("#toast");
const registerDialog = document.querySelector("#registerDialog");
const registerForm = document.querySelector("#registerForm");

let activePhase = 0;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function svgElement(name, attributes = {}) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", name);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
}

function addMovingUnit(pathData, className, duration, delay = 0) {
  const unit = svgElement("g", { class: "unit-carrier" });
  const body = svgElement("rect", {
    x: "-1.7",
    y: "-1.05",
    width: "3.4",
    height: "2.1",
    rx: "0.45",
    class: className,
  });
  const motion = svgElement("animateMotion", {
    dur: `${duration}s`,
    begin: `${delay}s`,
    repeatCount: "indefinite",
    rotate: "auto",
    path: pathData,
  });
  unit.appendChild(body);
  unit.appendChild(motion);
  battleMap.appendChild(unit);
}

function addArtilleryShell(pathData, delay = 0) {
  const shell = svgElement("circle", { r: "0.75", class: "artillery-shell" });
  const motion = svgElement("animateMotion", {
    dur: "1.45s",
    begin: `${delay}s`,
    repeatCount: "indefinite",
    rotate: "auto",
    path: pathData,
  });
  shell.appendChild(motion);
  battleMap.appendChild(shell);
}

function createEffectNode(className, x, y, extraStyles = {}) {
  const node = document.createElement("span");
  node.className = className;
  node.style.left = `${x}%`;
  node.style.top = `${y}%`;
  Object.entries(extraStyles).forEach(([key, value]) => node.style.setProperty(key, value));
  warEffects.appendChild(node);
}

function renderWarEffects(phase) {
  warEffects.innerHTML = "";
  const effectPoints = [...phase.blasts, ...phase.forces.filter((force) => force.type === "enemy").slice(0, 2)];

  effectPoints.forEach((point, index) => {
    const offsetX = point.x + (index % 2 === 0 ? -1.4 : 1.2);
    const offsetY = point.y + (index % 2 === 0 ? 1.1 : -1.2);
    createEffectNode("smoke-column", offsetX, offsetY, {
      "animation-delay": `${index * 0.55}s`,
    });
  });

  phase.blasts.forEach((blast, index) => {
    createEffectNode("impact-flash", blast.x, blast.y, {
      "animation-delay": `${index * 0.28}s`,
    });
    createEffectNode("shockwave", blast.x, blast.y, {
      "animation-delay": `${index * 0.28}s`,
    });
  });

  const tracers = [
    { x: 26, y: 40, angle: "17deg", delay: "0s" },
    { x: 55, y: 37, angle: "-24deg", delay: "0.45s" },
    { x: 68, y: 58, angle: "151deg", delay: "0.9s" },
  ];
  tracers.forEach((tracer) => {
    createEffectNode("tracer", tracer.x, tracer.y, {
      "--angle": tracer.angle,
      "animation-delay": tracer.delay,
    });
  });

  panorama.classList.remove("combat-shock");
  window.requestAnimationFrame(() => {
    panorama.classList.add("combat-shock");
  });
}

function renderBattleMap(phase) {
  battleMap.innerHTML = "";

  const defs = svgElement("defs");
  const arrow = svgElement("marker", {
    id: "redArrow",
    viewBox: "0 0 10 10",
    refX: "8.4",
    refY: "5",
    markerWidth: "4",
    markerHeight: "4",
    orient: "auto-start-reverse",
  });
  arrow.appendChild(svgElement("path", { d: "M 0 0 L 10 5 L 0 10 z", class: "march-arrow" }));
  defs.appendChild(arrow);
  battleMap.appendChild(defs);

  battleMap.appendChild(svgElement("path", { d: phase.zone, class: "front-zone" }));
  battleMap.appendChild(svgElement("path", { d: phase.redPath, class: "route-shadow" }));

  phase.enemyPaths.forEach((pathData) => {
    battleMap.appendChild(svgElement("path", { d: pathData, class: "enemy-route" }));
  });

  battleMap.appendChild(svgElement("path", { d: phase.supportPath, class: "support-route" }));
  battleMap.appendChild(svgElement("path", { d: phase.redPath, class: "red-route", "marker-end": "url(#redArrow)" }));

  addMovingUnit(phase.redPath, "moving-red", 5.2, 0);
  addMovingUnit(phase.redPath, "moving-red", 5.2, 1.1);
  addMovingUnit(phase.redPath, "moving-red", 5.2, 2.2);
  phase.enemyPaths.forEach((pathData, index) => addMovingUnit(pathData, "moving-enemy", 6.4 + index * 0.6, index * 0.75));
  phase.enemyPaths.slice(0, 2).forEach((pathData, index) => addArtilleryShell(pathData, index * 0.6));

  phase.forces.forEach((force) => {
    const group = svgElement("g", { class: `force ${force.type}-force-group` });
    const dotClass = force.type === "red" ? "troop-dot red-force" : force.type === "enemy" ? "troop-dot enemy-force" : "troop-dot crossing-force";
    group.appendChild(svgElement("circle", { cx: force.x, cy: force.y, r: "2.2", class: dotClass }));
    const label = svgElement("text", { x: force.x + 3, y: force.y - 2, class: "troop-label" });
    label.textContent = force.label;
    group.appendChild(label);
    battleMap.appendChild(group);
  });

  phase.blasts.forEach((blast) => {
    const group = svgElement("g", { class: "explosion" });
    group.appendChild(svgElement("circle", { cx: blast.x, cy: blast.y, r: "4.2", class: "fire-flash" }));
    group.appendChild(svgElement("circle", { cx: blast.x, cy: blast.y, r: "2", class: "explosion-ring" }));
    group.appendChild(svgElement("circle", { cx: blast.x, cy: blast.y, r: "1.2", class: "explosion-core" }));
    battleMap.appendChild(group);
  });

  battleLegend.innerHTML = `
    <div class="legend-row"><span class="legend-line"></span><span>红军动态行军路线</span></div>
    <div class="legend-row"><span class="legend-line enemy"></span><span>国军围堵 / 追击路线</span></div>
    <div class="legend-row"><span class="legend-dot"></span><span>交战与爆炸点</span></div>
  `;
  battleTicker.textContent = phase.narrative;
  renderWarEffects(phase);
}

function renderPhase(index) {
  activePhase = index;
  const phase = phases[index];
  phaseCaption.textContent = phase.caption;
  situation.textContent = phase.situation;
  hudState.textContent = phase.hud;
  feedback.textContent = "选择一个行动方案，系统将从军事原则、风险与历史依据给出反馈。";
  renderBattleMap(phase);

  steps.forEach((step) => {
    step.classList.toggle("active", Number(step.dataset.phase) === index);
  });

  choiceList.innerHTML = "";
  phase.choices.forEach(([label, response], choiceIndex) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", () => {
      document.querySelectorAll(".choice").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      feedback.textContent = response;
      showToast(choiceIndex === 0 ? "决策符合历史推演重点" : "已记录风险判断，可用于课堂讨论");
    });
    choiceList.appendChild(button);
  });
}

steps.forEach((step) => {
  step.addEventListener("click", () => renderPhase(Number(step.dataset.phase)));
});

document.querySelector("#toggleVr").addEventListener("click", (event) => {
  panorama.classList.toggle("vr");
  event.currentTarget.classList.toggle("active");
  showToast(panorama.classList.contains("vr") ? "已开启裸眼3D视角模拟" : "已恢复标准地图视角");
});

document.querySelector("#toggleMap").addEventListener("click", (event) => {
  panorama.classList.toggle("map-off");
  event.currentTarget.classList.toggle("active");
  showToast(panorama.classList.contains("map-off") ? "已弱化军事地图层" : "已显示军事地图层");
});

document.querySelectorAll(".hotspot").forEach((hotspot) => {
  hotspot.addEventListener("click", () => {
    document.querySelectorAll(".hotspot").forEach((item) => item.classList.remove("active"));
    hotspot.classList.add("active");
    feedback.textContent = hotspot.dataset.point;
  });
});

document.querySelectorAll(".source").forEach((source) => {
  source.addEventListener("click", () => {
    document.querySelectorAll(".source").forEach((item) => item.classList.remove("active"));
    source.classList.add("active");
    showToast(`已切换资料：${source.textContent}`);
  });
});

document.querySelector("#startWargame").addEventListener("click", () => {
  showToast("军棋推演比赛已创建：四渡赤水情境赛");
});

document.querySelector("#saveReflection").addEventListener("click", () => {
  const value = document.querySelector("#reflection").value.trim();
  showToast(value ? "学习记录已保存到本地课堂档案" : "请先写下你的决策依据");
});

document.querySelector("#openRegister").addEventListener("click", () => {
  registerDialog.showModal();
});

registerForm.addEventListener("submit", (event) => {
  const submitter = event.submitter?.value;
  if (submitter !== "confirm") return;
  event.preventDefault();
  const data = new FormData(registerForm);
  const name = data.get("name").trim();
  const id = data.get("id").trim();
  if (!name || !id) return;
  document.querySelector("#studentName").textContent = name;
  document.querySelector("#studentMeta").textContent = `${id} · 已登录`;
  registerDialog.close();
  showToast("注册成功，已进入沉浸式学习模式");
});

renderPhase(activePhase);
