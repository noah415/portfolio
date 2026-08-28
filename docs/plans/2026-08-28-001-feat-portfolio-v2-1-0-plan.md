---
artifact_contract: ce-unified-plan/v1
artifact_readiness: implementation-ready
execution: code
product_contract_source: ce-plan-bootstrap
title: "feat: Portfolio website v2.1.0 — refactor metric, split hero cards, Projects dropdown"
created: 2026-08-28
depth: lightweight
---

# feat: Portfolio website v2.1.0

**Target repo:** portfolio (branch `claude/portfolio-v2-1-0-ff728d`)

## Goal Capsule

Ship v2.1.0 of the portfolio site: surface the codebase-refactor win ($350k annualized / 73% code reduction) in both the Experience timeline and the Metrics section, and replace the dead "Projects · SOON" nav badge with a working dropdown linking to Kabuboard.

The attached design canvas (`Portfolio website redesignv2.1.0.zip` → `Noah Otsuka Portfolio.dc.html`) is a complete reference implementation. Every clamp, color, copy string, and bar width in this plan is transcribed from it. **When this plan and the design doc disagree, the design doc wins on visual values; this plan wins on React structure.**

---

## Problem Frame

The site's strongest recent accomplishment — proposing, designing, and leading a codebase refactor that cut per-feature code 73% and unlocked ~$350k/yr — appears nowhere on the site. Meanwhile the Metrics section devotes a full-width hero card to a single story (the Azure migration), and the nav advertises a "Projects" section that doesn't exist and can't be clicked, even though Kabuboard is live at `ui.kabuboard.noahotsuka.com`.

---

## Requirements

| ID | Requirement |
|----|-------------|
| R1 | The Professional Services Engineer entry leads with the refactor bullet; the three existing bullets follow unchanged, in order. |
| R2 | The Metrics hero is a two-column grid of two equally-weighted cards that stacks to one column at the existing `data-hero-grid` breakpoint. |
| R3 | Card 1 preserves the migration content at reduced type scale (big stat `clamp(48px,6.5vw,76px)`, body `clamp(12.5px,1.2vw,14.5px)`, bar labels 12.5px). |
| R4 | Card 2 presents the `$350k` savings stat with the refactor copy and before/after line-count bars (532 full-width gray, 140 at 26.3% accent gradient). |
| R5 | Both cards share one visual treatment: 22px radius, gradient background, border, radial glow overlay. |
| R6 | The nav "Projects · SOON" badge is replaced by a click-toggled dropdown whose chevron rotates 180° when open. |
| R7 | The dropdown menu is positioned below and right-aligned, containing one item: Kabuboard → `https://ui.kabuboard.noahotsuka.com`, opening in a new tab. |
| R8 | Clicking outside the dropdown closes it. |
| R9 | The dropdown is hidden at ≤720px, alongside the other nav links. |
| R10 | The displayed version reads `v2.1.0`. |

---

## Key Technical Decisions

