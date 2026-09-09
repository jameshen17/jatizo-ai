# JATIZO AI Website

Independent source repository for the lightweight `jatizo.ai` brand site.

## Scope

The site presents JATIZO's early direction for practical AI in fashion and invites relevant conversations. It is not a product application, ecommerce store, dashboard, or statement of finalized capabilities.

The implementation brief and public claim boundaries are in `docs/site-brief.md`. Cross-project strategy and final decisions remain in the parent JatizoFashion workspace's root `docs/` directory.

## Development

```bash
npm install
npm run dev
```

Run `npm run build` before release.

## Deployment boundary

This repository must use its own GitHub repository, Vercel project, analytics configuration, domain configuration, and production branch. Do not connect it to the `jatizo.biz` repository or deployment.

Planned baseline, following the existing JATIZO setup without sharing its resources:

- GitHub repository: `jameshen17/jatizo-ai`
- Repository visibility: public, matching `jameshen17/jatizo`
- Production branch: `main`
- Vercel team: `jameshen17's projects` (Hobby)
- Vercel project: `jatizo-ai`
- Framework: Next.js with automatic Git deployments
- Root directory: repository root
- Custom domain: `jatizo.ai`, to be connected only after the independent project is verified

Target production domain: `jatizo.ai`

Current analytics status: not configured pending a separate decision.
