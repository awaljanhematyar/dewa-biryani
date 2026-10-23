# Dewa Biryani Project Report

## Status

Website source published to GitHub and deployed to Vercel. Portfolio project card and detail page are published. The site is an independent demonstration concept, not an official business website.

- Website: https://dewa-biryani.vercel.app/
- GitHub: https://github.com/awaljanhematyar/dewa-biryani
- Portfolio detail: https://hematyar-professional-portfolio.vercel.app/projects/dewa-biryani-restaurant-website
- Desktop screenshot: `dewa-biryani-desktop.jpg` (captured from the live site; portfolio cover uses a compressed copy)

## Progress log

- Inspected the workspace and the existing portfolio repository. No existing Dewa Biryani repository was present, so `awaljanhematyar/dewa-biryani` was created and reused for Vercel deployment.
- Built seven static pages using HTML, CSS, and vanilla JavaScript: home, menu, offers, about, gallery, branches, and contact.
- Added the user-provided restaurant photo to the hero, optimized it to WebP, and kept its original building and sign visible.
- Added Pashto, Dari, and English language switching with local persistence and RTL/LTR layout support.
- Added searchable menu cards, category filters, a food showcase carousel, gallery lightbox, branch address copy buttons, maps searches, call links, and a validated non-sending contact demo.
- Published the public GitHub repository and deployed `dewa-biryani.vercel.app` from its main branch.
- Inspected the existing portfolio before editing. Added a Dewa Biryani project card, case-study detail page, desktop screenshot cover, live URL, source URL, overview, features, technology stack, and independent-demo wording. Existing projects were retained.
- Fixed issues found during live checks: hero copy overlapped the restaurant sign; the language selector did not apply changes; and the About page had a stale image URL.

## Testing

- `npm test`: passed. Smoke checks cover seven pages, six menu items, three branches, and three locales.
- `node --check js/main.js` and `node --check js/translations.js`: passed.
- Live route check: all seven pages opened and showed a main landmark, canonical URL, and meta description.
- Live image check: hero and About photos loaded at 1200 px natural width. No broken non-dialog images were found on the seven pages.
- Live desktop overflow check: no horizontal overflow at the available 1363 px viewport on all seven routes.
- Live interaction checks: menu category filter and search, English/Dari switching with preference persisting after reload, three branch map embeds and three directions links, gallery lightbox open/Escape close, and contact demo validation without sending data all passed.
- Lighthouse scores and automated WCAG scores were not measured.

## Responsive QA

Responsive CSS includes tablet and mobile breakpoints at 850 px and 600 px. The available browser viewport was 1363 px wide; exact measurements at 320, 375, 390, 768, 1024, 1440, and 1920 px could not be captured with the available browser controls. A separate mobile screenshot remains outstanding.

## Accessibility and SEO

- Semantic page landmarks, one primary heading per page, skip links, visible focus styling, labeled fields, keyboard-operable links and buttons, reduced-motion CSS, dialog lightbox, and descriptive restaurant-image alt text are present.
- Live routes exposed unique titles, meta descriptions, canonical URLs, and the home page Restaurant structured data.
- No separate automated WCAG audit or measured Lighthouse run was performed.

## Business data and limitations

- Historical poster prices: biryani 120/150/200 AFN, half/full degi chicken 200/370 AFN, and special platter 550 AFN. Current prices are unverified.
- Branch addresses and phones are user-supplied. Maps use Google Maps address searches, not verified exact pins. Shahr-e-Naw spelling/landmark needs confirmation, and no phone was supplied for that branch.
- Facebook is linked as the official page; no official TikTok or active offer post was verified.
- Only the user-provided restaurant photo was available. Food cards use CSS illustrations; no ratings or review counts are fabricated.
- Contact is a local demo form only. No order submission, online payment, server, or admin dashboard exists.
- The portfolio screenshot is a desktop capture. A mobile screenshot and exact viewport-width QA remain outstanding.
