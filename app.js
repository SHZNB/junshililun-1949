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
    redSteps: [
      { x: 31, y: 50, label: "土城调整" },
      { x: 43, y: 47, label: "向西机动" },
      { x: 55, y: 50, label: "一渡赤水" },
    ],
    enemySteps: [
      { x: 72, y: 47, label: "追堵压迫" },
      { x: 62, y: 34, label: "北线封堵" },
    ],
    characters: [
      { role: "mao", x: 39, y: 39, title: "毛主席", line: "先避其锋，保存主力。" },
      { role: "enemy", x: 72, y: 42, title: "敌军指挥官", line: "压缩渡口，阻断西进。" },
    ],
    dialogues: {
      commander: "土城方向不宜硬拼，迅速转向赤水河，先把主力带出被动。",
      staff: "红军第1、中央纵队正沿赤水河西侧机动，渡口窗口很短。",
      enemy: "发现红军西移，命令追堵部队压向渡口。",
    },
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
    redSteps: [
      { x: 56, y: 51, label: "回撤转向" },
      { x: 43, y: 39, label: "回师遵义" },
      { x: 39, y: 22, label: "夺回主动" },
    ],
    enemySteps: [
      { x: 76, y: 58, label: "尾追迟滞" },
      { x: 69, y: 35, label: "误判西进" },
    ],
    characters: [
      { role: "mao", x: 45, y: 34, title: "毛主席", line: "敌动我转，回师遵义。" },
      { role: "enemy", x: 70, y: 35, title: "敌军电台", line: "目标方向变化，情报滞后。" },
    ],
    dialogues: {
      commander: "敌军主力被牵动，遵义方向出现战机，立即回师。",
      staff: "二渡后路线已重算，红军主力正向遵义方向集结。",
      enemy: "红军并未持续西进，前线判断出现偏差。",
    },
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
    redSteps: [
      { x: 40, y: 25, label: "再度西渡" },
      { x: 56, y: 47, label: "制造错觉" },
      { x: 75, y: 63, label: "牵动敌军" },
    ],
    enemySteps: [
      { x: 77, y: 26, label: "北线误判" },
      { x: 88, y: 55, label: "东线追击" },
      { x: 52, y: 72, label: "南线调动" },
    ],
    characters: [
      { role: "mao", x: 56, y: 43, title: "毛主席", line: "虚实相生，调动敌军。" },
      { role: "enemy", x: 82, y: 55, title: "敌军指挥官", line: "红军主力仍向西？" },
    ],
    dialogues: {
      commander: "佯动不是退却，是把敌军判断引向错误方向。",
      staff: "敌军三线兵力被牵引，地图上蓝线正在向西侧聚拢。",
      enemy: "各部注意，红军似乎再次西渡，立即调整围堵方向。",
    },
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
    redSteps: [
      { x: 75, y: 63, label: "摆脱视线" },
      { x: 56, y: 49, label: "秘密东渡" },
      { x: 35, y: 21, label: "跳出合围" },
    ],
    enemySteps: [
      { x: 88, y: 61, label: "被牵制" },
      { x: 70, y: 24, label: "判断滞后" },
      { x: 49, y: 72, label: "封堵落空" },
    ],
    characters: [
      { role: "mao", x: 50, y: 40, title: "毛主席", line: "抓住窗口，跳出合围。" },
      { role: "enemy", x: 70, y: 24, title: "敌军电台", line: "目标突然消失。" },
    ],
    dialogues: {
      commander: "敌军被连续调动，突破窗口已经出现，秘密东渡并迅速南下。",
      staff: "红军路线已脱离主要封锁线，下一步进入战略转移新局面。",
      enemy: "前线报告红军方向突变，原封堵线失效。",
    },
    choices: [
      ["秘密东渡并南下", "利用敌军错判跳出合围，形成战略转移新局面。"],
      ["与敌决战", "不符合当时敌我力量对比。"],
      ["停留整训", "可能丧失难得的机动窗口。"],
    ],
  },
];

