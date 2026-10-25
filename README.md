# imserg.io

Sergio Wizenfeld's portfolio. Built with Astro, with React available for interactive pieces.

## Edit content

- Case studies: one markdown file per project in `src/content/work/`. The `outcome` line shows on the homepage.
- Experience and links: `src/data/experience.ts`
- Resume PDF: put it at `public/Sergio-Wizenfeld-Resume.pdf`

## Run locally

    npm install
    npm run dev

## Deploy

Connect the repo to Vercel or Netlify. Build command `npm run build`, output folder `dist`.
Every branch gets its own preview link, which is how experiments get reviewed.
