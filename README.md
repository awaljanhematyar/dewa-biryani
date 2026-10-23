# Dewa Biryani

A static, customer-facing restaurant website demonstration for Dewa Biryani in Kabul. Built with HTML5, CSS3, and vanilla JavaScript modules.

- Live demonstration: https://dewa-biryani.vercel.app/
- Source: https://github.com/awaljanhematyar/dewa-biryani
- Portfolio case study: https://hematyar-professional-portfolio.vercel.app/projects/dewa-biryani-restaurant-website

## Run locally

```sh
npm test
npm run serve
```

Then open `http://localhost:4173`.

## Pages

Home, menu, offers, about, gallery, branches, and contact.

## Data and demonstration limits

- Menu values in `js/data.js` come from a historical user-supplied poster. They are not confirmation of current prices.
- Addresses and phone numbers are user-supplied. Google Maps buttons search the supplied address, not an exact verified pin. The Shahr-e-Naw spelling and landmark still need confirmation. No phone number was provided for that branch.
- The verified Facebook page is linked. An official TikTok account could not be confirmed, so no TikTok link or active offer post is shown.
- The contact form validates locally and does not send messages. Calls open the customer's phone app; there is no online order or payment flow.
- No backend, admin dashboard, or login is included.
- This is an independent demonstration concept, not a claim of an official or paid client project.
- The user-provided restaurant photo and seven user-provided menu photos are stored as optimized WebP base64 text assets for static-host compatibility. Other branch-specific photographs were not supplied.

## Verification

Run `npm test` for local smoke checks. Live desktop route and interaction findings are recorded in `PROJECT_REPORT.md`. Mobile screenshot capture and exact requested viewport measurements remain outstanding.
