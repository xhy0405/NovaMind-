# 《NovaMind：算法边界》剧情分支流程图

这份流程图按《底特律：化身为人》式结构整理：每章都有主线节点、选择分支、条件解锁、后续影响和结局流向。

## 总体结构

```mermaid
flowchart TD
  Start["开场：入职第三个月<br/>普通工作日开始"] --> A1["第一章：留存曲线<br/>推荐系统实验"]

  A1 --> A1S{"小选择：是否查看 #A-2179 异常反馈"}
  A1S -->|查看| A1View["记录证据：#A-2179<br/>证据+5 / 林澈信任+3"]
  A1S -->|忽略| A1Skip["错过早期线索<br/>乔岚信任+2"]

  A1View --> A1Main{"重大选择：推荐策略"}
  A1Skip --> A1Main

  A1Main -->|高刺激推荐| AHigh["上线情绪强度排序<br/>利润+ / 伦理风险+<br/>标记：highStimulus"]
  A1Main -->|限制负面扩散| AMid["限制负面内容<br/>幸福度+ / 利润-"]
  A1Main -->|健康推荐模式| AHealthy["健康推荐小流量<br/>幸福度+ / 解锁健康EVA<br/>标记：healthyMode"]

  AHigh --> B1["第二章：画像<br/>用户理解增强项目"]
  AMid --> B1
  AHealthy --> B1

  B1 --> B1S{"小选择：如何处理沈舟邮件"}
  B1S -->|查看数据流图| BInspect["发现隐私数据流<br/>证据+8 / 沈舟警惕+"]
  B1S -->|转发林澈| BForward["林澈提前介入<br/>林澈信任+ / 沈舟警惕++"]
  B1S -->|暂不点开| BWait["暂时安全<br/>证据不足风险"]

  BInspect --> BMain{"重大选择：隐私画像"}
  BForward --> BMain
  BWait --> BMain

  BMain -->|参与接入| BJoin["加入后台画像<br/>隐私安全- / 标记：privacyJoined"]
  BMain -->|高刺激路线解锁| BProfile["后台画像给高刺激策略降噪<br/>利润+ / 隐私安全--<br/>标记：highStimulusProfiled"]
  BMain -->|拒绝并要求最小化| BRefuse["拒绝接入<br/>隐私安全+ / 标记：privacyRefused"]
  BMain -->|健康模式解锁| BSandbox["端侧健康信号沙盒<br/>隐私安全+ / 证据+<br/>标记：localPrivacySandbox"]
  BMain -->|匿名提交监管| BReport["触发监管线<br/>证据+ / 沈舟警惕++<br/>标记：privacyReported"]

  BJoin --> C1["第三章：EVA<br/>数字人情感召回"]
  BProfile --> C1
  BRefuse --> C1
  BSandbox --> C1
  BReport --> C1

  C1 --> C1S{"小选择：EVA 演示中如何反应"}
  C1S -->|追问触发条件| CAsk["看到高孤独召回字段<br/>证据+ / questionedEvaTrigger"]
  C1S -->|认可演示| CApprove["项目继续推进<br/>利润+ / 乔岚信任+"]
  C1S -->|沉默观察| CSilent["观察到 A-2179<br/>证据小幅+"]

  CAsk --> CMain{"重大选择：EVA 策略"}
  CApprove --> CMain
  CSilent --> CMain

  CMain -->|优化情感依赖| CDepend["EVA 更会挽留用户<br/>利润++ / 夏知遥状态-<br/>标记：dependenceOptimized"]
  CMain -->|画像降噪路线解锁| CContain["静默陪伴名单<br/>舆情风险短降 / 夏知遥状态-<br/>标记：dependenceOptimized"]
  CMain -->|上线防沉迷| CAnti["EVA 学会告别<br/>幸福度+ / 标记：antiAddiction"]
  CMain -->|公开风险报告| CPublishReport["风险报告流出<br/>证据++ / 标记：reportPublished"]
  CMain -->|监管线解锁| CSuspend["暂停 EVA 二期复核<br/>证据+ / 夏知遥状态+<br/>标记：evaSuspended"]
  CMain -->|健康EVA 条件解锁| CHealthy["健康推荐接入 EVA<br/>夏知遥状态++ / 证据+<br/>标记：usedHealthyForEva"]

  CDepend --> D1["第四章：回声协议曝光"]
  CContain --> D1
  CAnti --> D1
  CPublishReport --> D1
  CSuspend --> D1
  CHealthy --> D1

  D1 --> DMain{"最终选择：战情室"}
  DMain -->|删除日志| EDelete{"删除后结算"}
  DMain -->|保留证据<br/>条件解锁| EPreserve{"保留后结算"}
  DMain -->|公开资料| EPublish{"公开后结算"}
  DMain -->|乔岚协助<br/>条件解锁| EQiao["乔岚拖住公关<br/>转移证据"]
  DMain -->|监管联系人<br/>条件解锁| EReg["同步给监管"]
  DMain -->|替代方案证据<br/>条件解锁| EAlt["公开端侧沙盒 + 健康 EVA"]
  DMain -->|EVA暂停记录<br/>条件解锁| ESuspend["最小必要证据保护用户"]

  EQiao --> EPreserve
  EReg --> EPreserve
  EAlt --> EPublish
  ESuspend --> EPreserve

  EDelete -->|利润优先多且伦理风险高| EndSystem["隐藏结局：系统的一部分"]
  EDelete -->|否则| EndSilent["结局：沉默的工程师"]

  EPreserve -->|证据/信任/监管充足| EndIdeal["结局：理想主义者"]
  EPreserve -->|证据不足| EndSwallow["结局：被系统吞没"]

  EPublish -->|证据不足或沈舟警惕高| EndSwallow
  EPublish -->|曾参与伤害较多| EndWitness["结局：代价高昂的证人"]
  EPublish -->|证据完整且伦理路线稳定| EndIdeal
```

