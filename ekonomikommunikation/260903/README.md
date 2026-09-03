# ekonomikommunikation / 260903

Arbetsmapp skapad 2026-09-03.

Här ligger planeringen för hur Kent Lundgren kan kommunicera sin syn på hur
ekonomi kan kommuniceras. Startpunkten är [`PRD.md`](PRD.md) i den här mappen.

---

## 🗂️ Lokalt repo

Repo-rot lokalt:

`C:\Users\kentl\OneDrive\AI\Claude\Ekonomi`

Den här arbetsmappen lokalt:

`C:\Users\kentl\OneDrive\AI\Claude\Ekonomi\ekonomikommunikation\260903`

På GitHub: <https://github.com/kentlundgren/Ekonomi/tree/main/ekonomikommunikation/260903>

⚠️ `Ekonomi` ligger nästlat inuti föräldramappen `...\AI\Claude\`, som också
är ett eget git-repo (remote: `Ovrigt`). Öppna alltid `Ekonomi`-mappen direkt
i Cursor, aldrig föräldramappen. Se [`Ekonomi/README.md`](../../README.md),
avsnittet "Nested Git-repo".

## 🌐 Live-sida

**[Kan vi anställa henne i tre år?](https://kentlundgren.github.io/Ekonomi/ekonomikommunikation/260903/)**
– `https://kentlundgren.github.io/Ekonomi/ekonomikommunikation/260903/`

Interaktiv sida om ekonomikommunikation. Nås även från
[Ekonomi-startsidan](https://kentlundgren.github.io/Ekonomi/) via menyn.
Live inom ~1 minut efter push till `main`.

## Innehåll

| Fil | Beskrivning |
|-----|-------------|
| [`index.html`](index.html) | Den interaktiva sidan |
| [`styles.css`](styles.css) | CSS för sidan |
| [`app.js`](app.js) | Datamodell, beräkning, interaktion |
| [`PRD.md`](PRD.md) | Product Requirements Document, itererad i dialog |
| [`SPEC.md`](SPEC.md) | Låst bygg-spec: datamodell, färgregler, komponenter, acceptanslista |
| [`process-logg.md`](process-logg.md) | Beslut under bygget, tre leveranser |
| [`README.md`](README.md) | Den här filen |
| `ekonomikommunikation.xlsx` | Kents exempelresultaträkningar (typfall A–D, två tidsögonblick) |

## Status

**Sidan är byggd** (`index.html` + `styles.css` + `app.js`) och verifierad
lokalt i webbläsare mot acceptanslistan i [`SPEC.md`](SPEC.md) avsnitt 9.
Länkad från Ekonomi-startsidan och upptagen i `Ekonomi/README.md`.

Sidan visar en forskargrupps resultaträkning fyra år fram, i fyra typfall
(A–D) plus ett redigerbart läge D-ver2, sedd från år X och år X+1. En portfölj
tidsbegränsade bidrag löper ut medan lönekostnaderna ligger platt. Varningen
på negativ RESULTAT-rad trappas upp från A till D, och de tomma
intäktscellerna längre fram väcker frågan om nya bidrag är på väg.

Nästa steg: blogginlägget (upplägg C, "Kan vi anställa henne i tre år?") som
utgår från sidan. Se [`PRD.md`](PRD.md) avsnitt 7.

## Datummappen

`260903` = 2026-09-03. Varje ny arbetsomgång kring ekonomikommunikation kan
få en egen datummapp under `ekonomikommunikation/`, så att tidigare underlag
ligger kvar orört.
