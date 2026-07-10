/* motion.js — wiring for the live motion demos (Lesson 08 + reference).
   One entry point: Motion.mount(root=document). Scans for the interactive
   demos and hooks them up. CSS in motion-demos.css does the actual animating;
   this only handles the parts that need pointer or scroll input, plus the
   replay / easing / reduced-motion switches. Everything degrades gracefully:
   if a demo is missing, its block is simply skipped. */
(function (global) {
  "use strict";

  function all(root, sel) { return Array.prototype.slice.call(root.querySelectorAll(sel)); }

  /* M3 · Pin/Scrub — map an inner scroll position to a 0..1 custom prop. */
  function wireScrub(el) {
    var update = function () {
      var max = el.scrollHeight - el.clientHeight;
      var p = max > 0 ? el.scrollTop / max : 0;
      el.style.setProperty("--p", p.toFixed(3));
    };
    el.addEventListener("scroll", update, { passive: true });
    update();
  }

  /* M5 · Magnetic Button — pull the button toward the pointer, then spring back. */
  function wireMagnet(el) {
    var btn = el.querySelector(".mbtn");
    if (!btn) return;
    var pull = 0.35, cap = 16;
    el.addEventListener("pointermove", function (e) {
      var r = el.getBoundingClientRect();
      var dx = (e.clientX - (r.left + r.width / 2)) * pull;
      var dy = (e.clientY - (r.top + r.height / 2)) * pull;
      dx = Math.max(-cap, Math.min(cap, dx));
      dy = Math.max(-cap, Math.min(cap, dy));
      btn.style.setProperty("--mx", dx.toFixed(1) + "px");
      btn.style.setProperty("--my", dy.toFixed(1) + "px");
    });
    el.addEventListener("pointerleave", function () {
      btn.style.setProperty("--mx", "0px");
      btn.style.setProperty("--my", "0px");
    });
  }

  /* Replay — restart the CSS animation on a target by reflowing it. */
  function restart(node) {
    if (!node) return;
    node.classList.remove("run");
    void node.offsetWidth;   /* force reflow so the animation re-triggers */
    node.classList.add("run");
  }

  function Motion_mount(root) {
    root = root || document;

    all(root, ".scrub").forEach(wireScrub);
    all(root, ".magnet").forEach(wireMagnet);

    /* [data-replay="#sel"] — replay a communicative reveal on click */
    all(root, "[data-replay]").forEach(function (btn) {
      var target = root.querySelector(btn.getAttribute("data-replay"));
      btn.addEventListener("click", function () { restart(target); });
      restart(target);   /* play once on load so it is not blank */
    });

    /* the spring-vs-linear centerpiece: a Play button + an easing switch */
    all(root, "[data-ease-play]").forEach(function (stage) {
      var end = (stage.clientWidth - 32 - 12) + "px";   /* rail width - runner - insets */
      stage.style.setProperty("--runend", end);
      var play = root.querySelector(stage.getAttribute("data-play"));
      var swch = root.querySelector(stage.getAttribute("data-ease-switch"));
      if (play) play.addEventListener("click", function () { stage.classList.toggle("go"); });
      if (swch) swch.addEventListener("change", function () {
        stage.classList.toggle("is-spring", swch.checked);
      });
      window.addEventListener("resize", function () {
        stage.style.setProperty("--runend", (stage.clientWidth - 32 - 12) + "px");
      });
    });

    /* the reduced-motion switch: put .rm-sim on a region so demos rest */
    all(root, "[data-rm-toggle]").forEach(function (input) {
      var region = root.querySelector(input.getAttribute("data-rm-toggle"));
      var label = input.getAttribute("data-rm-label") && root.querySelector(input.getAttribute("data-rm-label"));
      var apply = function () {
        if (region) region.classList.toggle("rm-sim", input.checked);
        if (label) label.textContent = input.checked ? "reduced motion: ON" : "reduced motion: off";
      };
      input.addEventListener("change", apply);
      apply();
    });
  }

  global.Motion = { mount: Motion_mount };
})(window);