## 第一章：留存曲线

```mermaid
flowchart TD
  A0["清晨工位<br/>林澈送咖啡"] --> A1{"是否查看 #A-2179"}
  A1 -->|查看| A2["看到异常反馈<br/>证据+5<br/>后续认出夏知遥"]
  A1 -->|忽略| A3["错过早期线索<br/>第三章才知道编号含义"]

  A2 --> A4["增长会议<br/>乔岚展示留存下滑"]
  A3 --> A4

  A4 --> A5{"推荐策略"}
  A5 -->|高刺激推荐| A6["短期曲线回升<br/>乔岚信任+<br/>A-2179 状态恶化"]
  A5 -->|限制负面扩散| A7["用户状态较稳<br/>增长压力转移到隐私项目"]
  A5 -->|健康推荐模式| A8["解锁健康EVA<br/>成为第四章替代方案证据"]

  A6 --> A9["第二章午餐：乔岚提到董事会记住你"]
  A7 --> A10["第二章午餐：乔岚提醒曲线不会自己回来"]
  A8 --> A11["第二章午餐：林澈提到健康小桶仍在跑"]
```

## 第二章：画像

```mermaid
flowchart TD
  B0["午餐过渡<br/>根据第一章选择改变气氛"] --> B1["沈舟邮件：用户理解增强项目"]
  B1 --> B2{"如何处理邮件"}

  B2 -->|查看数据流图| B3["发现剪贴板/通讯录/位置轨迹<br/>证据+8<br/>可质问沈舟"]
  B2 -->|转发林澈| B4["林澈提前介入<br/>沈舟警惕+<br/>后续沈舟态度变化"]
  B2 -->|暂不点开| B5["暂时安全<br/>但证据不足"]

  B3 --> B6["地下停车场"]
  B4 --> B6
  B5 --> B6

  B6 --> B7{"隐私画像选择"}
  B7 -->|参与接入| B8["privacyJoined<br/>第三章：夏知遥画像更精准<br/>第四章：你卷入隐私证据链"]
  B7 -->|高刺激路线解锁：画像降噪| B11["highStimulusProfiled<br/>第三章：EVA 继承风险分层<br/>第四章：高刺激与隐私证据链合并"]
  B7 -->|拒绝接入| B9["privacyRefused<br/>第三章：能看到部分画像来源<br/>最终更易保留证据"]
  B7 -->|健康模式解锁：端侧沙盒| B12["localPrivacySandbox<br/>第三章：EVA 可接入健康信号<br/>最终可公开替代方案"]
  B7 -->|匿名监管| B10["privacyReported<br/>第四章解锁监管联系人<br/>但沈舟警惕大幅上升"]
```

## 第三章：EVA

