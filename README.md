# IMI DIGITAL HUB website

The official static website frontend for IMI DIGITAL HUB.

## Project structure

- `index.html` — page content and semantic structure
- `styles.css` — responsive visual system and layouts
- `script.js` — mobile navigation, current year and email enquiry helper

## Run locally

No build tools or package installation are required.

1. Download or clone this repository.
2. Open `index.html` in a browser.

For a local development server, you can use the VS Code Live Server extension or run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy with GitHub Pages

1. Open the repository's **Settings**.
2. Select **Pages** in the sidebar.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/(root)` folder, then save.
5. Wait for the Pages deployment to finish. GitHub will display the published URL in the Pages settings.

The site is plain HTML, CSS and JavaScript, so no framework build step is needed.

## Contact and product links

The contact form currently opens the visitor's default email application with a pre-filled message addressed to the IMI DIGITAL HUB email address. It does not store or transmit form submissions itself.

Product buttons currently link to the corresponding product information pages on the existing WordPress website. Confirm pricing, payment instructions and product availability on those pages before purchase.

## Before launch

- Add the final approved logo and brand assets.
- Confirm the business phone number and social profile URLs.
- Test the email enquiry flow on desktop and mobile devices.
- Review all product prices, descriptions and purchase links.
- Configure a custom domain and HTTPS if desired.
- Add a privacy notice if analytics, cookies or a third-party form service is introduced.

## Technology

HTML5 · CSS3 · Vanilla JavaScript · Google Fonts (DM Sans and Manrope)
