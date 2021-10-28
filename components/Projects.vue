<template>
  <section id="projects">
    <h1 data-aos="fade-in" class="section-title">My Work</h1>

    <p data-aos="fade-up" data-aos-delay="100" class="text-container text-center pt-8">
      Here's a mix of personal and client projects I've worked on over the past couple of years.
    </p>

    <ProjectCard
      v-for="(project, index) in projects"
      :key="project.slug"
      :project="project"
      :right="index % 2 === 1"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'TypeTest.io',
          slug: 'typetest-io',
          info: 'A modern and minimal typing test site, with over 200,000 users. Track your progress for different test modes and see where you stand on the global leaderboard.',
          technologies: ['Vue', 'Nuxt', 'Express', 'MongoDB'],
          url: 'https://typetest.io/',
        },
        {
          name: "Shu's Money Crew",
          slug: 'shus-money-crew',
          info: "A completely bespoke site for an esports team, harnessing Shopify's Storefront API to power an integrated ecommerce store.",
          technologies: ['Vue', 'Nuxt', 'Shopify Storefront API', 'Strapi'],
          url: 'https://shusmoneycrew.com',
        },
        {
          name: 'Othell.io',
          slug: 'othell-io',
          info: 'A web implementation of the board game Othello, featuing an AI opponent utilising minimax and alpha-beta pruning.',
          technologies: ['HTML', 'CSS', 'JavaScript'],
          url: 'https://othell.io/',
          // source: 'https://github.com/lucashockley/Othell.io',
        },
      ],
    };
  },
};
</script>
