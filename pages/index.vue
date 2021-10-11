<template>
  <main class="mx-auto w-4/5 md:w-1/2 h-screen pt-48">
    <div data-aos="fade-up">
      <div class="text-2xl md:text-3xl max-w-4xl">
        <div class="h-20 relative">
          <transition name="fade-slide" appear>
            <h1 class="text-4xl absolute" v-show="mounted">👋</h1>
          </transition>
        </div>

        <h1 class="font-medium my-4">My name is Lucas Hockley!</h1>

        <h1>
          I'm a full stack web developer and designer from the UK, creating modern and unique web
          experiences.
        </h1>
      </div>

      <div class="my-16 flex gap-6 items-center">
        <nuxt-link to="/contact" class="btn btn-primary">Contact Me</nuxt-link>
        <nuxt-link to="/projects" class="mx-4">Projects</nuxt-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      mounted: false,
    };
  },
  mounted() {
    this.mounted = true;
  },
};
</script>
