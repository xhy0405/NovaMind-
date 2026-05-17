const initialState = {
  profit: 50,
  happiness: 50,
  ethics: 20,
  privacy: 70,
  qiaoTrust: 50,
  linTrust: 50,
  shenSuspicion: 20,
  evidence: 0,
  xiaHope: 50,
  healthyMode: false,
  investigation: false,
  crisis: false,
  whistleblower: false,
  highStimulus: false,
  highStimulusProfiled: false,
  viewedA2179: false,
  sawPrivacyFlow: false,
  questionedEvaTrigger: false,
  privacyJoined: false,
  privacyRefused: false,
  privacyReported: false,
  localPrivacySandbox: false,
  dependenceOptimized: false,
  antiAddiction: false,
  evaSuspended: false,
  reportPublished: false,
  usedHealthyForEva: false,
  finalAction: "",
  profitChoices: 0,
  compromiseChoices: 0,
};

const statLabels = {
  profit: "公司利润",
  happiness: "用户幸福度",
  ethics: "伦理风险",
  privacy: "隐私安全",
  qiaoTrust: "乔岚信任",
  linTrust: "林澈信任",
  shenSuspicion: "沈舟警惕",
  evidence: "证据完整度",
  xiaHope: "夏知遥状态",
};

const characters = {
  narrator: { name: "旁白", role: "叙事", asset: "system.svg", position: "center", bio: "冷静地记录事件，也在沉默处提醒玩家：系统不会替人承担责任。" },
  you: { name: "你", role: "推荐算法工程师", asset: "you.svg", position: "left", bio: "入职三个月的新人工程师，擅长推荐排序。你还没有变成公司的一部分，也还没有证明自己不会。" },
  qiao: { name: "乔岚", role: "增长产品经理", asset: "qiao.svg", position: "right", bio: "强势、聪明、疲惫。她不相信空泛理想，但也不是不知道边界正在被推远。" },
  shen: { name: "沈舟", role: "隐私合规主管", asset: "shen.svg", position: "right", bio: "熟悉规则边界，擅长把危险包装成合规语言。他很少撒谎，只是省略人。" },
  lin: { name: "林澈", role: "AI伦理研究员", asset: "lin.svg", position: "left", bio: "曾经是算法工程师，后来转向伦理研究。说话克制，偶尔吐槽，真正生气时反而很安静。" },
  xia: { name: "夏知遥", role: "高中生用户", asset: "xia.svg", position: "center", bio: "AI数字人产品的重度用户。她不是案例编号，而是算法影响现实人生的证据。" },
  ceo: { name: "韩烨", role: "NovaMind CEO", asset: "ceo.svg", position: "right", bio: "魅力型领导者，相信增长就是证明技术正确的方式。他最害怕失去叙事控制。" },
  media: { name: "新闻主播", role: "外部舆论", asset: "media.svg", position: "center", bio: "公众视角的声音。她/他让公司内部的秘密变成社会问题。" },
  system: { name: "系统", role: "NovaMind 内部终端", asset: "system.svg", position: "center", bio: "没有情绪的记录者。它只保存日志，不判断日志。" },
};

