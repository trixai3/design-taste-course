/* ==========================================================================
   compare.js — the shared "tell hunt" engine for the Design Taste course.

   A lesson provides:
     1. Rendered "slop" markup whose offending elements carry data-tell="key".
     2. A registry object mapping key -> { n, title, rule, source, fix, mode }.
        mode: "shown"  -> a numbered pin is visible from the start (a taught example)
              "hunt"   -> no pin until the learner clicks the element (the game)

   Then calls:  TellHunt.mount("#slop-mock", REGISTRY);

   The engine handles pin placement, click-to-reveal callouts, the found/total
   scoreboard, "reveal all", keyboard access, and a gentle "nothing here" miss
   hint. No dependencies. Styles live in course.css.
   ========================================================================== */
(function (global) {
  "use strict";

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  function TellHunt(rootSel, registry, opts) {
    opts = opts || {};
    this.root = document.querySelector(rootSel);
    if (!this.root) throw new Error("TellHunt: root not found: " + rootSel);
    this.registry = registry;
    this.opts = opts;
    this.found = {};          // key -> true (found by the learner)
    this.huntTotal = 0;
    this.buildCallout();
    this.buildToast();
    this.wire();
  }

  TellHunt.prototype.buildCallout = function () {
    var c = el("aside", "tell-callout");
    c.setAttribute("aria-live", "polite");
    c.innerHTML =
      '<button class="co-close" aria-label="Close">×</button>' +
      '<div class="co-n"></div>' +
      "<h4></h4>" +
      "<dl>" +
      '<dt>Why it reads as generated</dt><dd class="co-rule"></dd>' +
      '<div class="co-fix"><dt>How the right panel fixes it</dt><dd class="co-fixtext"></dd></div>' +
      '<dt>Source</dt><dd class="co-source"></dd>' +
      "</dl>";
    document.body.appendChild(c);
    this.callout = c;
    var self = this;
    c.querySelector(".co-close").addEventListener("click", function () {
      c.setAttribute("data-open", "false");
    });
  };

  TellHunt.prototype.buildToast = function () {
    this.toast = el("div", "hunt-toast");
    document.body.appendChild(this.toast);
  };

  TellHunt.prototype.flashMiss = function (x, y) {
    var t = this.toast;
    t.textContent = "no tell here";
    t.style.left = x + "px";
    t.style.top = y + "px";
    t.setAttribute("data-show", "true");
    clearTimeout(this._missTimer);
    this._missTimer = setTimeout(function () {
      t.setAttribute("data-show", "false");
    }, 750);
  };

  TellHunt.prototype.openCallout = function (key) {
    var e = this.registry[key];
    if (!e) return;
    var c = this.callout;
    c.querySelector(".co-n").textContent = "Tell " + (e.n < 10 ? "0" + e.n : e.n);
    c.querySelector("h4").textContent = e.title;
    c.querySelector(".co-rule").textContent = e.rule;
    c.querySelector(".co-fixtext").textContent = e.fix;
    c.querySelector(".co-source").textContent = e.source;
    c.setAttribute("data-open", "true");
  };

  TellHunt.prototype.makePin = function (target, key, state) {
    var e = this.registry[key];
    var pin = el("button", "tell-pin", state === "hunt" ? "?" : String(e.n));
    pin.setAttribute("data-state", state === "hunt" ? "found" : "shown");
    pin.setAttribute("aria-label", "Tell " + e.n + ": " + e.title);
    if (state === "hunt") pin.textContent = String(e.n);
    var cs = getComputedStyle(target);
    if (cs.position === "static") target.style.position = "relative";
    // place pin just inside the top-left corner (positive offset so a frame
    // with overflow:hidden never clips it)
    pin.style.top = "6px";
    pin.style.left = "6px";
    target.appendChild(pin);
    var self = this;
    pin.addEventListener("click", function (ev) {
      ev.stopPropagation();
      self.openCallout(key);
    });
    return pin;
  };

  TellHunt.prototype.reveal = function (target, key, byLearner) {
    if (this.found[key] || target.__revealed) return;
    target.__revealed = true;
    this.found[key] = !!byLearner;
    var pin = this.makePin(target, key, "hunt");
    pin.setAttribute("data-state", byLearner ? "found" : "revealed");
    target.classList.remove("tell-huntable");
    this.updateScore();
    this.openCallout(key);
  };

  TellHunt.prototype.updateScore = function () {
    if (!this.scoreEl) return;
    var got = 0, self = this;
    Object.keys(this.registry).forEach(function (k) {
      if (self.registry[k].mode === "hunt" && self.found[k]) got++;
    });
    this.scoreEl.innerHTML =
      "Hidden tells found: <b>" + got + "</b> / " + this.huntTotal;
    if (got === this.huntTotal && this.huntTotal > 0) {
      this.scoreEl.innerHTML += " — all found.";
    }
  };

  TellHunt.prototype.wire = function () {
    var self = this;
    var targets = this.root.querySelectorAll("[data-tell]");
    this.root.classList.add("mock--armed");

    targets.forEach(function (t) {
      var key = t.getAttribute("data-tell");
      var e = self.registry[key];
      if (!e) { console.warn("TellHunt: no registry entry for", key); return; }
      if (e.mode === "shown") {
        self.makePin(t, key, "shown");
      } else {
        self.huntTotal++;
        t.classList.add("tell-huntable");
        t.setAttribute("tabindex", "0");
        t.setAttribute("role", "button");
        t.setAttribute("aria-label", "Possible tell — click to check");
        t.addEventListener("keydown", function (ev) {
          if (ev.key === "Enter" || ev.key === " ") {
            ev.preventDefault();
            self.reveal(t, key, true);
          }
        });
      }
    });

    // one delegated click handler for the hunt
    this.root.addEventListener("click", function (ev) {
      var hit = ev.target.closest("[data-tell]");
      if (hit && self.root.contains(hit)) {
        var key = hit.getAttribute("data-tell");
        var e = self.registry[key];
        if (!e) return;
        if (e.mode === "hunt") {
          if (hit.__revealed) self.openCallout(key);
          else self.reveal(hit, key, true);
        } else {
          self.openCallout(key);
        }
      } else {
        self.flashMiss(ev.clientX, ev.clientY);
      }
    });

    // scoreboard + reveal-all button, if the lesson provided a mount point
    if (this.opts.scoreSelector) {
      this.scoreEl = document.querySelector(this.opts.scoreSelector);
      this.updateScore();
    }
    if (this.opts.revealSelector) {
      var btn = document.querySelector(this.opts.revealSelector);
      if (btn) btn.addEventListener("click", function () {
        self.root.querySelectorAll("[data-tell]").forEach(function (t) {
          var key = t.getAttribute("data-tell");
          if (self.registry[key].mode === "hunt") self.reveal(t, key, false);
        });
      });
    }
  };

  global.TellHunt = {
    mount: function (rootSel, registry, opts) {
      return new TellHunt(rootSel, registry, opts);
    }
  };
})(window);
