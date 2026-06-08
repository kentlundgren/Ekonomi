# Ekonomi

Kent Lundgrens ekonomiprojekt – redovisning, BAS-kontoanalys och ekonomiska verktyg.

---

## Projektstruktur

```
Ekonomi/
├── redovisning/
│   └── BAS/
│       └── analys.html   # BAS 2026 – Analys och reflektion
├── index.html            # Startsida med tack till Peter Berg
├── .gitignore
└── README.md
```

---

## Filer

### `index.html`
Projektets startsida. Presenterar bakgrunden till analysarbetet, tackar Peter Berg
för hans artikel och LinkedIn-inlägg om BAS-nyheter 2026, och länkar till analysen.
Citerar källorna i Harvardstil. Öppnas direkt i webbläsaren.

### `redovisning/BAS/analys.html`
Analys och reflektion kring BAS-kontoplanen 2026 – utifrån Peter Bergs artikel.
Besvarar fyra frågor: skillnaden privat BAS vs Kommun-BAS, påverkan för controller
i kommunalt bolag, relevans för lekmannarevision av Kalmar Nation, och varför
löner placeras i kontogrupp 5 (Kommun-BAS) respektive klass 7 (privat BAS).
Skriven i jag-form. Öppnas direkt i webbläsaren.

---

## GitHub

Repot finns på: [https://github.com/kentlundgren/Ekonomi](https://github.com/kentlundgren/Ekonomi)

---

## 🌐 Live-sidor (GitHub Pages)

Repot är kopplat till **GitHub Pages** vilket gör att HTML-filerna är tillgängliga
som publika webbsidor direkt via URL – utan att behöva öppna dem lokalt.

### Aktivera GitHub Pages (första gången)

1. Gå till [https://github.com/kentlundgren/Ekonomi/settings/pages](https://github.com/kentlundgren/Ekonomi/settings/pages)
2. Under **Source** – välj **Deploy from a branch**
3. Branch: **main** &nbsp;|&nbsp; Folder: **/ (root)**
4. Klicka **Save**
5. Vänta 1–2 minuter – GitHub bygger sidan

### Live-adresser

| Fil | Live-URL |
|-----|----------|
| `index.html` (startsidan) | https://kentlundgren.github.io/Ekonomi/ |
| `redovisning/BAS/analys.html` | https://kentlundgren.github.io/Ekonomi/redovisning/BAS/analys.html |

> **Obs:** Behövs det en `index.html` i BAS-mappen?  
> Nej – `analys.html` nås direkt via sin URL ovan. En index.html i BAS-mappen
> behövs bara om du vill ha en "innehållsförteckning" dit när man besöker
> `/redovisning/BAS/` utan att ange filnamn. Det är valfritt.

### Uppdatera live-sidorna

Live-sidorna uppdateras **automatiskt** varje gång du pushar till `main`.
Det tar normalt under en minut.

---

## ⚠️ Viktig information: Nested Git-repo

### Vad är problemet?

Mappen `Ekonomi` har ett **eget git-repo** (med sin `.git`-mapp inuti).
Samtidigt ligger `Ekonomi` **inuti en annan mapp** som *också* är ett git-repo:

```
C:\Users\kentl\OneDrive\AI\Claude\          ← Föräldra-repo (remote: Ovrigt)
    ├── ArbetenSokta/
    ├── ClaudeCowork/
    ├── Ekonomi/                             ← DETTA repo (remote: Ekonomi)
    │   ├── .git/                            ← eget git-repo
    │   └── redovisning/...
    └── Ovrigt/
```

Det kallas **nested git-repo** (inbäddat git-repo) och är tekniskt fullt tillåtet,
men det kräver att du är medveten om *vilket* av de två repona du jobbar med
vid varje givet tillfälle.

---

### Hur fungerar detta i praktiken?

#### När du jobbar i Cursor (med Ekonomi-mappen öppnad)

När du öppnar just `Ekonomi`-mappen i Cursor (`File → Open Folder → Ekonomi`) pekar
Cursor och git-kommandon på det **inre repot** (dvs. `Ekonomi/.git`).

- `git status`, `git add`, `git commit`, `git push` → arbetar mot **Ekonomi-repot**
  och GitHub-adressen `kentlundgren/Ekonomi`
- Allt fungerar normalt så länge du öppnar just `Ekonomi`-mappen som workspace

**Risk:** Om du öppnar föräldramappen `AI\Claude` i Cursor i stället ser du plötsligt
det yttre repot (`Ovrigt`). Då är `Ekonomi/` bara en untracked undermapp.
Git-kommandon därifrån gäller Ovrigt-repot – inte Ekonomi-repot.

---

#### När du öppnar `AI\Claude` (föräldramappen) i Cursor

Föräldra-repot ser `Ekonomi/`-mappen som ett **nested repo** och listar den
med varning i `git status`:

```
modified:   Ekonomi (untracked content)
```

Det är normalt och betyder inget farligt. Men tänk på:
- Kör du `git add .` i föräldramappen påverkas **inte** filerna inuti `Ekonomi/`
  (git hoppar över nested repos om de inte är konfigurerade som submodules)
- Du behöver i så fall gå in i `Ekonomi/`-mappen och köra git-kommandon separat

---

#### När du arbetar med Ekonomi-projektet i Claude Cowork

I Claude Cowork (webbgränssnittet) finns **inget git-sammanhang** alls.
Claude redigerar filer direkt på disk utan att veta om git-historik.

Det innebär:
- Ändringar som Claude Cowork gör sparas direkt i filerna (bra)
- Men dessa ändringar **committas inte automatiskt** – du måste själv gå in i
  Cursor (eller terminalen) efteråt och committa dem till `Ekonomi`-repot
- Om du glömmer detta hamnar ändringarna utanför git-historiken
  tills nästa manuella commit

**Rekommenderat arbetsflöde med Claude Cowork:**
1. Låt Claude Cowork göra ändringar i filerna
2. Öppna Cursor med `Ekonomi`-mappen
3. Kör `git status` – se vad som förändrats
4. Commit och push till GitHub

---

### Sammanfattning av risker och åtgärder

| Situation | Risk | Åtgärd |
|-----------|------|---------|
| Öppnar `AI\Claude` i Cursor | Arbetar mot fel repo | Öppna alltid `Ekonomi`-mappen separat |
| Glömmer committa efter Claude Cowork | Ändringar saknas i git-historik | Committa manuellt efteråt i Cursor |
| Kör `git push` utan att tänka | Kan pusha till fel remote | Kör `git remote -v` för att verifiera |
| Föräldra-repot visar `Ekonomi` som modified | Förvirring | Det är normalt – ignorera det i föräldramappen |

---

## Git-hantering

**Kent commitar alltid själv.**

Claude påminner när en commit bör göras och föreslår färdigt commit-meddelande:

```powershell
cd "C:\Users\kentl\OneDrive\AI\Claude\Ekonomi"
git add .
git commit -m "Kort beskrivning av vad som ändrades"
git push
```
