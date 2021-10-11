export const state = () => ({
  projects: [
    {
      name: "Shu's Money Crew",
      slug: 'shus-money-crew',
      info: "A completely bespoke site for an esports team, harnessing Shopify's Storefront API to power an integrated ecommerce store.",
      technologies: ['Vue', 'Nuxt', 'Shopify Storefront API', 'Strapi'],
      url: 'https://shusmoneycrew.com',
      offset: -10,
      // textClass: 'text-white',
      // bgClass: 'bg-gray-800',
      // highlightClass: 'bg-smc-400',
      // highlightHoverClass: 'hover:bg-smc-500',
    },
    {
      name: 'TypeTest.io',
      slug: 'typetest-io',
      info: 'A modern and minimal typing test site, with over 200,000 users.',
      technologies: ['Vue', 'Nuxt', 'Express', 'MongoDB', 'AdSense'],
      url: 'https://typetest.io/',
      // textClass: 'text-white',
      // bgClass: 'bg-gray-800',
      // highlightClass: 'bg-blue-400',
      // highlightHoverClass: 'hover:bg-blue-500',
    },
    {
      name: 'Othell.io',
      slug: 'othell-io',
      info: 'A web implementation of the board game Othello, featuing an AI opponent using minimax and alpha-beta pruning.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      url: 'https://othell.io/',
      // textClass: 'text-white',
      // bgClass: 'bg-gray-800',
      // highlightClass: 'bg-green-500',
      // highlightHoverClass: 'hover:bg-green-600',
      source: 'https://github.com/lucashockley/Othell.io',
    },
  ],
});
