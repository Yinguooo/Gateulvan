# GateUlvan — React landing page

Responsive Vite + React recreation of the GateUlvan dark-fantasy landing page.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
npm run preview
```

## Add or edit carousel cards

All destinations are data-driven. Open `src/data/cards.js` and append another object to the exported `cards` array:

```js
{
  id: 'new-section',          // unique id; used as the React key
  title: 'New Section',
  subtitle: 'A short description',
  href: 'https://your-domain.example/new-section',
  symbol: 'orbit',            // 'math', 'orbit', or 'feather'
  number: '04',
}
```

The carousel automatically wraps from the final card to the first, updates the pagination, and remains keyboard- and swipe-friendly. The layout only displays the active card and its immediate neighbours; every card remains reachable using the arrows or pagination, no matter how many entries are in the array.

The starter `href` values are local example paths (`/mathematics`, `/universe`, `/diary`). Replace them with the real URLs or routes for your site before publishing. The destination pages are not included in this landing-page project.

## Main files

- `src/App.jsx` — page layout, header, Keys/About tabs, background layers.
- `src/components/Carousel.jsx` — circular, data-driven carousel and navigation.
- `src/components/CardSymbol.jsx` — inline SVG artwork for card symbols.
- `src/data/cards.js` — card content and destination links.
- `src/styles.css` — responsive layout, card styling, and animation loops.
- `public/images/gateulvan-scene.webp` — background illustration used by the page.

## Motion and accessibility

The background uses a slow camera drift, layered portal glow, animated light ribbons, floating debris, and dust particles. The motion is CSS-based and loops continuously; `prefers-reduced-motion` is respected. The carousel supports arrow keys, click controls, pagination, and touch swipes.
