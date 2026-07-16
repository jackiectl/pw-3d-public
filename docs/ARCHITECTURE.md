# How this site is built — and how the 2D ⇄ 3D handoff works

This documents how the site fits together. It answers the question: *is it one
project doing both 2D and 3D, or two separate things linked together?*

## Short answer

**It is one single [Astro](https://astro.build) project.** The 2D site and the
3D "Cataloger's Desk" are two rendering modes of the **same content**, built and
deployed together. They are not two separate codebases stitched by a link — they
share one data source, one asset pipeline (`/_astro/…`), and one font stack. The
"link" between them is just an `<a href>` plus each side's own reveal animation.

## The build

- **Framework:** Astro (static output). Every hashed file under `/_astro/` —
  `app.<hash>.css`, `app.<hash>.js`, image variants — is an Astro build artifact.
- **Pages (2D):** classic multi-page site, per language:
  `/en/`, `/en/research/`, `/en/projects/`, `/en/cabinet/`, `/en/cv/` and the
  `/zh/…` counterpart. In-site navigation uses Astro's **ClientRouter**
  (`ClientRouter.astro…js` + `router.<hash>.js`) which gives soft View-Transition
  navigation between the 2D pages.
- **Page (3D):** a single route `/3d/`. Its `<html>` carries a `data-m3d`
  attribute; that's the switch that turns the page into the WebGL experience.

## One data source feeds both

Both modes read the **same catalog data**. On `/3d/` it is embedded verbatim as
a JSON island:

```html
<script type="application/json" id="m3d-data">{ "profile": …, "about": …,
  "research": […], "projects": […], "cabinet": …, "cv": …, "exit": … }</script>
```

It is fully **bilingual** (`{"en": …, "zh": …}` on every field), which is why the
3D language toggle can switch instantly with no page reload. The 2D pages render
the same fields as normal DOM/CSS; the 3D page renders them onto paper, books,
and shelves.

## How the 3D page boots

`/3d/index.html` ships a tiny inline module
(`index.astro_astro_type_script_index_0_lang.<hash>.js`, ~4 KB). It:

1. Checks `document.documentElement.dataset.m3d === "ok"` (a capability gate).
2. Reads `#m3d-data`, detects language from `<html lang>`.
3. Shows a loader and steps its label through three stages —
   **UNLOCKING THE DOOR → WARMING THE LAMPS → SHELVING THE BOOKS**
   (`正在开锁 → 正在点灯 → 正在归架` in Chinese).
4. Preloads the exact fonts + only the Chinese glyphs the data uses, then
   dynamically `import()`s the heavy bundle `app.<hash>.js` (~700 KB — Three.js +
   the whole scene).
5. Calls `createApp({ canvas, ui, dto, lang })`, which builds the room, and
   fades the loader out with a **curtain** reveal.

The scene is **fully procedural** — it loads no `.glb`/`.gltf`/`.hdr`/texture
files. The only images it uses are the same project `webp` thumbnails the 2D
site uses, mapped onto the framed portrait and the desk papers. It fetches no
audio files.

## The 2D → 3D "smooth transition"

There is **no cross-document shared-element View Transition** here. The effect is
built from three ordinary pieces:

1. **The entrance affordance (2D side).** Top-right of every 2D page:
   ```html
   <a id="m3d-entrance" data-state="flat" data-astro-reload href="/3d/?lang=en"
      aria-label="The Cataloger's Desk: A 3D Room">
     <span class="underlay"></span><span class="fold"></span><span class="dot"></span>
   </a>
   ```
   It's the folded page-corner in the header. `underlay/fold/dot` are animated
   in CSS on hover (the corner "peels").
2. **`data-astro-reload` forces a full navigation.** This deliberately opts the
   link *out* of the ClientRouter soft-swap so the 3D page loads as a fresh
   document (it needs its own `<html data-m3d>` and a clean WebGL context).
3. **The 3D loader covers the warm-up.** Because a real Three.js scene takes a
   beat to spin up, the loader overlay (lamp + the three stage words) sits on
   top until the scene is ready, then the **curtain** wipes away. The perceived
   "seamlessness" is the peel-corner → loader → curtain choreography, not an
   engine-level page morph.

**Coming back:** the 3D UI's *"back to the catalog ↗"* is a plain link to
`/en/` (or `/zh/`), taken from the data's `exit` field. The **language toggle**
inside 3D (`中文` / `EN`) does **not** navigate — it re-renders the scene text
from the bilingual JSON in place.

## External dependencies

- **Google Fonts** — a large serif+mono set on the 2D pages (the Cabinet lets
  you swap typefaces live), a smaller set (Source Serif 4, IBM Plex Mono, Noto
  Serif SC) on 3D. Everything else is served locally; the site makes no other
  third-party requests.

See [../README.md](../README.md) for how to run it.