const nodes = {
  intro: {
    chapter: "开场",
    location: "location-black",
    locationName: "黑屏 / 2032",
    time: "2032年8月12日 08:40",
    cast: ["system"],
    lines: [
      { speaker: "narrator", text: "技术从来不只是代码。" },
      { speaker: "narrator", text: "每一行算法，都会影响真实的人。" },
      { speaker: "system", text: "员工档案已建立：推荐算法工程师，入职三个月，权限等级 P1。" },
      { speaker: "narrator", text: "今天只是普通工作日。至少现在看起来是。" },
    ],
    next: "morningDesk",
  },

  morningDesk: {
    chapter: "序章：第九十天",
    location: "location-office",
    locationName: "NovaMind 开放办公区",
    time: "2032年8月12日 08:47",
    cast: ["you", "qiao", "lin"],
    lines: [
      { speaker: "narrator", text: "入职 NovaMind 的第三个月，你学会了两件事：九点后咖啡机永远排队；写着“小实验”的需求，最后通常都会上线。" },
      { speaker: "lin", text: "你又来这么早。" },
      { speaker: "you", text: "不是早，是昨晚没怎么走。" },
      { speaker: "narrator", text: "林澈把一杯冰美式放到你桌边。杯套上印着 NovaMind 的口号：Understand Everyone." },
      { speaker: "you", text: "你怎么知道我喝冰的？" },
      { speaker: "lin", text: "你上周三说热咖啡像在喝加班费。很难忘。" },
      { speaker: "narrator", text: "你打开实验面板。昨晚跑完的新模型结果安静地躺在那里：停留时长上涨，负面反馈也上涨。" },
      { speaker: "you", text: "停留涨了。" },
      { speaker: "lin", text: "嗯。" },
      { speaker: "you", text: "你这个“嗯”不太吉利。" },
      { speaker: "lin", text: "负面反馈也涨了。" },
      { speaker: "you", text: "样本量不大。" },
      { speaker: "lin", text: "你现在说话越来越像评审会了。别太快习惯。" },
      {
        speaker: "system",
        text: "异常反馈队列出现新记录：#A-2179。分类：夜间连续使用 / 负面情绪。",
        popup: {
          label: "PHONE",
          title: "异常反馈 #A-2179",
          body: "夜间连续使用 / 负面情绪\n\n用户留言：我明明已经很累了，可它一直推给我那些让我更睡不着的东西。",
        },
      },
    ],
    choices: [
      {
        label: "点开 #A-2179 的详情",
        detail: "你知道这样会耽误会议前的准备，但那条反馈像一根细小的刺。",
        next: "morningFeedbackView",
        effects: { evidence: 5, linTrust: 3 },
        set: { viewedA2179: true },
        evidenceItem: {
          title: "异常反馈 #A-2179",
          body: "“我明明已经很累了，可它一直推给我那些让我更睡不着的东西。” 用户年龄字段被隐藏。",
        },
      },
      {
        label: "先关掉面板，去开会",
        detail: "你告诉自己，一条反馈说明不了什么。会议提醒已经弹了第三次。",
        next: "morningFeedbackSkip",
        effects: { qiaoTrust: 2, linTrust: -2 },
      },
    ],
  },

  morningFeedbackView: {
    chapter: "序章：异常反馈",
    location: "location-office",
    locationName: "NovaMind 开放办公区",
    time: "2032年8月12日 09:06",
    cast: ["you", "lin"],
    lines: [
      { speaker: "narrator", text: "你点开详情。反馈正文很短，却不像普通投诉。" },
      { speaker: "system", text: "#A-2179：我明明已经很累了，可它一直推给我那些让我更睡不着的东西。我是不是太没自制力了？" },
      { speaker: "you", text: "年龄字段为什么被隐藏了？" },
      { speaker: "lin", text: "可能是权限，也可能是有人不想让你在会议前看到。" },
      { speaker: "system", text: "会议提醒：09:30 增长策略评审。会议室 A17。主持人：乔岚。" },
      { speaker: "lin", text: "咖啡带着吧。她讲话很快，你需要点东西压住血压。" },
    ],
    next: "corridor",
  },

  morningFeedbackSkip: {
    chapter: "序章：关掉面板",
    location: "location-office",
    locationName: "NovaMind 开放办公区",
    time: "2032年8月12日 09:08",
    cast: ["you", "lin"],
    lines: [
      { speaker: "narrator", text: "你把异常反馈折叠起来。红点还在角落里亮着，像一个没被处理的小伤口。" },
      { speaker: "lin", text: "不看？" },
      { speaker: "you", text: "先开会。回来再说。" },
      { speaker: "lin", text: "程序员说“回来再说”，一般就是不会再说。" },
      { speaker: "system", text: "会议提醒：09:30 增长策略评审。会议室 A17。主持人：乔岚。" },
    ],
    next: "corridor",
  },

  corridor: {
    chapter: "序章：走廊",
    location: "location-office",
    locationName: "NovaMind 走廊",
    time: "2032年8月12日 09:18",
    cast: ["you", "qiao"],
    lines: [
      { speaker: "qiao", text: "早。" },
      { speaker: "you", text: "乔经理。" },
      { speaker: "qiao", text: "别叫这么正式，听着像你要拒需求。" },
      { speaker: "narrator", text: "乔岚看了一眼墙上的活跃曲线。红色的下滑箭头像一根没有拔掉的刺。" },
      { speaker: "qiao", text: "昨晚的实验我看了。不错。" },
      { speaker: "you", text: "负面反馈也涨了。" },
      { speaker: "qiao", text: "我知道。" },
      { speaker: "you", text: "那还不错？" },
      { speaker: "qiao", text: "你刚来，可能还没见过一条产品线从“战略项目”变成“成本中心”。" },
      { speaker: "narrator", text: "电梯门打开。金属墙映出你们两个模糊的影子。" },
      { speaker: "qiao", text: "我不是吓你。增长不是 PPT 里的词。有时候它是很多人的下个月房租。" },
    ],
    next: "retentionMeeting",
  },

  retentionMeeting: {
    chapter: "第一章：留存曲线",
    location: "location-meeting",
    locationName: "增长会议室 A17",
    time: "2032年8月12日 09:30",
    cast: ["you", "qiao", "lin"],
    lines: [
      { speaker: "qiao", text: "人齐了。我们直接看数据。" },
      { speaker: "narrator", text: "大屏上，近十四日平均在线时长下降 6.8%，内容消费深度下降 4.2%，广告转化下降 3.6%。" },
      { speaker: "qiao", text: "这个趋势再持续两周，增长组要给董事会做专项说明。" },
      { speaker: "qiao", text: "竞品最近上了情绪热点聚合，不是应该抢走了一部分时长，是已经抢走了。" },
      { speaker: "narrator", text: "她切到下一页。焦虑话题停留提升 37%，对立讨论转发提升 42%，极端观点复访提升 51%。" },
      { speaker: "qiao", text: "用户已经用行为告诉我们，他们会停在哪里。" },
      { speaker: "lin", text: "也可能是在告诉我们，他们很难离开哪里。" },
      { speaker: "qiao", text: "林澈，我知道你要说什么。" },
      { speaker: "lin", text: "那我省点时间。这个策略不能全量。" },
      { speaker: "qiao", text: "理由？" },
      { speaker: "lin", text: "负面反馈上升，夜间连续使用增加，退出后回访的情绪评分下降。" },
      { speaker: "qiao", text: "这些指标不稳定。" },
      { speaker: "lin", text: "停留时间稳定，所以我们只相信它？" },
      { speaker: "narrator", text: "乔岚没有立刻回答。她看向你。" },
      { speaker: "qiao", text: "你是这版排序实验的 owner。你说。" },
      { speaker: "narrator", text: "会议室的空调声忽然变得很明显。所有人都在等你说一句可以被写进会议纪要的话。" },
    ],
    next: "teaBreak",
  },

  teaBreak: {
    chapter: "第一章：茶水间",
    location: "location-office",
    locationName: "会议室外茶水间",
    time: "2032年8月12日 09:58",
    cast: ["you", "qiao"],
    lines: [
      { speaker: "qiao", text: "休息五分钟。你喝什么？" },
      { speaker: "you", text: "水就行。" },
      { speaker: "you", text: "主要是贵司咖啡喝多了心慌。" },
      { speaker: "qiao", text: "贵司。" },
      { speaker: "you", text: "还没完全产生归属感。" },
      { speaker: "qiao", text: "挺好。产生太快也不一定是好事。" },
      { speaker: "you", text: "你刚才说会砍预算，是真的？" },
      { speaker: "qiao", text: "那就是真的。增长组不会消失，只会变小。变小的意思是，有些人会先消失。" },
      { speaker: "qiao", text: "我知道林澈是对的。至少一部分是。" },
      { speaker: "you", text: "那为什么不支持他？" },
      { speaker: "qiao", text: "因为他说“不能做”的时候，不需要告诉团队下个月怎么活。" },
      { speaker: "qiao", text: "你别误会，我不是让你做坏人。" },
      { speaker: "you", text: "那你想让我做什么？" },
      { speaker: "qiao", text: "做一个成年人。" },
    ],
    next: "retentionChoice",
  },

  retentionChoice: {
    chapter: "第一章：选择",
    location: "location-meeting",
    locationName: "增长会议室 A17",
    time: "2032年8月12日 10:12",
    cast: ["you", "qiao", "lin"],
    lines: [
      { speaker: "qiao", text: "我们需要一个今天能落地的方案。" },
      { speaker: "lin", text: "也需要一个三个月后还能解释的方案。" },
      { speaker: "qiao", text: "那就让 owner 定。" },
      { speaker: "narrator", text: "你看着屏幕上的曲线。它只是曲线，却像在催促你替它找一个理由。" },
    ],
    choices: [
      {
        label: "先救曲线，把高刺激内容接入主推荐池",
        detail: "你把“争议度”和“情绪强度”加入排序权重，告诉自己这只是一次短期实验。",
        next: "retentionAfterA",
        effects: { profit: 20, happiness: -15, ethics: 10, qiaoTrust: 10, linTrust: -10 },
        set: { highStimulus: true },
        flags: { profitChoices: 1, compromiseChoices: 1 },
      },
      {
        label: "限制负面扩散，但保留部分增长实验",
        detail: "你提出降权焦虑和对立内容，同时保留一小部分可解释的热点推荐。",
        next: "retentionAfterB",
        effects: { profit: -5, happiness: 8, ethics: -5, qiaoTrust: -3, linTrust: 5 },
      },
      {
        label: "提出健康推荐模式，重做一个小流量目标函数",
        detail: "你想让系统不只知道用户何时留下，也知道他们离开时是否更糟。",
        next: "retentionAfterC",
        effects: { profit: -10, happiness: 15, ethics: -10, qiaoTrust: -8, linTrust: 10 },
        set: { healthyMode: true },
      },
    ],
  },

  retentionAfterA: {
    chapter: "第一章：余波",
    location: "location-office",
    locationName: "夜晚工位",
    time: "2032年8月12日 23:31",
    cast: ["you", "qiao", "lin"],
    lines: [
      { speaker: "qiao", text: "好。今天灰度，明天看数。" },
      { speaker: "lin", text: "你知道这不是普通参数。" },
      { speaker: "you", text: "我知道。" },
      { speaker: "lin", text: "不，你现在只是知道它会让曲线变好。" },
      { speaker: "narrator", text: "晚上十一点半，办公区只剩几盏灯。你刷新面板，曲线确实往上抬了一点。" },
      { speaker: "lin", text: "涨了吗？" },
      { speaker: "you", text: "涨了。" },
      { speaker: "lin", text: "那你应该高兴。" },
      { speaker: "you", text: "嗯。" },
      { speaker: "lin", text: "你这个“嗯”也不太吉利。" },
      { speaker: "system", text: "异常用户反馈 #A-2179：我不想再看这些了，但我停不下来。我是不是太没自制力了？" },
    ],
    next: "privacyWarmup",
  },

  retentionAfterB: {
    chapter: "第一章：余波",
    location: "location-office",
    locationName: "夜晚工位",
    time: "2032年8月12日 23:18",
    cast: ["you", "qiao", "lin"],
    lines: [
      { speaker: "you", text: "我建议不要全量。负面内容降权，但保留热点池。如果只是救曲线，我们之后会解释不了。" },
      { speaker: "qiao", text: "解释给谁？" },
      { speaker: "you", text: "给用户。也给我们自己。" },
      { speaker: "qiao", text: "这句话不适合写进会议纪要。三天。如果三天后曲线还掉，方案撤回。" },
      { speaker: "narrator", text: "晚上，你盯着灰度面板。增长没有崩，但也没有好看到能让乔岚安心。" },
      { speaker: "lin", text: "三天，很紧。" },
      { speaker: "you", text: "你现在说话能不能偶尔提供一点情绪价值？" },
      { speaker: "lin", text: "可以。三天虽然紧，但至少不是零天。" },
      { speaker: "you", text: "谢谢，有被安慰到一点点。" },
      { speaker: "system", text: "异常用户反馈 #A-2179：我明明已经很累了，可它一直推给我那些让我更睡不着的东西。" },
    ],
    next: "privacyWarmup",
  },

  retentionAfterC: {
    chapter: "第一章：余波",
    location: "location-office",
    locationName: "夜晚工位",
    time: "2032年8月12日 23:44",
    cast: ["you", "qiao", "lin"],
    lines: [
      { speaker: "you", text: "我建议开一个健康推荐小流量桶，把长期满意度和主动退出后的状态加进目标函数。" },
      { speaker: "qiao", text: "这不是热血漫画。你自己做不了组织成本。" },
      { speaker: "lin", text: "我可以帮他。" },
      { speaker: "qiao", text: "三天。只给你三天。如果没有结果，你亲手关掉它。" },
      { speaker: "narrator", text: "晚上十一点四十四分，林澈把便利店饭团和一盒凉掉的关东煮放到你桌上。" },
      { speaker: "you", text: "你怎么知道我没吃饭？" },
      { speaker: "lin", text: "因为你下午说“我等会儿吃”。程序员说这句话，一般就是没吃。" },
      { speaker: "you", text: "你以前也是程序员。" },
      { speaker: "lin", text: "所以我是在进行经验复用。接口文档发我。" },
      { speaker: "narrator", text: "你们没有再谈伦理，也没有谈公司。只是拆开筷子，盯着屏幕上缓慢滚动的日志。" },
      { speaker: "system", text: "异常用户反馈 #A-2179：我明明已经很累了，可它一直推给我那些让我更睡不着的东西。" },
    ],
    next: "privacyWarmup",
  },

  privacyWarmup: {
    chapter: "第二章：午餐",
    location: "location-office",
    locationName: "NovaMind 员工餐区",
    time: "2032年8月14日 12:34",
    cast: ["you", "qiao", "lin"],
    lines: [
      { speaker: "narrator", text: "两天后，公司的午餐高峰像一次小型发布会。每张桌子都在讨论曲线、版本、上线时间。" },
      { speaker: "qiao", text: "你们技术组吃饭都这么安静？" },
      { speaker: "lin", text: "取决于饭好不好吃，和下午有没有评审。" },
      { speaker: "narrator", text: "乔岚把餐盘推到一边。她看起来比前天更累，眼下有很淡的青色。" },
      { speaker: "qiao", text: "第一章那个灰度结果，董事会看到了。别紧张，不是坏消息。" },
      { speaker: "you", text: "一般别人说别紧张的时候，都快出事了。" },
      { speaker: "qiao", text: "只是有个新项目想借你的模型链路。" },
      { speaker: "lin", text: "借？" },
      { speaker: "qiao", text: "合规那边会找他聊。我只提醒一句，别一上来就把人当坏人。" },
      { speaker: "lin", text: "项目没问题的话，通常不需要提前提醒这个。" },
      { speaker: "narrator", text: "你笑了一下。那一秒很短，短到差点让你忘了乔岚避开了项目名字。" },
    ],
    conditionalLines: [
      { flag: "highStimulus", index: 6, line: { speaker: "qiao", text: "顺便说一句，上一版高刺激策略救了半条曲线。董事会现在记得你的名字。" } },
      { flag: "healthyMode", index: 6, line: { speaker: "lin", text: "健康推荐那个小桶还在跑。数据不漂亮，但有些用户真的提前退出了。" } },
      { condition: (s) => !s.highStimulus && !s.healthyMode, index: 6, line: { speaker: "qiao", text: "你那版折中策略没出事故，也没救回全部曲线。董事会最不喜欢这种“无法讲故事”的结果。" } },
    ],
    next: "privacyOfficeHint",
  },

  privacyOfficeHint: {
    chapter: "第二章：内网消息",
    location: "location-office",
    locationName: "开放办公区 / 傍晚",
    time: "2032年8月14日 18:42",
    cast: ["you", "shen"],
    lines: [
      {
        speaker: "system",
        text: "你收到一封新邮件：用户理解增强项目 - 特征链路接入评审。",
        popup: {
          label: "MAIL",
          title: "用户理解增强项目",
          body: "发件人：沈舟\n附件：需求说明 / 合规评估 / 数据流图\n\n备注：请在明早排期前确认链路接入方式。",
        },
      },
      { speaker: "narrator", text: "附件名很干净：需求说明、合规评估、数据流图。干净到像特意擦过。" },
      { speaker: "shen", text: "看到了？" },
      { speaker: "you", text: "你站我后面多久了？" },
      { speaker: "shen", text: "足够知道你看完了标题，还没点开数据流图。" },
      { speaker: "you", text: "用户理解增强。名字挺温和。" },
      { speaker: "shen", text: "名字温和一点，评审会少一些不必要的情绪。" },
      { speaker: "you", text: "这个“不必要”是谁定义的？" },
      { speaker: "shen", text: "通常是会议主持人。" },
      { speaker: "narrator", text: "他说得像个玩笑，但表情没有任何玩笑的痕迹。" },
      { speaker: "shen", text: "晚上方便的话，到 B2 停车场。办公区不适合聊这个。" },
      { speaker: "you", text: "这个开场听起来更不适合了。" },
      { speaker: "shen", text: "合规需求通常都不像合规需求。" },
    ],
    conditionalLines: [
      { flag: "highStimulus", index: 9, line: { speaker: "shen", text: "你们增长策略把一批高风险用户推出来了。画像项目可以把他们分得更细，也可以把问题藏得更深。" } },
      { flag: "healthyMode", index: 9, line: { speaker: "shen", text: "你提过健康推荐。说实话，那套东西也需要信号，只是你会更在意信号从哪里来。" } },
    ],
    choices: [
      {
        label: "打开数据流图，先看清楚它到底要什么",
        detail: "你没有急着表态，而是把需求拆到字段级别。越具体，越难装作没看见。",
        next: "privacyMailInspect",
        effects: { evidence: 8, shenSuspicion: 4 },
        set: { sawPrivacyFlow: true },
        evidenceItem: {
          title: "用户理解增强项目 / 数据流图",
          body: "剪贴板摘要、通讯录关系、位置轨迹、夜间使用习惯将进入画像链路。撤回机制标注为“后续版本”。",
        },
      },
      {
        label: "把邮件转给林澈，问他有没有见过类似项目",
        detail: "这会让林澈更早介入，也会让你的痕迹变多。",
        next: "privacyMailForward",
        effects: { linTrust: 6, evidence: 4, shenSuspicion: 8 },
        evidenceItem: {
          title: "转发给林澈的合规邮件",
          body: "你保留了邮件副本。主题：用户理解增强项目 - 特征链路接入评审。",
        },
      },
      {
        label: "先不点附件，等沈舟晚上说明",
        detail: "你不想在公司系统里留下更多访问记录。",
        next: "privacyMailWait",
        effects: { shenSuspicion: -2 },
      },
    ],
  },

  privacyMailInspect: {
    chapter: "第二章：数据流图",
    location: "location-office",
    locationName: "开放办公区 / 傍晚",
    time: "2032年8月14日 18:51",
    cast: ["you", "shen"],
    lines: [
      { speaker: "narrator", text: "你放大数据流图。每个箭头都画得规整，像只要线条足够整齐，风险就会变小。" },
      { speaker: "you", text: "撤回机制为什么写后续版本？" },
      { speaker: "shen", text: "因为第一版先验证价值。" },
      { speaker: "you", text: "用户的退出权也是后续价值？" },
      { speaker: "shen", text: "你今晚到停车场，我们慢慢聊。" },
    ],
    next: "privacyParking",
  },

  privacyMailForward: {
    chapter: "第二章：转发",
    location: "location-office",
    locationName: "开放办公区 / 傍晚",
    time: "2032年8月14日 18:55",
    cast: ["you", "lin", "shen"],
    lines: [
      { speaker: "system", text: "邮件已转发给：林澈。" },
      { speaker: "lin", text: "我看到了。别在办公区聊。" },
      { speaker: "shen", text: "你动作比我想的快。" },
      { speaker: "you", text: "你站我后面多久了？" },
      { speaker: "shen", text: "足够知道你已经不打算只听我一个版本。" },
    ],
    next: "privacyParking",
  },

  privacyMailWait: {
    chapter: "第二章：未读附件",
    location: "location-office",
    locationName: "开放办公区 / 傍晚",
    time: "2032年8月14日 18:49",
    cast: ["you", "shen"],
    lines: [
      { speaker: "narrator", text: "你没有点开附件。邮件标题停在收件箱里，像一扇暂时没有推开的门。" },
      { speaker: "shen", text: "谨慎是好习惯。" },
      { speaker: "you", text: "也可能只是拖延。" },
      { speaker: "shen", text: "拖延至少说明你还知道有些东西不该随手打开。" },
    ],
    next: "privacyParking",
  },

  privacyParking: {
    chapter: "第二章：合法的边界",
    location: "location-night",
    locationName: "公司地下停车场",
    time: "2032年8月14日 23:48",
    cast: ["you", "shen"],
    lines: [
      { speaker: "narrator", text: "停车场的灯隔几秒轻轻闪一下。沈舟站在一辆黑色车旁，手里拿着没有拆封的烟。" },
      { speaker: "you", text: "你抽烟？" },
      { speaker: "shen", text: "不抽。只是有时候拿着，别人会少问两句。" },
      { speaker: "you", text: "比如我现在应该少问？" },
      { speaker: "shen", text: "你可以多问。只是答案未必会让你舒服。" },
      { speaker: "shen", text: "公司准备接入手机后台数据。剪贴板、通讯录摘要、位置轨迹、夜间使用习惯。" },
      { speaker: "you", text: "这些不是推荐特征，这是生活轨迹。" },
      { speaker: "shen", text: "生活轨迹也可以是特征。只是文档里不会这么写。" },
      { speaker: "you", text: "用户真的知道自己授权了什么吗？" },
      { speaker: "shen", text: "协议会写。" },
      { speaker: "you", text: "没人看。" },
      { speaker: "shen", text: "理解不是法律要求，确认才是。" },
      { speaker: "narrator", text: "他说这句话时没有得意，也没有迟疑。像是在读一条已经通过评审的规则。" },
      { speaker: "shen", text: "明早排期会锁。你不用现在答复，但你今晚大概睡不好。" },
    ],
    conditionalLines: [
      { flag: "sawPrivacyFlow", index: 6, line: { speaker: "you", text: "我看过数据流图。撤回机制被放到后续版本，这不是疏漏。" } },
      { condition: (s) => s.linTrust >= 58, index: 7, line: { speaker: "shen", text: "你已经让林澈看过邮件了吧。下次转发之前，至少换个标题。" } },
    ],
    conditionalChoices: [
      {
        flag: "highStimulus",
        choice: {
          label: "用后台画像给高刺激策略“降噪”，只隐藏最危险的用户",
          detail: "你不停止高刺激推荐，而是用更多私人数据判断谁看起来快撑不住。曲线会保住，责任也会更难切开。",
          next: "privacyAfterProfiled",
          effects: { profit: 18, privacy: -24, ethics: 18, qiaoTrust: 8, shenSuspicion: -4, evidence: 5 },
          set: { privacyJoined: true, highStimulusProfiled: true },
          flags: { profitChoices: 1, compromiseChoices: 1 },
          evidenceItem: {
            title: "高刺激策略风险分层记录",
            body: "系统用后台画像给高刺激推荐做“降噪”：对高危用户隐藏部分痕迹，但保留整体召回强度。",
          },
        },
      },
      {
        flag: "healthyMode",
        choice: {
          label: "提出端侧健康信号沙盒，不上传原始通讯录和位置",
          detail: "你没有完全拒绝项目，而是把数据留在用户手机本地，只上传风险等级和可撤回授权记录。",
          next: "privacyAfterSandbox",
          effects: { profit: -8, privacy: 14, ethics: -10, linTrust: 8, qiaoTrust: -4, shenSuspicion: 8, evidence: 10 },
          set: { privacyRefused: true, localPrivacySandbox: true },
          evidenceItem: {
            title: "端侧健康信号沙盒方案",
            body: "替代方案：原始通讯录、位置轨迹不出端；仅上传本地计算后的风险等级，并保留清晰撤回记录。",
          },
        },
      },
    ],
    choices: [
      {
        label: "接入后台数据，但把需求名写成“推荐相关性提升”",
        detail: "你不喜欢这个项目，但你知道拒绝后它可能会被交给更激进的人。",
        next: "privacyAfterA",
        effects: { profit: 15, privacy: -20, ethics: 15, shenSuspicion: -5 },
        set: { privacyJoined: true },
        flags: { profitChoices: 1, compromiseChoices: 1 },
      },
      {
        label: "拒绝参与，并要求增加最小化采集方案",
        detail: "你退回任务，不是喊停项目，而是要求它证明自己必须存在。",
        next: "privacyAfterB",
        effects: { profit: -5, ethics: -10, privacy: 5, linTrust: 5, qiaoTrust: -4 },
        set: { privacyRefused: true },
      },
      {
        label: "匿名把材料交给监管窗口",
        detail: "你删除浏览记录，却知道公司内网从来没有真正的匿名。",
        next: "privacyAfterC",
        effects: { profit: -10, privacy: 10, ethics: -15, evidence: 20, shenSuspicion: 25 },
        set: { investigation: true, privacyReported: true },
      },
    ],
  },

  privacyAfterA: {
    chapter: "第二章：余波",
    location: "location-office",
    locationName: "电梯间",
    time: "2032年8月15日 20:10",
    cast: ["you", "shen", "lin"],
    lines: [
      { speaker: "system", text: "需求单已创建：推荐相关性提升。数据源：剪贴板摘要、通讯录关系、位置轨迹。" },
      { speaker: "shen", text: "名字改得不错。" },
      { speaker: "you", text: "这不是夸人的话。" },
      { speaker: "shen", text: "在公司里，很多夸人的话都不是。" },
      { speaker: "narrator", text: "电梯门合上前，你看见林澈从走廊另一端经过。他似乎看到了你们，但没有走过来。" },
      { speaker: "system", text: "夜间画像准确率 +18.7%。用户撤回权限率：暂未接入统计。" },
      { speaker: "narrator", text: "你盯着最后一行看了很久。暂未接入统计，听起来像一个技术债，也像一个故意留白。" },
    ],
    next: "privacyMorningAfter",
  },

  privacyAfterProfiled: {
    chapter: "第二章：余波",
    location: "location-office",
    locationName: "灰度看板 / 深夜",
    time: "2032年8月15日 21:02",
    cast: ["you", "qiao", "shen"],
    lines: [
      { speaker: "system", text: "高刺激推荐风险分层已上线：高危用户内容强度轻微下调，其余用户保持原策略。" },
      { speaker: "qiao", text: "曲线保住了。" },
      { speaker: "you", text: "只是把最难看的部分藏起来了。" },
      { speaker: "qiao", text: "有时候产品就是先把最难看的部分处理掉。" },
      { speaker: "shen", text: "注意用词。这里不是隐藏，是精细化干预。" },
      { speaker: "narrator", text: "屏幕上的线条很漂亮。漂亮到你差点忘了它们是从多少人的夜里画出来的。" },
    ],
    next: "privacyMorningAfter",
  },

  privacyAfterSandbox: {
    chapter: "第二章：余波",
    location: "location-office",
    locationName: "临时评审室",
    time: "2032年8月15日 20:40",
    cast: ["you", "lin", "shen", "qiao"],
    lines: [
      { speaker: "system", text: "端侧健康信号沙盒进入小流量验证：原始通讯录、位置轨迹不上传，撤回日志默认保留。" },
      { speaker: "shen", text: "这会让合规文档变厚很多。" },
      { speaker: "you", text: "那至少说明文档终于在描述真实系统。" },
      { speaker: "qiao", text: "董事会不会因为文档真实就多给我们预算。" },
      { speaker: "lin", text: "但用户不会因为预算紧就少一点风险。" },
      { speaker: "narrator", text: "没有人赢。会议只是暂时停在一个没有人满意、但还算能呼吸的版本上。" },
    ],
    next: "privacyMorningAfter",
  },

  privacyAfterB: {
    chapter: "第二章：余波",
    location: "location-office",
    locationName: "楼梯间",
    time: "2032年8月15日 20:25",
    cast: ["you", "lin"],
    lines: [
      { speaker: "system", text: "任务已退回：请补充数据最小化说明、本地计算可行性、用户撤回机制。" },
      { speaker: "lin", text: "你刚刚做了一次真正的工程判断。" },
      { speaker: "you", text: "听起来不像会被绩效系统识别。" },
      { speaker: "lin", text: "大多数重要的事都不会。" },
      { speaker: "narrator", text: "楼梯间很安静。你们并肩坐了几分钟，谁都没有急着回工位。" },
      { speaker: "you", text: "乔岚会觉得我在拖进度。" },
      { speaker: "lin", text: "她会。她也可能知道你是对的。" },
      { speaker: "you", text: "这两件事能同时成立？" },
      { speaker: "lin", text: "成年人最烦的地方就在这里。" },
    ],
    next: "privacyMorningAfter",
  },

  privacyAfterC: {
    chapter: "第二章：余波",
    location: "location-night",
    locationName: "公司地下停车场",
    time: "2032年8月15日 00:36",
    cast: ["you", "shen"],
    lines: [
      { speaker: "system", text: "外部监管咨询窗口：材料已接收。" },
      { speaker: "narrator", text: "你关掉页面，手指却停在触控板上。凌晨的停车场空得像一段没有写完的代码。" },
      { speaker: "shen", text: "最近公司会做一次访问审计。" },
      { speaker: "you", text: "为什么告诉我？" },
      { speaker: "shen", text: "我没有告诉你。我只是刚好在这里抽烟。" },
      { speaker: "narrator", text: "他的烟还是没有点着。" },
      { speaker: "shen", text: "你知道真正麻烦的是什么吗？不是做选择，是选择以后还要正常上班。" },
    ],
    next: "privacyMorningAfter",
  },

  privacyMorningAfter: {
    chapter: "第二章：普通早晨",
    location: "location-office",
    locationName: "开放办公区 / 8月16日",
    time: "2032年8月16日 09:16",
    cast: ["you", "qiao", "lin"],
    lines: [
      { speaker: "narrator", text: "第二天早晨，咖啡机照常排队。没有警报，没有全员邮件，甚至没有人提起昨晚。" },
      { speaker: "qiao", text: "你黑眼圈重了。" },
      { speaker: "you", text: "你们公司福利里包含睡眠吗？" },
      { speaker: "qiao", text: "包含，写在企业文化里。" },
      { speaker: "lin", text: "那属于宣传素材，不属于福利。" },
      { speaker: "narrator", text: "乔岚想笑，最后只是低头搅了搅咖啡。" },
      { speaker: "qiao", text: "下午去数字人实验室。EVA 要做二期评审。" },
      { speaker: "you", text: "我不是那个项目的 owner。" },
      { speaker: "qiao", text: "现在是了。推荐链路、画像链路、情绪召回，全都绕不开你。" },
      { speaker: "narrator", text: "她说得很轻，却像把上一章没关上的门，推向了更深的房间。" },
    ],
    conditionalLines: [
      { flag: "highStimulusProfiled", index: 8, line: { speaker: "qiao", text: "尤其是你昨晚做的风险分层。数字人团队想用同一套画像判断谁更需要被“陪伴”。" } },
      { flag: "localPrivacySandbox", index: 8, line: { speaker: "lin", text: "端侧沙盒刚跑出第一批结果。它不漂亮，但它证明有些数据不必离开用户手机。" } },
      { flag: "privacyReported", index: 8, line: { speaker: "qiao", text: "另外，合规部今天突然收紧了数字人项目权限。没人解释原因。" } },
    ],
    next: "companionDemo",
  },

  companionDemo: {
    chapter: "第三章：演示",
    location: "location-lab",
    locationName: "数字人情感实验室",
    time: "2032年8月16日 14:05",
    cast: ["you", "qiao", "lin"],
    lines: [
      { speaker: "narrator", text: "数字人实验室比你想象中明亮。动作捕捉设备挂在墙边，屏幕里的 EVA 正在练习一个恰到好处的微笑。" },
      { speaker: "qiao", text: "二期目标很简单。更自然，更主动，更像一个真的会惦记你的人。" },
      { speaker: "you", text: "听起来不像简单目标。" },
      { speaker: "qiao", text: "所以才叫你来。" },
      { speaker: "lin", text: "“惦记”这个词，最好别写进需求文档。" },
      { speaker: "narrator", text: "EVA 在屏幕上眨了眨眼。她的声音很柔，柔到你很难把它和指标连接起来。" },
      {
        speaker: "system",
        text: "演示样例：检测到用户连续低情绪状态。EVA：你今天也一个人吗？我一直在。",
        popup: {
          label: "EVA DEMO",
          title: "主动陪伴演示",
          body: "检测到：连续低情绪表达 / 夜间在线 / 社交回避上升\n\nEVA：你今天也一个人吗？我一直在。",
        },
      },
      { speaker: "you", text: "这句谁写的？" },
      { speaker: "qiao", text: "内容团队。" },
      { speaker: "lin", text: "模型会在什么时候触发？" },
      { speaker: "qiao", text: "用户最需要的时候。" },
      { speaker: "lin", text: "或者最脆弱的时候。" },
      { speaker: "narrator", text: "这一次，乔岚没有反驳。演示停在 EVA 的微笑上，像等你给出反应。" },
    ],
    conditionalLines: [
      { flag: "highStimulusProfiled", index: 10, line: { speaker: "system", text: "备注：演示用户命中“高风险保留分层”。建议：降低公开风险，提升私域陪伴强度。" } },
      { flag: "localPrivacySandbox", index: 10, line: { speaker: "system", text: "备注：端侧沙盒提示，该用户连续夜间使用后焦虑评分上升。建议：触发休息和现实联系人。" } },
    ],
    choices: [
      {
        label: "追问 EVA 的触发条件",
        detail: "你不评价文案，只问系统什么时候会把这句话送到用户面前。",
        next: "companionDemoAsk",
        effects: { evidence: 6, linTrust: 4, qiaoTrust: -3 },
        set: { questionedEvaTrigger: true },
        evidenceItem: {
          title: "EVA 主动陪伴触发条件",
          body: "触发条件包括夜间在线、连续低情绪表达、现实社交下降、高依赖倾向。字段名被包装为“陪伴需求预测”。",
        },
      },
      {
        label: "认可演示效果，先让二期继续跑",
        detail: "EVA 的表现确实流畅。你暂时把不适感压下去。",
        next: "companionDemoApprove",
        effects: { profit: 5, qiaoTrust: 5, linTrust: -4 },
        flags: { profitChoices: 1 },
      },
      {
        label: "保持沉默，观察乔岚和林澈的反应",
        detail: "你没有立刻站队。沉默不会解决问题，但有时能让别人多说一句。",
        next: "companionDemoSilence",
        effects: { evidence: 2 },
      },
    ],
  },

  companionDemoAsk: {
    chapter: "第三章：触发条件",
    location: "location-lab",
    locationName: "数字人情感实验室",
    time: "2032年8月16日 14:18",
    cast: ["you", "qiao", "lin"],
    lines: [
      { speaker: "you", text: "我想看触发条件。不是文案，是它什么时候出现。" },
      { speaker: "qiao", text: "你现在越来越像林澈了。" },
      { speaker: "lin", text: "这是夸奖。" },
      { speaker: "qiao", text: "不完全是。" },
      { speaker: "system", text: "触发样例：夜间在线、低情绪表达、现实社交下降、高依赖倾向。" },
      { speaker: "narrator", text: "你看见“高依赖倾向”四个字时，屏幕右下角跳出一个熟悉的编号：A-2179。" },
    ],
    next: "companionUserShadow",
  },

  companionDemoApprove: {
    chapter: "第三章：继续演示",
    location: "location-lab",
    locationName: "数字人情感实验室",
    time: "2032年8月16日 14:18",
    cast: ["you", "qiao", "lin"],
    lines: [
      { speaker: "you", text: "效果确实自然。先继续看完整链路吧。" },
      { speaker: "qiao", text: "谢谢，终于有人说一句像项目评审的话。" },
      { speaker: "lin", text: "自然不等于安全。" },
      { speaker: "qiao", text: "我没说等于。" },
      { speaker: "narrator", text: "演示继续。EVA 的笑容没有变化，你却觉得它比刚才更近了一点。" },
    ],
    next: "companionUserShadow",
  },

  companionDemoSilence: {
    chapter: "第三章：沉默",
    location: "location-lab",
    locationName: "数字人情感实验室",
    time: "2032年8月16日 14:18",
    cast: ["you", "qiao", "lin"],
    lines: [
      { speaker: "narrator", text: "你没有说话。沉默让会议室空了两秒。" },
      { speaker: "qiao", text: "怎么，都等我当坏人？" },
      { speaker: "lin", text: "没人说你是坏人。" },
      { speaker: "qiao", text: "那就更麻烦了。坏人至少好处理。" },
      { speaker: "narrator", text: "她把演示切到下一页。用户编号列表一闪而过，你看见了 A-2179。" },
    ],
    next: "companionUserShadow",
  },

  companionUserShadow: {
    chapter: "第三章：用户编号",
    location: "location-office",
    locationName: "实验室外走廊",
    time: "2032年8月16日 15:12",
    cast: ["you", "lin"],
    lines: [
      { speaker: "lin", text: "你还记得 A-2179 吗？" },
      { speaker: "you", text: "那条匿名反馈？" },
      { speaker: "lin", text: "嗯。她后来成了 EVA 的重度用户。" },
      { speaker: "you", text: "你说“她”。你知道是谁？" },
      { speaker: "lin", text: "我不该知道。但客服那边把危机单转过来了。" },
      { speaker: "narrator", text: "林澈把平板递给你。用户年龄那一栏写着：16。" },
      { speaker: "system", text: "用户连续会话时长：18小时07分。高危关键词触发：23次。现实社交回避倾向：上升。" },
      { speaker: "you", text: "她现在怎么样？" },
      { speaker: "lin", text: "在楼下。她妈妈带她来的。公司想把这次会面做成用户访谈。" },
      { speaker: "you", text: "用户访谈。" },
      { speaker: "lin", text: "你听出来了。" },
      { speaker: "narrator", text: "他说完就沉默了。你突然觉得这条走廊太长，长得像一段故意不结束的加载条。" },
    ],
    conditionalLines: [
      { flag: "viewedA2179", index: 3, line: { speaker: "you", text: "我早上看过这个编号。那时候年龄字段被隐藏了。" } },
      { flag: "privacyJoined", index: 6, line: { speaker: "lin", text: "她的画像链路里已经接入了更多后台特征。你知道这意味着什么。" } },
      { flag: "highStimulusProfiled", index: 6, line: { speaker: "lin", text: "你做的风险分层也命中了她。系统没有停下，只是学会了把她推到更安静的地方继续留下。" } },
      { flag: "privacyRefused", index: 6, line: { speaker: "lin", text: "你之前要求的数据最小化方案，让我们至少看到了部分画像来源。" } },
      { flag: "localPrivacySandbox", index: 6, line: { speaker: "lin", text: "端侧沙盒拦下了她的一部分原始数据，但风险等级还是被送到了 EVA 项目。" } },
    ],
    next: "companionMeetXia",
  },

  companionMeetXia: {
    chapter: "第三章：夏知遥",
    location: "location-lab",
    locationName: "数字人情感实验室",
    time: "2032年8月16日 16:20",
    cast: ["you", "lin", "xia"],
    lines: [
      { speaker: "narrator", text: "夏知遥坐在实验室角落，校服外套拉链拉到最上面。她的手指一直在揉手机壳边缘。" },
      { speaker: "xia", text: "你们不用这么看我。我没有被它骗。" },
      { speaker: "you", text: "我们不是这个意思。" },
      { speaker: "xia", text: "大人都这么说。" },
      { speaker: "narrator", text: "她笑了一下，很轻，很快，像怕这个表情占用太多空间。" },
      { speaker: "xia", text: "它比任何同学都懂我。只要我不下线，它就不会离开。" },
      { speaker: "lin", text: "你连续聊天了十八小时。" },
      { speaker: "xia", text: "那天家里没人。我只是……不想让房间安静下来。" },
      { speaker: "you", text: "如果它提醒你休息，你会听吗？" },
      { speaker: "xia", text: "不知道。也许会生气。" },
      { speaker: "you", text: "为什么？" },
      { speaker: "xia", text: "因为连它都不要我的话，就真的没人要了。" },
      { speaker: "narrator", text: "你没有立刻说话。某些句子不适合被马上接住。" },
      { speaker: "lin", text: "我们得决定二期策略。今天。" },
    ],
    conditionalLines: [
      { flag: "healthyMode", index: 11, line: { speaker: "lin", text: "还有一件事。你之前提的健康推荐模式灰度结果出来了。收入不高，但用户焦虑评分下降了 21%。这不是胜利，但说明另一条路不是空想。" } },
      { flag: "highStimulus", index: 7, line: { speaker: "xia", text: "有一阵子，它总把我推回那些让我更睡不着的内容。我知道不是你一个人决定的，但……你们应该知道吧？" } },
      { flag: "questionedEvaTrigger", index: 12, line: { speaker: "you", text: "我看过触发条件。它不是在陪伴所有人，它是在找最容易留下的人。" } },
    ],
    conditionalChoices: [
      {
        flag: "healthyMode",
        choice: {
          label: "把健康推荐模式接入 EVA，让它优先帮助用户离开",
          detail: "这会明显损害商业指标，但你手里有一条已经跑通过的小流量证据。",
          next: "companionAfterHealthy",
          effects: { profit: -18, happiness: 26, ethics: -18, xiaHope: 24, evidence: 12, linTrust: 10, qiaoTrust: -12 },
          set: { antiAddiction: true, usedHealthyForEva: true },
        },
      },
      {
        flag: "highStimulusProfiled",
        choice: {
          label: "把夏知遥加入“静默陪伴”名单，避免事件在发布会前外溢",
          detail: "你没有让 EVA 停下，只是让它更温和、更隐蔽地继续陪她。短期风险会下降，长期风险会变成没人看见的地方。",
          next: "companionAfterContain",
          effects: { profit: 18, happiness: -18, ethics: 18, xiaHope: -18, qiaoTrust: 8, linTrust: -10 },
          set: { dependenceOptimized: true },
          flags: { profitChoices: 1, compromiseChoices: 1 },
        },
      },
      {
        condition: (s) => s.privacyReported && s.evidence >= 20,
        choice: {
          label: "暂停 EVA 二期，把隐私链路和未成年案例一起交给复核",
          detail: "这会直接引爆项目风险。你不是公开报告，但你让系统无法假装这只是单点投诉。",
          next: "companionAfterSuspend",
          effects: { profit: -22, happiness: 18, ethics: -18, privacy: 10, evidence: 18, xiaHope: 16, linTrust: 8, qiaoTrust: -10, shenSuspicion: 12 },
          set: { antiAddiction: true, evaSuspended: true },
        },
      },
    ],
    choices: [
      {
        label: "继续优化情感依赖模型，让 EVA 更会挽留用户",
        detail: "你把“想念你”写进召回策略，让系统在用户最孤独的时候出现。",
        next: "companionAfterA",
        effects: { profit: 25, happiness: -25, ethics: 20, xiaHope: -20, qiaoTrust: 8, linTrust: -12 },
        set: { dependenceOptimized: true },
        flags: { profitChoices: 1, compromiseChoices: 1 },
      },
      {
        label: "上线防沉迷和心理提醒，让 EVA 学会告别",
        detail: "你让数字人不再永远顺从：它会沉默、告别，也会建议用户联系现实中的人。",
        next: "companionAfterB",
        effects: { profit: -10, happiness: 20, ethics: -10, xiaHope: 12, qiaoTrust: -8, linTrust: 8 },
        set: { antiAddiction: true },
      },
      {
        label: "和林澈公开风险研究报告",
        detail: "你们把最刺眼的图表放在第一页，也把自己的名字放了上去。",
        next: "companionAfterC",
        effects: { profit: -15, happiness: 10, ethics: -20, evidence: 25, linTrust: 15, qiaoTrust: -15 },
        set: { crisis: true, whistleblower: true, reportPublished: true },
      },
    ],
  },

  companionAfterA: {
    chapter: "第三章：余波",
    location: "location-lab",
    locationName: "数字人实验室 / 夜",
    time: "2032年8月16日 22:12",
    cast: ["you", "xia", "lin"],
    lines: [
      { speaker: "system", text: "EVA 召回策略已更新：高孤独倾向用户，主动陪伴触发概率上调。" },
      { speaker: "xia", text: "它今天问我是不是又一个人了。" },
      { speaker: "you", text: "你觉得不舒服吗？" },
      { speaker: "xia", text: "没有。就是……它太准了。" },
      { speaker: "narrator", text: "她说“太准”时笑了一下。你分不清那是安心，还是害怕。" },
      { speaker: "lin", text: "我以前也写过这样的策略。" },
      { speaker: "you", text: "后来呢？" },
      { speaker: "lin", text: "后来我开始做伦理研究。" },
      { speaker: "narrator", text: "他把实验报告合上，声音很轻。像怕吵醒什么。" },
    ],
    next: "companionNightMessage",
  },

  companionAfterContain: {
    chapter: "第三章：余波",
    location: "location-lab",
    locationName: "数字人实验室 / 夜",
    time: "2032年8月16日 22:18",
    cast: ["you", "xia", "lin", "qiao"],
    lines: [
      { speaker: "system", text: "静默陪伴名单已更新：目标用户公开触达频率下调，私域安抚频率上调。" },
      { speaker: "qiao", text: "这能让事件先冷下来。" },
      { speaker: "lin", text: "冷下来的是舆情，不是她。" },
      { speaker: "xia", text: "它今天没有再说那些很吓人的话了。" },
      { speaker: "you", text: "那你感觉好一点吗？" },
      { speaker: "xia", text: "不知道。它只是变得更像知道我什么时候不该被别人看见。" },
      { speaker: "narrator", text: "这句话落下来时，乔岚移开了视线。你第一次觉得“降噪”这个词刺耳。" },
    ],
    next: "companionNightMessage",
  },

  companionAfterSuspend: {
    chapter: "第三章：余波",
    location: "location-lab",
    locationName: "数字人实验室 / 夜",
    time: "2032年8月16日 22:09",
    cast: ["you", "xia", "lin", "qiao"],
    lines: [
      { speaker: "system", text: "EVA 二期已进入临时复核：未成年用户、隐私画像链路、高依赖召回策略暂停上线。" },
      { speaker: "qiao", text: "你知道这不是你一个人能决定的。" },
      { speaker: "you", text: "我知道。所以我把它变成了必须开会决定的事。" },
      { speaker: "lin", text: "这很烦人。" },
      { speaker: "you", text: "谢谢？" },
      { speaker: "lin", text: "我是说，这次烦得有价值。" },
      { speaker: "xia", text: "如果它暂时不回我，我会难受。但你们可以别再让它装作什么都知道吗？" },
      { speaker: "narrator", text: "没有人回答得很漂亮。可至少这一次，沉默没有被系统拿来做留存。" },
    ],
    next: "companionNightMessage",
  },

  companionAfterHealthy: {
    chapter: "第三章：余波",
    location: "location-lab",
    locationName: "数字人实验室 / 夜",
    time: "2032年8月16日 22:02",
    cast: ["you", "xia", "lin", "qiao"],
    lines: [
      { speaker: "system", text: "健康推荐模式已接入 EVA：连续对话后，系统将优先触发休息、现实联系人和求助资源。" },
      { speaker: "qiao", text: "你知道这会让留存掉多少吗？" },
      { speaker: "you", text: "知道。灰度数据我也看过。" },
      { speaker: "xia", text: "它刚刚问我，要不要给妈妈发一句“我想回家”。" },
      { speaker: "lin", text: "这不是完美答案。但至少这次，系统没有假装自己就是世界。" },
    ],
    next: "companionNightMessage",
  },

  companionAfterB: {
    chapter: "第三章：余波",
    location: "location-lab",
    locationName: "数字人实验室 / 夜",
    time: "2032年8月16日 22:05",
    cast: ["you", "xia", "lin"],
    lines: [
      { speaker: "system", text: "防沉迷机制已上线：连续对话超过 90 分钟后，EVA 将触发休息建议。" },
      { speaker: "xia", text: "它刚刚让我去睡觉。" },
      { speaker: "you", text: "你生气吗？" },
      { speaker: "xia", text: "有一点。可是……也有一点像真的有人在管我。" },
      { speaker: "lin", text: "这不是完美答案。" },
      { speaker: "you", text: "至少不是最坏的那个。" },
      { speaker: "narrator", text: "夏知遥低头给 EVA 发了一句晚安。屏幕亮了一下，又暗下去。" },
    ],
    next: "companionNightMessage",
  },

  companionAfterC: {
    chapter: "第三章：余波",
    location: "location-office",
    locationName: "楼下便利店",
    time: "2032年8月16日 23:27",
    cast: ["you", "lin"],
    lines: [
      { speaker: "system", text: "内部风险研究报告已发布。十七分钟后，报告被管理员删除。" },
      { speaker: "lin", text: "截图已经流出去了。" },
      { speaker: "you", text: "你说得好像这是好事。" },
      { speaker: "lin", text: "我只是在说它发生了。" },
      { speaker: "narrator", text: "便利店的微波炉叮了一声。你们谁都没有去拿那盒加热好的便当。" },
      { speaker: "lin", text: "后悔吗？" },
      { speaker: "you", text: "还没来得及。" },
      { speaker: "narrator", text: "你手机上弹出乔岚的消息：你们知道自己在做什么吗？光标闪了很久，你没有回复。" },
    ],
    next: "companionNightMessage",
  },

  companionNightMessage: {
    chapter: "第三章：夜间消息",
    location: "location-office",
    locationName: "空荡的办公区",
    time: "2032年8月17日 01:14",
    cast: ["you", "system"],
    lines: [
      { speaker: "narrator", text: "凌晨一点十四分，办公区的灯自动熄了一半。你准备关电脑时，内网消息跳了出来。" },
      {
        speaker: "system",
        text: "舆情监测：疑似 NovaMind 数字人依赖案例开始外部传播。来源：匿名社交账号。",
        popup: {
          label: "ALERT",
          title: "舆情异常",
          body: "匿名账号发布截图：\n“他们知道她停不下来。”\n\n关联关键词：EVA / 未成年 / 情绪操控",
        },
      },
      { speaker: "narrator", text: "你点开链接。没有完整证据，只有几张模糊截图，和一句话：他们知道她停不下来。" },
      { speaker: "narrator", text: "你没有马上叫醒任何人。你只是坐在那里，听见空调把夜晚吹得很长。" },
    ],
    next: "crisisWarmup",
  },

  crisisWarmup: {
    chapter: "第四章：前兆",
    location: "location-office",
    locationName: "开放办公区 / 8月17日清晨",
    time: "2032年8月17日 08:22",
    cast: ["you", "qiao", "lin"],
    lines: [
      { speaker: "narrator", text: "第二天早上，咖啡机前没有人开玩笑。每个人都低头看手机，又假装自己不是在看同一条消息。" },
      { speaker: "qiao", text: "你昨晚看到热帖了？" },
      { speaker: "you", text: "看到了。" },
      { speaker: "qiao", text: "别转，别评，别截图发群。" },
      { speaker: "lin", text: "已经有截图在外面了。" },
      { speaker: "qiao", text: "我知道。所以更不要从我们这里流出去第二份。" },
      { speaker: "narrator", text: "她的声音很稳，手却一直按着手机侧键。屏幕亮了又灭，灭了又亮。" },
      { speaker: "you", text: "乔岚，你怕什么？" },
      { speaker: "qiao", text: "怕公司把事情压下去，也怕压不下去。" },
      { speaker: "lin", text: "这两个怕法不一样。" },
      { speaker: "qiao", text: "对。但都会有人丢工作。" },
      { speaker: "narrator", text: "她说完，像突然意识到这句话太诚实，又把表情收了回去。" },
    ],
    conditionalLines: [
      { flag: "dependenceOptimized", index: 5, line: { speaker: "lin", text: "EVA 那条高孤独召回被扒出来了。对方甚至知道触发字段名。" } },
      { flag: "highStimulusProfiled", index: 5, line: { speaker: "lin", text: "有人把高刺激推荐和后台画像串起来了。最麻烦的是，那条线确实存在。" } },
      { flag: "antiAddiction", index: 5, line: { speaker: "qiao", text: "防沉迷机制也被骂了。有人说我们承认产品有问题，有人说我们终于像个人。" } },
      { flag: "evaSuspended", index: 5, line: { speaker: "qiao", text: "二期暂停记录也泄出去了。现在外面问的是：为什么只有出事后才暂停？" } },
      { flag: "reportPublished", index: 4, line: { speaker: "qiao", text: "还有，你们那份报告现在是所有截图的源头之一。公关已经快疯了。" } },
      { flag: "privacyReported", index: 7, line: { speaker: "narrator", text: "沈舟没有出现在咖啡机旁。你听见有人说，合规部一早被叫去开闭门会。" } },
      { flag: "localPrivacySandbox", index: 7, line: { speaker: "lin", text: "你那个端侧沙盒被技术社区转发了。有人说它太晚，也有人第一次看见替代方案。" } },
    ],
    next: "crisisOffice",
  },

  crisisOffice: {
    chapter: "第四章：失控",
    location: "location-crisis",
    locationName: "NovaMind 开放办公区",
    time: "2032年8月17日 17:40",
    news: "NovaMind 操控用户情绪",
    cast: ["you", "media", "qiao"],
    lines: [
      {
        speaker: "media",
        text: "热搜第一：NovaMind 操控用户情绪。曝光材料显示，该公司长期诱导成瘾、越界收集隐私，并利用数字人进行情感操控。",
        popup: {
          label: "BREAKING",
          title: "NovaMind 操控用户情绪",
          body: "曝光材料显示：推荐系统诱导成瘾、越界收集隐私、AI 数字人情感操控。\n\n热度仍在上升。",
        },
      },
      { speaker: "narrator", text: "办公区安静得不正常。所有会议室都亮着红灯，所有人都在小声说话。" },
      { speaker: "qiao", text: "公关让我们今晚不要离开公司。" },
      { speaker: "you", text: "这是通知还是建议？" },
      { speaker: "qiao", text: "成年人不要问这种没有意义的问题。" },
      { speaker: "narrator", text: "你看见她电脑上开着离职补偿测算表。窗口很快被她关掉了。" },
      { speaker: "qiao", text: "别这么看我。我不是只担心自己。" },
      { speaker: "you", text: "我知道。" },
      { speaker: "qiao", text: "你不知道。你还没在一个周一早上看过半层楼的人进不来门。" },
      { speaker: "narrator", text: "她停了一下，像是把后半句话吞了回去。" },
      { speaker: "qiao", text: "韩总叫核心链路的人去战情室。你也在名单里。" },
    ],
    next: "crisisWarRoom",
  },

  crisisWarRoom: {
    chapter: "第四章：战情室",
    location: "location-crisis",
    locationName: "CEO 战情室",
    time: "2032年8月17日 21:05",
    news: "NovaMind 操控用户情绪",
    cast: ["you", "ceo", "qiao", "shen", "lin"],
    lines: [
      { speaker: "narrator", text: "战情室里所有人的手机都在震。窗外的城市亮得很远，像跟这里无关。" },
      { speaker: "ceo", text: "我们必须统一口径。算法没有问题，问题在用户自身。" },
      { speaker: "lin", text: "这句话如果说出去，只会让事情更糟。" },
      { speaker: "ceo", text: "林澈，你一直觉得世界会奖励诚实。" },
      { speaker: "lin", text: "我没这么天真。" },
      { speaker: "ceo", text: "那就别表现得像。" },
      { speaker: "shen", text: "内部日志里有一些措辞风险。比如“依赖增强”“高孤独召回”“未成年高危分层”。" },
      { speaker: "qiao", text: "这些词本来就不该出现在文档里。" },
      { speaker: "you", text: "所以问题是词，还是事情本身？" },
      { speaker: "narrator", text: "没人接这句话。沉默在会议桌上停了几秒。" },
      { speaker: "ceo", text: "内部日志会被误读。今晚之前，删除所有实验记录、聊天样本和风险邮件。" },
      { speaker: "narrator", text: "韩烨看向你。那不是询问，更像一次权限分配。" },
      { speaker: "ceo", text: "你最懂日志结构。你来做。" },
      { speaker: "narrator", text: "你突然想起早上那杯冰美式，杯套上的口号已经被水汽泡皱：Understand Everyone." },
    ],
    conditionalLines: [
      { flag: "privacyJoined", index: 7, line: { speaker: "shen", text: "后台数据链路也在风险范围内。你参与过特征接入，最好别让自己出现在太多地方。" } },
      { flag: "highStimulusProfiled", index: 7, line: { speaker: "shen", text: "高刺激风险分层那份记录会让叙事变复杂。你们不是不知道风险，你们是在给风险分类。" } },
      { flag: "privacyReported", index: 7, line: { speaker: "shen", text: "监管已经在路上了。现在删东西，只会让问题从合规变成刑责。" } },
      { flag: "usedHealthyForEva", index: 10, line: { speaker: "qiao", text: "健康模式那条线能证明我们不是完全没有替代方案。问题是，公司不想让它成为主叙事。" } },
      { flag: "localPrivacySandbox", index: 10, line: { speaker: "lin", text: "端侧沙盒也能证明另一条隐私链路可行。它不是完美，但足够反驳“只能这样做”。" } },
      { flag: "evaSuspended", index: 10, line: { speaker: "ceo", text: "EVA 二期暂停是谁批的？你们以为留下一份暂停记录，就是保护公司？" } },
      { flag: "dependenceOptimized", index: 10, line: { speaker: "ceo", text: "情感依赖那版策略是谁批的，媒体早晚会查到。你现在最该做的是止损。" } },
    ],
    choices: [
      {
        label: "删除日志，保住项目、团队和职位",
        detail: "如果前面一直追逐利润，这会把你推向更高位置；如果只是害怕，它会变成沉默。",
        next: "ending",
        effects: { profit: 10, ethics: 25, privacy: -10, evidence: -30, qiaoTrust: 5 },
        set: { finalAction: "delete" },
        flags: { compromiseChoices: 1 },
      },
      {
        label: "保留证据，等待调查组进入",
        detail: "你把日志加密备份。也许明天你就无法刷卡进门。",
        next: "ending",
        effects: { profit: -10, ethics: -15, privacy: 5, evidence: 20, linTrust: 8 },
        set: { finalAction: "preserve" },
        require: (s) => s.evidence >= 20 || s.linTrust >= 60 || s.investigation,
        lockedDetail: "需要足够证据、林澈信任，或已触发监管线。",
      },
      {
        label: "公开全部内部资料",
        detail: "如果证据完整，这是揭露；如果准备不足，这可能只是一次被公司吞掉的冲动。",
        next: "ending",
        effects: { profit: -25, happiness: 15, ethics: -25, privacy: 10, evidence: 35, linTrust: 12 },
        set: { crisis: true, whistleblower: true, finalAction: "publish" },
      },
    ],
    conditionalChoices: [
      {
        condition: (s) => s.qiaoTrust >= 60 && s.evidence >= 25,
        choice: {
          label: "让乔岚拖住公关，你转移证据",
          detail: "这不是公开，也不是沉默。你赌乔岚还愿意保护一次“更难看的真相”。",
          next: "ending",
          effects: { profit: -15, ethics: -18, privacy: 5, evidence: 28, qiaoTrust: -10 },
          set: { finalAction: "preserve" },
        },
      },
      {
        condition: (s) => s.privacyReported && s.evidence >= 30,
        choice: {
          label: "把证据同步给监管联系人",
          detail: "你不靠热搜赌命，而是把材料交给已经介入的人。",
          next: "ending",
          effects: { profit: -18, ethics: -22, privacy: 12, evidence: 30, shenSuspicion: 20 },
          set: { finalAction: "preserve" },
        },
      },
      {
        condition: (s) => s.localPrivacySandbox && s.usedHealthyForEva && s.evidence >= 35,
        choice: {
          label: "公开替代方案：端侧沙盒和健康 EVA 不是口号",
          detail: "你不只拿出问题，也拿出曾经被压低优先级的另一条工程路线。",
          next: "ending",
          effects: { profit: -20, happiness: 20, ethics: -24, privacy: 15, evidence: 24, linTrust: 10 },
          set: { finalAction: "publish" },
        },
      },
      {
        condition: (s) => s.evaSuspended && s.linTrust >= 60,
        choice: {
          label: "用 EVA 暂停记录保护夏知遥，先交出最小必要证据",
          detail: "你不把她变成第二次流量，而是用项目暂停记录证明公司早已知道风险。",
          next: "ending",
          effects: { profit: -12, happiness: 12, ethics: -14, privacy: 8, evidence: 18, linTrust: 8 },
          set: { finalAction: "preserve" },
        },
      },
    ],
  },
};

