<template>
  <section id="about">
    <h1 data-aos="fade-in" class="section-title">All About Me</h1>

    <div class="text-container">
      <div class="about-main-content">
        <p data-aos="fade-up">
          I'm Lucas Hockley, and I'm a 20 year old student from Cambridgeshire. Currently I'm
          studying Computer Science at the University of Leeds, and I've been doing web development
          in my own time since 2019.
        </p>

        <p data-aos="fade-up">
          I work on everything from the design of a site, all the way through to deploying it for
          the world to see. Frontend engineering is certainly what I enjoy the most; I love the mix
          of creativity and problem solving that brings a site to life.
        </p>

        <p data-aos="fade-up">
          In terms of the backend, I've built tailored Express APIs from the ground up, but I've
          also used content management systems that make for easily editable web pages. When it
          comes to deploying a site I'll often use static generation with Netlify for the frontend,
          and if I need to host an API, I'll usually stick it on a VPS from Digital Ocean.
        </p>
      </div>

      <div data-aos="fade-up">
        <p class="py-6 text-center">Below are some of the technologies I use on a regular basis.</p>

        <div
          class="flex justify-center items-center flex-wrap gap-2 max-w-xl mx-auto py-6 text-white"
        >
          <div
            v-for="(technology, index) in technologies"
            :key="technology"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
            class="text-gray-600 dark:text-white"
          >
            <div class="bg-gray-100 dark:bg-gray-800 py-2 px-4 rounded duration-300">
              {{ technology }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      technologies: [
        'JavaScript',
        'Vue.js',
        'Nuxt',
        'Tailwind CSS',
        'Node.js',
        'Express',
        'Netlify',
        'Strapi',
        'MongoDB',
      ],
    };
  },
};
</script>

<style>
.about-main-content p {
  @apply text-center py-6;
}
</style>
