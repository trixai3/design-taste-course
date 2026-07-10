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

## Method · The Design Read · 方法：设计判读

**Design read · 设计判读**:
The one sentence said before touching anything: "Reading this as: [page kind] for [audience], with a
[vibe] language, leaning toward [foundation]." It moves you off autopilot.
动手之前先说的那一句话：“把它读作：给[某人群]的[某种页面]，用[某种气质]的语言，倾向于[某个基座]。”它让你不再默认套路。
_Source_: DTF §0

**Brief inference · 读需求（读懂房间）**:
Inferring what the user actually wants from the brief and its signals (page kind, vibe words,
references, audience) before generating.
在动手前，从需求和它的信号（页面类型、气质词、参考、受众）里推断用户真正想要什么。
_Source_: DTF §0

**Audience · 受众**:
Who scans the page and what they need. The part of the read that actually sets the dials. Trust-first
buyers, design-conscious consumers, and the general public each want different designs.
谁会看这个页面、他们需要什么。判读里真正决定“旋钮”的那一环。求稳的采购、懂设计的消费者、普通大众，各要不同的设计。

**Vibe words · 气质词**:
The two or three adjectives that name the feel: trust-first, premium editorial, playful, brutalist,
accessibility-first.
用来命名感觉的两三个形容词：求稳、高级编辑感、俏皮、粗野、无障碍优先。

**Design system vs aesthetic family · 设计系统 vs 美学家族**:
A design system is an official, installable package with real tokens (Carbon, GOV.UK Frontend,
Fluent). An aesthetic family is a look with no official package (glassmorphism, editorial, brutalist),
built with native CSS and named honestly.
设计系统是官方、可安装、有真实 token 的包（Carbon、GOV.UK Frontend、Fluent）。美学家族是没有官方包的风格
（玻璃拟态、编辑感、粗野），用原生 CSS 实现，并诚实标注。
_Avoid_: 把美学趋势（bento、玻璃拟态）当成官方系统
_Source_: DTF §2

---

## Style families · 风格族 (Lesson 04+)

**Style family · 风格族**:
A named, repeatable look defined by its substrate, hierarchy carrier, and edge signature. Naming a
family compresses ten design decisions into three words, which is what makes AI steerable.
一种有名字、可复用的外观，由基底、层级载体、边缘签名共同定义。说出族名等于一次性压缩了十个设计决定，这正是能"指挥" AI 的原因。

**Substrate · 基底（底面）**:
The background surface a design sits on: pure white, warm bone, cream, silver-grey, stone. The first
question when reading a family.
设计所处的背景表面：纯白、暖骨白、奶油色、银灰、石灰。判读风格族时要问的第一个问题。