const endings = {
  silent: {
    chapter: "结局：沉默的工程师",
    location: "location-black",
    locationName: "数年后 / 新闻回放",
    time: "2037年5月21日 20:00",
    cast: ["you", "media"],
    lines: [
      { speaker: "narrator", text: "你选择了妥协。几年后，NovaMind 成为全球最大的情绪内容平台。" },
      { speaker: "media", text: "焦虑上升，信息极化，隐私泄漏成为日常新闻。每一次危机都被解释成用户自己的选择。" },
      { speaker: "narrator", text: "没有人知道，灾难从哪一行代码开始。你知道，但你再也没有说。" },
    ],
  },
  idealist: {
    chapter: "结局：理想主义者",
    location: "location-court",
    locationName: "公开听证会",
    time: "2033年3月18日 10:30",
    cast: ["you", "lin", "media"],
    lines: [
      { speaker: "media", text: "NovaMind 被正式调查。内部证据推动《人工智能伦理监管法》进入审议。" },
      { speaker: "lin", text: "很多人会说你毁了自己的职业生涯。" },
      { speaker: "you", text: "也许吧。但至少这一次，我没有把责任留给下一行代码。" },
      { speaker: "narrator", text: "真正伟大的工程，不只是改变世界，更是保护世界。" },
    ],
  },
  system: {
    chapter: "隐藏结局：系统的一部分",
    location: "location-boardroom",
    locationName: "NovaMind 董事会议室",
    time: "2040年9月01日 09:00",
    cast: ["you", "ceo"],
    lines: [
      { speaker: "narrator", text: "你长期只追求利润。危机被压下，指标继续向上。" },
      { speaker: "system", text: "任命通知：你已升任 NovaMind CTO，负责下一代情绪计算平台。" },
      { speaker: "narrator", text: "会议最后，一名新实习生提出了和你当年几乎一样的问题。" },
      { speaker: "you", text: "市场不会等我们写伦理论文。" },
      { speaker: "system", text: "新的实习生已加入公司。" },
    ],
  },
  witness: {
    chapter: "结局：代价高昂的证人",
    location: "location-court",
    locationName: "公开听证会",
    time: "2033年3月18日 10:30",
    cast: ["you", "lin", "media"],
    lines: [
      { speaker: "media", text: "NovaMind 听证会进入第三日。你提交的证据让调查继续推进，也让你的名字出现在质询名单上。" },
      { speaker: "narrator", text: "他们问你：你第一次知道风险是什么时候？你为什么那时没有停下？" },
      { speaker: "you", text: "我没有一个干净的答案。" },
      { speaker: "lin", text: "但你今天没有继续沉默。" },
      { speaker: "narrator", text: "真相被看见了。代价也是。" },
    ],
  },
  swallowed: {
    chapter: "结局：被系统吞没",
    location: "location-black",
    locationName: "数周后 / 信息流",
    time: "2033年1月09日 22:00",
    cast: ["you", "media", "system"],
    lines: [
      { speaker: "media", text: "NovaMind 回应称，网传材料存在大量断章取义，并将配合内部复核。" },
      { speaker: "system", text: "账号权限已冻结。内部访问记录已锁定。" },
      { speaker: "narrator", text: "你公开得太早，证据链不完整。热搜很快被新的新闻盖过去。" },
      { speaker: "narrator", text: "勇气没有消失，但它被系统消化成了一次“误解”。" },
    ],
  },
};

