const fs = require("fs");
const vm = require("vm");

const source =
  fs.readFileSync("game.js", "utf8").replace(/\nrestart\(\);\s*$/, "") +
  `
;globalThis.__initialState=initialState;
globalThis.__statLabels=statLabels;
globalThis.__characters=characters;
globalThis.__nodes=nodes;
globalThis.__endings=endings;
`;

function fakeEl() {
  return {
    textContent: "",
    innerHTML: "",
    dataset: {},
    style: {},
    disabled: false,
    className: "",
    classList: {
      add() {},
      remove() {},
      toggle() {
        return false;
      },
      contains() {
        return true;
      },
    },
    setAttribute() {},
    appendChild() {},
    addEventListener() {},
  };
}

const sandbox = {
  console,
  setInterval() {
    return 1;
  },
  clearInterval() {},
  document: {
    getElementById() {
      return fakeEl();
    },
    createElement() {
      return fakeEl();
    },
    addEventListener() {},
  },
};

vm.createContext(sandbox);
vm.runInContext(source, sandbox, { filename: "game.js" });

const initialState = sandbox.__initialState;
const statLabels = sandbox.__statLabels;
const characters = sandbox.__characters;
const nodes = sandbox.__nodes;
const endings = sandbox.__endings;

function mdEscape(text) {
  return String(text ?? "").replace(/\|/g, "\\|");
}

function speakerName(id) {
  return characters[id]?.name || id || "旁白";
}

function roleName(id) {
  return characters[id]?.role || "";
}

function functionText(fn) {
  return fn.toString().replace(/\s+/g, " ").trim();
}

function conditionText(item) {
  if (!item) return "";
  if (item.flag) return `需要状态：\`${item.flag}\` 为 true`;
  if (item.condition) return `条件函数：\`${functionText(item.condition)}\``;
  if (item.require) return `解锁条件：\`${functionText(item.require)}\``;
  return "无特殊条件";
}

function effectsText(effects) {
  if (!effects || Object.keys(effects).length === 0) return "无";
  return Object.entries(effects)
    .map(([key, value]) => `${statLabels[key] || key} ${value > 0 ? "+" : ""}${value}`)
    .join("；");
}

function setText(set) {
  if (!set || Object.keys(set).length === 0) return "无";
  return Object.entries(set).map(([key, value]) => `${key}=${JSON.stringify(value)}`).join("；");
}

function flagsText(flags) {
  if (!flags || Object.keys(flags).length === 0) return "无";
  return Object.entries(flags).map(([key, value]) => `${key} ${value > 0 ? "+" : ""}${value}`).join("；");
}

function lineText(line, index) {
  const role = roleName(line.speaker);
  const text = `${index + 1}. **${speakerName(line.speaker)}**${role ? `（${role}）` : ""}：${line.text}`;
  const popup = line.popup
    ? `\n   - 弹窗：${line.popup.label || "SYSTEM"} / ${line.popup.title || "消息"}\n   - 弹窗内容：${String(line.popup.body || "").replace(/\n/g, " / ")}`
    : "";
  return `${text}${popup}`;
}

function choiceText(choice, index) {
  const rows = [];
  rows.push(`#### 选项 ${index + 1}：${choice.label}`);
  rows.push(`- 描述：${choice.detail || "无"}`);
  rows.push(`- 跳转：\`${choice.next || "无"}\``);
  rows.push(`- 属性影响：${effectsText(choice.effects)}`);
  rows.push(`- 设置状态：${setText(choice.set)}`);
  rows.push(`- 计数状态：${flagsText(choice.flags)}`);
  if (choice.require) rows.push(`- 解锁条件：${conditionText({ require: choice.require })}`);
  if (choice.lockedDetail) rows.push(`- 锁定提示：${choice.lockedDetail}`);
  if (choice.condition) rows.push(`- 显示条件：${conditionText({ condition: choice.condition })}`);
  if (choice.evidenceItem) rows.push(`- 证据记录：${choice.evidenceItem.title} - ${choice.evidenceItem.body}`);
  return rows.join("\n");
}

