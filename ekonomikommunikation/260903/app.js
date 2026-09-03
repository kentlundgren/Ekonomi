/* Ekonomikommunikation – forskargruppens ekonomi fyra år fram
   Datamodell, beräkning, interaktion. Ingen data lämnar webbläsaren.
   Taldata: se SPEC.md avsnitt 3, kontrollräknad mot kalkylarket. */

(function () {
  "use strict";

  var GIVARE = [
    "Bidragsgivare 1, VR",
    "Bidragsgivare 2, EU",
    "Bidragsgivare 3",
    "Bidragsgivare 4",
    "Bidragsgivare 5",
    "Bidragsgivare 6",
    "Bidragsgivare 7"
  ];

  function r5(v) { return [v, v, v, v, v]; }
  function kopiera(m) { return m.map(function (rad) { return rad.slice(); }); }

  var KOST_X = [
    ["Löner", [-7000, -5000, -5000, -5000, -5000]],
    ["Diverse", r5(-1000)],
    ["OH", [-1540, -1100, -1100, -1100, -1100]],
    ["Avskrivningar", r5(-500)]
  ];
  var KOST_X1 = [
    ["Löner", [-5000, -5000, -5000, -5000, -7000]],
    ["Diverse", [-1000, -1000, -1000, -1000, -560]],
    ["OH", [-1100, -1100, -1100, -1100, -1540]],
    ["Avskrivningar", r5(-500)]
  ];

  var DATA = {
    A: {
      fromX: {
        kol: ["X", "X+1", "X+2", "X+3", "X+4"],
        intakter: [r5(1000), r5(2000), r5(1100), r5(3000), r5(500), [700, 0, 0, 0, 0], [3000, 0, 0, 0, 0]],
        kostnader: KOST_X
      },
      fromX1: {
        kol: ["X+1", "X+2", "X+3", "X+4", "X+5"],
        intakter: [r5(1000), r5(2000), r5(1100), r5(3000), r5(500), [0, 0, 0, 0, 2000], r5(0)],
        kostnader: KOST_X1
      }
    },
    B: {
      fromX: {
        kol: ["X", "X+1", "X+2", "X+3", "X+4"],
        intakter: [r5(1000), r5(2000), r5(1100), [3000, 3000, 3000, 3000, 0], [500, 500, 500, 0, 0], [700, 0, 0, 0, 0], [3000, 0, 0, 0, 0]],
        kostnader: KOST_X
      },
      fromX1: {
        kol: ["X+1", "X+2", "X+3", "X+4", "X+5"],
        intakter: [r5(1000), r5(2000), r5(1100), [3000, 3000, 3000, 0, 0], [500, 500, 0, 0, 0], r5(0), r5(0)],
        kostnader: KOST_X1
      }
    },
    C: {
      fromX: {
        kol: ["X", "X+1", "X+2", "X+3", "X+4"],
        intakter: [r5(1000), r5(2000), [1100, 1100, 1100, 1100, 0], [3000, 3000, 3000, 0, 0], [500, 500, 500, 500, 0], [700, 0, 0, 0, 0], [3000, 0, 0, 0, 0]],
        kostnader: KOST_X
      },
      fromX1: {
        kol: ["X+1", "X+2", "X+3", "X+4", "X+5"],
        intakter: [r5(1000), [2000, 2000, 2000, 0, 2000], [1100, 1100, 1100, 0, 0], [3000, 3000, 0, 0, 0], [500, 500, 500, 0, 0], r5(0), r5(0)],
        kostnader: KOST_X1
      }
    },
    D: {
      fromX: {
        kol: ["X", "X+1", "X+2", "X+3", "X+4"],
        intakter: [[1000, 1000, 1000, 1000, 0], [2000, 2000, 2000, 2000, 0], [1100, 1100, 0, 0, 0], [3000, 3000, 0, 0, 0], [500, 0, 0, 0, 0], [700, 0, 0, 0, 0], [3000, 0, 0, 0, 0]],
        kostnader: KOST_X
      },
      fromX1: {
        kol: ["X+1", "X+2", "X+3", "X+4", "X+5"],
        intakter: [[1000, 1000, 1000, 0, 0], [2000, 2000, 0, 0, 0], [1100, 0, 0, 0, 0], [3000, 0, 0, 0, 0], [500, 0, 0, 0, 0], r5(0), r5(0)],
        kostnader: KOST_X1
      }
    }
  };

  var NOT = {
    A: "Intäkterna täcker kostnaderna alla år framåt. Forskargruppen kan planera vidare utan förbehåll.",
    B: "Sista året i fönstret går inte riktigt ihop, året före avviker något. Det nya året X+5 saknar täckning.",
    C: "Två av åren framåt går inte ihop. Glappet ligger närmare i tid än i Fall B.",
    D: "Tre av åren framåt går inte ihop, och redan X+1 avviker. Utrymmet att hinna ordna finansiering krymper med varje år.",
    Dver2: "Fall D, men du fyller på. Lägg in intäkter du tror kommer, eller sänk kostnader, och se hur mycket som krävs för att nå grönt. Var lika sträng som ett hederligt budgetsamtal."
  };

  var FRAGA =
    "Är det troligt att nya bidrag eller intäkter kommer in under de här åren? " +
    "Har forskningsledaren avtal på gång som ännu inte är signerade eller inlagda i systemet? " +
    "Håller gruppen på att avvecklas, eller flytta till ett annat lärosäte? Ska interna medel bära " +
    "medarbetarna? Eller brukar gruppen alltid landa nya bidrag i tid? Frågan måste ställas rakt ut: " +
    "får ni ihop budgeten den här gången också, så att intäkterna matchar kostnaderna?";

  var FRAGA_DEFAULT =
    "Håll pekaren över, eller tryck på, en tom cell i intäktsdelen. Då visas frågan ekonomen bör " +
    "ställa till forskargruppen om de tomma åren.";

  var PAMINNELSE =
    "Är du säker på att den här intäkten kommer just det året? Lägg inte in bidrag som inte är " +
    "rimligt säkrade. Det är just den prövningen ett hederligt budgetsamtal gör.";

  var state = { fall: "A", tid: "fromX", giv: true, troskel: 0.15, edit: null };

  function fmt(n) {
    n = Math.round(n);
    var s = Math.abs(n).toLocaleString("sv-SE");
    return (n < 0 ? "−" : "") + s;
  }

  function nyEdit() {
    var d = DATA.D[state.tid];
    state.edit = {
      tid: state.tid,
      intakter: kopiera(d.intakter),
      kostnader: d.kostnader.map(function (r) { return [r[0], r[1].slice()]; }),
      extra: []
    };
  }

  function aktuellSnap() {
    if (state.fall === "Dver2") {
      if (!state.edit || state.edit.tid !== state.tid) nyEdit();
      return {
        kol: DATA.D[state.tid].kol,
        intakter: state.edit.intakter,
        kostnader: state.edit.kostnader,
        extra: state.edit.extra
      };
    }
    return DATA[state.fall][state.tid];
  }

  function berakna(snap) {
    var n = snap.kol.length, ti = [], tk = [], res = [];
    for (var i = 0; i < n; i++) {
      var a = 0, b = 0, j;
      for (j = 0; j < snap.intakter.length; j++) a += snap.intakter[j][i];
      if (snap.extra) for (j = 0; j < snap.extra.length; j++) a += snap.extra[j].varden[i];
      for (j = 0; j < snap.kostnader.length; j++) b += snap.kostnader[j][1][i];
      ti.push(a); tk.push(b); res.push(a + b);
    }
    return { ti: ti, tk: tk, res: res };
  }

  function niva(resVal, kostVal) {
    if (resVal >= -0.5) return "gron";
    var kvot = -resVal / Math.abs(kostVal);
    return kvot < state.troskel ? "gul" : "rod";
  }

  function sigma(snap) {
    var m = berakna(snap), s = 0;
    for (var i = 0; i < m.res.length; i++) s += m.res[i];
    return s;
  }

  function bar(varde, etikett, aktiv, maxAbs) {
    var bredd = (Math.abs(varde) / maxAbs * 100).toFixed(0);
    var kl = (varde < 0 ? "neg" : "pos") + (aktiv ? "" : " blek");
    return '<div class="eas-bar-row"><span class="eas-bar-lbl">' + etikett + "</span>"
      + '<span class="eas-bar-track"><span class="eas-bar-fill ' + kl + '" style="width:' + bredd + '%"></span></span>'
      + '<span class="eas-bar-val">' + fmt(varde) + "</span></div>";
  }

  function renderKort() {
    var el = document.getElementById("kortEas");

    if (state.fall === "Dver2") {
      var sD = sigma(DATA.D[state.tid]);
      var sN = sigma(aktuellSnap());
      var d = sN - sD;
      var mx = Math.max(Math.abs(sD), Math.abs(sN), 1);
      el.innerHTML =
        '<div class="eas-tal">'
        + '<div class="eas-label">Din version jämfört med Fall D</div>'
        + '<div class="eas-nr' + (d >= 0 ? " plus" : "") + '">' + (d > 0 ? "↑ +" : d < 0 ? "↓ " : "") + fmt(d) + " tkr</div>"
        + '<div class="eas-sub">Σ resultat: ' + fmt(sD) + " → " + fmt(sN) + "</div>"
        + "</div>"
        + '<div class="eas-bars">'
        + bar(sD, "Fall D", false, mx)
        + bar(sN, "din version", true, mx)
        + "</div>";
      return;
    }

    var sx = sigma(DATA[state.fall].fromX);
    var sx1 = sigma(DATA[state.fall].fromX1);
    var delta = sx1 - sx;
    var maxAbs = Math.max(Math.abs(sx), Math.abs(sx1), 1);
    el.innerHTML =
      '<div class="eas-tal">'
      + '<div class="eas-label">Ett år senare, hela fönstret</div>'
      + '<div class="eas-nr' + (delta >= 0 ? " plus" : "") + '">' + (delta < 0 ? "↓ " : "") + fmt(delta) + " tkr</div>"
      + '<div class="eas-sub">Σ resultat: ' + fmt(sx) + " → " + fmt(sx1) + "</div>"
      + "</div>"
      + '<div class="eas-bars">'
      + bar(sx, "sett från år X", state.tid === "fromX", maxAbs)
      + bar(sx1, "sett från år X+1", state.tid === "fromX1", maxAbs)
      + "</div>";
  }

  function renderBanner(res, tk) {
    var gul = 0, rod = 0;
    for (var i = 0; i < res.length; i++) {
      var n = niva(res[i], tk[i]);
      if (n === "gul") gul++;
      if (n === "rod") rod++;
    }
    var el = document.getElementById("banner");
    var farg, text;
    if (rod === 0 && gul === 0) { farg = "gron"; text = "Går ihop alla år i fönstret."; }
    else if (rod === 0) { farg = "gul"; text = "Mindre avvikelser. Inget år faller kraftigt, men håll uppsikt."; }
    else if (rod === 1) { farg = "rod"; text = "Ett år i fönstret går klart inte ihop."; }
    else if (rod === 2) { farg = "rod"; text = "Två år går inte ihop. Ta upp finansieringen nu."; }
    else { farg = "rod"; text = "Tre år eller fler går inte ihop. Åtgärd krävs nu."; }
    el.className = "banner " + farg;
    el.textContent = text;
  }

  function cellInput(kind, row, col, varde) {
    return '<td><input type="number" step="100" class="cell-input" data-kind="' + kind
      + '" data-row="' + row + '" data-col="' + col + '" value="' + varde + '"></td>';
  }

  function rendera() {
    var red = state.fall === "Dver2";
    var snap = aktuellSnap();
    var m = berakna(snap);

    var head = "<tr><th>Resultaträkning (tkr)</th>";
    snap.kol.forEach(function (k) { head += "<th>" + k + "</th>"; });
    head += "</tr>";
    document.getElementById("rrHead").innerHTML = head;

    var body = "";
    body += '<tr><td colspan="6"><button type="button" class="giv-toggle" id="givToggle">'
      + (state.giv ? "▾ dölj bidragsgivare" : "▸ visa bidragsgivare") + "</button></td></tr>";

    if (state.giv) {
      GIVARE.forEach(function (namn, gi) {
        var rad = snap.intakter[gi];
        body += '<tr class="giv"><td class="rad-namn">' + namn + "</td>";
        rad.forEach(function (v, ci) {
          if (red) body += cellInput("int", gi, ci, v);
          else body += v ? '<td class="num">' + fmt(v) + "</td>"
            : '<td class="num tom" data-tom="1" tabindex="0" aria-label="Inget bidrag detta år"></td>';
        });
        body += "</tr>";
      });

      if (red) {
        snap.extra.forEach(function (rad, ri) {
          body += '<tr class="giv extra-rad"><td class="rad-namn">'
            + '<input type="text" class="namn-input" data-kind="extranamn" data-row="' + ri + '" value="' + rad.namn.replace(/"/g, "&quot;") + '">'
            + ' <button type="button" class="extra-bort" data-kind="extrabort" data-row="' + ri + '" aria-label="Ta bort raden">&times;</button></td>';
          rad.varden.forEach(function (v, ci) { body += cellInput("extra", ri, ci, v); });
          body += "</tr>";
        });
      }
    }

    body += '<tr class="tot" id="radTotInt"><td class="rad-namn">TOT intäkter</td>';
    m.ti.forEach(function (v) { body += '<td class="num">' + fmt(v) + "</td>"; });
    body += "</tr>";

    snap.kostnader.forEach(function (rad, ki) {
      body += '<tr class="giv"><td class="rad-namn">' + rad[0] + "</td>";
      rad[1].forEach(function (v, ci) {
        if (red) body += cellInput("kost", ki, ci, v);
        else body += '<td class="num">' + fmt(v) + "</td>";
      });
      body += "</tr>";
    });

    body += '<tr class="tot" id="radTotKost"><td class="rad-namn">TOT kostnader</td>';
    m.tk.forEach(function (v) { body += '<td class="num">' + fmt(v) + "</td>"; });
    body += "</tr>";

    body += '<tr class="res" id="radRes"><td class="rad-namn">RESULTAT</td>';
    m.res.forEach(function (v, i) { body += '<td class="num cell-' + niva(v, m.tk[i]) + '">' + fmt(v) + "</td>"; });
    body += "</tr>";

    document.getElementById("rrBody").innerHTML = body;

    document.getElementById("dver2Verktyg").hidden = !red;

    renderKort();
    renderBanner(m.res, m.tk);
    document.getElementById("notrad").textContent = NOT[state.fall];

    var frag = document.getElementById("fragruta");
    if (state.fall === "D") { frag.textContent = FRAGA; frag.classList.add("het"); }
    else { frag.textContent = FRAGA_DEFAULT; frag.classList.remove("het"); }

    setPaminnelse("");
    bindTabell();
  }

  function omBerakna() {
    var m = berakna(aktuellSnap());
    var ny = "";
    ny += '<tr class="tot" id="radTotInt"><td class="rad-namn">TOT intäkter</td>';
    m.ti.forEach(function (v) { ny += '<td class="num">' + fmt(v) + "</td>"; });
    ny += "</tr>";
    document.getElementById("radTotInt").outerHTML = ny;

    ny = '<tr class="tot" id="radTotKost"><td class="rad-namn">TOT kostnader</td>';
    m.tk.forEach(function (v) { ny += '<td class="num">' + fmt(v) + "</td>"; });
    ny += "</tr>";
    document.getElementById("radTotKost").outerHTML = ny;

    ny = '<tr class="res" id="radRes"><td class="rad-namn">RESULTAT</td>';
    m.res.forEach(function (v, i) { ny += '<td class="num cell-' + niva(v, m.tk[i]) + '">' + fmt(v) + "</td>"; });
    ny += "</tr>";
    document.getElementById("radRes").outerHTML = ny;

    renderKort();
    renderBanner(m.res, m.tk);
  }

  function setPaminnelse(text) {
    var el = document.getElementById("paminnelse");
    if (!text) { el.hidden = true; el.textContent = ""; return; }
    el.textContent = text;
    el.hidden = false;
  }

  function bindTabell() {
    var t = document.getElementById("givToggle");
    if (t) t.addEventListener("click", function () { state.giv = !state.giv; rendera(); });

    var frag = document.getElementById("fragruta");
    var hetDefault = state.fall === "D";
    document.querySelectorAll('[data-tom="1"]').forEach(function (cell) {
      function visa() { frag.textContent = FRAGA; frag.classList.add("het"); }
      function ater() {
        if (hetDefault) { frag.textContent = FRAGA; }
        else { frag.textContent = FRAGA_DEFAULT; frag.classList.remove("het"); }
      }
      cell.addEventListener("mouseenter", visa);
      cell.addEventListener("mouseleave", ater);
      cell.addEventListener("focus", visa);
      cell.addEventListener("blur", ater);
      cell.addEventListener("click", visa);
    });

    if (state.fall !== "Dver2") return;

    var body = document.getElementById("rrBody");
    body.addEventListener("input", function (e) {
      var inp = e.target;
      var kind = inp.dataset.kind;
      if (!kind) return;
      var row = parseInt(inp.dataset.row, 10);
      var col = parseInt(inp.dataset.col, 10);

      if (kind === "extranamn") { state.edit.extra[row].namn = inp.value; return; }

      var ny = parseFloat(inp.value);
      if (isNaN(ny)) ny = 0;

      if (kind === "int") {
        var gammal = state.edit.intakter[row][col];
        state.edit.intakter[row][col] = ny;
        if (ny > gammal) setPaminnelse(PAMINNELSE); else setPaminnelse("");
      } else if (kind === "extra") {
        var g2 = state.edit.extra[row].varden[col];
        state.edit.extra[row].varden[col] = ny;
        if (ny > g2) setPaminnelse(PAMINNELSE); else setPaminnelse("");
      } else if (kind === "kost") {
        state.edit.kostnader[row][1][col] = ny;
        setPaminnelse("");
      }
      omBerakna();
    });

    body.addEventListener("click", function (e) {
      var b = e.target.closest("[data-kind='extrabort']");
      if (!b) return;
      state.edit.extra.splice(parseInt(b.dataset.row, 10), 1);
      rendera();
    });
  }

  function initKnappar() {
    document.querySelectorAll("#fallRad .fall-btn").forEach(function (b) {
      b.addEventListener("click", function () {
        state.fall = b.dataset.fall;
        if (state.fall === "Dver2") nyEdit();
        document.querySelectorAll("#fallRad .fall-btn").forEach(function (x) { x.classList.remove("vald"); });
        b.classList.add("vald");
        rendera();
      });
    });

    document.querySelectorAll("#tidRad .tid-btn").forEach(function (b) {
      b.addEventListener("click", function () {
        state.tid = b.dataset.tid;
        if (state.fall === "Dver2") nyEdit();
        document.querySelectorAll("#tidRad .tid-btn").forEach(function (x) { x.classList.remove("vald"); });
        b.classList.add("vald");
        rendera();
      });
    });

    var reg = document.getElementById("troskelReglage");
    var val = document.getElementById("troskelVal");
    reg.addEventListener("input", function () {
      state.troskel = parseInt(reg.value, 10) / 100;
      val.innerHTML = reg.value + "&nbsp;%";
      rendera();
    });

    document.getElementById("laggTillIntakt").addEventListener("click", function () {
      state.edit.extra.push({ namn: "Egen intäkt " + (state.edit.extra.length + 1), varden: [0, 0, 0, 0, 0] });
      rendera();
    });
    document.getElementById("aterstallD").addEventListener("click", function () {
      nyEdit();
      rendera();
    });
  }

  function initModal() {
    var overlay = document.getElementById("techOverlay");
    var btn = document.getElementById("techBtn");
    var close = document.getElementById("techClose");
    function open() { overlay.classList.add("show"); }
    function shut() { overlay.classList.remove("show"); }
    btn.addEventListener("click", open);
    close.addEventListener("click", shut);
    overlay.addEventListener("click", function (e) { if (e.target === overlay) shut(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") shut(); });
  }

  initKnappar();
  initModal();
  rendera();
})();
