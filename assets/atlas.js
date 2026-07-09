/* ==========================================================================
   atlas.js — flash-recognition game for the Style Atlas lessons (0004-0006).

   Shows an UNLABELED style swatch; the learner names the family. Immediate
   feedback plus a one-line "why", running score, and a per-family accuracy
   summary at the end (so weak families are obvious and replayable).

   Usage:
     StyleAtlas.game({
       container: "#atlas-game",
       rounds: 10,                      // default: 2 x families.length
       families: [
         { key: "pum",
           name: "Premium Utilitarian Minimalism",
           why:  "White substrate, 1px hairline borders, muted pastel tags.",
           variants: [ "<div ...>swatch html</div>", ... ] }
       ]
     });

   `variants` are trusted HTML strings authored by the lesson (each an
   inline-styled mini-composition of the same family, so recognition
   generalizes past one screenshot). Styles: .atlas-game-* in course.css.
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

  function game(opts) {
    var root = document.querySelector(opts.container);
    if (!root) throw new Error("StyleAtlas: container not found " + opts.container);
    var families = opts.families;
    var total = opts.rounds || families.length * 2;

    // Build the round deck: every family appears evenly, order shuffled,
    // no family twice in a row (recognition, not repetition-priming).
    function buildDeck() {
      var deck = [];
      for (var r = 0; r < total; r++) deck.push(families[r % families.length]);
      var ok = false, guard = 0;
      while (!ok && guard++ < 60) {
        deck = shuffle(deck);
        ok = deck.every(function (f, i) { return i === 0 || f.key !== deck[i - 1].key; });
      }
      return deck;
    }

    var deck, round, score, perFamily;

    var stage = el("div", "atlas-game");
    var head = el("div", "atlas-game-head");
    var frame = el("div", "atlas-game-frame");
    var opts_ = el("div", "atlas-game-opts");
    var feed = el("div", "atlas-game-feed");
    stage.appendChild(head); stage.appendChild(frame);
    stage.appendChild(opts_); stage.appendChild(feed);
    root.innerHTML = ""; root.appendChild(stage);

    function start() {
      deck = buildDeck(); round = 0; score = 0; perFamily = {};
      families.forEach(function (f) { perFamily[f.key] = { seen: 0, hit: 0, name: f.name }; });
      next();
    }

    function next() {
      if (round >= total) return finish();
      var fam = deck[round];
      var variant = fam.variants[Math.floor(Math.random() * fam.variants.length)];
      head.innerHTML = "Round <b>" + (round + 1) + "</b> / " + total +
        ' <span class="atlas-game-score">score ' + score + "</span>";
      frame.innerHTML = variant;
      feed.innerHTML = "";
      opts_.innerHTML = "";
      shuffle(families).forEach(function (f) {
        var b = el("button", "btn btn--ghost atlas-game-opt", f.name);
        b.type = "button";
        b.addEventListener("click", function () { answer(fam, f, b); });
        opts_.appendChild(b);
      });
    }

    function answer(fam, picked, btn) {
      perFamily[fam.key].seen++;
      var hit = picked.key === fam.key;
      if (hit) { score++; perFamily[fam.key].hit++; }
      Array.prototype.forEach.call(opts_.children, function (b) {
        b.disabled = true;
        if (b.textContent === fam.name) b.classList.add("is-right");
      });
      if (!hit) btn.classList.add("is-wrong");
      feed.innerHTML =
        '<div class="atlas-game-verdict ' + (hit ? "ok" : "no") + '">' +
        (hit ? "Named it. " : "It was <b>" + fam.name + "</b>. ") +
        '<span class="why">' + fam.why + "</span></div>" +
        '<button class="btn atlas-game-next" type="button">' +
        (round + 1 >= total ? "See results" : "Next swatch") + "</button>";
      feed.querySelector(".atlas-game-next").addEventListener("click", function () {
        round++; next();
      });
      feed.querySelector(".atlas-game-next").focus();
    }

    function finish() {
      head.innerHTML = "Done";
      frame.innerHTML = "";
      opts_.innerHTML = "";
      var rows = Object.keys(perFamily).map(function (k) {
        var s = perFamily[k];
        var pct = s.seen ? Math.round((100 * s.hit) / s.seen) : 0;
        return { name: s.name, pct: pct, label: s.hit + "/" + s.seen };
      }).sort(function (a, b) { return a.pct - b.pct; });
      var weakest = rows[0];
      feed.innerHTML =
        '<div class="atlas-game-result"><p class="atlas-game-final">' + score + " / " + total +
        "</p><ul>" +
        rows.map(function (r) {
          return "<li><span>" + r.name + "</span><b>" + r.label + "</b></li>";
        }).join("") +
        "</ul><p class=\"atlas-game-tip\">" +
        (score === total
          ? "Clean sweep. Scroll back up and read each token strip once more, then you own these names."
          : "Weakest: <b>" + weakest.name + "</b>. Scroll up, stare at that panel's token strip, then replay.") +
        '</p><button class="btn atlas-game-next" type="button">Replay</button></div>';
      feed.querySelector(".atlas-game-next").addEventListener("click", start);
    }

    start();
  }

  global.StyleAtlas = { game: game };
})(window);
