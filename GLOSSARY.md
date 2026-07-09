# Design Taste & Style Vocabulary — Glossary

Canonical terms for this workspace. Entries are bilingual (English · 中文) at Trish's request:
English term first (she needs it to steer AI tools), Chinese for durable understanding. Source
shorthand: `DTF` = `design-taste-frontend/SKILL.md`.

Two kinds of entry live here:
- **Craft terms** — neutral design vocabulary (accent, hierarchy, composition…).
- **Tells** — named AI anti-patterns from Lesson 01. Marked `⚑ tell`. Knowing their names is the
  point of the lesson.

---

## Core concepts · 核心概念

**AI tell · AI 痕迹（破绽）**:
A concrete, repeatable signal that an interface was machine-generated rather than designed. Countable
(one tell, five tells).
一个具体、可重复的信号，表明界面是机器生成而非有人设计的。可数（one tell, five tells）。
_Avoid_: "it looks AI" (name the specific tell instead)

**Slop · AI 泔水（劣质批量产出）**:
The overall cheap, machine-made impression a page gives when many tells stack up. Uncountable (not
"a slop"). Many tells accumulate into slop.
当很多 tell 叠加时，页面给人的那种廉价、机器感的整体印象。不可数（不说 "a slop"）。很多 tell 累积成 slop。

---

## Typography · 排版

**Inter** (a typeface · 一款字体):
A clean, neutral, open-source UI sans-serif. Excellent, but so ubiquitous and personality-free that
reaching for it by default is a tell.
一款干净、中性、开源的界面无衬线字体。本身很好，但因太普遍、太没个性，默认用它就成了痕迹。
_Avoid_: "the default font" (be specific and name it)

**Grotesk · 无衬线怪诞体**:
A family of clean sans-serifs with subtle character (Cabinet Grotesk, Satoshi, Geist). The corpus's
go-to alternative to Inter.
一类干净、带一点个性的无衬线字体（Cabinet Grotesk、Satoshi、Geist）。语料库用来替代 Inter 的首选。

**Display face · 展示字体（标题字体）**:
The typeface used for large headlines, chosen for character; distinct from the body face.
用于大标题、看重个性的字体；与正文字体区分开。

**Eyebrow · 眉标**:
The small uppercase wide-tracking label above a section headline. Named for sitting over the "eye"
(the headline).
标题上方那行小号、大写、宽字距的小标签。因位于"眼睛"（标题）之上而得名。

**Em-dash flourish · 破折号滥用** ⚑ tell:
Using the em-dash (—) as a stylistic pause. The model's signature punctuation crutch; banned outright
in the corpus (zero, anywhere). Fix: period, comma, colon, or parentheses.
把破折号（—）当风格化停顿来用。模型标志性的标点拐杖；语料库彻底禁用（任何地方都不许）。改法：句号、逗号、冒号或括号。
_Source_: DTF §9.G

---

## Color · 颜色

**Accent color · 强调色**:
The single loud color, used sparingly on what matters most (primary button, link, focus ring), while
everything else stays neutral. Max one, saturation below ~80%, locked for the whole page.
唯一那个"响亮"的颜色，少量用在最重要的东西上（主按钮、链接、聚焦框），其余全部保持中性。最多一个、饱和度低于约 80%、全页锁定。
_Avoid_: "theme color" used loosely; 点缀色 is an acceptable synonym

**Neutral · 中性色**:
The non-color palette doing ~90% of a page (backgrounds, text, borders) in one consistent gray family,
warm or cool but not both.
承担页面约 90% 的"无彩色"（背景、文字、边框），用同一个一致的灰色系，要么暖、要么冷，不混用。

**Palette · 配色 / 调色板**:
The fixed set of colors a design commits to.
一个设计所锁定使用的那组颜色。

**Saturation · 饱和度**:
How intense or vivid a color is. Accents stay below ~80% so they read as considered, not neon.
颜色的鲜艳程度。强调色保持在约 80% 以下，才显得克制而非刺眼。

