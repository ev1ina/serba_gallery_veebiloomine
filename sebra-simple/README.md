# Sebra — lihtne Vue projekt

## Käivitamine

```bash
npm install
npm run dev
```

Tootmisversioon: `npm run build`. Eelvaade: `npm run preview`.
Node on vajalik arendamiseks; valmis leht on staatiline.

## Pildid

Asenda kaustas `src/assets/images/Images1/` olevad ühevärvilised kohatäited oma piltidega. Säilita failinimed (ka tühikud ja sulud):

- Galerii vaade.png
- Kunstniku portree (1).png
- Kunstniku portree (2).png
- Kunstniku portree (3).png
- Kunstniku portree.png
- Maalitunni foto.png
- Teose foto (1).png
- Teose foto.png

Pilditeed on otse vastavate lehtede `<img src="...">` elementides.

## Kood

- `src/views/`: lehed; tekstid ja kaardid on otse HTML-is.
- `src/components/`: päis ja jalus.
- `src/router.js`: lehtede aadressid; hash-router sobib staatilisele majutusele.
- `src/style.css`: kujundus ja mobiilivaade.
- `src/main.js`: Vue, Bootstrap ja CSS ühendamine.

Andmefaile, backend'i ja andmebaasi ei ole. JavaScripti kasutatakse ainult menüü, lehtede vahetamise ja näidisvormi jaoks. Registreerimisvorm kontrollib kohustuslikke välju ja e-posti formaati, kuid ei saada andmeid.
Kujundus on tehtud kaasas olnud Vue-failide põhjal; algset CSS-i ega Figma täpset paigutust ei olnud nende failide hulgas.