const out = [];
out.push("# 《NovaMind：算法边界》当前完整剧情脚本文档");
out.push("");
out.push("> 这份文档由当前 `game.js` 自动整理，方便把剧情交给别人修改。网页实际运行仍以 `game.js` 为准。");
out.push(">");
out.push("> 生成日期：2026-05-15");
out.push("");
out.push("## 修改说明");
out.push("");
out.push("- 普通对白可以直接改“对白文本”。");
out.push("- 条件对白只在对应状态满足时出现，例如 `healthyMode`、`privacyReported`。");
out.push("- 选项的“属性影响”对应玩家悬浮选项时看到的数值变化。");
out.push("- “设置状态”和“计数状态”会影响后续分支和结局，修改时要小心保持前后对应。");
out.push("");
out.push("## 初始属性");
out.push("");
out.push("| 状态 | 初始值 |");
out.push("| --- | --- |");
for (const [key, value] of Object.entries(initialState)) {
  out.push(`| ${mdEscape(key)} | ${mdEscape(JSON.stringify(value))} |`);
}
out.push("");
out.push("## 主要人物");
out.push("");
for (const [id, character] of Object.entries(characters)) {
  out.push(`### ${character.name} / ${character.role}`);
  out.push("");
  out.push(`- ID：\`${id}\``);
  out.push(`- 立绘资源：\`assets/characters/${character.asset}\``);
  out.push(`- 默认站位：${character.position}`);
  out.push(`- 人物说明：${character.bio}`);
  out.push("");
}

out.push("## 正篇剧情");
out.push("");
for (const [id, node] of Object.entries(nodes)) {
  out.push(`### 节点：${id}`);
  out.push("");
  out.push(`- 章节：${node.chapter || "未命名"}`);
  out.push(`- 地点：${node.locationName || ""}`);
  out.push(`- 时间：${node.time || ""}`);
  out.push(`- 背景类名：\`${node.location || ""}\``);
  out.push(`- 出场人物：${(node.cast || []).map(speakerName).join("、") || "无"}`);
  if (node.news) out.push(`- 新闻横幅：${node.news}`);
  if (node.next) out.push(`- 默认下一节点：\`${node.next}\``);
  out.push("");
  out.push("#### 固定对白");
  out.push("");
  for (const [i, line] of (node.lines || []).entries()) out.push(lineText(line, i));
  out.push("");

  if (node.conditionalLines && node.conditionalLines.length) {
    out.push("#### 条件对白");
    out.push("");
    node.conditionalLines.forEach((item, i) => {
      out.push(`${i + 1}. ${conditionText(item)}`);
      out.push(`   - 插入位置：第 ${item.index} 行附近`);
      out.push(`   - **${speakerName(item.line.speaker)}**：${item.line.text}`);
    });
    out.push("");
  }

  if (node.choices && node.choices.length) {
    out.push("#### 固定选项");
    out.push("");
    node.choices.forEach((choice, i) => {
      out.push(choiceText(choice, i));
      out.push("");
    });
  }

  if (node.conditionalChoices && node.conditionalChoices.length) {
    out.push("#### 条件选项");
    out.push("");
    node.conditionalChoices.forEach((item, i) => {
      out.push(`#### 条件选项 ${i + 1}`);
      out.push(`- 出现条件：${conditionText(item)}`);
      out.push("");
      out.push(choiceText(item.choice, i));
      out.push("");
    });
  }
}

out.push("## 结局剧情");
out.push("");
for (const [id, ending] of Object.entries(endings)) {
  out.push(`### 结局节点：${id}`);
  out.push("");
  out.push(`- 章节：${ending.chapter}`);
  out.push(`- 地点：${ending.locationName || ""}`);
  out.push(`- 时间：${ending.time || ""}`);
  out.push(`- 背景类名：\`${ending.location || ""}\``);
  out.push(`- 出场人物：${(ending.cast || []).map(speakerName).join("、") || "无"}`);
  out.push("");
  out.push("#### 结局对白");
  out.push("");
  for (const [i, line] of (ending.lines || []).entries()) out.push(lineText(line, i));
  out.push("");
}

out.push("## 结局判定摘要");
out.push("");
out.push("- 删除日志：利润选择多、利润高、伦理风险高时进入“系统的一部分”，否则进入“沉默的工程师”。");
out.push("- 保留证据：证据充足、触发监管、林澈信任高、暂停 EVA，或拥有“端侧沙盒 + 健康 EVA”证据时进入“理想主义者”，否则进入“被系统吞没”。");
out.push("- 公开资料：如果“端侧沙盒 + 健康 EVA”证据完整，进入“理想主义者”；证据不足或沈舟警惕过高且没有监管线时进入“被系统吞没”；曾多次参与伤害时进入“代价高昂的证人”；其余进入“理想主义者”。");
out.push("");

fs.writeFileSync("FULL_SCRIPT.md", out.join("\n"), "utf8");
console.log(`Wrote FULL_SCRIPT.md with ${out.length} markdown lines.`);
