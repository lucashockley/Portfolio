<template>
  <main class="home-content">
    <div data-aos="fade-up">
      <div class="text-2xl md:text-3xl max-w-4xl">
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-offset="0"
          data-aos-duration="300"
          class="text-4xl pb-8"
        >
          👋
        </h1>

        <h1 class="font-medium my-4">My name is Lucas Hockley!</h1>

        <h1>
          I'm a full stack web developer and designer from the UK, creating modern and unique web
          experiences.
        </h1>
      </div>

      <div class="my-16">
        <nuxt-link to="/projects" class="btn btn-primary">Projects</nuxt-link>
        <nuxt-link to="/contact" class="btn">Contact Me</nuxt-link>
      </div>
    </div>
  </main>
</template>

<style>
.home-content {
  @apply mx-auto w-4/5 md:w-1/2 flex items-center;
  min-height: 65vh;
}
</style>