**Contrast · 对比度**:
The difference (usually light vs dark) that makes text legible and elements separable. Must meet WCAG AA.
明暗等差异，让文字可读、元素可分。需满足 WCAG AA 标准。

**Gradient / mesh gradient · 渐变 / 网格渐变**:
A smooth blend between colors; a mesh gradient blends several color blobs. Overused as a hero
background by AI.
颜色之间的平滑过渡；网格渐变是多个色块的混合。被 AI 过度用作英雄区背景。

**The Lila rule · 紫光禁令** ⚑ tell:
The purple/blue gradient with a neon button glow is the single most recognizable AI fingerprint; avoid
it by default. Fix: warm neutral base + one flat accent, no glow.
紫蓝渐变加霓虹按钮辉光，是最容易被认出的 AI 指纹；默认要避免。改法：暖中性底色 + 一个平涂强调色，不发光。
_Source_: DTF §4.2 · §9.A

**Neon glow · 霓虹辉光** ⚑ tell:
An outer glow (box-shadow) around buttons/cards. Reads as cheap. Fix: inner borders or subtle tinted
shadows instead.
按钮/卡片外面的一圈发光（box-shadow）。显得廉价。改法：改用内边框或淡淡的带色阴影。

**Pure black ban · 纯黑禁用** ⚑ tell:
Using #000000 for backgrounds or text kills depth and looks digital-default. Use off-black (zinc-950,
warm charcoal) instead.
用 #000000 做背景或文字会压掉层次、显得是数字默认值。改用近黑（zinc-950、暖炭黑）。
_Source_: DTF §9.A · §8.B

---

## Layout & Composition · 布局与构图

**Composition · 构图**:
How elements are placed, sized, and arranged in the frame: what goes where, how big, with how much space.
画面中元素如何摆放、多大、如何排列：什么放哪、多大、留多少空间。

**Compositional decision · 构图决策**:
A deliberate choice about placement, size, or arrangement. AI slop often "shows no compositional
decision" because everything defaults to centered.
关于摆放、大小、排列的有意选择。AI slop 常常"看不出做过构图决策"，因为所有东西默认居中。

**Layout · 布局**:
The overall structural arrangement of a page's sections and grid.
页面各区块与栅格的整体结构安排。

**Hierarchy · 层级（视觉主次）**:
The visual ordering that tells the eye what to read first, via size, weight, color, and space.
通过大小、字重、颜色、间距，告诉视线先看什么的视觉主次关系。

**Whitespace · 留白 / 负空间** (negative space):
Intentional empty space that gives a layout focus and a premium feel.
有意留下的空白，让版面有焦点、显得高级。

**Hero · 英雄区**:
The first full screen of a landing page: the primary headline, subtext, and main call to action.
落地页的第一屏：主标题、副文案和主要行动号召。

**CTA (call to action) · 行动号召按钮**:
The button or link asking the user to do the one main thing (e.g. "Start a review"). One primary CTA
intent per page.
请用户去做那件最主要的事的按钮或链接（如 "Start a review"）。每页只有一个主 CTA 意图。

**Asymmetric split · 非对称分栏** (asymmetry 非对称 / symmetry 对称):
A hero or section with content on one side and an asset on the other, often at unequal ratios. The
corpus's default fix for the centered-hero tell.
一侧文字、一侧图像的英雄区或区块，常用不等比例。是语料库对"居中英雄区"的默认修法。

**Centered-hero tell · 居中英雄区** ⚑ tell:
A centered headline floating over a dark gradient. The default hero the model always tries first;
signals no compositional decision was made. Fix: asymmetric split.
标题居中、浮在深色渐变上。模型永远先试的默认英雄区；表明没做过构图决策。改法：非对称分栏。
_Source_: DTF §0.D · §4.3

**Three-equal-cards tell · 三等分卡片** ⚑ tell:
Icon + bold word + one sentence, three identical bordered cards across. The most generic feature row.
Fix: asymmetric list, zigzag, or a bento grid with rhythm.
图标 + 粗体词 + 一句话，三张一模一样的带框卡片并排。最通用的功能行。改法：非对称列表、错位排布，或有节奏的 bento 网格。
_Source_: DTF §9.C · §4.7

