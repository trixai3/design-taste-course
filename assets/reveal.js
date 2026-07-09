/* ==========================================================================
   reveal.js — "attempt, then compare" exercise widget for the Design Taste course.

   For tasks where the answer is a judgment call (no single right string): the
   learner writes their attempt in a textarea, then reveals a model answer to
   self-compare. Retrieval first, feedback second.

   Usage:
     Reveal.mount("#exercise", [
       { prompt: "Brief: a ... . Write the design read.",
         placeholder: "Reading this as: ...",
         answer: "<div class='ra-lead'>Reading this as: ...</div><dl>...</dl>" }
     ]);
   `answer` is trusted HTML authored by the lesson. Styles: .reveal-* in course.css.
   ========================================================================== */
(function (global) {
  "use strict";

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function Reveal(rootSel, items) {
    var root = document.querySelector(rootSel);
    if (!root) throw new Error("Reveal: root not found " + rootSel);
    root.innerHTML = "";
    items.forEach(function (item, i) {
      var card = el("div", "reveal-item");
      card.appendChild(el("p", "reveal-brief", (i + 1) + ". " + item.prompt));

      var ta = el("textarea", "reveal-ta");
      ta.placeholder = item.placeholder || "Write your answer here…";
      ta.setAttribute("aria-label", "Your answer for exercise " + (i + 1));
      card.appendChild(ta);

      var row = el("div", "reveal-btnrow");
      var btn = el("button", "btn", "看模范答案 · Reveal model answer");
      btn.type = "button";
      row.appendChild(btn);
      card.appendChild(row);

      var ans = el("div", "reveal-answer", item.answer);
      card.appendChild(ans);

      btn.addEventListener("click", function () {
        var open = ans.getAttribute("data-open") === "true";
        ans.setAttribute("data-open", open ? "false" : "true");
        btn.textContent = open
          ? "看模范答案 · Reveal model answer"
          : "收起 · Hide";
      });

      root.appendChild(card);
    });
  }

  global.Reveal = {
    mount: function (rootSel, items) { return new Reveal(rootSel, items); }
  };
})(window);
