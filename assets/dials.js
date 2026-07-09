/* ==========================================================================
   dials.js — the three-dial simulator for the Design Taste course.

   Renders one mini landing page (hero + feature row) that visibly re-renders
   as three dials move:
     VARIANCE  (1-10)  symmetry  -> asymmetry
     MOTION    (1-10)  static    -> cinematic
     DENSITY   (1-10)  airy      -> cockpit

   Exposes:
     DialSim.mount({ stage, controls, readout, presets, replay })  // live sim
     DialSim.renderMini(containerEl, {v,m,d})                       // static preview
     DialSim.guessGame({ container, rounds })                       // the game

   Visual styling for .dstage lives in course.css so minis and the live stage
   look identical. No dependencies.
   ========================================================================== */
(function (global) {
  "use strict";

  var REDUCE = global.matchMedia &&
    global.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function band(n) { return n <= 3 ? "lo" : n <= 7 ? "mid" : "hi"; }

  var MEANING = {
    variance: {
      label: "Variance",
      lo: "Symmetric, centered, predictable.",
      mid: "Offset. Left-aligned, split layouts.",
      hi: "Asymmetric. Broken grid, big empty zones."
    },
    motion: {
      label: "Motion",
      lo: "Static. Hover states only.",
      mid: "Fluid. Transitions and entrance fades.",
      hi: "Cinematic. Continuous, choreographed motion."
    },
    density: {
      label: "Density",
      lo: "Airy. Gallery whitespace, big type.",
      mid: "Balanced. Standard app spacing.",
      hi: "Cockpit. Tight, divider lines, mono numbers."
    }
  };

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  // ---- build one stage (shared by live sim and minis) ----
  function buildStage() {
    var s = el("div", "dstage");
    s.innerHTML =
      '<div class="d-nav"><span class="d-brand">Reviewline</span>' +
      '<span class="d-navlinks"><span>How it works</span><span>Pricing</span><span>Docs</span></span>' +
      '<span class="d-cta">Start a review</span></div>' +

      '<div class="d-hero">' +
        '<div class="d-htext">' +
          '<p class="d-eb">Code review, on every pull request</p>' +
          '<h4 class="d-h">Catch the bug before your teammate does.</h4>' +
          '<p class="d-sub">Reviewline reads each pull request against your codebase and comments in about a minute.</p>' +
          '<span class="d-cta d-cta--hero">Start a review</span>' +
        '</div>' +
        '<div class="d-hasset" aria-hidden="true"></div>' +
      '</div>' +

      '<div class="d-feat">' +
        '<div class="d-item"><span class="d-num">01</span><b>Reads the whole diff</b><p>Pulls in the files your change touches, not just the patch.</p></div>' +
        '<div class="d-item"><span class="d-num">02</span><b>Comments inline</b><p>Findings land on the exact lines, with a suggested fix.</p></div>' +
        '<div class="d-item"><span class="d-num">03</span><b>Runs in your cloud</b><p>Self-hosted by default. Source never leaves your infra.</p></div>' +
      '</div>';
    return s;
  }

  function applyDials(stage, v, m, d) {
    stage.setAttribute("data-v", band(v));
    stage.setAttribute("data-m", band(m));
    stage.setAttribute("data-d", band(d));
    stage.style.setProperty("--v", v);
    stage.style.setProperty("--m", m);
    stage.style.setProperty("--d", d);
    // motion: honor reduced-motion by never adding infinite loops
    stage.classList.toggle("d-live-motion", band(m) === "hi" && !REDUCE);
  }

  function playEntrance(stage, m) {
    if (REDUCE || band(m) === "lo") return;
    stage.classList.remove("is-entering");
    // force reflow so the animation restarts
    void stage.offsetWidth;
    stage.style.setProperty("--enter-dist", (band(m) === "hi" ? 26 : 14) + "px");
    stage.classList.add("is-entering");
  }

  // ---- live simulator ----
  function mount(opts) {
    var host = document.querySelector(opts.stage);
    var stage = buildStage();
    host.appendChild(stage);

    var inputs = {};
    ["variance", "motion", "density"].forEach(function (k) {
      inputs[k] = document.querySelector(opts.controls + ' [data-dial="' + k + '"]');
    });
    var readout = opts.readout ? document.querySelector(opts.readout) : null;

    function vals() {
      return {
        v: +inputs.variance.value,
        m: +inputs.motion.value,
        d: +inputs.density.value
      };
    }

    function renderReadout(x) {
      if (!readout) return;
      readout.innerHTML = "";
      [["variance", x.v], ["motion", x.m], ["density", x.d]].forEach(function (pair) {
        var key = pair[0], n = pair[1], b = band(n);
        var row = el("div", "d-readrow");
        row.innerHTML =
          '<span class="d-readnum">' + n + '</span>' +
          '<span class="d-readlab">' + MEANING[key].label + "</span>" +
          '<span class="d-readmean">' + MEANING[key][b] + "</span>";
        readout.appendChild(row);
      });
    }

    function update(play) {
      var x = vals();
      applyDials(stage, x.v, x.m, x.d);
      renderReadout(x);
      // reflect value bubble next to each slider
      ["variance", "motion", "density"].forEach(function (k) {
        var out = document.querySelector(opts.controls + ' [data-out="' + k + '"]');
        if (out) out.textContent = inputs[k].value;
      });
      if (play) playEntrance(stage, x.m);
    }

    ["variance", "motion", "density"].forEach(function (k) {
      inputs[k].addEventListener("input", function () { update(false); });
    });

    if (opts.presets) {
      document.querySelectorAll(opts.presets + " [data-preset]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var p = btn.getAttribute("data-preset").split(",").map(Number);
          inputs.variance.value = p[0];
          inputs.motion.value = p[1];
          inputs.density.value = p[2];
          update(true);
        });
      });
    }
    if (opts.replay) {
      var rb = document.querySelector(opts.replay);
      if (rb) rb.addEventListener("click", function () { playEntrance(stage, vals().m); });
    }

    update(true);
    return { update: update };
  }

  // ---- static mini preview ----
  function renderMini(container, dials) {
    var stage = buildStage();
    stage.classList.add("dstage--mini");
    container.appendChild(stage);
    applyDials(stage, dials.v, dials.m, dials.d);
    return stage;
  }

  // ---- guess-the-dials game ----
  var ROUNDS = [
    { v: 3, m: 2, d: 5, note: "public-sector service" },
    { v: 9, m: 8, d: 3, note: "creative agency" },
    { v: 7, m: 6, d: 4, note: "mainstream SaaS landing" },
    { v: 6, m: 4, d: 8, note: "developer tool, data-dense" },
    { v: 8, m: 7, d: 3, note: "premium consumer" }
  ];

  function guessGame(opts) {
    var container = document.querySelector(opts.container);
    var rounds = opts.rounds || ROUNDS;
    var totalHits = 0, totalDials = rounds.length * 3, done = 0;

    var scorebar = el("div", "game-score",
      'Dials guessed within +/-1: <b id="game-hits">0</b> / ' + totalDials);
    container.appendChild(scorebar);
    var hitsEl = scorebar.querySelector("#game-hits");

    rounds.forEach(function (target, i) {
      var round = el("div", "game-round");
      var preview = el("div", "game-preview");
      renderMini(preview, target);
      round.appendChild(preview);

      var form = el("div", "game-form");
      form.innerHTML = '<p class="game-q">Round ' + (i + 1) +
        ": read this page. Your guess (1-10 each):</p>";
      ["v", "m", "d"].forEach(function (k) {
        var label = k === "v" ? "Variance" : k === "m" ? "Motion" : "Density";
        var wrap = el("label", "game-input");
        wrap.innerHTML = "<span>" + label + "</span>";
        var inp = document.createElement("input");
        inp.type = "number"; inp.min = 1; inp.max = 10;
        inp.setAttribute("data-k", k);
        wrap.appendChild(inp);
        form.appendChild(wrap);
      });
      var check = el("button", "btn game-check", "Check");
      form.appendChild(check);
      var result = el("div", "game-result");
      form.appendChild(result);
      round.appendChild(form);
      container.appendChild(round);

      check.addEventListener("click", function () {
        if (round.getAttribute("data-done") === "true") return;
        round.setAttribute("data-done", "true");
        check.disabled = true;
        var out = "";
        ["v", "m", "d"].forEach(function (k) {
          var inp = form.querySelector('[data-k="' + k + '"]');
          var guess = Number(inp.value);
          var actual = target[k];
          var hit = Math.abs(guess - actual) <= 1;
          if (hit) { totalHits++; }
          var lab = k === "v" ? "Variance" : k === "m" ? "Motion" : "Density";
          out += '<div class="game-line" data-hit="' + hit + '">' +
            lab + ': you ' + (isNaN(guess) ? "-" : guess) + ', actual ' + actual +
            " (" + band(actual) + ") " + (hit ? "hit" : "miss") + "</div>";
        });
        out += '<div class="game-note">This reads as a ' + target.note + " (" +
          target.v + " / " + target.m + " / " + target.d + ").</div>";
        result.innerHTML = out;
        done++;
        hitsEl.textContent = totalHits;
        if (done === rounds.length) hitsEl.parentElement.setAttribute("data-complete", "true");
      });
    });
  }

  global.DialSim = { mount: mount, renderMini: renderMini, guessGame: guessGame };
})(window);
