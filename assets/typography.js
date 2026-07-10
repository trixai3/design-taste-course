/* typography.js — wiring for the live tracking & leading demo (Lesson 09).
   One entry point: Typo.mount(root=document). Each [data-tl] stage holds one
   .tl-headline and two range inputs: data-tl-set="tr" (letter-spacing, in
   hundredths of an em) and data-tl-set="ld" (line-height, in hundredths). The
   CSS reads --tr and --ld off the headline; this just maps sliders to those
   vars and echoes the number. Degrades to a static headline with no JS. */
(function (global) {
  "use strict";

  function mount(root) {
    root = root || document;
    Array.prototype.forEach.call(root.querySelectorAll("[data-tl]"), function (stage) {
      var headline = stage.querySelector(".tl-headline");
      if (!headline) return;

      Array.prototype.forEach.call(stage.querySelectorAll("[data-tl-set]"), function (input) {
        var kind = input.getAttribute("data-tl-set");   // "tr" or "ld"
        var out = stage.querySelector('[data-tl-out="' + kind + '"]');

        var apply = function () {
          var v = parseInt(input.value, 10) / 100;       // hundredths -> real value
          if (kind === "tr") {
            headline.style.setProperty("--tr", v + "em");
            if (out) out.textContent = v.toFixed(2) + "em";
          } else {
            headline.style.setProperty("--ld", v);
            if (out) out.textContent = v.toFixed(2);
          }
        };
        input.addEventListener("input", apply);
        apply();
      });
    });
  }

  global.Typo = { mount: mount };
})(window);