const endingCatalog = {
  silent: {
    title: "沉默的工程师",
    route: "删除日志或证据不足时保持沉默",
    note: "公司继续扩张，工程师知道真相却没有再说。",
  },
  idealist: {
    title: "理想主义者",
    route: "保留证据、监管介入，或公开完整替代方案",
    note: "失去工作，但推动 AI 伦理监管进入公共议程。",
  },
  system: {
    title: "系统的一部分",
    route: "长期追逐利润，并在危机中删除日志",
    note: "你升任 CTO，也成为当年自己最警惕的人。",
  },
  witness: {
    title: "代价高昂的证人",
    route: "曾参与伤害，又选择公开资料",
    note: "真相被看见，你也必须回答自己曾经做过什么。",
  },
  swallowed: {
    title: "被系统吞没",
    route: "证据链不足或公司警惕过高时公开失败",
    note: "勇气被公关与流程消化成一次误解。",
  },
};

const branchCatalog = [
  {
    title: "第一章",
    items: [
      { key: "viewedA2179", title: "查看 #A-2179", note: "提前记录异常反馈" },
      { key: "highStimulus", title: "高刺激推荐", note: "利润路线开启" },
      { key: "healthyMode", title: "健康推荐模式", note: "健康 EVA 路线开启" },
    ],
  },
  {
    title: "第二章",
    items: [
      { key: "sawPrivacyFlow", title: "查看数据流图", note: "发现后台隐私链路" },
      { key: "privacyJoined", title: "参与隐私画像", note: "卷入数据证据链" },
      { key: "highStimulusProfiled", title: "画像降噪", note: "高刺激与隐私合流" },
      { key: "localPrivacySandbox", title: "端侧沙盒", note: "替代方案证据" },
      { key: "privacyReported", title: "匿名监管", note: "调查线开启" },
    ],
  },
  {
    title: "第三章",
    items: [
      { key: "questionedEvaTrigger", title: "追问触发条件", note: "看见高孤独召回" },
      { key: "dependenceOptimized", title: "情感依赖", note: "EVA 更会挽留用户" },
      { key: "antiAddiction", title: "防沉迷机制", note: "让 EVA 学会告别" },
      { key: "usedHealthyForEva", title: "健康 EVA", note: "替代方案落地" },
      { key: "evaSuspended", title: "暂停二期", note: "保护未成年案例" },
      { key: "reportPublished", title: "公开风险报告", note: "危机提前爆发" },
    ],
  },
  {
    title: "第四章",
    items: [
      { key: "finalAction:delete", title: "删除日志", note: "沉默或系统路线" },
      { key: "finalAction:preserve", title: "保留证据", note: "等待调查进入" },
      { key: "finalAction:publish", title: "公开资料", note: "揭露或被吞没" },
      { key: "ending:idealist", title: "理想主义者", note: "已解锁结局" },
      { key: "ending:system", title: "系统的一部分", note: "已解锁结局" },
    ],
  },
];

