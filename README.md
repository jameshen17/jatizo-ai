# JATIZO AI Website

Independent source repository for the lightweight `jatizo.ai` brand site.

## Scope

The site previews JATIZO's exploration of AI-native tools for fashion manufacturers, with a focus on capability intelligence, better-fit brand discovery, and buyer context. It is not a product application, ecommerce store, dashboard, lead-generation site, or statement of finalized capabilities.

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
- Custom domain: `jatizo.ai`, connected independently through Cloudflare DNS

Target production domain: `jatizo.ai`

Current analytics status: disabled. The codebase contains only a no-op integration boundary for a future, separately approved provider.
