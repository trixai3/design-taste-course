# 设计品味课 · 中文版

一门交互式、**「展示而非说教」**的设计品味课：教你一眼识破 AI 生成的「slop」（劣质批量产出）、
说出风格与套路的名字、并把它们修好。每节课都是一个独立的 HTML 页面，在浏览器里打开就能用。

设计规则来自 MIT 许可的 [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)；这个仓库把它们
变成可以看、可以练的东西。这是英文课程的中文版，共用同一套交互组件（`../assets/`）。

## 为什么学这个

你没法向 AI 要一个你叫不出名字的东西。会命名风格、会读一个页面的「意图」，就是能把 AI 工具从
千篇一律的默认产出里拽出来的那半步。

## 怎么开始

这些课不是服务端应用，双击 HTML 文件、在浏览器里打开即可（也可以本地起一个静态服务器）：

```bash
# 克隆后，在仓库根目录：
python3 -m http.server 4599
# 然后打开 http://localhost:4599/ch/lessons/0001-the-tell.html
```

每节课的动手环节（找痕迹、旋钮、测验、命名游戏）都要**真的去点**，不是读一读就算。

## 课程

| # | 课 | 一句话 |
|---|---|---|
| 01 | [识破痕迹 · The Tell](lessons/0001-the-tell.html) | 认出让界面「一看就是 AI 做的」那些具体痕迹（tell）。 |
| 02 | [三个旋钮 · The Three Dials](lessons/0002-the-three-dials.html) | 把任意页面读成一组 `变化度 / 动效 / 密度` 的三元值。 |
| 03 | [设计判读 · The Design Read](lessons/0003-the-design-read.html) | 动手前先说那一句话：是受众决定美学，不是你的口味。 |
| 04 | [风格图鉴 I · Style Atlas I](lessons/0004-style-atlas-i.html) | 一眼认出五个亮色家族并叫出名字。 |
| 05 | [风格图鉴 II · Style Atlas II](lessons/0005-style-atlas-ii.html) | 再认出五个暗色与大胆家族，并分清「做对」与「做砸」的玻璃拟态。 |
| 06 | [两种 Brutalism · The Two Brutalisms](lessons/0006-the-two-brutalisms.html) | 分清 Swiss Industrial Print 与 Tactical Telemetry，并说清为什么绝不能混用。 |
| 07 | [Pattern Glossary I · 套路词典 I](lessons/0007-pattern-glossary-i.html) | 一眼叫出布局套路的名字：六种 hero 范式、grid 家族（bento / masonry / 分屏 / zigzag）、十个 composition anchor。 |

（第 08 课起仍在建设中。）

## 参考卡（可打印）

随课程增长的速查表，方便随时回看：

- [AI 痕迹速查表](reference/ai-tells.html)
- [三个旋钮](reference/dials.html)
- [设计判读](reference/design-read.html)
- [风格图鉴](reference/style-atlas.html)
- [套路词典 · Pattern Glossary](reference/pattern-glossary.html)

术语对照见仓库根部的双语词汇表 [`../GLOSSARY.md`](../GLOSSARY.md)（英文 · 中文）。

## 关于术语的约定

课文用中文讲解，但**设计词汇保留英文原词**（首次出现时给中文注释，例如
`design read（设计判读）`、`Ethereal Glass（空灵玻璃）`）。原因很实在：你要拿这些英文词去
指挥 AI 工具，中文注释只负责帮你记牢。所有**风格家族名一律用英文**。

已知限制：交互组件（计分、「Next」按钮、判定提示等）来自共用的 JS，目前仍是英文；
把这部分也本地化需要单独给组件加语言参数。

## 英文版与开源

英文原版课程见仓库根目录（[`../README.md`](../README.md)）。开源链接：
`trixai3/design-taste-course/`。

课程遵循它自己教的规则：一个强调色、暖近黑（不用纯黑）、克制的动效、尊重
`prefers-reduced-motion`。规则来自上游 taste-skill（MIT 许可）。