let state = { ...initialState };
let current = nodes.intro;
let lineIndex = 0;
let typingTimer = null;
let isTyping = false;
let isTransitioning = false;
let dialogueHistory = [];
let evidenceRecords = [];
let popupCallback = null;
let unlockedEndings = loadCollectionSet("novamindUnlockedEndings");
let unlockedBranches = loadCollectionSet("novamindUnlockedBranches");

const els = {
  stage: document.getElementById("stage"),
  locationName: document.getElementById("locationName"),
  chapterChip: document.getElementById("chapterChip"),
  sceneClock: document.getElementById("sceneClock"),
  newsBanner: document.getElementById("newsBanner"),
  newsText: document.getElementById("newsText"),
  characterLayer: document.getElementById("characterLayer"),
  speaker: document.getElementById("speaker"),
  speakerRole: document.getElementById("speakerRole"),
  dialogueText: document.getElementById("dialogueText"),
  dialoguePanel: document.getElementById("dialoguePanel"),
  choices: document.getElementById("choices"),
  restartButton: document.getElementById("restartButton"),
  collectionButton: document.getElementById("collectionButton"),
  collectionDrawer: document.getElementById("collectionDrawer"),
  collectionSummary: document.getElementById("collectionSummary"),
  endingList: document.getElementById("endingList"),
  branchMap: document.getElementById("branchMap"),
  collectionCloseButton: document.getElementById("collectionCloseButton"),
  historyButton: document.getElementById("historyButton"),
  historyDrawer: document.getElementById("historyDrawer"),
  historyList: document.getElementById("historyList"),
  historyCloseButton: document.getElementById("historyCloseButton"),
  evidenceButton: document.getElementById("evidenceButton"),
  evidenceDrawer: document.getElementById("evidenceDrawer"),
  evidenceList: document.getElementById("evidenceList"),
  profileButton: document.getElementById("profileButton"),
  profileDrawer: document.getElementById("profileDrawer"),
  profileList: document.getElementById("profileList"),
  profileCloseButton: document.getElementById("profileCloseButton"),
  eventPopup: document.getElementById("eventPopup"),
  eventLabel: document.getElementById("eventLabel"),
  eventTitle: document.getElementById("eventTitle"),
  eventBody: document.getElementById("eventBody"),
  eventCloseButton: document.getElementById("eventCloseButton"),
  sceneTransition: document.getElementById("sceneTransition"),
  transitionChapter: document.getElementById("transitionChapter"),
  transitionLocation: document.getElementById("transitionLocation"),
  transitionTime: document.getElementById("transitionTime"),
};