**Section-number eyebrow · 编号眉标** ⚑ tell:
Prefixing eyebrows with numbers (`00 / How it works`), or putting an eyebrow above every section.
Templated rhythm. Rule: max one eyebrow per three sections, and never numbered.
给眉标加编号（`00 / How it works`），或每个区块都顶一个眉标。模板化节奏。规则：每三个区块最多一个眉标，且绝不编号。
_Source_: DTF §4.7 · §9.F

---

## Content, Copy & Data · 内容、文案与数据

**Filler verb · 空洞动词** ⚑ tell:
AI copywriting clichés that say nothing: Elevate, Unleash, Seamless, Next-Gen. Fix: the concrete action.
什么也没说的 AI 文案套话：Elevate、Unleash、Seamless、Next-Gen。改法：写具体动作。
_Source_: DTF §9.D · §4.9

**Fake-perfect number · 假精确数字** ⚑ tell:
Suspiciously round invented metrics with no source (`99.99% accuracy`). Reads as hallucinated. Fix:
real, messy, sourced numbers, or none.
可疑地整齐、无来源的编造数字（`99.99% accuracy`）。像是幻觉出来的。改法：真实、带零头、有来源的数字，或者不用。
_Source_: DTF §9.D · §4.9

**Jane Doe effect · 无名氏效应** ⚑ tell:
A placeholder testimonial: generic name + vague role + no company (`Sarah Chen, Developer`).
Attribution with zero specificity. Fix: real name, specific role, real company.
占位式证言：通用名字 + 模糊头衔 + 没有公司（`Sarah Chen, Developer`）。毫无具体信息的署名。改法：真实姓名、具体头衔、真实公司。
_Source_: DTF §9.D

**Startup-slop name · 创业烂大街命名** ⚑ tell:
A generic invented brand name, often with a token-colored letter (Nexus, Acme, Apex, Cloudly). Fix: a
plain, sayable, descriptive name.
通用的编造品牌名，常给某个字母上个色（Nexus、Acme、Apex、Cloudly）。改法：朴素、好念、能说明产品的名字。
_Source_: DTF §9.D

**Version-label tell · 版本标签** ⚑ tell:
`v2.0 BETA`, `EARLY ACCESS`, `INVITE-ONLY PREVIEW` used as a hero eyebrow. Status theater, not a value
proposition. Fix: an eyebrow that states what the product does.
把 `v2.0 BETA`、`EARLY ACCESS`、`INVITE-ONLY PREVIEW` 当英雄区眉标。是身份表演，不是价值主张。改法：写清产品做什么的眉标。
_Source_: DTF §9.F

**Scroll cue · 滚动提示** ⚑ tell:
`↓ Scroll to explore` and animated wheel icons. The user is already on the hero; they know how to
scroll. Fix: delete it.
`↓ Scroll to explore` 和滚轮动画图标。用户已经在看英雄区了，知道怎么滚。改法：删掉。
_Source_: DTF §9.F

**Decorative status dot · 装饰性状态圆点** ⚑ tell:
A colored ● before nav items or a fake "Live" badge, used as decoration not real state. Fix: drop it,
or make the dot mean something.
导航项前的彩色 ● 或假的 "Live" 徽章，只是装饰不代表真实状态。改法：去掉，或让圆点真的有含义。
_Source_: DTF §9.F

**Div-based fake screenshot · div 拼的假截图** ⚑ tell:
A "product preview" built from styled divs (fake terminal, traffic-light window, fake log lines). The
#1 LLM design tell. Fix: a real screenshot, a generated image, or none.
用样式化的 div 拼出来的"产品预览"（假终端、红黄绿灯窗口、假日志行）。头号 LLM 设计痕迹。改法：真截图、生成的图，或者不放。
_Source_: DTF §4.8 · §9.E
