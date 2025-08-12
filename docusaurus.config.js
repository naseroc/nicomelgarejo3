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
      integrity: 'sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn',
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
         googleTagManager: {
          containerId: 'GTM-MTJ48B8C',
        },
      },
    ],
  ],

  themeConfig: {
    favicon: 'img/favicon.ico',
    metadata: [
      { name: 'keywords', content: 'educación, tecnología, innovación, paes, preuniversitario, libros' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { property: 'og:title', content: 'Nico Melgarejo - Innovación en educación, tecnología y negocios' },
      { property: 'og:description', content: 'Recursos educativos para la preparación PAES M1. Libros, ejercicios y más.' },
      { property: 'og:image', content: 'https://nicomelgarejo.com/img/nicomelgarejo-social-card.png' },
      { property: 'og:url', content: 'https://nicomelgarejo.com/' },
      { property: 'og:type', content: 'website' },
    ],
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
    announcementBar: {
      id: 'wsp-comunidad', // Un id único para este anuncio
      content:
        '🎉 ¡Únete a la Comunidad de Estudio  <a href="https://chat.whatsapp.com/EozwZZpsHt3JFI8qyTgyr1" target="_blank">de WHATSAPP</a>.',
      backgroundColor: '#320061', // Color de fondo
      textColor: '#f4f4f4',       // Color del texto
      isCloseable: true,          // El usuario puede cerrarlo
    },
  },
  // ✅ Mueve los headTags aquí
  headTags: [
      // Google Tag Manager
        {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
      },
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-MTJ4B88C');`,
    },
    // Google AdSense
    {
      tagName: 'script',
      attributes: {
        async: "true",
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4276701549984939',
        crossorigin: 'anonymous',
      },
    },
    // Google Analytics
    {
      tagName: 'script',
      attributes: {
        async: "true",
        src: 'https://www.googletagmanager.com/gtag/js?id=G-PF3TRE4EWE',
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
      },
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-PF3TRE4EWE');
      `,
    },
  ],
};
export default config;