# Ekonomi

Kent Lundgrens ekonomiprojekt – redovisning, BAS-kontoanalys och ekonomiska verktyg.

---

## Projektstruktur

```
Ekonomi/
├── redovisning/
│   └── BAS/
│       └── analys.html   # Interaktivt BAS-kontoanalysprogram
├── .gitignore
└── README.md
```

---

## Filer

### `redovisning/BAS/analys.html`
Ett fristående HTML-program (ingen build-steg krävs) för analys av BAS-kontoplanen.
Öppnas direkt i webbläsaren.

---

## GitHub

Repot finns på: [https://github.com/kentlundgren/Ekonomi](https://github.com/kentlundgren/Ekonomi)

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
