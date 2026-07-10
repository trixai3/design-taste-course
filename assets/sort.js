/* ==========================================================================
   sort.js — "which mode does this belong to?" two-bucket classify game.

   For teaching that a style is a system of commitments: the learner sees one
   concrete detail (a tracking value, a hex, a component) and assigns it to one
   of two committed modes. Immediate verdict + why, running score, and a
   per-bucket accuracy summary so the confused side is obvious and replayable.

   Usage:
     SortGame.mount("#game", {
       left:  { key: "swiss",     label: "Swiss Industrial Print" },
       right: { key: "telemetry", label: "Tactical Telemetry" },
       items: [ { spec: "letter-spacing: -0.05em, uppercase", mode: "swiss",
                  why: "Macro-type packs glyphs into blocks with tight negative tracking." } ]
     });
   `spec` and `why` are trusted strings authored by the lesson. Styles: .sort-*
   in course.css.
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

  function SortGame(rootSel, opts) {
    var root = typeof rootSel === "string" ? document.querySelector(rootSel) : rootSel;
    if (!root) throw new Error("SortGame: root not found " + rootSel);
    var left = opts.left, right = opts.right, items = opts.items;
    var byKey = {}; byKey[left.key] = left.label; byKey[right.key] = right.label;

    var stage = el("div", "sort-game");
    var head = el("div", "sort-head");
    var card = el("div", "sort-card");
    var btns = el("div", "sort-btns");
    var feed = el("div", "sort-feed");
    stage.appendChild(head); stage.appendChild(card);
    stage.appendChild(btns); stage.appendChild(feed);
    root.innerHTML = ""; root.appendChild(stage);

    var deck, round, score, tally;

    function start() {
      deck = shuffle(items);
      round = 0; score = 0;
      tally = {}; tally[left.key] = { seen: 0, hit: 0 }; tally[right.key] = { seen: 0, hit: 0 };
      next();
    }

    function next() {
      if (round >= deck.length) return finish();
      var item = deck[round];
      head.innerHTML = "Detail <b>" + (round + 1) + "</b> / " + deck.length +
        '<span class="sort-score">score ' + score + "</span>";
      card.innerHTML = '<span class="sort-tag">assign this</span>' + item.spec;
      feed.innerHTML = "";
      btns.innerHTML = "";
      [left, right].forEach(function (side) {
        var b = el("button", "btn btn--ghost sort-opt", side.label);
        b.type = "button";
        b.addEventListener("click", function () { answer(item, side.key); });
        btns.appendChild(b);
      });
    }

    function answer(item, chosen) {
      tally[item.mode].seen++;
      var hit = chosen === item.mode;
      if (hit) { score++; tally[item.mode].hit++; }
      Array.prototype.forEach.call(btns.children, function (b) {
        b.disabled = true;
        if (b.textContent === byKey[item.mode]) b.classList.add("is-right");
        else if (!hit && b.textContent === byKey[chosen]) b.classList.add("is-wrong");
      });
      feed.innerHTML =
        '<div class="sort-verdict ' + (hit ? "ok" : "no") + '">' +
        (hit ? "Correct. " : "It is <b>" + byKey[item.mode] + "</b>. ") +
        '<span class="why">' + item.why + "</span></div>" +
        '<button class="btn sort-next" type="button">' +
        (round + 1 >= deck.length ? "See results" : "Next detail") + "</button>";
      feed.querySelector(".sort-next").addEventListener("click", function () {
        round++; next();
      });
      feed.querySelector(".sort-next").focus();
    }

    function finish() {
      head.innerHTML = "Done";
      card.innerHTML = "";
      btns.innerHTML = "";
      var rows = [left, right].map(function (side) {
        var t = tally[side.key];
        var pct = t.seen ? Math.round((100 * t.hit) / t.seen) : 0;
        return { label: side.label, pct: pct, txt: t.hit + "/" + t.seen };
      }).sort(function (a, b) { return a.pct - b.pct; });
      feed.innerHTML =
        '<div class="sort-result"><p class="sort-final">' + score + " / " + deck.length + "</p><ul>" +
        rows.map(function (r) { return "<li><span>" + r.label + "</span><b>" + r.txt + "</b></li>"; }).join("") +
        "</ul><p class=\"sort-tip\">" +
        (score === deck.length
          ? "Clean sweep. You can feel the commitments now, not just the mood."
          : "Weaker side: <b>" + rows[0].label + "</b>. Re-read its column above, then replay.") +
        '</p><button class="btn sort-next" type="button">Replay</button></div>';
      feed.querySelector(".sort-next").addEventListener("click", start);
    }

    start();
  }

  global.SortGame = {
    mount: function (rootSel, opts) { return new SortGame(rootSel, opts); }
  };
})(window);
