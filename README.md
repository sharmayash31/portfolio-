# Yash Sharma — Portfolio (React)

A React + Vite rebuild of the portfolio, with the same animated design: custom interactive cursor, magnetic buttons, scroll-reveal sections, animated headline, and a scanning portrait frame.

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build for production

```bash
npm run build
```

Outputs static files to the `dist/` folder — this is what you deploy.

## Add your photo

Open `src/App.jsx`, find this block inside the hero section:

```jsx
{/* Swap this block for: <img src="/your-photo.jpg" alt="Yash Sharma" /> */}
<span className="portrait-mono">YS</span>
```

1. Put your photo file (e.g. `photo.jpg`) inside the `public/` folder (create it if it doesn't exist).
2. Replace the `<span className="portrait-mono">YS</span>` line with:
   ```jsx
   <img src="/photo.jpg" alt="Yash Sharma" />
   ```

## Deploy (free options)

### Vercel (recommended for React/Vite)
1. Push this folder to a GitHub repo
2. Go to vercel.com → "New Project" → import the repo
3. Vercel auto-detects Vite — just click Deploy
4. You get a live URL instantly (e.g. `yash-sharma-portfolio.vercel.app`)

### Netlify
1. Run `npm run build` locally
2. Go to netlify.com → drag and drop the `dist/` folder onto the deploy page
3. Live URL generated instantly

### GitHub Pages
1. `npm install -D gh-pages`
2. Add to `package.json` scripts: `"deploy": "vite build && gh-pages -d dist"`
3. Run `npm run deploy`

## Project structure

```
src/
  App.jsx       — all page content (about, projects, skills, achievements, contact)
  CursorFX.jsx  — custom cursor + scroll progress bar
  Magnetic.jsx  — magnetic hover effect for buttons
  Reveal.jsx    — scroll-triggered fade/rise animation wrapper
  index.css     — all styling
```

To update project details, achievements, or contact info, edit the arrays at the top of `src/App.jsx`.