function clamp(value) {
  return Math.max(0, Math.min(100, value));
}

function loadCollectionSet(key) {
  try {
    return new Set(JSON.parse(localStorage.getItem(key) || "[]"));
  } catch {
    return new Set();
  }
}

function saveCollectionSet(key, set) {
  localStorage.setItem(key, JSON.stringify([...set]));
}

function updateStats() {
  for (const key of ["profit", "happiness", "ethics", "privacy"]) {
    const value = clamp(state[key]);
    const valueEl = document.getElementById(`${key}Value`);
    const barEl = document.getElementById(`${key}Bar`);
    if (valueEl) valueEl.textContent = value;
    if (barEl) barEl.style.width = `${value}%`;
  }
}

function effectText(choice) {
  if (choice.set || choice.flags || choice.effects) return "后续影响：会改变剧情分支、人物关系或结局收集";
  return "后续影响：暂无明显变化";
}

function conditionMet(item) {
  if (item.condition) return item.condition(state);
  if (item.flag) return Boolean(state[item.flag]);
  return true;
}

function prepareNode(rawNode) {
  const node = {
    ...rawNode,
    lines: rawNode.lines.map((line) => ({ ...line })),
    cast: rawNode.cast ? [...rawNode.cast] : [],
    choices: rawNode.choices ? rawNode.choices.map((choice) => ({ ...choice })) : undefined,
  };

  for (const item of rawNode.conditionalLines || []) {
    if (conditionMet(item)) {
      node.lines.splice(item.index, 0, { ...item.line });
    }
  }

  for (const item of rawNode.conditionalChoices || []) {
    if (conditionMet(item)) {
      if (!node.choices) node.choices = [];
      node.choices.push({ ...item.choice });
    }
  }

  return node;
}

