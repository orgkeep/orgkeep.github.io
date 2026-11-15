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
      // The whole synced tree, so that this repository never lists pages: a page is placed by the `sidebar.order`
      // of its front matter, a folder (reference/, later guides/, concepts/...) becomes a group. A later version
      // is another folder, docs/<version>/, with its own entry here.
      customCss: ['./src/styles/custom.css'],
      // Always light, like the home page: no dark theme, no theme selector
      components: {
        ThemeProvider: './src/components/LightThemeProvider.astro',
        ThemeSelect: './src/components/NoThemeSelect.astro',
        // The logo of the home page instead of the word "Orgkeep" in the header
        SiteTitle: './src/components/LogoSiteTitle.astro',
      },
      sidebar: [{ autogenerate: { directory: 'docs/latest' } }],
    }),
  ],
});
