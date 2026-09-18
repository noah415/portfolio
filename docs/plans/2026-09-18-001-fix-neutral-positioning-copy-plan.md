---
title: Neutral Positioning Copy - Plan
type: fix
date: 2026-09-18
artifact_contract: ce-unified-plan/v1
artifact_readiness: implementation-ready
execution: code
product_contract_source: ce-plan-bootstrap
depth: lightweight
---

# Neutral Positioning Copy - Plan

## Goal Capsule

- **Objective:** Make the site read as an engineer's track record rather than a job search, so it serves both hiring managers and prospective clients.
- **Authority:** User request (2026-09-18) > this plan > existing copy.
- **Stop conditions:** Stop and ask if any change would touch metrics, experience, toolbox, certifications, interests, contact links, or the Resume nav link. Stop if a change seems to call for new services/pricing/consulting copy.
- **Execution profile:** Copy-only edits in three files; no new components, no styling changes beyond removing one element.

## Product Contract

### Summary

Delete the job-seeking goal card from About, neutralize the Contact headline and subline, and retitle the page `Noah Otsuka — Software Engineer` with a description of what Noah builds.

### Problem Frame

The site currently states a job target ("A senior engineering role at a growth-stage startup…"), closes with "Let's build something." plus "Open to senior engineering roles and remote work," and titles itself "Senior Software Engineer." That frames the whole page as a job application and undercuts its use with prospective clients.

### Requirements

**Remove role-seeking copy**
- R1. The About section no longer contains the goal statement or its "Where I'm headed" card; the section eyebrow reads "About".
- R2. The Contact headline reads "Let's talk." and the subline reads only "The fastest way to reach me is email."
- R3. No rendered text or meta tag contains role-seeking language ("senior engineering role", "open to", "seeking", "looking for", "available for hire", "remote work").

**Page metadata**
- R4. `<title>` is `Noah Otsuka — Software Engineer`.
- R5. Meta description describes what Noah builds (production systems, cloud migrations, platforms used by hundreds of teams) without "portfolio", "resume", or role language.

### Scope Boundaries

- Unchanged: Hero, Metrics, Experience, toolbox, certifications, FunFacts, email address, GitHub/LinkedIn/X links, nav Resume link and `public/noah_otsuka_resume.pdf`.
- Not added: services, pricing, availability, or consulting copy.
- The canonical URL (`portfolio-noah415.vercel.app`) is a hostname, not visible copy; left as is.

---

## Planning Contract

### Key Technical Decisions

- KTD1. **Delete the whole goal card, not just its paragraph.** The card's only content is the goal line; leaving the bordered box would render an empty panel. (session-settled: user-approved — chosen over deleting only the `<p>`: avoids an empty card.)
- KTD2. **Contact headline "Let's talk." over "Get in touch."** The eyebrow directly above already reads "Get in touch". (session-settled: user-approved — chosen over "Get in touch.": avoids duplicate text.)
- KTD3. **Rewrite the meta description even though it doesn't strictly trip the portfolio/resume/role trigger.** A build-focused description better serves both audiences in search results. (session-settled: user-approved — chosen over leaving it as is.)

### Research Notes

- Full-repo grep for role-seeking terms found hits only in `components/portfolio/sections/About.tsx` (eyebrow, goal card) and `components/portfolio/sections/Contact.tsx` (subline). `pages/_document.tsx`, `public/sitemap.xml`, `components/portfolio/data.ts`, and `README.md` are clean.
- The repo has no unit test runner; `npm run lint` and `npm run build` are the available gates.

---

## Implementation Units

### U1. About: remove goal card

- **Goal:** Remove the stated job target from About.
- **Requirements:** R1, R3; KTD1
- **Dependencies:** none
- **Files:** `components/portfolio/sections/About.tsx`
- **Approach:**
  1. Change the eyebrow text from "About & goals" to "About".
  2. Delete the `Reveal` wrapper holding "Where I'm headed" and the goal paragraph.
  3. Remove the now-trailing bottom margin on the remaining paragraph only if the layout visibly needs it; otherwise leave styling untouched.
- **Test scenarios:** Test expectation: none -- copy removal with no behavior; covered by grep and visual check in Verification.
- **Verification:** About renders heading, intro paragraph, and photo with no empty bordered box on desktop and mobile widths.

### U2. Contact: neutral CTA

- **Goal:** Close the page with a neutral invitation.
- **Requirements:** R2, R3; KTD2
- **Dependencies:** none
- **Files:** `components/portfolio/sections/Contact.tsx`
- **Approach:**
  1. Headline `Let&apos;s build something.` → `Let&apos;s talk.`
  2. Subline → `The fastest way to reach me is email.`
- **Test scenarios:** Test expectation: none -- copy change only.
- **Verification:** Contact shows "Get in touch" eyebrow, "Let's talk." headline, email button, and the three social links unchanged.

### U3. Page title and meta description

- **Goal:** Neutral, build-focused page metadata.
- **Requirements:** R4, R5; KTD3
- **Dependencies:** none
- **Files:** `pages/index.tsx`
- **Approach:**
  1. Set `<title>` to `Noah Otsuka — Software Engineer` (em dash).
  2. Set the description to a single sentence drawn from the Hero copy, e.g. "Noah Otsuka builds production systems that scale — cloud migrations and platforms used by hundreds of teams." Keep `key="desc"`.
- **Test scenarios:** Test expectation: none -- static metadata.
- **Verification:** Built page `<head>` shows the new title and description.

---

## Verification Contract

| Gate | Command / check | Applies to |
|---|---|---|
| Lint | `npm run lint` passes | U1–U3 |
| Build | `npm run build` succeeds | U1–U3 |
| Copy sweep | Case-insensitive grep of `components/`, `pages/`, `public/sitemap.xml` for `senior engineering role|growth-stage|open to|seeking|looking for|for hire|remote work|build something` returns no matches | R3 |
| Visual | Dev server: About and Contact sections render cleanly at desktop and mobile widths | U1, U2 |

## Definition of Done

- R1–R5 satisfied and all Verification Contract gates pass.
- `git diff` touches only `About.tsx`, `Contact.tsx`, and `pages/index.tsx` (plus this plan).
- No leftover dead markup or unused imports from the removed card.