**KTD1 — Extract a generic `MetricHeroCard` component rather than inlining two card divs.**
*(session-settled: user-approved — chosen over literal transcription of the design's two sibling divs: the two cards are structurally identical, and inlining would duplicate the shell + bar-row markup and push `Metrics.tsx` past 200 lines.)*
Governs R2, R3, R4, R5. The component holds zero product copy — eyebrow, stat, prefix, suffix, body, and bars all arrive as props — so business meaning stays in `Metrics.tsx`, per the repo owner's layering rule that generic child components take config while the parent container assembles meaning.

**KTD2 — No test runner; verification is type-check + lint + build + browser.**
*(session-settled: user-approved — chosen over adding Vitest + React Testing Library: the repo has no test infrastructure today, and this release is three visual changes plus a data edit. Standing up a runner would roughly double the change surface.)*
Governs the Verification Contract. Component-level test coverage for this repo is deferred to follow-up work.

**KTD3 — The dropdown is React state, not the design doc's imperative DOM wiring.**
The reference `wireProjectsMenu()` mutates `style.display` and attaches a bare `document` listener. Port the *behavior*, not the mechanism: `useState` for open/closed, a `useEffect`-registered document `click` listener that closes on outside clicks and is removed on unmount, and `stopPropagation` on the trigger so its own click doesn't immediately re-close the menu.

**KTD4 — The dropdown stays inline in `Nav.tsx` rather than becoming a `NavDropdown` component.**
There is exactly one dropdown with exactly one item. Extracting a generic dropdown primitive now would be a premature abstraction; `Nav.tsx` lands around 150 lines, well inside the 300-line guideline. Revisit if a second dropdown appears.

**KTD5 — `data-hero-grid` is re-pointed to the outer card grid.**
Today the attribute marks the *inner* copy-vs-bars split inside the single hero card. In v2.1.0 it marks the *outer* two-card grid, and each card stacks its copy above its bars at every width. This is intentional and matches the design. Consequence: the existing `@media (max-width:960px)` rule stacks the cards (desired) and also forces `gap: 28px`, overriding the desktop `clamp(14px,1.6vw,20px)`. Keep that — it is the design's own behavior.

**KTD6 — Hiding the dropdown on mobile requires a new CSS rule, not reuse of the existing one.**
`styles/globals.css:143` currently reads `[data-nav-links] > span:not([data-nav-projects])` — the `:not()` exists specifically to *keep* the Projects badge visible at ≤720px. Since the new trigger lives inside a `div[data-projects-wrap]`, the `> span` selector would not reach it anyway. Add an explicit `[data-projects-wrap] { display: none !important; }` and drop the now-dead `:not()` clause, since `data-nav-projects` ceases to exist.

---

## High-Level Technical Design

### Metrics section structure — before and after

```
BEFORE                                  AFTER
<Reveal>  ← the card itself             <Reveal data-hero-grid>  ← now the grid
  glow overlay                            <MetricHeroCard>   ← card 1 (migration)
  <div data-hero-grid>  ← inner split       glow overlay
    <div> eyebrow, 5 months, copy </div>    eyebrow / stat / body / bars
    <div> prior-team + my-approach bars</div>
  </div>                                  <MetricHeroCard>   ← card 2 (savings)
</Reveal>                                   glow overlay
                                            eyebrow / stat / body / bars
```

### Dropdown state machine

```
        click trigger (stopPropagation)
closed ──────────────────────────────────► open
   ▲                                         │  chevron: rotate(180deg)
   │  click trigger  ·  click outside wrap   │
   └─────────────────────────────────────────┘
```

---

## Implementation Units

### U1. Add the refactor bullet and bump the version

**Goal:** Land both data-only edits for the release.
**Requirements:** R1, R10
**Dependencies:** none
**Files:** `components/portfolio/data.ts`

**Approach:**
1. Insert into `jobs[0].bullets` as index 0: `'Proposed, designed, and led a team through a codebase refactor — cut the code required for a new feature 73% and unlocked ~$350k in annualized time savings.'` The three existing bullets shift down, unchanged in text and order.
2. Change `export const version = 'v2.0.0'` to `'v2.1.0'` (line 125).

Use the em dash (—) and the tilde (~) exactly as written — the surrounding bullets already use em dashes, so this matches house style.

**Patterns to follow:** existing `jobs[].bullets` entries in the same file; `version` is consumed only by `components/portfolio/sections/FunFacts.tsx:76`.

**Test scenarios:** *Test expectation: none — pure data constants with no runtime behavior; correctness is verified visually in U5 and by the type checker.*

**Verification:** Experience section renders four bullets under Professional Services Engineer with the refactor bullet first; the footer version chip reads `v2.1.0`.

---

### U2. Create the generic `MetricHeroCard` component

**Goal:** A reusable card that renders an eyebrow, a large stat with optional prefix/suffix, body copy, and a list of comparison bars — with no knowledge of migrations, refactors, or any portfolio-specific content.
**Requirements:** R3, R4, R5 (via KTD1)
**Dependencies:** none
**Files:** `components/portfolio/MetricHeroCard.tsx` (new)

**Approach:**

Props shape (directional — adjust naming during implementation if something reads better):

```
ComparisonBar = {
  label: string          // "Prior team" | "Lines · before"
  value: string          // "24 mo" | "532"
  fillPercent: number    // 100 | 21 | 26.3
  accent?: boolean       // true → accent gradient fill + accent label color
}

MetricHeroCardProps = {
  eyebrow: string
  statPrefix?: string    // "$"
  stat: string           // "5" | "350k"
  statSuffix: string     // "months" | "savings per year"
  body: React.ReactNode  // JSX, so <strong> emphasis stays with the caller
  bars: ComparisonBar[]
}
```

Card shell (identical for both instances): `position: relative`, `overflow: hidden`, `borderRadius: 22`, `padding: clamp(20px,2.6vw,32px)`, `background: linear-gradient(140deg, rgba(22,30,54,.55), rgba(10,14,28,.5))`, `border: 1px solid rgba(140,160,220,.16)`.

Absolutely-positioned glow overlay, `pointer-events: none`, `inset: 0`: `radial-gradient(120% 90% at 100% 0%, color-mix(in srgb,var(--accent) 14%, transparent), transparent 55%)`. Wrap the content in a `position: relative` div so it sits above the overlay.

Content, top to bottom:
- Eyebrow: heading font, `12px`, `letter-spacing: .2em`, uppercase, `#8b95b2`, `margin-bottom: 12px`.
- Stat row: `display: flex`, `align-items: flex-end`, `line-height: .82`. Gap is `2px` when `statPrefix` is present, `6px` otherwise. Prefix renders at `clamp(24px,3vw,34px)`, weight 500, `var(--accent-soft)`, `padding-bottom: clamp(6px,1vw,11px)`. Stat renders at `clamp(48px,6.5vw,76px)`, weight 700, `letter-spacing: -.03em`, with the `linear-gradient(180deg,#eef3ff,var(--accent-soft))` background-clip text treatment (include both `WebkitBackgroundClip` and `backgroundClip`, `color: transparent`). Suffix at `clamp(18px,2vw,26px)`, weight 500, `var(--accent-soft)`, `padding-bottom: clamp(6px,1vw,11px)`.
- Body paragraph: `max-width: 420`, `clamp(12.5px,1.2vw,14.5px)`, `line-height: 1.58`, `#9aa5c4`, `margin: 14px 0 18px`.
- Bar list: `flex flex-col`, `gap: 14px`. Each bar is a `grid` with `gridTemplateColumns: 'auto 1fr auto'`, `align-items: center`, `gap: 12px`. Label: `12.5px`, `whiteSpace: nowrap`, fixed `width: 68`, colored `var(--accent-soft)` when `accent`, else `#9aa5c4`. Track: `height: 7`, `borderRadius: 99`, `background: rgba(255,255,255,.06)`, `overflow: hidden`, containing a fill at `width: {fillPercent}%` with `linear-gradient(90deg,var(--accent),var(--accent-soft))` when `accent`, else flat `#4a5578`. Value: `12.5px`, `#c3cde8`, `whiteSpace: nowrap`, `fontVariantNumeric: 'tabular-nums'`.

Note the deltas from the current inline markup — these are deliberate down-scalings, not transcription drift: padding `clamp(22px,3.2vw,40px)` → `clamp(20px,2.6vw,32px)`; eyebrow `12.5px` → `12px`; bar track `8px` → `7px`; bar label/value `13px` → `12.5px`; bar label width `77` → `68`; bar gap `18px` → `14px`, inner gap `14px` → `12px`.

**Patterns to follow:** `components/portfolio/CertificationAccordion.tsx` for the props-in / no-product-copy component shape; `components/portfolio/Icon.tsx` for the Tailwind-class + inline-style mix used throughout this codebase.

**Test scenarios:** *Test expectation: none — presentational component with no state or branching beyond prop presence (KTD2). Its rendering is verified in U5.*

**Verification:** File type-checks; both prop shapes (with and without `statPrefix`) compile.

---

### U3. Rebuild the Metrics hero as a two-card grid

**Goal:** Replace the single full-width hero card with two `MetricHeroCard` instances in a stacking grid.
**Requirements:** R2, R3, R4, R5
**Dependencies:** U2
**Files:** `components/portfolio/sections/Metrics.tsx`

**Approach:**
1. Replace the entire hero `<Reveal>` block (currently lines 50–120) with a single `<Reveal data-hero-grid>` that is itself the grid: `display: grid`, `gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)'`, `gap: 'clamp(14px,1.6vw,20px)'`, `flex: '0 0 auto'`. The card styling, glow overlay, and inner two-column split all move out — the shell now lives in `MetricHeroCard` (U2), and the copy-vs-bars split disappears entirely per KTD5.
2. Card 1 props — eyebrow `The migration everyone else gave up on`, stat `5`, suffix `months`, body preserving the existing paragraph verbatim including the two `<strong>` spans on "2 years" and "5 months" (`color: '#dce3f6'`, `fontWeight: 600`), bars `[{ label: 'Prior team', value: '24 mo', fillPercent: 100 }, { label: 'My approach', value: '5 mo', fillPercent: 21, accent: true }]`.
3. Card 2 props — eyebrow `Annualized savings, unlocked`, prefix `$`, stat `350k`, suffix `savings per year`, body: "Driven by a codebase refactor I proposed, designed, and led — cutting the code required to ship a new feature **73%**, from **532 lines** down to **140**." with the same `<strong>` treatment on `73%`, `532 lines`, and `140`; bars `[{ label: 'Lines · before', value: '532', fillPercent: 100 }, { label: 'Lines · after', value: '140', fillPercent: 26.3, accent: true }]`.
4. Leave the `<h2>`, `data-stat-grid`, and `secondaryStats` blocks untouched.

**Patterns to follow:** the `<Reveal>` usage already in this file — it forwards `data-*`, `className`, and `style` through to the rendered tag, so `data-hero-grid` and the grid styles can sit directly on it.

**Test scenarios:** *Test expectation: none — the container supplies static content to a presentational child (KTD2). Covered by U5's browser check.*

**Verification:** Metrics section shows two side-by-side cards at desktop width, visually identical treatment, with the migration story left and the savings story right.

---

### U4. Replace the Projects badge with a working dropdown

**Goal:** A click-toggled, outside-click-dismissible Projects menu linking to Kabuboard, hidden on mobile.
**Requirements:** R6, R7, R8, R9
**Dependencies:** none
**Files:** `components/portfolio/Nav.tsx`, `styles/globals.css`

**Approach:**

In `Nav.tsx`:
1. Add `useState` for open/closed and a `useRef` on the wrapper div.
2. Replace the `<span data-nav-projects>` block (lines 66–79) with `<div data-projects-wrap style={{ position: 'relative' }}>` containing:
   - A trigger: `14px`, weight 600, `#aab4d0`, `cursor: pointer`, `inline-flex`, `align-items: center`, `gap: 6px`, `userSelect: 'none'`. Label "Projects" followed by a 10×10 chevron SVG (`viewBox="0 0 10 10"`, `path d="M1 3l4 4 4-4"`, `stroke="currentColor"`, `strokeWidth="1.4"`, `fill="none"`, round caps/joins) with `transition-transform duration-200` and `transform: open ? 'rotate(180deg)' : 'none'`. The `onClick` calls `stopPropagation()` then toggles.
   - The menu, rendered only when open: `position: absolute`, `top: 'calc(100% + 12px)'`, `right: 0`, `minWidth: 180`, `borderRadius: 12`, `padding: 6`, `background: '#0b1122'`, `border: '1px solid rgba(140,160,220,.22)'`, `boxShadow: '0 12px 30px rgba(0,0,0,.4)'`. Inside, an `<a>` to `https://ui.kabuboard.noahotsuka.com` with `target="_blank"` and `rel="noopener noreferrer"`, styled `display: block`, `13.5px`, weight 600, `#c3cde8`, `padding: '9px 12px'`, `borderRadius: 8`, hover to `background: var(--accent-dim)` / `color: #fff`.
3. Outside-click: a `useEffect` that, while open, registers a `click` listener on `document` closing the menu when the event target is outside the wrapper ref, and removes it on cleanup. Guard the ref check so a click on the trigger itself doesn't double-toggle.

In `styles/globals.css`, inside the existing `@media (max-width: 720px)` block:
4. Add `[data-projects-wrap] { display: none !important; }`.
5. Simplify `[data-nav-links] > span:not([data-nav-projects])` to `[data-nav-links] > span` — the `data-nav-projects` attribute no longer exists anywhere, so the exclusion is dead (KTD6). Confirm `data-mobile-dots` is unaffected: it is a `div`, not a `span`, so the `> span` selector never reached it.

**Patterns to follow:** `components/portfolio/CertificationAccordion.tsx:33-41` already renders this exact chevron SVG with the same rotate-on-open treatment — mirror it rather than inventing a second chevron. The Resume `<a>` immediately below shows the established inline hover-handler style used in this nav.

**Test scenarios:** *Test expectation: none automated (KTD2).* Behaviors to confirm by hand in U5: trigger click opens the menu and rotates the chevron; second trigger click closes it; a click anywhere else on the page closes it; a click inside the menu still follows the link; the link opens in a new tab; the whole control is absent below 720px.

**Verification:** Dropdown opens, closes on outside click, and Kabuboard opens in a new tab. Nothing at ≤720px.

---

### U5. Verify the release

**Goal:** Confirm the four changes render correctly and nothing regressed.
**Requirements:** all
**Dependencies:** U1, U2, U3, U4
**Files:** none (verification only)

**Approach:**
1. `npx tsc --noEmit` — clean.
2. `npm run lint` — clean.
3. `npm run build` — succeeds.
4. `npm run dev`, then check in the browser at desktop width: Experience shows four bullets with the refactor first; Metrics shows two equal cards; the Projects dropdown opens, closes on outside click, and links out; the version chip reads `v2.1.0`.
5. Narrow to ~900px: the two metric cards stack to one column. Narrow to ~700px: the Projects control disappears along with the other nav links, and the mobile dots remain visible.

**Execution note:** This is the release's only proof, so run all five steps rather than stopping at a green build.

**Test scenarios:** the browser checks enumerated above.

**Verification:** All five steps pass.

---

## Verification Contract

- `npx tsc --noEmit` exits clean.
- `npm run lint` exits clean.
- `npm run build` succeeds.
- Manual browser pass at desktop, ~900px, and ~700px per U5.

## Definition of Done

R1–R10 all satisfied; the Verification Contract passes; no changes outside `components/portfolio/data.ts`, `components/portfolio/MetricHeroCard.tsx`, `components/portfolio/sections/Metrics.tsx`, `components/portfolio/Nav.tsx`, and `styles/globals.css`.

---

## Scope Boundaries

**In scope:** the four changes above, plus the `MetricHeroCard` extraction they require.

**Deferred to follow-up work:**
- Test infrastructure (Vitest + React Testing Library) and component coverage for this repo — per KTD2.
- A real Projects *section* on the site. The dropdown is a nav shortcut to an external app, not a section; `ProgressDots`/`sectionLabels` are untouched and the site keeps five sections.
- Reaching Kabuboard from mobile. R9 hides the dropdown at ≤720px per the design, which leaves the link desktop-only. Flagging as a known consequence, not fixing it here.

**Non-goals:** restyling the `data-stat-grid` cards or `secondaryStats` chips; changing `package.json`'s `version` field (it is Next's untouched `0.1.0` scaffold default and is not displayed anywhere — the site's version lives in `data.ts`).

---

## Sources

- `Portfolio website redesignv2.1.0.zip` → `Noah Otsuka Portfolio.dc.html` — reference implementation. Metrics markup at lines 83–215; nav dropdown at lines 84–88; responsive rules at lines 43–54; dropdown open/close behavior in the same file at lines 480–496.
- Current source: `components/portfolio/sections/Metrics.tsx`, `components/portfolio/Nav.tsx`, `components/portfolio/data.ts`, `styles/globals.css:132-152`.