const liaoshenPhases = [
  {
    caption: "锦州攻坚 · 关闭东北大门",
    situation: "锦州是东北与华北联系的关键通道，攻克锦州意味着切断敌军陆上退路。",
    hud: "目标：锦州 · 关键：封闭辽西走廊",
    narrative: "辽沈第一阶段：集中兵力夺取锦州，先关门，再打援。",
    redPath: "M24 78 C31 74 37 69 44 64 C49 60 53 57 58 54",
    enemyPaths: ["M76 24 C72 34 66 45 58 54", "M84 80 C75 72 66 62 58 54"],
    supportPath: "M37 85 C40 76 42 70 44 64",
    zone: "M35 59 L57 48 L66 62 L43 73 Z",
    forces: [
      { type: "red", x: 44, y: 64, label: "锦州攻坚" },
      { type: "red", x: 37, y: 72, label: "塔山阻援" },
      { type: "enemy", x: 76, y: 24, label: "长春守军" },
      { type: "enemy", x: 84, y: 80, label: "海上退路" },
    ],
    blasts: [{ x: 44, y: 64 }, { x: 37, y: 72 }],
    redSteps: [
      { x: 24, y: 78, label: "集结主力" },
      { x: 44, y: 64, label: "攻克锦州" },
      { x: 58, y: 54, label: "封闭通道" },
    ],
    enemySteps: [
      { x: 76, y: 24, label: "北线牵制" },
      { x: 84, y: 80, label: "企图撤退" },
    ],
    characters: [
      { role: "mao", x: 34, y: 57, title: "战略指挥", line: "先取锦州，关上东北大门。" },
      { role: "enemy", x: 76, y: 43, title: "敌军电台", line: "锦州压力骤增，请求增援。" },
    ],
    dialogues: {
      commander: "锦州是战役枢纽，先切断敌军与关内联系。",
      staff: "主攻部队已压向锦州，塔山方向同步准备阻援。",
      enemy: "锦州告急，辽西走廊可能被切断。",
    },
    choices: [
      ["集中攻锦州", "抓住战役枢纽，先封闭东北大门。"],
      ["先打长春", "可削弱敌军，但会给锦州方向留下退路。"],
      ["分兵多路", "看似全面，实际可能削弱主攻力量。"],
    ],
  },
  {
    caption: "塔山阻援 · 顶住海陆增援",
    situation: "塔山方向是敌军驰援锦州的重要通道，必须阻住援军才能保障主攻。",
    hud: "目标：塔山 · 风险：援军压力高",
    narrative: "辽沈第二阶段：塔山阻援顶住敌军反扑，保证锦州攻坚持续推进。",
    redPath: "M37 82 C39 76 41 72 43 69 C45 66 47 63 50 60",
    enemyPaths: ["M83 82 C75 76 66 69 50 60", "M69 30 C65 42 59 52 50 60"],
    supportPath: "M43 69 C45 62 44 57 42 51",
    zone: "M34 66 L54 56 L64 70 L42 79 Z",
    forces: [
      { type: "red", x: 43, y: 69, label: "塔山阵地" },
      { type: "red", x: 50, y: 60, label: "火力支撑" },
      { type: "enemy", x: 83, y: 82, label: "海路援军" },
      { type: "enemy", x: 69, y: 30, label: "北线援军" },
    ],
    blasts: [{ x: 43, y: 69 }, { x: 50, y: 60 }, { x: 59, y: 66 }],
    redSteps: [
      { x: 37, y: 82, label: "构筑阵地" },
      { x: 43, y: 69, label: "阻击援军" },
      { x: 50, y: 60, label: "稳住主攻" },
    ],
    enemySteps: [
      { x: 83, y: 82, label: "海陆增援" },
      { x: 69, y: 30, label: "侧翼压迫" },
      { x: 59, y: 66, label: "反复冲击" },
    ],
    characters: [
      { role: "mao", x: 41, y: 61, title: "前线指挥", line: "塔山必须守住。" },
      { role: "enemy", x: 72, y: 67, title: "敌军指挥", line: "突破塔山，救援锦州。" },
    ],
    dialogues: {
      commander: "锦州攻坚能否成功，塔山阻援是关键支点。",
      staff: "蓝线援军正向塔山压来，红线阵地必须稳住。",
      enemy: "集中火力突破塔山，否则锦州将失守。",
    },
    choices: [
      ["坚守塔山阵地", "保障锦州主攻，是典型的打援配合作战。"],
      ["撤出阻援阵地", "会使锦州主攻遭受侧后威胁。"],
      ["放弃锦州转攻沈阳", "会失去封闭东北的战役节奏。"],
    ],
  },
  {
    caption: "长春争取 · 促成守军转化",
    situation: "锦州失守后，长春守军孤立，政治争取与军事压力共同发挥作用。",
    hud: "目标：长春 · 方式：围困与争取并用",
    narrative: "辽沈第三阶段：军事围困结合政治争取，减少城市攻坚消耗。",
    redPath: "M44 64 C50 55 58 43 66 28",
    enemyPaths: ["M66 28 C68 38 70 48 73 58", "M58 54 C61 44 64 35 66 28"],
    supportPath: "M52 73 C56 58 61 42 66 28",
    zone: "M58 20 L75 27 L72 43 L55 38 Z",
    forces: [
      { type: "red", x: 66, y: 28, label: "围困长春" },
      { type: "red", x: 58, y: 54, label: "切断联系" },
      { type: "enemy", x: 70, y: 37, label: "孤立守军" },
      { type: "crossing", x: 66, y: 28, label: "争取转化" },
    ],
    blasts: [{ x: 58, y: 54 }],
    redSteps: [
      { x: 44, y: 64, label: "锦州后续" },
      { x: 58, y: 54, label: "切断联系" },
      { x: 66, y: 28, label: "争取长春" },
    ],
    enemySteps: [
      { x: 70, y: 37, label: "守军孤立" },
      { x: 73, y: 58, label: "突围困难" },
    ],
    characters: [
      { role: "mao", x: 60, y: 34, title: "战略指挥", line: "军事压力与政治争取并用。" },
      { role: "enemy", x: 72, y: 39, title: "长春守军", line: "外援断绝，局势急转。" },
    ],
    dialogues: {
      commander: "能减少牺牲，就要把军事压力和政治争取结合起来。",
      staff: "长春方向蓝军联系被切断，守军处于孤立状态。",
      enemy: "补给与外援受阻，继续固守的代价不断上升。",
    },
    choices: [
      ["围困争取并用", "减少城市攻坚损失，更符合战役全局。"],
      ["强攻长春", "可能增加城市战损耗。"],
      ["暂不处理长春", "可能留下战役后方隐患。"],
    ],
  },
  {
    caption: "辽西会战 · 解放沈阳营口",
    situation: "锦州和长春局势明朗后，东北野战军转入追歼与城市解放阶段。",
    hud: "目标：辽西、沈阳、营口 · 态势：追歼收束",
    narrative: "辽沈第四阶段：辽西会战后，沈阳、营口相继解放，东北全境进入新局面。",
    redPath: "M58 54 C64 57 70 58 76 58 C82 62 88 70 93 82",
    enemyPaths: ["M76 58 C83 61 91 71 93 82", "M69 28 C73 40 76 49 76 58", "M88 82 C82 72 78 64 76 58"],
    supportPath: "M44 64 C55 62 66 60 76 58",
    zone: "M66 51 L88 56 L96 86 L75 73 Z",
    forces: [
      { type: "red", x: 76, y: 58, label: "沈阳方向" },
      { type: "red", x: 93, y: 82, label: "营口方向" },
      { type: "enemy", x: 82, y: 66, label: "辽西溃退" },
      { type: "enemy", x: 69, y: 28, label: "北线残部" },
    ],
    blasts: [{ x: 76, y: 58 }, { x: 86, y: 70 }],
    redSteps: [
      { x: 58, y: 54, label: "辽西合围" },
      { x: 76, y: 58, label: "解放沈阳" },
      { x: 93, y: 82, label: "控制营口" },
    ],
    enemySteps: [
      { x: 82, y: 66, label: "兵团溃退" },
      { x: 88, y: 82, label: "退路受阻" },
      { x: 69, y: 28, label: "残部失联" },
    ],
    characters: [
      { role: "mao", x: 73, y: 50, title: "战役指挥", line: "合围追歼，扩大战果。" },
      { role: "enemy", x: 83, y: 68, title: "敌军电台", line: "辽西方向失去联络。" },
    ],
    dialogues: {
      commander: "锦州已定，长春已明，辽西追歼要迅速收束战役。",
      staff: "红线正向沈阳、营口推进，蓝线退路被连续压缩。",
      enemy: "各部通信中断，沈阳方向防线动摇。",
    },
    choices: [
      ["追歼辽西残部", "扩大战果并推动沈阳、营口解放。"],
      ["停止追击整补", "可能给残部重组时间。"],
      ["单攻营口", "会削弱沈阳方向的战役协同。"],
    ],
  },
];