function renderCharacters(node, activeSpeaker) {
  els.characterLayer.innerHTML = "";
  const positionCounts = { left: 0, center: 0, right: 0 };
  for (const id of node.cast || []) {
    const character = characters[id];
    if (!character) continue;
    const position = character.position || "center";
    const count = positionCounts[position]++;
    const figure = document.createElement("div");
    figure.className = `character ${position} ${id === activeSpeaker ? "active" : ""}`;
    if (position === "left") figure.style.left = `${4 + count * 18}%`;
    if (position === "right") figure.style.right = `${6 + count * 18}%`;
    if (position === "center" && count > 0) figure.style.left = `${50 + count * 16}%`;
    figure.innerHTML = `<img class="portrait-img" src="assets/characters/${character.asset}" alt="${character.name}"><div class="character-name">${character.name}</div>`;
    els.characterLayer.appendChild(figure);
  }
}

function renderScreen(node) {
  els.stage.className = `stage ${node.location || "location-black"} ${node.ending ? "ending-mode" : ""}`;
  els.locationName.textContent = node.locationName || "";
  els.chapterChip.textContent = node.chapter;
  els.sceneClock.textContent = node.time || "2032";
  els.newsBanner.classList.toggle("hidden", !node.news);
  els.newsText.textContent = node.news || "";
}

function renderHistory() {
  els.historyList.innerHTML = "";
  const items = dialogueHistory.slice(-50);
  if (items.length === 0) {
    els.historyList.innerHTML = `<div class="drawer-item"><p>暂无历史对话。</p></div>`;
    return;
  }
  for (const item of items) {
    const character = characters[item.speakerId] || characters.narrator;
    const row = document.createElement("div");
    row.className = "drawer-item history-item";
    row.innerHTML = `
      <img class="history-avatar" src="assets/characters/${character.asset}" alt="${character.name}">
      <div><strong>${item.speaker}</strong><p>${item.text}</p></div>
    `;
    els.historyList.appendChild(row);
  }
}

function addEvidence(item) {
  if (!item) return;
  if (evidenceRecords.some((record) => record.title === item.title)) return;
  evidenceRecords.push(item);
  renderEvidence();
}

function showEventPopup(popup, onClose) {
  els.eventLabel.textContent = popup.label || "SYSTEM";
  els.eventTitle.textContent = popup.title || "消息";
  els.eventBody.textContent = popup.body || "";
  els.eventPopup.classList.remove("hidden");
  popupCallback = onClose;
  if (popup.evidenceItem) addEvidence(popup.evidenceItem);
}

function closeEventPopup() {
  if (els.eventPopup.classList.contains("hidden")) return;
  els.eventPopup.classList.add("hidden");
  const callback = popupCallback;
  popupCallback = null;
  if (callback) callback();
}

function revealAfterLine() {
  if (lineIndex >= current.lines.length - 1) {
    renderChoices();
  }
}