**Premium Utilitarian Minimalism (PUM) · 高级实用极简**:
White or warm-bone substrate, 1px hairline borders (#EAEAEA), serif display over a clean sans, muted
pastel tags, shadows near zero. A document pretending to be an app. Smells like Notion.
白或暖骨白基底、1px 发丝边框（#EAEAEA）、衬线大标题配干净无衬线正文、灰粉彩标签、几乎无阴影。像"伪装成应用的文档"。闻起来像 Notion。
_Source_: minimalist-ui (upstream `minimalist-skill`)

**Editorial Luxury · 编辑奢华风**:
Warm cream substrate with film grain, massive high-contrast serif headings, sage/espresso accents,
whitespace treated as the product. Smells like Kinfolk magazine or high-end real estate.
带胶片颗粒的暖奶油基底、巨大的高对比衬线标题、鼠尾草绿/浓缩咖啡色点缀、把留白当作产品本身。闻起来像 Kinfolk 杂志或高端地产。
_Source_: high-end-visual-design §3.A.2

**Soft Structuralism · 软结构主义**:
Silver-grey or white substrate, massive bold grotesk type, borderless white components floating on
ultra-diffuse shadows, radius 16-20px. Smells like Apple Health.
银灰或纯白基底、粗重的怪诞体大字、无边框白色组件浮在极度弥散的阴影上、圆角 16-20px。闻起来像 Apple 健康。
_Source_: high-end-visual-design §3.A.3

**Pristine Light · 素净纸感**:
Off-white paper substrate, sharp near-black sans with strong hierarchy, hairline rules instead of
cards, radius ~0, no shadows. Reads like a well-set book page. Smells like quality print or Stripe's
editorial pages.
米白纸感基底、锐利近黑的无衬线字加强烈层级、用发丝分隔线代替卡片、圆角约 0、无阴影。读起来像排得很好的书页。闻起来像高质量印刷品或 Stripe 的编辑页面。
_Source_: imagegen-frontend-web §2 (Theme Paradigm 1)

**Quiet Premium Neutral · 静奢中性**:
Bone/sand/taupe/stone substrate (never white), deliberately lowered contrast, light weights,
wide-tracked uppercase wordmarks, near-square corners. Restraint as the brand. Smells like Aesop.
骨白/沙色/灰褐/石色基底（绝不用纯白）、刻意压低的对比度、细字重、宽字距全大写标识、近直角。克制即品牌。闻起来像 Aesop。
_Avoid_: 低对比要检查正文仍过 WCAG AA
_Source_: imagegen-frontend-web §2 (Theme Paradigm 4)

**Ethereal Glass · 空灵玻璃**:
Deepest OLED black substrate with dim colored orbs (emerald, blue) as a radial mesh, and frosted
cards with a bright refraction rim. Smells like Linear, Vercel, AI startups.
最深的 OLED 黑基底、暗色光球（翡翠绿、蓝）构成的径向网格、加上带明亮折射边的磨砂卡片。闻起来像 Linear、Vercel、AI 创业公司。
_Source_: high-end-visual-design §3.A.1

**Deep Dark Mode · 深灰暗色模式**:
Graphite / zinc substrate (never pure black), solid bordered cards, one restrained accent glow, no
blur. The workhorse product dark mode. Smells like GitHub dark, Raycast.
石墨/锌灰基底（绝非纯黑）、实心带边卡片、一个克制的强调色微光、无模糊。最常用的产品暗色模式。闻起来像 GitHub 暗色、Raycast。
_Source_: imagegen-frontend-web §2 (Theme Paradigm 2)

**Dark Tech / Hacker · 黑客终端风**:
Near-black green-tinted substrate, monospace only, neon green accent, terminal motifs (prompt,
cursor, command output). You type here. Smells like devtools and CLIs.
近黑带绿的基底、纯等宽字体、霓虹绿强调色、终端元素（提示符、光标、命令输出）。你在这里"敲命令"。闻起来像开发者工具和 CLI。
_Source_: DTF §2.B

**Tactical Telemetry · 战术遥测风**:
Deep black, amber phosphor monospace with faint glow, ASCII framing (corner brackets, crosshairs),
coordinate and status readouts. You monitor here. Smells like aerospace HUDs, mission control.
深黑底、带微光的琥珀荧光等宽字、ASCII 框架（角括号、准星）、坐标与状态读数。你在这里"监看"。闻起来像航空 HUD、任务控制台。
_Avoid_: 与 Dark Tech 混淆（一个"敲"，一个"看"）
_Source_: industrial-brutalist-ui §2.2

**Bold Studio Solid · 大胆纯色块**:
One saturated color field edge to edge (royal blue, oxblood, forest, vermilion, emerald), crisp
high-contrast type, a single bright pop reserved for the CTA. The only bold family that is not dark.
一整块满铺的高饱和色（宝蓝、牛血红、森绿、朱红、翡翠），锐利的高对比文字，只留一个亮色给 CTA。唯一不走暗色的"大胆"族。
_Source_: imagegen-frontend-web §2 (Theme Paradigm 3)

**Brutalism · 粗野主义**:
A raw, mechanical style family that rejects consumer-UI polish (no gradients, no soft shadows, no
rounded corners). It splits into two committed modes that share only hazard red: Swiss Industrial
Print (light) and Tactical Telemetry (dark). Pick one and commit every layer; mixing reads as a costume.
一种原始、机械的风格族，拒绝消费级 UI 的精致（无渐变、无柔阴影、无圆角）。它分成两个只共用警示红的
"下定决心"模式：Swiss Industrial Print（亮）与 Tactical Telemetry（暗）。选一个并让每一层都服从它，混用会显得像"戏服"。
_Source_: industrial-brutalist-ui §2

**Swiss Industrial Print · 瑞士工业印刷风**:
Brutalism's light mode. Unbleached paper substrate, heavy neo-grotesque macro-type at clamp scale,
visible blueprint grid, oversized viewport-bleeding numerals, hazard red as the only accent.
粗野主义的亮色模式。未漂白纸质基底、超大号的厚重新怪诞体、可见的蓝图网格、溢出视口的巨大数字、警示红作唯一强调色。
_Source_: industrial-brutalist-ui §2.1

---

## Typography · 排版

**Macro-typography · 宏观排版（结构性大字）**:
Type used as structure: massive uppercase headlines at `clamp()` scale, tight negative tracking,
compressed leading, so glyphs form solid architectural blocks. The Swiss Industrial Print backbone.
把字当结构用：`clamp()` 级的超大全大写标题、紧的负字距、压缩行高，让字形拼成坚实的建筑块。Swiss Industrial Print 的骨架。
_Source_: industrial-brutalist-ui §3.1

**Micro-typography · 微观排版（数据小字）**:
Small fixed-size monospace for all metadata, IDs, and coordinates: uppercase, generously tracked to
mimic a terminal matrix. The Tactical Telemetry backbone.
用于所有元信息、编号、坐标的小号定宽等宽字：全大写、宽字距，模仿终端矩阵。Tactical Telemetry 的骨架。
_Source_: industrial-brutalist-ui §3.2

**Neo-grotesque · 新怪诞体**:
The heavy, neutral sans-serif lineage (Neue Haas Grotesk, Archivo Black, Inter Black) used for
macro-type. "Grotesque" is the old name for early sans-serifs, not a value judgment.
厚重、中性的无衬线谱系（Neue Haas Grotesk、Archivo Black、Inter Black），用于宏观大字。"Grotesque（怪诞体）"是早期无衬线的旧称，不是贬义。

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

**Hazard red · 警示红**:
Aviation/alert red (#E61919 / #FF2A2A), the single accent in both Brutalist modes. Used for
structural rules and strikes (Swiss) or alert markers (Telemetry), never as decoration.
航空/警示红（#E61919 / #FF2A2A），两个 Brutalist 模式共用的唯一强调色。用于结构分隔线、删除线（Swiss）或告警标记（Telemetry），绝不作装饰。
_Source_: industrial-brutalist-ui §4

**Scanline · 扫描线**:
Faint horizontal lines laid over a dark UI (a `repeating-linear-gradient`) to fake a CRT electron
sweep. The Tactical Telemetry texture.
铺在暗色界面上的一层淡淡水平线（`repeating-linear-gradient`），模拟 CRT 电子束扫描。Tactical Telemetry 的质感。
_Source_: industrial-brutalist-ui §7

**Halftone / dithering · 半调 / 抖动**:
Turning continuous tone into a dot-matrix (halftone) or 1-bit pattern (dithering) to degrade digital
perfection and read as printed or low-bit hardware. A brutalist texture, used sparingly.
把连续色调变成点阵（半调）或 1-bit 图案（抖动），去掉数字的完美感，读起来像印刷品或低位硬件。粗野主义的质感，克制使用。
_Source_: industrial-brutalist-ui §7

**The Lila rule · 紫光禁令** ⚑ tell:
The purple/blue gradient with a neon button glow is the single most recognizable AI fingerprint; avoid
it by default. Fix: warm neutral base + one flat accent, no glow.
紫蓝渐变加霓虹按钮辉光，是最容易被认出的 AI 指纹；默认要避免。改法：暖中性底色 + 一个平涂强调色，不发光。
_Source_: DTF §4.2 · §9.A

**OLED black · OLED 纯黑（近黑）**:
The deepest near-black (around #050505) used as a substrate so colored orbs and glows read cleanly.
Still not pure #000000: even at maximum darkness, true black kills depth.
最深的近黑（约 #050505），做基底让彩色光球和辉光更干净地显现。但仍不是纯 #000000：再暗也不用纯黑，否则会压掉层次。
_Source_: high-end-visual-design §3.A.1

**Glassmorphism / frosted glass · 玻璃拟态 / 磨砂玻璃**:
A frosted, semi-transparent surface that blurs what is behind it. Done right it needs three parts:
backdrop blur, a 1px light inner border, and a bright inner highlight. Blur alone is the common fail.
一种磨砂、半透明、能模糊其后内容的表面。做对需要三件套：背景模糊 + 1px 亮色内边框 + 明亮的内高光。只有模糊是最常见的翻车。
_Source_: DTF §2.B · §5

**Backdrop blur · 背景模糊**:
The `backdrop-filter: blur()` that blurs whatever sits behind a translucent element. The base
ingredient of glass, but not sufficient on its own.
`backdrop-filter: blur()`，用来模糊半透明元素背后的内容。玻璃效果的基础原料，但单靠它不够。

**Refraction rim / edge · 折射边（亮边）**:
The 1px light inner border plus inner highlight (`inset 0 1px 0 rgba(255,255,255,.2)`) that makes
light appear to bend at a glass edge. This lit rim, not the blur, is what sells real glass.
1px 亮色内边框加内高光（`inset 0 1px 0 rgba(255,255,255,.2)`），让光看起来在玻璃边缘发生弯折。真正"卖出"玻璃感的是这条亮边，而非模糊。
_Source_: DTF §5

**Liquid glass · 液态玻璃**:
Apple's frosted-glass material, documented for Apple platforms only. There is no official web
`liquid-glass.css`; any web version is an approximation to be labeled as one, with a solid fallback
for `prefers-reduced-transparency`.
苹果的磨砂玻璃材质，仅面向苹果平台。网页上没有官方 `liquid-glass.css`；任何网页实现都是近似，应如实标注，并为 `prefers-reduced-transparency` 提供纯色回退。
_Avoid_: 把网页近似说成"官方 liquid glass"
_Source_: DTF §2.B

**Neon glow · 霓虹辉光** ⚑ tell:
An outer glow (box-shadow) around buttons/cards. Reads as cheap. Fix: inner borders or subtle tinted
shadows instead.
按钮/卡片外面的一圈发光（box-shadow）。显得廉价。改法：改用内边框或淡淡的带色阴影。

**Monochrome palette · 单色调色板**:
A palette built from one hue family only (usually a warm or cool gray ramp), with color reserved for
meaning. The backbone of PUM and Pristine Light.
只用一个色相家族（通常是一条暖灰或冷灰梯度）构成的调色板，颜色只留给有含义的地方。是 PUM 和 Pristine Light 的骨架。

**Muted pastel · 灰粉彩（低饱和粉彩）**:
A heavily desaturated, washed-out tint (pale yellow #FBF3DB, pale blue #E1F3FE) used for tags, code
backgrounds, and small accents. Loud pastels break the family; muted ones define it.
高度去饱和、洗过似的浅色（浅黄 #FBF3DB、浅蓝 #E1F3FE），用于标签、代码底色、小点缀。鲜艳的粉彩会破坏风格族，灰粉彩才是它的定义。
_Source_: minimalist-ui §4

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

**Blueprint grid · 蓝图网格**:
A strict, visible grid where elements are anchored to tracks and separated by solid 1-2px rules
instead of soft padding. The Swiss Industrial Print layout; corners stay at exactly 90 degrees.
一套严格、可见的网格：元素锚定在轨道上，用 1-2px 实线分隔，而不是柔和留白。Swiss Industrial Print 的布局；所有角保持 90 度直角。
_Source_: industrial-brutalist-ui §5

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

### Pattern names · 套路名 (Lesson 07)

Layout patterns you can call for by name. Read each as a **silhouette · 剪影**: strip a page to its
bars and panels, and if you can name the shape in grayscale, you can name it on any real page.

**Hero paradigm · 英雄区范式**:
The shape of the first screen. Six named forms: **Asymmetric Split** (text one side, asset the other),
**Editorial Manifesto** (huge type, no asset, the one earned centered hero), **Video / Media Mask**
(type cut out over a full-bleed asset), **Kinetic-Type** (animated type is the visual), **Curtain-Reveal**
(the hero parts on scroll), **Scroll-Pinned** (the hero stays fixed while content scrolls behind).
第一屏的形态。六种命名范式：Asymmetric Split（一侧文字、一侧图像）、Editorial Manifesto（超大字、无图，唯一"值得"居中的英雄区）、Video / Media Mask（文字镂空在满幅图像上）、Kinetic-Type（动态字本身就是主视觉）、Curtain-Reveal（英雄区随滚动像幕布一样分开）、Scroll-Pinned（英雄区固定不动、内容在其后滚动）。
_Source_: DTF §10

**Bento grid · Bento 网格**:
Asymmetric tiles of mixed sizes (Apple Control Center style). **Cell-count rule · 格数规则**: a bento
has exactly as many cells as you have content for. An empty tile in the middle or at the end means the
grid was planned wrong. Reshape it; never paste a blank to balance it.
大小不一的非对称瓦片（苹果控制中心那种）。格数规则：bento 有多少内容就有多少格。中间或末尾出现空格，说明网格规划错了。重排它，绝不塞一个空块去"凑平衡"。
_Source_: DTF §4.7

**Masonry layout · 瀑布流布局**:
A staggered grid with no fixed row height; tiles pack by their own height. Bento aligns to a grid;
masonry does not.
一套错落的网格，没有固定行高；瓦片按各自高度堆叠。Bento 对齐到网格，masonry 不对齐。
_Source_: DTF §10

**Split-screen scroll · 分屏滚动**:
Two halves that move in opposite directions on scroll: one holds while the other advances, or they
counter-scroll.
两半在滚动时反向移动：一半停住、另一半前进，或彼此对向滚动。
_Source_: DTF §10

**Zigzag · 错位交替** (alternation cap · 交替上限):
Alternating image-left/text-right, then flipped. Fine twice; the third in a row is banal (a pre-flight
fail). Break the run with a full-width section, a bento, or a vertical stack.
图左文右、再翻转的交替排布。用两次没问题；连续第三次就俗了（pre-flight 不合格）。用整幅区块、bento 或纵向堆叠打断它。
_Source_: DTF §4.7

**Composition anchor · 构图锚点**:
Where the text block sits within one section. Reflex puts it left-of-image every time; there are ten
places it can anchor (centered, bottom-left over image, right-third caption, off-grid offset, and so on).
Use at least three different anchors across a page.
文字块在一个区块内落在哪个位置。惯性总是把它放在图像左边；其实有十个可锚定的位置（居中、压在图上的左下、右三分之一说明、偏离网格的错位等）。一个页面里至少用三种不同锚点。
_Source_: imagegen-frontend-web §2

**Eyebrow budget · 眉标预算**:
The ration on small tracked-caps labels above headings: at most one per three sections, hero counts as
one. Overrunning the budget is the templated-rhythm tell.
标题上方那种小号加宽大写标签的配额：每三个区块最多一个，英雄区算一个。超支就是"模板化节奏"的破绽。
_Source_: DTF §4.7 · §9.F

### Motion names · 动效名 (Lesson 08)

Motion is how a page behaves over time, the one layer you cannot screenshot. Name it by watching.

**Staggered reveal · 错峰入场**:
Elements enter one after another on a small delay, not all at once, drawing the eye down in reading
order. The most useful entrance.
元素依次、带小延迟地入场，而非同时出现，引导视线按阅读顺序下移。最实用的入场方式。
_Source_: DTF §5

**Sticky-stack · 粘性堆叠**:
Cards pin at the top and pile up as you scroll, each holding under the last. Turns a plain list into a
deck you move through.
卡片在顶部固定、随滚动层层堆叠，每张压在上一张之下。把普通列表变成可翻阅的一叠。
_Source_: DTF §5

**Pin / scrub · 固定 / 擦洗**:
An element pins in place while scroll position drives its state: it rotates, fills, or plays through
frames. Scroll becomes a scrubber.
元素固定不动，由滚动位置驱动其状态：旋转、填充或逐帧播放。滚动变成了进度擦洗条。
_Source_: DTF §5

**Marquee · 跑马灯**:
A continuous horizontal scroll of text or logos. High energy, editorial. **Hard cap: one per page.**
Two marquees is a fairground.
文字或标志的连续横向滚动。高能量、编辑感。硬上限：每页一个。两个跑马灯就成了游乐场。
_Source_: DTF §5

**Magnetic button · 磁吸按钮**:
A control drifts toward the cursor as it approaches, then springs back. A micro-interaction that makes
a target feel alive and reachable.
控件在光标靠近时向其漂移，随后弹回。让目标显得有生命、可触及的微交互。
_Source_: DTF §5

**Spring vs linear · 弹性 vs 线性** (easing · 缓动):
The easing of a move. **Linear** holds one flat machine speed; **spring** accelerates, overshoots, and
settles. Spring reads as physical, linear reads as robotic.
一段运动的缓动。线性保持一种平直的机械速度；弹性则加速、过冲、再回稳。弹性显得有物理感，线性显得机械。
_Source_: DTF §5

**Motivated motion · 有动机的动效**:
The rule that kills most AI motion: every movement should carry meaning, direct attention, or show a
relationship. Decoration that only wobbles is noise, and noise reads as cheap.
砍掉多数 AI 动效的规则：每一处运动都应承载意义、引导注意或表明关系。只会晃动的装饰就是噪声，噪声显得廉价。
_Source_: DTF §5

**Reduced motion · 减弱动效** (`prefers-reduced-motion`):
Some people get motion sick and their browser says so. Good motion has a resting state to fall back to:
the page still reads, nothing is mid-fade, no information was carried by movement alone.
有些人会晕动，浏览器会通过该设置表明。好的动效要有可回落的静止态：页面依然可读、没有停在半透明中、没有仅靠运动传达的信息。
_Source_: DTF §5

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
