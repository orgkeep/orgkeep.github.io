import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// The home page (/) is a static page kept in public/ (index.html, style.css, lightbox.js, images/): Astro copies
// public/ as is, so only the documentation goes through Starlight.
// The documentation lives in the monorepo orgkeep/orgkeep (documentation/) and is copied by a workflow into
// src/content/docs/docs/latest/: do not edit that folder here, it is emptied at each sync.
export default defineConfig({
  site: 'https://orgkeep.org',
  integrations: [
    starlight({
      title: 'Orgkeep documentation',
      description: 'Documentation of Orgkeep: multi-tenant B2B on Keycloak.',
      favicon: '/images/favicon.png',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/orgkeep/orgkeep' }],
      // Add a group here when its first pages are written: guides per audience (realm owner, org admin,
      // integrator, operator), concepts. A later version is another folder, docs/<version>/.
      sidebar: [
        {
          label: 'Start here',
          items: [
            { label: 'Overview', slug: 'docs/latest' },
            { label: 'Getting started', slug: 'docs/latest/getting-started' },
          ],
        },
        {
          label: 'Reference',
          items: [{ autogenerate: { directory: 'docs/latest/reference' } }],
        },
      ],
    }),
  ],
});
