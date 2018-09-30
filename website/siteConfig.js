/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Vijay Budhram',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: 'https://s.gravatar.com/avatar/d4edc9d5579c9847f7f98e58a6a8ebc2?s=80',
    infoLink: 'https://twitter.com/vjbudhram',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Fantasy Ally',
  tagline: 'Fantasy Football stats and rankings',
  url: 'https://fantasyally.com',
  baseUrl: '/',

	cname: 'www.fantasyally.com',

  // Used for publishing and more
  projectName: 'fantasyally-site',
  organizationName: 'vbudhram',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {blog: true, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/shield.png',
  footerIcon: 'img/shield.png',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Fantasy Ally`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/shield.png',
  twitter: true,
  twitterImage: 'img/shield.png',

	gaTrackingId: 'UA-126340495-1',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