```mermaid
flowchart TD
  C0["数字人演示<br/>EVA 主动陪伴"] --> C1{"演示中如何反应"}

  C1 -->|追问触发条件| C2["看到高孤独召回字段<br/>证据+6<br/>第四章可指认策略"]
  C1 -->|认可演示| C3["项目顺利推进<br/>利润+<br/>林澈信任-"]
  C1 -->|沉默观察| C4["看到 A-2179 编号一闪而过<br/>证据+2"]

  C2 --> C5["A-2179 身份揭示：夏知遥"]
  C3 --> C5
  C4 --> C5

  C5 --> C6{"EVA 策略选择"}
  C6 -->|优化情感依赖| C7["dependenceOptimized<br/>夏知遥状态-<br/>第四章媒体曝光高孤独召回"]
  C6 -->|画像降噪路线解锁| C11["静默陪伴名单<br/>夏知遥状态-<br/>第四章曝光“风险分类”"]
  C6 -->|防沉迷机制| C8["antiAddiction<br/>夏知遥状态+<br/>第四章成为补救证据"]
  C6 -->|公开风险报告| C9["reportPublished<br/>危机提前爆发<br/>证据++"]
  C6 -->|监管线解锁| C12["evaSuspended<br/>暂停二期复核<br/>第四章可用暂停记录保护用户"]
  C6 -->|健康EVA<br/>需第一章健康模式| C10["usedHealthyForEva<br/>夏知遥状态++<br/>第四章证明有替代方案"]
```

## 第四章：回声协议与最终分支

```mermaid
flowchart TD
  D0["舆情前兆<br/>根据第三章选择改变新闻焦点"] --> D1["战情室<br/>回声协议被拼出来"]

  D1 --> D2{"最终选择"}

  D2 -->|删除日志| D3{"利润优先路线？"}
  D3 -->|利润高 / 伦理风险高 / 利润选择多| E1["系统的一部分"]
  D3 -->|否则| E2["沉默的工程师"]

  D2 -->|保留证据<br/>需条件解锁| D4{"证据是否足够？"}
  D4 -->|证据>=45 或监管/林澈支持| E3["理想主义者"]
  D4 -->|不足| E4["被系统吞没"]

  D2 -->|公开资料| D5{"公开是否站得住？"}
  D5 -->|证据不足 / 沈舟警惕高| E4
  D5 -->|曾多次参与伤害| E5["代价高昂的证人"]
  D5 -->|证据完整且伦理路线稳定| E3

  D2 -->|乔岚协助<br/>乔岚信任>=60 且证据>=25| D6["拖住公关，转移证据"]
  D6 --> D4

  D2 -->|监管联系人<br/>privacyReported 且证据>=30| D7["同步给监管"]
  D7 --> D4

  D2 -->|替代方案证据<br/>localPrivacySandbox + usedHealthyForEva| D8["公开端侧沙盒和健康 EVA"]
  D8 --> D5

  D2 -->|暂停记录<br/>evaSuspended + 林澈信任| D9["最小必要证据保护夏知遥"]
  D9 --> D4
```

## 关键状态影响表

| 选择/状态 | 后续影响 |
| --- | --- |
| 查看 #A-2179 | 第三章提前认出夏知遥线索，证据增加 |
| 忽略 #A-2179 | 第三章才知道编号含义，代入感更像“错过” |
| 高刺激推荐 | 第二章乔岚更信任，第三章夏知遥状态恶化，第四章成为证据链 |
| 高刺激 + 后台画像降噪 | 第三章解锁静默陪伴名单，第四章高刺激与隐私证据链合并 |
| 健康推荐模式 | 第三章解锁健康EVA，第四章成为替代方案证据 |
| 健康推荐 + 端侧沙盒 | 第四章解锁“公开替代方案”路线，更容易进入理想主义者结局 |
| 查看隐私数据流 | 第二章可质问沈舟，证据增加 |
| 转发林澈 | 林澈介入更早，但沈舟警惕增加 |
| 参与隐私画像 | 第三章夏知遥画像更精准，第四章玩家卷入隐私证据链 |
| 拒绝隐私接入 | 第三章可看到画像来源，最终保留证据更容易 |
| 匿名监管 | 第四章解锁监管联系人，但被公司警惕 |
| 追问EVA触发条件 | 证据增加，第四章可指向高孤独召回 |
| 优化情感依赖 | 夏知遥状态下降，系统结局/证人结局概率提高 |
| 静默陪伴名单 | 短期降低外溢风险，但增加第四章“知道风险仍继续”的证据 |
| 防沉迷机制 | 夏知遥状态改善，第四章成为补救证据 |
| 暂停 EVA 二期复核 | 第四章可用暂停记录保护用户，更容易进入理想主义者结局 |
| 公开风险报告 | 危机提前爆发，证据增加，乔岚信任下降 |
