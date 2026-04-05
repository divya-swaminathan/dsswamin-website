# divyaswaminathan.com

Personal site (static HTML/CSS). Deployed with **GitHub Actions** → **GitHub Pages**.

## First-time setup

1. Create a new repository on GitHub (e.g. `dsswamin-website` or `divya-swaminathan.github.io`).
2. Push this repo to the `main` branch.
3. In the repo on GitHub: **Settings → Pages → Build and deployment → Source**: choose **GitHub Actions** (not “Deploy from a branch”).
4. Re-run the workflow or push a commit; the **Pages** environment URL will appear after the first successful deploy.

## Custom domain (`divyaswaminathan.com`)

The repo includes a `CNAME` file for `divyaswaminathan.com`. In **Pages** settings, confirm the custom domain matches. At your DNS host (e.g. Squarespace), add the records GitHub shows under **Settings → Pages → Custom domain**.

Until DNS is correct, the site still serves at  
`https://<user>.github.io/<repo>/` (project site) or `https://<user>.github.io/` (if the repo is named `<user>.github.io`).
