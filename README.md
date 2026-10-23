# Dewa Biryani

A static customer-facing website concept for Dewa Biryani in Kabul. Built with HTML5, CSS3, and vanilla JavaScript modules.

## Run locally

```sh
npm test
npm run serve
```

Then open `http://localhost:4173`.

## Pages

Home, menu, offers, about, gallery, branches, and contact.

## Data and demo limitations

- Menu values in `js/data.js` come from a historical user-supplied poster. They are not confirmation of current prices.
- Addresses and phone numbers are user-supplied. Google Maps buttons search the supplied address, not an exact verified pin. The Shahr-e-Naw spelling and landmark still need confirmation. No phone number was provided for that branch.
- The Facebook page is linked from the offers section. An official TikTok account could not be confirmed, so no TikTok link or active offer post is shown.
- The contact form validates locally and does not send messages.
- No online ordering, payment, backend, or admin dashboard is included.
- This is an independent demonstration concept, not a claim of an official or paid client project.
- The user-provided restaurant photo is stored as an optimized WebP base64 text asset for static-host compatibility. Other restaurant, food, and branch photos were not supplied.

## Deployment

Static hosting. Preferred project: `dewa-biryani`. Canonical URLs and sitemap should use the final confirmed deployment domain.
