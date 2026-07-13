/* ==========================================================================
   space-surface.js — Lesson 11 (Space & Surface). One entry: Surface.mount().

   Deliberately holds NO user-facing prose. Every label and state sentence is
   authored in the HTML and toggled by CSS classes, so the Chinese mirror
   localizes by translating markup alone (the lesson learned from palettes.js).
   Three behaviours:
     - [data-ws]    whitespace slider -> sets --pad/--gap on .ws-stage, echoes px
     - [data-rl]    radius-lock button -> toggles .locked on the stage
     - [data-grain] grain button      -> toggles .on on the stage
   Degrades: no JS means the stage keeps its CSS defaults (roomy off / broken /
   grain off) and the toggles simply do nothing.
   ========================================================================== */
(function (global) {
  "use strict";

  function mountWS(stage) {
    var input = stage.querySelector("[data-ws-set]");
    var out = stage.querySelector("[data-ws-out]");
    var section = stage.querySelector(".ws-section");
    if (!input || !section) return;
    function apply() {
      var pad = parseInt(input.value, 10);        // px of section padding
      var gap = Math.max(6, Math.round(pad * 0.5));
      stage.style.setProperty("--pad", pad + "px");
      stage.style.setProperty("--gap", gap + "px");
      if (out) out.innerHTML = "padding <b>" + pad + "px</b>";
    }
    input.addEventListener("input", apply);
    apply();
  }

  function mountToggle(stage, sel, cls) {
    var btn = stage.querySelector(sel);
    if (!btn) return;
    btn.addEventListener("click", function () { stage.classList.toggle(cls); });
  }

  function mount(root) {
    root = root || document;
    Array.prototype.forEach.call(root.querySelectorAll("[data-ws]"), mountWS);
    Array.prototype.forEach.call(root.querySelectorAll("[data-rl]"), function (s) {
      mountToggle(s, "[data-rl-toggle]", "locked");
    });
    Array.prototype.forEach.call(root.querySelectorAll("[data-grain]"), function (s) {
      mountToggle(s, "[data-grain-toggle]", "on");
    });
  }

  global.Surface = { mount: mount };
})(window);
