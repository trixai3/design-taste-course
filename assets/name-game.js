/* ==========================================================================
   name-game.js — "identify the pattern" recognition game.

   For teaching a visual vocabulary: the learner sees a stimulus and picks its
   name, then (reverse direction) sees a name and picks the matching rendering.
   Two round kinds in one deck, so recognition is trained both ways:
     - kind "visual": stimulus is a rendered thumbnail, options are names.
     - kind "name":   stimulus is a name, options are rendered thumbnails.
   Immediate verdict + why, running score, replay. Styles: .ng-* in course.css.

   Usage:
     NameGame.mount("#game", {
       rounds: [
         { kind: "visual", prompt: "Name this hero",
           stim: "<div class='...'>...</div>",
           options: [ { a: "Asymmetric Split", ok: true }, { a: "Media Mask" }, ... ],
           why: "Text one side, asset the other, generous white space." },
         { kind: "name", prompt: "Pick the Bento grid",
           stim: "Bento Grid",
           options: [ { a: "<div class='...'>...</div>", ok: true }, { a: "<...>" }, ... ],
           why: "Asymmetric tiles of mixed sizes, exact cell count." }
       ]
     });
   `a`, `stim`, `prompt`, `why` are trusted strings authored by the lesson.
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
      var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function NameGame(rootSel, opts) {
    var root = typeof rootSel === "string" ? document.querySelector(rootSel) : rootSel;
    if (!root) throw new Error("NameGame: root not found " + rootSel);
    var rounds = opts.rounds;

    var stage = el("div", "ng-game");
    var head  = el("div", "ng-head");
    var promptEl = el("p", "ng-prompt");
    var stim  = el("div", "ng-stim");
    var btns  = el("div", "ng-opts");
    var feed  = el("div", "ng-feed");
    stage.appendChild(head); stage.appendChild(promptEl);
    stage.appendChild(stim); stage.appendChild(btns); stage.appendChild(feed);
    root.innerHTML = ""; root.appendChild(stage);

    var deck, round, score;

    function start() {
      deck = shuffle(rounds);
      round = 0; score = 0;
      next();
    }

    function next() {
      if (round >= deck.length) return finish();
      var r = deck[round];
      head.innerHTML = "Pattern <b>" + (round + 1) + "</b> / " + deck.length +
        '<span class="ng-score">score ' + score + "</span>";
      promptEl.textContent = r.prompt;
      stim.className = "ng-stim ng-stim--" + (r.kind === "name" ? "name" : "visual");
      stim.innerHTML = r.kind === "name" ? '<span class="ng-name">' + r.stim + "</span>" : r.stim;
      feed.innerHTML = "";
      btns.className = "ng-opts ng-opts--" + (r.kind === "name" ? "visual" : "text");
      btns.innerHTML = "";
      shuffle(r.options).forEach(function (opt) {
        var b = el("button", "ng-opt" + (r.kind === "name" ? " ng-opt--visual" : ""), opt.a);
        b.type = "button";
        b._ok = !!opt.ok;
        b.addEventListener("click", function () { answer(r, b); });
        btns.appendChild(b);
      });
    }

    function answer(r, b) {
      var hit = !!b._ok;
      if (hit) score++;
      Array.prototype.forEach.call(btns.children, function (bb) {
        bb.disabled = true;
        if (bb._ok) bb.classList.add("is-right");   // always reveal the correct one
      });
      if (!hit) b.classList.add("is-wrong");
      feed.innerHTML =
        '<div class="ng-verdict ' + (hit ? "ok" : "no") + '">' +
        (hit ? "Correct. " : "Not that one. ") +
        '<span class="why">' + r.why + "</span></div>" +
        '<button class="btn ng-next" type="button">' +
        (round + 1 >= deck.length ? "See results" : "Next pattern") + "</button>";
      feed.querySelector(".ng-next").addEventListener("click", function () { round++; next(); });
      feed.querySelector(".ng-next").focus();
    }

    function finish() {
      head.innerHTML = "Done";
      promptEl.textContent = "";
      stim.className = "ng-stim";
      stim.innerHTML = "";
      btns.innerHTML = "";
      var pct = Math.round((100 * score) / deck.length);
      feed.innerHTML =
        '<div class="ng-result"><p class="ng-final">' + score + " / " + deck.length + "</p>" +
        '<p class="ng-tip">' +
        (score === deck.length
          ? "Clean sweep. You can name a layout from its silhouette now."
          : pct >= 60
            ? "Good. Re-scan the wall above for the ones that slipped, then replay."
            : "Names are still fuzzy. Read the glossary wall again, then replay.") +
        '</p><button class="btn ng-next" type="button">Replay</button></div>';
      feed.querySelector(".ng-next").addEventListener("click", start);
    }

    start();
  }

  global.NameGame = {
    mount: function (rootSel, opts) { return new NameGame(rootSel, opts); }
  };
})(window);