const koreaPhases = [
  {
    caption: "入朝作战 · 云山交锋",
    situation: "志愿军跨过鸭绿江后，以隐蔽机动和突然接敌打乱敌军推进节奏。",
    hud: "目标：迟滞敌军 · 关键：隐蔽入朝与突然打击",
    narrative: "抗美援朝第一阶段：志愿军隐蔽入朝，在云山等方向突然接敌，迫使敌军重新判断战场。",
    redPath: "M37 13 C40 24 43 31 47 37 C51 43 53 50 55 58",
    enemyPaths: ["M69 77 C65 67 60 61 55 58", "M78 32 C69 39 61 48 55 58"],
    supportPath: "M32 18 C38 27 43 34 47 37",
    zone: "M42 33 L61 47 L59 63 L43 53 Z",
    forces: [
      { type: "red", x: 37, y: 13, label: "鸭绿江" },
      { type: "red", x: 47, y: 37, label: "云山交锋" },
      { type: "enemy", x: 69, y: 77, label: "南线推进" },
      { type: "enemy", x: 78, y: 32, label: "东线敌军" },
    ],
    blasts: [{ x: 47, y: 37 }, { x: 55, y: 58 }],
    redSteps: [
      { x: 37, y: 13, label: "隐蔽入朝" },
      { x: 47, y: 37, label: "云山接敌" },
      { x: 55, y: 58, label: "稳住战线" },
    ],
    enemySteps: [
      { x: 69, y: 77, label: "北进推进" },
      { x: 78, y: 32, label: "东线压迫" },
    ],
    characters: [
      { role: "mao", x: 42, y: 28, title: "战略决策", line: "出兵援朝，保家卫国。" },
      { role: "enemy", x: 66, y: 52, title: "敌军电台", line: "遭遇突然反击。" },
    ],
    dialogues: {
      commander: "必须把战火挡在国门之外，隐蔽机动，突然接敌。",
      staff: "志愿军已跨过鸭绿江，云山方向出现接敌机会。",
      enemy: "前沿部队遭遇强力反击，推进节奏被打乱。",
    },
    choices: [
      ["隐蔽入朝突然接敌", "利用出其不意迟滞敌军北进，是初期作战重点。"],
      ["正面公开推进", "会暴露兵力与意图。"],
      ["等待敌军逼近边境", "会丧失主动防御窗口。"],
    ],
  },
  {
    caption: "长津湖战役 · 东线严寒围歼",
    situation: "东线战场严寒、补给困难，志愿军在极端环境下实施穿插分割。",
    hud: "目标：东线分割 · 风险：严寒与补给困难",
    narrative: "抗美援朝第二阶段：长津湖方向在严寒中穿插分割，表现出极强的战斗意志。",
    redPath: "M38 16 C47 20 55 23 63 26 C68 29 73 32 78 36",
    enemyPaths: ["M83 22 C77 25 70 27 63 26", "M76 54 C74 45 70 35 63 26"],
    supportPath: "M47 37 C53 31 58 28 63 26",
    zone: "M56 18 L79 25 L74 42 L55 36 Z",
    forces: [
      { type: "red", x: 63, y: 26, label: "长津湖" },
      { type: "red", x: 55, y: 36, label: "穿插分割" },
      { type: "enemy", x: 83, y: 22, label: "东线敌军" },
      { type: "enemy", x: 76, y: 54, label: "撤退通道" },
    ],
    blasts: [{ x: 63, y: 26 }, { x: 72, y: 35 }, { x: 55, y: 36 }],
    redSteps: [
      { x: 38, y: 16, label: "东线机动" },
      { x: 63, y: 26, label: "长津湖围歼" },
      { x: 78, y: 36, label: "压缩退路" },
    ],
    enemySteps: [
      { x: 83, y: 22, label: "东线受阻" },
      { x: 76, y: 54, label: "南撤通道" },
    ],
    characters: [
      { role: "mao", x: 58, y: 20, title: "战役研判", line: "艰苦环境下打分割。" },
      { role: "enemy", x: 78, y: 34, title: "敌军电台", line: "东线遭遇包围。" },
    ],
    dialogues: {
      commander: "东线作战条件极端，但分割敌军能够改变战场态势。",
      staff: "长津湖区域气候严寒，红线部队正在穿插敌军侧后。",
      enemy: "东线部队遭遇分割，撤退通道受到威胁。",
    },
    choices: [
      ["穿插分割东线敌军", "在艰苦条件下打乱敌军部署。"],
      ["放弃东线压力", "会让敌军稳定侧翼。"],
      ["单纯防守阵地", "难以形成战役主动。"],
    ],
  },
  {
    caption: "上甘岭战役 · 坑道阵地坚守",
    situation: "上甘岭方向敌军火力密集，志愿军依托坑道与阵地反复争夺。",
    hud: "目标：守住阵地 · 关键：坑道、防炮、反击",
    narrative: "抗美援朝第三阶段：上甘岭阵地反复争夺，体现坚守、协同与意志。",
    redPath: "M55 58 C58 60 62 61 66 62 C70 63 74 62 78 60",
    enemyPaths: ["M70 78 C70 71 69 66 66 62", "M83 55 C77 58 72 60 66 62"],
    supportPath: "M45 63 C53 60 59 59 66 62",
    zone: "M58 54 L78 55 L80 68 L60 70 Z",
    forces: [
      { type: "red", x: 66, y: 62, label: "上甘岭" },
      { type: "red", x: 58, y: 60, label: "坑道阵地" },
      { type: "enemy", x: 70, y: 78, label: "火力压制" },
      { type: "enemy", x: 83, y: 55, label: "阵地突击" },
    ],
    blasts: [{ x: 66, y: 62 }, { x: 72, y: 60 }, { x: 58, y: 60 }],
    redSteps: [
      { x: 55, y: 58, label: "坑道固守" },
      { x: 66, y: 62, label: "阵地反击" },
      { x: 78, y: 60, label: "稳定防线" },
    ],
    enemySteps: [
      { x: 70, y: 78, label: "火力压制" },
      { x: 83, y: 55, label: "阵地突击" },
      { x: 72, y: 60, label: "反复争夺" },
    ],
    characters: [
      { role: "mao", x: 60, y: 52, title: "战役指挥", line: "守住关键阵地。" },
      { role: "enemy", x: 78, y: 64, title: "敌军电台", line: "阵地久攻不下。" },
    ],
    dialogues: {
      commander: "上甘岭不是孤立山头，是防线意志与战术协同的集中体现。",
      staff: "坑道体系保持战斗力，红线阵地正在组织反击。",
      enemy: "火力覆盖后仍未突破，阵地争夺陷入反复。",
    },
    choices: [
      ["依托坑道坚守反击", "保存战斗力并稳定防线。"],
      ["离开坑道正面冲击", "会暴露于敌军火力下。"],
      ["放弃阵地后撤", "会动摇整体防线。"],
    ],
  },
  {
    caption: "停战谈判 · 稳定三八线",
    situation: "战场进入边打边谈阶段，军事斗争与谈判博弈相互支撑。",
    hud: "目标：停战谈判 · 关键：阵地稳固与政治博弈",
    narrative: "抗美援朝第四阶段：在阵地战与谈判中稳定战线，最终走向停战。",
    redPath: "M54 58 C60 55 67 54 73 55 C78 56 83 54 88 50",
    enemyPaths: ["M88 70 C82 63 77 58 73 55", "M74 42 C74 47 74 51 73 55"],
    supportPath: "M64 62 C68 59 70 57 73 55",
    zone: "M55 50 L90 48 L91 62 L55 66 Z",
    forces: [
      { type: "red", x: 73, y: 55, label: "三八线" },
      { type: "red", x: 88, y: 50, label: "板门店" },
      { type: "enemy", x: 88, y: 70, label: "阵地压力" },
      { type: "enemy", x: 74, y: 42, label: "谈判博弈" },
    ],
    blasts: [{ x: 73, y: 55 }],
    redSteps: [
      { x: 54, y: 58, label: "阵地稳定" },
      { x: 73, y: 55, label: "边打边谈" },
      { x: 88, y: 50, label: "停战签署" },
    ],
    enemySteps: [
      { x: 88, y: 70, label: "施压失败" },
      { x: 74, y: 42, label: "谈判拉锯" },
    ],
    characters: [
      { role: "mao", x: 67, y: 48, title: "战略判断", line: "打得稳，谈得稳。" },
      { role: "enemy", x: 84, y: 62, title: "敌军电台", line: "谈判进入僵持。" },
    ],
    dialogues: {
      commander: "战场稳定是谈判桌上的底气，阵地不能松。",
      staff: "三八线附近态势趋稳，谈判与阵地战同步推进。",
      enemy: "继续施压难以改变战线，谈判进入实质阶段。",
    },
    choices: [
      ["稳固阵地支撑谈判", "军事与政治斗争相互配合。"],
      ["单纯等待谈判", "会削弱战场主动。"],
      ["扩大无准备攻势", "可能增加不必要消耗。"],
    ],
  },
];

