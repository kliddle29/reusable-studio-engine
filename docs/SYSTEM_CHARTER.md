# System Charter

Fill this out before writing any code. One paragraph per section, plain
language. Copy this file as-is into every fork; only the answers change.

## Intent

What is this sketch about — in one sentence, not a feature list?

> A single ring that responds to where you are on the page. The point
> is the moment the ring visibly reacts to the mouse, not a full scene.

## Signal

What real-world input drives the system? Where does it come from?

> Mouse X position, read directly from `mousemove` events, 0 at the
> left edge of the window to the window's full width at the right edge.

## Parameter

What number in the sketch actually changes, and across what range?

> Ring radius, 20px to 150px.

## Behavior

How does the signal map to the parameter — in words, before it's code?

> Linear. Mouse at the left edge gives the smallest ring; mouse at the
> right edge gives the largest. `mapRange` in `src/utils/math.js` does
> the conversion, clamped so the ring never overshoots either bound.

## Constraints

What's off the table for this pass? Naming a constraint here is what
lets `loop.js` stay a sketch instead of growing into an app.

> One signal, one parameter. No color changes, no secondary shapes, no
> persistence between reloads.

## Non-goals

What would be reasonable to add, but isn't part of this charter?

> Multi-touch, keyboard input, sound, particle trails. Any of these is
> a new charter, not an extension of this one.