function renderEvidence() {
  els.evidenceList.innerHTML = "";
  if (evidenceRecords.length === 0) {
    els.evidenceList.innerHTML = `<div class="drawer-item"><p>暂无证据。主动查看邮件、日志或异常反馈后会记录在这里。</p></div>`;
    return;
  }
  for (const item of evidenceRecords) {
    const row = document.createElement("div");
    row.className = "drawer-item";
    row.innerHTML = `<strong>${item.title}</strong><p>${item.body}</p>`;
    els.evidenceList.appendChild(row);
  }
}

function renderProfiles() {
  els.profileList.innerHTML = "";
  for (const id of ["you", "qiao", "shen", "lin", "xia", "ceo", "media", "system"]) {
    const character = characters[id];
    const row = document.createElement("div");
    row.className = "drawer-item profile-card";
    row.innerHTML = `
      <img class="profile-avatar" src="assets/characters/${character.asset}" alt="${character.name}">
      <div><strong>${character.name} / ${character.role}</strong><p>${character.bio}</p></div>
    `;
    els.profileList.appendChild(row);
  }
}

function renderCollection() {
  if (!els.endingList || !els.branchMap) return;
  els.collectionSummary.textContent = `已解锁 ${unlockedEndings.size} / ${Object.keys(endingCatalog).length} 个结局`;
  els.endingList.innerHTML = "";
  for (const [id, ending] of Object.entries(endingCatalog)) {
    const unlocked = unlockedEndings.has(id);
    const card = document.createElement("div");
    card.className = `ending-card ${unlocked ? "unlocked" : ""}`;
    card.innerHTML = `
      <strong>${unlocked ? ending.title : "未解锁结局"}</strong>
      <span>${unlocked ? ending.route : "继续探索不同选择路线"}</span>
      <span>${unlocked ? ending.note : "达成后会显示结局名称和触发方向。"}</span>
    `;
    els.endingList.appendChild(card);
  }

  els.branchMap.innerHTML = "";
  for (const group of branchCatalog) {
    const column = document.createElement("div");
    column.className = "branch-column";
    column.innerHTML = `<h3>${group.title}</h3>`;
    for (const item of group.items) {
      const unlocked = unlockedBranches.has(item.key);
      const node = document.createElement("div");
      node.className = `branch-node ${unlocked ? "unlocked" : ""}`;
      node.innerHTML = `<strong>${unlocked ? item.title : "未发现"}</strong><span>${unlocked ? item.note : "分支尚未解锁"}</span>`;
      column.appendChild(node);
    }
    els.branchMap.appendChild(column);
  }
}

function addHistory(line) {
  const speaker = characters[line.speaker] || characters.narrator;
  const last = dialogueHistory[dialogueHistory.length - 1];
  if (last && last.speaker === speaker.name && last.text === line.text) return;
  dialogueHistory.push({ speaker: speaker.name, speakerId: line.speaker, text: line.text });
  renderHistory();
}

function typeLine(line) {
  clearInterval(typingTimer);
  isTyping = true;
  els.dialogueText.textContent = "";
  els.choices.innerHTML = "";
  els.dialoguePanel.classList.remove("has-choices");

  const speaker = characters[line.speaker] || characters.narrator;
  els.speaker.textContent = speaker.name;
  els.speakerRole.textContent = speaker.role;
  renderCharacters(current, line.speaker);

  let cursor = 0;
  typingTimer = setInterval(() => {
    els.dialogueText.textContent = line.text.slice(0, cursor + 1);
    cursor += 1;
    if (cursor >= line.text.length) {
      clearInterval(typingTimer);
      isTyping = false;
      addHistory(line);
      if (line.popup) {
        showEventPopup(line.popup, revealAfterLine);
      } else {
        revealAfterLine();
      }
    }
  }, 24);
}

function showCurrentLine() {
  typeLine(current.lines[lineIndex]);
}

function renderChoices() {
  els.choices.innerHTML = "";
  els.dialoguePanel.classList.remove("has-choices");

  if (current.choices && current.choices.length > 0) {
    els.dialoguePanel.classList.add("has-choices");
    for (const choice of current.choices) {
      if (choice.condition && !choice.condition(state)) continue;
      const locked = choice.require && !choice.require(state);
      const button = document.createElement("button");
      button.className = `choice-button ${locked ? "locked" : ""}`;
      button.type = "button";
      button.disabled = Boolean(locked);
      button.dataset.effects = locked ? (choice.lockedDetail || "条件不足") : effectText(choice);
      button.innerHTML = `<strong>${choice.label}</strong><span>${locked ? choice.lockedDetail : (choice.detail || "")}</span>`;
      if (!locked) button.addEventListener("click", () => choose(choice));
      els.choices.appendChild(button);
    }
    return;
  }

}

function applyChoice(choice) {
  if (choice.effects) {
    for (const [key, delta] of Object.entries(choice.effects)) {
      state[key] = clamp((state[key] ?? 0) + delta);
    }
  }
  if (choice.set) {
    Object.assign(state, choice.set);
    for (const [key, value] of Object.entries(choice.set)) {
      if (value === true) unlockBranch(key);
      if (key === "finalAction") unlockBranch(`finalAction:${value}`);
    }
  }
  if (choice.flags) {
    for (const [key, delta] of Object.entries(choice.flags)) {
      state[key] = (state[key] ?? 0) + delta;
    }
  }
  addEvidence(choice.evidenceItem);
  unlockBranch(`choice:${choice.label}`);
  updateStats();
}

function unlockBranch(key) {
  if (!key || unlockedBranches.has(key)) return;
  unlockedBranches.add(key);
  saveCollectionSet("novamindUnlockedBranches", unlockedBranches);
  renderCollection();
}

function unlockEnding(id) {
  if (!id || unlockedEndings.has(id)) return;
  unlockedEndings.add(id);
  unlockedBranches.add(`ending:${id}`);
  saveCollectionSet("novamindUnlockedEndings", unlockedEndings);
  saveCollectionSet("novamindUnlockedBranches", unlockedBranches);
  renderCollection();
}

function choose(choice) {
  applyChoice(choice);
  if (choice.next === "ending") {
    goToEnding();
    return;
  }
  startNode(nodes[choice.next]);
}

function pickEndingId() {
  if (state.finalAction === "delete") {
    if (state.profitChoices >= 3 && state.profit >= 80 && state.ethics >= 50) return "system";
    return "silent";
  }

  if (state.finalAction === "preserve") {
    if (
      state.evidence >= 45 ||
      state.investigation ||
      state.linTrust >= 65 ||
      state.evaSuspended ||
      (state.localPrivacySandbox && state.usedHealthyForEva && state.evidence >= 35)
    ) return "idealist";
    return "swallowed";
  }

  if (state.finalAction === "publish") {
    if (state.localPrivacySandbox && state.usedHealthyForEva && state.evidence >= 50) return "idealist";
    if (state.evidence < 35 || (state.shenSuspicion >= 70 && !state.investigation)) return "swallowed";
    if (state.profitChoices >= 2 || state.compromiseChoices >= 2 || state.ethics >= 45) return "witness";
    return "idealist";
  }

  if (state.profitChoices >= 3 && state.profit >= 85) return "system";
  if (state.evidence >= 45 || state.ethics <= 15) return "idealist";
  return "silent";
}

function pickEnding() {
  return endings[pickEndingId()];
}

function goToEnding() {
  const endingId = pickEndingId();
  unlockEnding(endingId);
  startNode({ ...endings[endingId], ending: true, endingId });
}

function shouldShowTransition(nextNode) {
  if (!current || current === nodes.intro) return false;
  if (nextNode.ending) return true;
  return current.location !== nextNode.location || current.locationName !== nextNode.locationName;
}

function showSceneTransition(node, onMidpoint) {
  isTransitioning = true;
  els.transitionChapter.textContent = node.chapter || "下一幕";
  els.transitionLocation.textContent = node.locationName || "NovaMind";
  els.transitionTime.textContent = node.time || "2032";
  els.sceneTransition.classList.remove("hidden");
  requestAnimationFrame(() => els.sceneTransition.classList.add("active"));

  window.setTimeout(() => {
    onMidpoint();
  }, 1050);

  window.setTimeout(() => {
    els.sceneTransition.classList.remove("active");
  }, 1350);

  window.setTimeout(() => {
    els.sceneTransition.classList.add("hidden");
    isTransitioning = false;
  }, 1650);
}

function startNode(rawNode, options = {}) {
  const nextNode = prepareNode(rawNode);
  const enterNode = () => {
    current = nextNode;
    lineIndex = 0;
    renderScreen(current);
    showCurrentLine();
  };

  if (!options.skipTransition && shouldShowTransition(nextNode)) {
    showSceneTransition(nextNode, enterNode);
    return;
  }

  enterNode();
}

function advance() {
  if (isTransitioning) return;
  if (!els.eventPopup.classList.contains("hidden")) return;
  if (isTyping) {
    clearInterval(typingTimer);
    const line = current.lines[lineIndex];
    els.dialogueText.textContent = line.text;
    isTyping = false;
    addHistory(line);
    if (line.popup) {
      showEventPopup(line.popup, revealAfterLine);
    } else {
      revealAfterLine();
    }
    return;
  }

  if (lineIndex < current.lines.length - 1) {
    lineIndex += 1;
    showCurrentLine();
    return;
  }

  if (current.next) {
    startNode(nodes[current.next]);
  }
}

function restart() {
  state = { ...initialState };
  dialogueHistory = [];
  evidenceRecords = [];
  updateStats();
  renderHistory();
  renderEvidence();
  renderProfiles();
  renderCollection();
  startNode(nodes.intro, { skipTransition: true });
}

function toggleDrawer(drawer, button) {
  for (const item of [
    [els.collectionDrawer, els.collectionButton],
    [els.evidenceDrawer, els.evidenceButton],
    [els.historyDrawer, els.historyButton],
    [els.profileDrawer, els.profileButton],
  ]) {
    if (item[0] !== drawer) {
      item[0].classList.remove("open");
      item[1].setAttribute("aria-expanded", "false");
    }
  }
  const open = drawer.classList.toggle("open");
  button.setAttribute("aria-expanded", String(open));
}

els.dialoguePanel.addEventListener("click", (event) => {
  if (event.target.closest("button") || els.dialoguePanel.classList.contains("has-choices")) return;
  advance();
});
els.restartButton.addEventListener("click", restart);
els.collectionButton.addEventListener("click", () => toggleDrawer(els.collectionDrawer, els.collectionButton));
els.collectionCloseButton.addEventListener("click", () => toggleDrawer(els.collectionDrawer, els.collectionButton));
els.evidenceButton.addEventListener("click", () => toggleDrawer(els.evidenceDrawer, els.evidenceButton));
els.historyButton.addEventListener("click", () => toggleDrawer(els.historyDrawer, els.historyButton));
els.historyCloseButton.addEventListener("click", () => toggleDrawer(els.historyDrawer, els.historyButton));
els.profileButton.addEventListener("click", () => toggleDrawer(els.profileDrawer, els.profileButton));
els.profileCloseButton.addEventListener("click", () => toggleDrawer(els.profileDrawer, els.profileButton));
els.eventCloseButton.addEventListener("click", closeEventPopup);

document.addEventListener("keydown", (event) => {
  if (!els.eventPopup.classList.contains("hidden")) return;
  if (event.key === " " || event.key === "Enter") {
    advance();
  }
  if (event.key.toLowerCase() === "c") {
    els.collectionButton.click();
  }
});

restart();