const campaigns = {
  sidu: {
    name: "四渡赤水",
    stageTitle: "四渡赤水：毛泽东第一视角决策舱",
    image: "assets/siduchishui-panorama.png",
    alt: "四渡赤水沉浸式战役地图视窗",
    phases,
    timeline: [
      ["一渡", "摆脱围堵"],
      ["二渡", "回师遵义"],
      ["三渡", "调动敌军"],
      ["四渡", "跳出合围"],
    ],
    hotspots: [
      { label: "土城", x: 31, y: 56, point: "土城受挫后，红军迅速调整渡河方向。" },
      { label: "遵义", x: 48, y: 43, point: "二渡赤水后回师遵义，形成局部主动。" },
      { label: "赤水河", x: 66, y: 62, point: "虚实结合，牵动敌军判断。" },
    ],
    sources: ["战役地图：赤水河流域路线", "文献摘编：运动战与战略转移", "影视片段：渡河与指挥会议"],
    speakers: ["毛主席视角", "红军参谋", "敌军电台"],
    hudView: "视角：中央红军指挥所",
    hudLayer: "资料层：地图 / 文献 / 影视片段",
  },
  liaoshen: {
    name: "辽沈战役",
    stageTitle: "辽沈战役：东北战场动态推演舱",
    image: "assets/liaoshen-panorama.png",
    alt: "辽沈战役东北战场动态态势图",
    phases: liaoshenPhases,
    timeline: [
      ["锦州", "关闭大门"],
      ["塔山", "阻击援军"],
      ["长春", "围困争取"],
      ["辽西", "追歼收束"],
    ],
    hotspots: [
      { label: "锦州", x: 44, y: 64, point: "锦州是东北与华北联系的关门点，攻克后敌军退路被压缩。" },
      { label: "塔山", x: 37, y: 72, point: "塔山阻援保障锦州攻坚，是战役协同的关键支点。" },
      { label: "沈阳", x: 76, y: 58, point: "辽西会战后，沈阳方向成为收束东北战局的重要节点。" },
    ],
    sources: ["战役地图：东北战场与辽西走廊", "文献摘编：关门打狗与攻锦打援", "影视片段：锦州攻坚与塔山阻援"],
    speakers: ["战役指挥", "东北野战军参谋", "敌军电台"],
    hudView: "视角：东北野战军指挥所",
    hudLayer: "资料层：东北地图 / 战役文献 / 影视片段",
  },
  korea: {
    name: "抗美援朝战争",
    stageTitle: "抗美援朝战争：保家卫国动态推演舱",
    image: "assets/korea-panorama.png",
    alt: "抗美援朝战争朝鲜半岛动态态势图",
    phases: koreaPhases,
    timeline: [
      ["入朝", "云山交锋"],
      ["长津湖", "东线围歼"],
      ["上甘岭", "阵地坚守"],
      ["停战", "稳定战线"],
    ],
    hotspots: [
      { label: "鸭绿江", x: 37, y: 13, point: "志愿军跨过鸭绿江，进入抗美援朝作战阶段。" },
      { label: "长津湖", x: 63, y: 26, point: "长津湖战役体现严寒环境下的穿插分割与战斗意志。" },
      { label: "上甘岭", x: 66, y: 62, point: "上甘岭阵地战体现坑道坚守、火力协同与反击。" },
    ],
    sources: ["战役地图：朝鲜半岛与三八线", "文献摘编：保家卫国与阵地战", "影视片段：长津湖与上甘岭"],
    speakers: ["战略指挥", "志愿军参谋", "敌军电台"],
    hudView: "视角：中国人民志愿军指挥所",
    hudLayer: "资料层：半岛地图 / 战役文献 / 影视片段",
  },
};

