/* ==========================================================================
   quiz.js — shared retrieval-quiz widget for the Design Taste course.

   Used for the spaced-recall check that opens every lesson from 0002 on.
   Follows the teach-skill rule: answer options are kept close in length so
   formatting never leaks the answer, and options are shuffled per render.

   Usage:
     Quiz.mount("#recall", [
       { q:"...", options:["A","B","C","D"], answer:0, why:"one-line feedback" },
       ...
     ]);
   `answer` is the index into the ORIGINAL options array.
   Styles live in course.css (.quiz-*).
   ========================================================================== */
(function (global) {
  "use strict";

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function Quiz(rootSel, items) {
    this.root = document.querySelector(rootSel);
    if (!this.root) throw new Error("Quiz: root not found " + rootSel);
    this.items = items;
    this.answered = 0;
    this.correct = 0;
    this.render();
  }

  Quiz.prototype.render = function () {
    var self = this;
    this.root.classList.add("quiz");
    this.root.innerHTML = "";

    var head = el("div", "quiz-head",
      '<span class="quiz-eyebrow">Recall check</span>' +
      '<span class="quiz-score" id="' + this._id("score") + '">0 / ' + this.items.length + '</span>');
    this.root.appendChild(head);
    this.scoreEl = head.querySelector(".quiz-score");

    this.items.forEach(function (item, qi) {
      var card = el("div", "quiz-q");
      card.appendChild(el("p", "quiz-prompt", (qi + 1) + ". " + item.q));
      var opts = el("div", "quiz-opts");

      var correctText = item.options[item.answer];
      shuffle(item.options).forEach(function (optText) {
        var b = el("button", "quiz-opt", optText);
        b.type = "button";
        b.addEventListener("click", function () {
          if (card.getAttribute("data-done") === "true") return;
          card.setAttribute("data-done", "true");
          var isRight = optText === correctText;
          b.setAttribute("data-choice", isRight ? "right" : "wrong");
          // always reveal the correct one
          opts.querySelectorAll(".quiz-opt").forEach(function (ob) {
            ob.disabled = true;
            if (ob.textContent === correctText) ob.setAttribute("data-correct", "true");
          });
          var fb = el("p", "quiz-why", (isRight ? "Correct. " : "Not quite. ") + item.why);
          fb.setAttribute("data-right", isRight ? "true" : "false");
          card.appendChild(fb);
          self.answered++;
          if (isRight) self.correct++;
          self.scoreEl.textContent = self.correct + " / " + self.items.length;
          if (self.answered === self.items.length) {
            self.scoreEl.setAttribute("data-complete", "true");
          }
        });
        opts.appendChild(b);
      });

      card.appendChild(opts);
      self.root.appendChild(card);
    });
  };

  Quiz.prototype._id = function (s) {
    return "quiz-" + s + "-" + Math.random().toString(36).slice(2, 7);
  };

  global.Quiz = {
    mount: function (rootSel, items) { return new Quiz(rootSel, items); }
  };
})(window);
