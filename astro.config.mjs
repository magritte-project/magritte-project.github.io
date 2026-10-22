// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://magritte-project.github.io',
  integrations: [
    icon(),
    // Docs live in src/content/docs/doc/ so they're served under /doc
    starlight({
      title: 'Magritte',
      logo: { src: './src/assets/icon.svg' },
      customCss: ['./src/styles/starlight.css'],
      // Dark-only: always use the dark theme and hide the light/dark toggle
      components: {
        ThemeProvider: './src/components/starlight/ThemeProvider.astro',
        ThemeSelect: './src/components/starlight/ThemeSelect.astro',
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/magritte-project/magritte' },
      ],
      sidebar: [
        { label: 'Guides', items: [{ autogenerate: { directory: 'doc' } }] },
      ],
      // Keep the site's own 404 handling rather than Starlight's
      disable404Route: true,
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
