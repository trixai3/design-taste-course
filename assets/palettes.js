/* ==========================================================================
   palettes.js — Lesson 10 (Color). Two behaviours, one entry: Palette.mount().

   1. Live-recolor board. FAMS below is the single source of truth for the five
      palette families (each a set of --f-* token values). For every
      [data-recolor] stage it builds a swatch board and a role readout, and on
      click writes the chosen family's tokens onto the stage. Same markup,
      different values: that IS the lesson.
   2. Warm/cool gray toggle. [data-gray] holds a .gray-panel and a button that
      flips it between the temperature clash and the locked version.

   Degrades: no JS means the stage keeps its CSS-default family and the gray
   panel shows its violation state. The board and toggle are pure enhancement.
   ========================================================================== */
(function (global) {
  "use strict";

  /* role order shown in the readout; the four a learner should be able to name */
  var READOUT = ["bg", "surface", "ink", "accent"];

  /* every value here is chosen to obey the rules the lesson teaches:
     saturation under ~80%, no pure #000/#fff, warm-or-cool grays kept
     internally consistent, and exactly one accent per family. */
  var FAMS = [
    { key: "cold", name: "Cold Luxury",
      note: "Cool grays and near-black with one steel-blue accent. Quiet, restrained, expensive.",
      t: { bg: "#EDF0F2", surface: "#FCFDFE", ink: "#14181B", "ink-soft": "#4C575E",
           line: "rgba(20,24,27,.12)", accent: "#3C5A6E", "accent-ink": "#294250",
           shadow: "rgba(20,24,27,.18)" } },
    { key: "forest", name: "Forest",
      note: "Warm cream substrate under deep, desaturated forest green. Grounded and natural.",
      t: { bg: "#F1EFE6", surface: "#FBFAF3", ink: "#18211A", "ink-soft": "#47544B",
           line: "rgba(24,33,26,.12)", accent: "#2E6B44", "accent-ink": "#1E4E30",
           shadow: "rgba(24,33,26,.18)" } },
    { key: "tan", name: "Black & Tan",
      note: "Dark warm substrate with a single camel accent. The accent is light because the ground is dark.",
      t: { bg: "#16130E", surface: "#201C15", ink: "#EFE7D8", "ink-soft": "#B3A991",
           line: "rgba(239,231,216,.14)", accent: "#C89B5C", "accent-ink": "#E2BB7C",
           shadow: "rgba(0,0,0,.42)" } },
    { key: "cobalt", name: "Cobalt + Cream",
      note: "Cream paper and a confident cobalt. One saturated hero color on a neutral base.",
      t: { bg: "#F4F1E8", surface: "#FFFFFE", ink: "#15181E", "ink-soft": "#4B5059",
           line: "rgba(21,24,30,.12)", accent: "#2A46C8", "accent-ink": "#1D33A0",
           shadow: "rgba(21,24,30,.16)" } },
    { key: "terra", name: "Terracotta + Slate",
      note: "Slate-gray ink on warm paper, warmed by an earthy terracotta accent.",
      t: { bg: "#EFECE5", surface: "#FAF8F2", ink: "#232A2E", "ink-soft": "#545E63",
           line: "rgba(35,42,46,.12)", accent: "#C0552E", "accent-ink": "#9B4020",
           shadow: "rgba(35,42,46,.16)" } }
  ];

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  /* write a family's tokens onto the stage element */
  function apply(stage, fam) {
    Object.keys(fam.t).forEach(function (k) {
      stage.style.setProperty("--f-" + k, fam.t[k]);
    });
  }

  /* the readout's prose (the per-family note) is the one user-facing string
     that a translated mirror needs to localize; pass opts.notes to override
     it per family key. English is the default, so the base lesson is unchanged. */
  function readoutHTML(fam, note) {
    var roles = READOUT.map(function (r) {
      return '<div class="pal-role"><div class="chip" style="background:' + fam.t[r] + '"></div>' +
             '<span class="r">' + r + '</span><span class="h">' + fam.t[r].toUpperCase() + "</span></div>";
    }).join("");
    return '<h4>' + fam.name + '</h4><p class="pal-note">' + note + "</p>" +
           '<div class="pal-roles">' + roles + "</div>";
  }

  function noteFor(fam, opts) {
    return (opts.notes && opts.notes[fam.key]) || fam.note;
  }

  function mountRecolor(stage, opts) {
    var board = stage.querySelector(".pal-board");
    var readout = stage.querySelector(".pal-readout");
    if (!board || !readout) return;

    var buttons = [];
    FAMS.forEach(function (fam, i) {
      var chips = '<div class="pal-fam-chips">' +
        '<span style="background:' + fam.t.bg + '"></span>' +
        '<span style="background:' + fam.t.surface + '"></span>' +
        '<span style="background:' + fam.t.ink + '"></span>' +
        '<span style="background:' + fam.t.accent + '"></span></div>';
      var b = el("button", "pal-fam", chips + '<span class="pal-fam-name">' + fam.name + "</span>");
      b.type = "button";
      b.addEventListener("click", function () {
        apply(stage, fam);
        readout.innerHTML = readoutHTML(fam, noteFor(fam, opts));
        buttons.forEach(function (x) { x.classList.remove("is-active"); });
        b.classList.add("is-active");
      });
      buttons.push(b);
      board.appendChild(b);
    });

    // start on the family already set by CSS defaults (the first one)
    apply(stage, FAMS[0]);
    readout.innerHTML = readoutHTML(FAMS[0], noteFor(FAMS[0], opts));
    buttons[0].classList.add("is-active");
  }

  /* the gray-toggle's labels and state sentences, English by default; a mirror
     passes opts.gray to localize. State strings are innerHTML (they carry a <b>). */
  var GRAY_EN = {
    lock: "Lock the temperature",
    clash: "Show the clash",
    lockedState: "<b>Locked.</b> Every gray shares one warm undertone, so the panel reads as one decision.",
    clashState: "<b>Clash.</b> A cool-gray ground, a warm-gray border, warm ink, a cool chip. The undertones fight and it reads cheap."
  };

  function mountGray(root, opts) {
    var panel = root.querySelector(".gray-panel");
    var btn = root.querySelector("[data-gray-toggle]");
    var state = root.querySelector(".gray-state");
    if (!panel || !btn) return;
    var g = {};
    Object.keys(GRAY_EN).forEach(function (k) { g[k] = (opts.gray && opts.gray[k]) || GRAY_EN[k]; });
    function paint() {
      var locked = panel.classList.contains("locked");
      btn.textContent = locked ? g.clash : g.lock;
      if (state) state.innerHTML = locked ? g.lockedState : g.clashState;
    }
    btn.addEventListener("click", function () { panel.classList.toggle("locked"); paint(); });
    paint();
  }

  function mount(root, opts) {
    root = root || document;
    opts = opts || {};
    Array.prototype.forEach.call(root.querySelectorAll("[data-recolor]"), function (s) { mountRecolor(s, opts); });
    Array.prototype.forEach.call(root.querySelectorAll("[data-gray]"), function (r) { mountGray(r, opts); });
  }

  global.Palette = { mount: mount, FAMS: FAMS };
})(window);
