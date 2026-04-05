# divyaswaminathan.com

Personal site and **blog**, built with **[Eleventy](https://www.11ty.dev/)** (Markdown → static HTML) and deployed with **GitHub Actions** → **GitHub Pages**.

## Local preview

Requires [Node.js](https://nodejs.org/) 18+.

```bash
npm install
npm run serve
```

Open the URL Eleventy prints (usually `http://localhost:8080`).

```bash
npm run build   # output in _site/
```

## Write a new blog post

1. Add a file under **`src/posts/`** named:

   `YYYY-MM-DD-short-slug.md`

   The file name (without `.md`) becomes the URL segment, e.g.  
   `blog/2025-04-10-my-topic/index.html`.

2. Use this front matter at the top:

   ```yaml
   ---
   title: "Post title"
   description: "One line shown on the blog index and in the Atom feed."
   date: 2025-04-10
   ---

   Your post in Markdown.
   ```

3. Commit and push to **`main`**. The workflow builds the site and deploys **`_site/`** to Pages.

4. Optional: subscribe to **`/feed.xml`** (Atom) for new posts.

## Repo layout

| Path | Purpose |
|------|--------|
| `src/index.njk` | Home page |
| `src/blog/index.njk` | Blog listing |
| `src/posts/*.md` | Blog posts (Markdown) |
| `src/_includes/` | HTML layouts |
| `src/styles.css` | Styles |
| `src/images/` | Static images |
| `src/files/` | Downloads (e.g. `divya-swaminathan-resume.pdf`) |
| `src/_data/site.json` | Site title, canonical URL for feed |

## GitHub Pages

1. **Settings → Pages → Source:** **GitHub Actions**
2. Custom domain: **`CNAME`** in `src/` is copied to the build output; finish DNS at your registrar.

Public URLs:

- Custom domain (when DNS is set): `https://divyaswaminathan.com/`
- GitHub default: `https://divya-swaminathan.github.io/dsswamin-website/`

Relative asset paths are used so both work.

## Optional: lock dependencies

After `npm install` locally, commit **`package-lock.json`** and switch the workflow step to `npm ci` for faster, reproducible builds.