const phaseCaption = document.querySelector("#phaseCaption");
const situation = document.querySelector("#situation");
const hudState = document.querySelector("#hudState");
const hudView = document.querySelector("#hudView");
const hudLayer = document.querySelector("#hudLayer");
const choiceList = document.querySelector("#choiceList");
const feedback = document.querySelector("#feedback");
const steps = document.querySelectorAll(".step");
const tabs = document.querySelectorAll(".tab[data-campaign]");
const campaignChapters = document.querySelectorAll(".chapter[data-campaign]");
const panorama = document.querySelector("#panorama");
const mapScene = document.querySelector("#mapScene");
const battleImage = document.querySelector("#battleImage");
const battleMap = document.querySelector("#battleMap");
const battleLegend = document.querySelector("#battleLegend");
const battleTicker = document.querySelector("#battleTicker");
const warEffects = document.querySelector("#warEffects");
const characterLayer = document.querySelector("#characterLayer");
const commanderLine = document.querySelector("#commanderLine");
const staffLine = document.querySelector("#staffLine");
const enemyLine = document.querySelector("#enemyLine");
const commanderSpeaker = document.querySelector("#commanderSpeaker");
const staffSpeaker = document.querySelector("#staffSpeaker");
const enemySpeaker = document.querySelector("#enemySpeaker");
const soundToggle = document.querySelector("#toggleSound");
const sourceButtons = document.querySelectorAll(".source");
const hotspotButtons = document.querySelectorAll(".hotspot");
const stageTitle = document.querySelector(".stage-toolbar h2");
const toast = document.querySelector("#toast");
const registerDialog = document.querySelector("#registerDialog");
const registerForm = document.querySelector("#registerForm");

