# Changelog

Short entries, added as direction changed. Newest at the bottom.

- **Scaffold.** Added the modular engine: `src/utils/math.js`
  (`clamp`/`lerp`/`mapRange`), `src/canvas/setupCanvas.js` (HiDPI
  canvas + resize), `src/input/input.js` (mouse/touch position),
  `src/canvas/loop.js` (draw loop), `main.js` (starts the loop). Load
  order in `index.html` drives the dependency order: utils, canvas
  setup, canvas loop, input, main.
- **Reference sketch: mouse-mapped ring.** One signal (mouse X), one
  parameter (ring radius, 20-150px), linear mapping via `mapRange`.
  Kept deliberately minimal — this is the charter's own worked
  example, not a feature demo.
- **Explicit wiring; added keyboard capture.** `setupCanvas.js` and
  `input.js` used to run themselves as a side effect of being loaded;
  split each into a definition plus an `init*()` call, and moved those
  calls into `main.js` so it actually wires canvas, input, and loop
  together instead of only starting the loop. Also added `keydown`/
  `keyup` tracking on `input.keys` — the file's own job description is
  "mouse/keyboard signal capture" and it was mouse-only. Dropped the
  touch handling that was there instead; it was never asked for and
  never verified against a real touch event.
