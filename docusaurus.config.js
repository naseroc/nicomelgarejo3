// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// docusaurus.config.js

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nico Melgarejo',
  tagline: 'Innovación en educación, tecnología y negocios',
  url: 'https://nicomelgarejo.com',
  baseUrl: '/',
  organizationName: 'naseroc',
  projectName: 'nicomelgarejo3',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  // ✅ Mueve la configuración de KaTeX aquí
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-mnxcb7bQ+2ZjB+oXr9HNRPTviAI9eNMWf30jMytGeP1rMEYxQJfKM2YboF5/IvUj',
      crossorigin: 'anonymous',
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: undefined,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: undefined,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Nico Melgarejo',
      logo: {
        alt: 'Nicomelgarejo Logo',
        src: 'img/logo-nico.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentación PAES',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://chatgpt.com/g/g-679df04c778c8191bf1a630c5a7892ff-preparacion-paes-m1-y-m2',
          label: 'Entrenador PAES con IA',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentación',
          items: [
            {
              label: 'Introducción',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Comunidad',
          items: [
            {
              label: 'YouTube',
              href: 'https://youtube.com/nicomelgarejo',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/nicomelgarejo_com/',
            },
            {
              label: 'TikTok',
              href: 'https://www.tiktok.com/@nicomelgarejo_',
            },
          ],
        },
        {
          title: 'Más',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Entrenador PAES con IA',
              href: 'https://chatgpt.com/g/g-679df04c778c8191bf1a630c5a7892ff-preparacion-paes-m1-y-m2',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nicolás Melgarejo. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;