let activePhase = 0;
let currentCampaignKey = "sidu";
let currentCampaign = campaigns[currentCampaignKey];
let soundEnabled = false;
let audioContext = null;
let ambienceTimer = null;
const viewState = { scale: 1, rotate: 0, x: 0, y: 0 };
let dragState = null;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function applyMapView() {
  mapScene.style.transform = `translate(${viewState.x}px, ${viewState.y}px) rotate(${viewState.rotate}deg) scale(${viewState.scale})`;
}

function resetMapView() {
  viewState.scale = 1;
  viewState.rotate = 0;
  viewState.x = 0;
  viewState.y = 0;
  applyMapView();
}

function adjustZoom(delta) {
  viewState.scale = Math.min(2.8, Math.max(0.72, Number((viewState.scale + delta).toFixed(2))));
  applyMapView();
}

function adjustRotate(delta) {
  viewState.rotate = (viewState.rotate + delta) % 360;
  applyMapView();
}

function updateCampaignChrome() {
  stageTitle.textContent = currentCampaign.stageTitle;
  battleImage.src = currentCampaign.image;
  battleImage.alt = currentCampaign.alt;
  commanderSpeaker.textContent = currentCampaign.speakers[0];
  staffSpeaker.textContent = currentCampaign.speakers[1];
  enemySpeaker.textContent = currentCampaign.speakers[2];
  hudView.textContent = currentCampaign.hudView;
  hudLayer.textContent = currentCampaign.hudLayer;

  steps.forEach((step, index) => {
    const item = currentCampaign.timeline[index];
    step.querySelector("b").textContent = item[0];
    step.querySelector("span").textContent = item[1];
  });

  hotspotButtons.forEach((button, index) => {
    const hotspot = currentCampaign.hotspots[index];
    button.textContent = hotspot.label;
    button.dataset.point = hotspot.point;
    button.style.left = `${hotspot.x}%`;
    button.style.top = `${hotspot.y}%`;
    button.classList.toggle("active", index === 0);
  });

  sourceButtons.forEach((button, index) => {
    button.textContent = currentCampaign.sources[index];
    button.classList.toggle("active", index === 0);
  });

  tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.campaign === currentCampaignKey));
  campaignChapters.forEach((chapter) => chapter.classList.toggle("active", chapter.dataset.campaign === currentCampaignKey));
}

