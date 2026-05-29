# Meme Generator

En meme generator byggd med React, TypeScript, Vite, html2canvas och react-rnd.

## Funktioner

### G-nivå

* Välj meme-bild från ett galleri
* Byt bild när som helst
* Ladda ner färdig meme som PNG
* Minst tre komponenter utöver App.tsx
* All state hanteras i App.tsx
* Bilder lagras i public-mappen
* Git och GitHub används för versionshantering

### VG-nivå

* Lägg till obegränsat antal textfält
* Dra och flytta text fritt över bilden med react-rnd
* Ändra textstorlek individuellt för varje textfält
* Ta bort enskilda textfält
* Text visas direkt på bilden medan användaren skriver
* Nedladdning av den färdiga memen som bild

## Tekniker

* React
* TypeScript
* Vite
* html2canvas
* react-rnd
* Git
* GitHub Pages

## Starta projektet lokalt

```bash
npm install
npm run dev
```

## Bygg projektet

```bash
npm run build
```

## Publicera till GitHub Pages

```bash
npm run deploy
```

## Projektstruktur

```txt
public/
├── meme1.png
├── meme2.png
├── ...
└── meme16.png

src/
├── components/
│   ├── MemePreview.tsx
│   ├── MemeSelector.tsx
│   └── TextControls.tsx
├── App.tsx
├── App.css
└── main.tsx
```