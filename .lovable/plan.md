# Fix: mobile hamburger menu not showing routes

## Problem
On mobile, tapping the hamburger toggles state correctly (icon switches to X), but the overlay listing Manifesto / Grupo / Contato never appears.

## Root cause
In `src/components/Navbar.tsx`, the `<nav>` element has an inline `backdropFilter: blur(...)`. In modern browsers, `backdrop-filter` creates a containing block for `position: fixed` descendants. The mobile menu overlay lives inside the `<nav>` and uses `fixed inset-x-0 top-16 bottom-0` — instead of resolving against the viewport, it resolves against the nav (which is only `h-16`), so it collapses to zero usable height and renders nothing visible.

## Fix
Move the mobile overlay `<div>` out of the `<nav>` element so its `fixed` positioning resolves against the viewport. Keep the toggle button, state, and animation logic exactly as-is.

Implementation detail:
- Wrap `Navbar`'s return in a fragment.
- Keep `<nav>...</nav>` unchanged in structure for the top bar.
- Render the mobile overlay `<div className="lg:hidden fixed inset-x-0 top-16 bottom-0 ...">` as a sibling after `</nav>`, not as a child.
- No CSS, no animation, no copy changes. Desktop behavior is untouched (overlay is already `lg:hidden`).

## Verification
- At 390×844: tap hamburger → overlay with Manifesto, Grupo (expandable list of verticals), Contato should appear full-screen below the navbar. Tap X or a link → overlay closes.
- At ≥1024px: no visible change; overlay stays hidden via `lg:hidden`.
- No horizontal scroll introduced.

## Out of scope
- Restyling the mobile menu.
- Changing nav copy, links, or animations.
- Any other responsive tweaks.