function switchCampaign(key) {
  if (!campaigns[key]) {
    showToast("该模块仍在规划中，当前先开放四渡赤水与辽沈战役。");
    return;
  }
  currentCampaignKey = key;
  currentCampaign = campaigns[key];
  activePhase = 0;
  resetMapView();
  updateCampaignChrome();
  renderPhase(0);
  showToast(`已切换到${currentCampaign.name}动态推演`);
}

function svgElement(name, attributes = {}) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", name);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
}

function ensureAudio() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioContext.state === "suspended") audioContext.resume();
  return audioContext;
}

function playTone({ frequency = 180, duration = 0.18, type = "sine", gain = 0.05, slideTo = null }) {
  if (!soundEnabled) return;
  const ctx = ensureAudio();
  const osc = ctx.createOscillator();
  const amp = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(frequency, ctx.currentTime);
  if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, ctx.currentTime + duration);
  amp.gain.setValueAtTime(0.0001, ctx.currentTime);
  amp.gain.exponentialRampToValueAtTime(gain, ctx.currentTime + 0.02);
  amp.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
  osc.connect(amp);
  amp.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + duration + 0.04);
}

function playRadioBeep() {
  playTone({ frequency: 760, duration: 0.08, type: "square", gain: 0.035 });
  window.setTimeout(() => playTone({ frequency: 520, duration: 0.09, type: "square", gain: 0.03 }), 90);
}

function playExplosion() {
  playTone({ frequency: 95, duration: 0.48, type: "sawtooth", gain: 0.07, slideTo: 42 });
  window.setTimeout(() => playTone({ frequency: 160, duration: 0.16, type: "triangle", gain: 0.035, slideTo: 70 }), 120);
}

function playMarch() {
  [0, 150, 300].forEach((delay) => {
    window.setTimeout(() => playTone({ frequency: 132, duration: 0.08, type: "triangle", gain: 0.025 }), delay);
  });
}

function playPhaseSound() {
  if (!soundEnabled) return;
  playRadioBeep();
  window.setTimeout(playMarch, 140);
  window.setTimeout(playExplosion, 420);
}

function startAmbience() {
  if (ambienceTimer) window.clearInterval(ambienceTimer);
  ambienceTimer = window.setInterval(() => {
    if (!soundEnabled) return;
    playTone({ frequency: 55 + Math.random() * 18, duration: 0.34, type: "sine", gain: 0.018, slideTo: 42 });
  }, 2600);
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

function renderStepMarkers(steps, side) {
  steps.forEach((step, index) => {
    const group = svgElement("g", { class: `route-step ${side}-step` });
    group.appendChild(svgElement("circle", {
      cx: step.x,
      cy: step.y,
      r: "2.25",
      class: `step-marker ${side === "enemy" ? "enemy-step" : ""}`,
    }));
    const number = svgElement("text", { x: step.x, y: step.y + 0.05, class: "step-number" });
    number.textContent = `${index + 1}`;
    group.appendChild(number);
    const caption = svgElement("text", { x: step.x + 3, y: step.y + 4.1, class: "step-caption" });
    caption.textContent = `${side === "enemy" ? "蓝" : "红"}${index + 1} ${step.label}`;
    group.appendChild(caption);
    battleMap.appendChild(group);
  });
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

function renderCharacters(phase) {
  characterLayer.innerHTML = "";
  phase.characters.forEach((character) => {
    const card = document.createElement("div");
    card.className = `map-character ${character.role === "enemy" ? "enemy-card" : "commander-card"}`;
    card.style.left = `${character.x}%`;
    card.style.top = `${character.y}%`;
    const portraitClass = character.role === "enemy" ? "portrait-enemy" : "portrait-mao";
    card.innerHTML = `
      <div class="portrait ${portraitClass}" aria-hidden="true"></div>
      <div><strong>${character.title}</strong><span>${character.line}</span></div>
    `;
    characterLayer.appendChild(card);
  });
}

function renderDialogues(phase) {
  commanderLine.textContent = phase.dialogues.commander;
  staffLine.textContent = phase.dialogues.staff;
  enemyLine.textContent = phase.dialogues.enemy;
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
  renderStepMarkers(phase.redSteps, "red");
  renderStepMarkers(phase.enemySteps, "enemy");

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
  renderCharacters(phase);
  renderDialogues(phase);
}

function renderPhase(index) {
  activePhase = index;
  const phase = currentCampaign.phases[index];
  phaseCaption.textContent = phase.caption;
  situation.textContent = phase.situation;
  hudState.textContent = phase.hud;
  feedback.textContent = "选择一个行动方案，系统将从军事原则、风险与历史依据给出反馈。";
  renderBattleMap(phase);
  playPhaseSound();

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
      playRadioBeep();
      showToast(choiceIndex === 0 ? "决策符合历史推演重点" : "已记录风险判断，可用于课堂讨论");
    });
    choiceList.appendChild(button);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => switchCampaign(tab.dataset.campaign));
});

campaignChapters.forEach((chapter) => {
  chapter.addEventListener("click", () => switchCampaign(chapter.dataset.campaign));
});

steps.forEach((step) => {
  step.addEventListener("click", () => renderPhase(Number(step.dataset.phase)));
});

soundToggle.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  soundToggle.classList.toggle("sound-on", soundEnabled);
  soundToggle.textContent = soundEnabled ? "响" : "声";
  if (soundEnabled) {
    ensureAudio();
    playRadioBeep();
    startAmbience();
    showToast("战争音效已开启：电台、行军与炮火声将随推演播放");
  } else {
    if (ambienceTimer) window.clearInterval(ambienceTimer);
    ambienceTimer = null;
    showToast("战争音效已关闭");
  }
});

document.querySelector("#toggleVr").addEventListener("click", (event) => {
  panorama.classList.toggle("vr");
  event.currentTarget.classList.toggle("active");
  showToast(panorama.classList.contains("vr") ? "已开启裸眼3D视角模拟" : "已恢复标准地图视角");
});

document.querySelector("#togglePanorama").addEventListener("click", (event) => {
  panorama.classList.toggle("fullscreen");
  event.currentTarget.classList.toggle("active");
  showToast(panorama.classList.contains("fullscreen") ? "已进入全景大图模式，可拖拽、缩放、旋转" : "已退出全景大图模式");
});

document.querySelector("#zoomIn").addEventListener("click", () => adjustZoom(0.16));
document.querySelector("#zoomOut").addEventListener("click", () => adjustZoom(-0.16));
document.querySelector("#rotateLeft").addEventListener("click", () => adjustRotate(-12));
document.querySelector("#rotateRight").addEventListener("click", () => adjustRotate(12));
document.querySelector("#resetView").addEventListener("click", () => {
  resetMapView();
  showToast("地图视角已复位");
});

panorama.addEventListener("wheel", (event) => {
  event.preventDefault();
  adjustZoom(event.deltaY < 0 ? 0.08 : -0.08);
}, { passive: false });

panorama.addEventListener("pointerdown", (event) => {
  if (event.target.closest("button")) return;
  dragState = { x: event.clientX, y: event.clientY, startX: viewState.x, startY: viewState.y };
  panorama.classList.add("dragging");
  panorama.setPointerCapture(event.pointerId);
});

panorama.addEventListener("pointermove", (event) => {
  if (!dragState) return;
  viewState.x = dragState.startX + event.clientX - dragState.x;
  viewState.y = dragState.startY + event.clientY - dragState.y;
  applyMapView();
});

panorama.addEventListener("pointerup", (event) => {
  dragState = null;
  panorama.classList.remove("dragging");
  if (panorama.hasPointerCapture(event.pointerId)) panorama.releasePointerCapture(event.pointerId);
});

panorama.addEventListener("pointercancel", () => {
  dragState = null;
  panorama.classList.remove("dragging");
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
  playExplosion();
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

updateCampaignChrome();
renderPhase(activePhase);
