<template>
  <header class="text-center z-20 p-6 bg-white w-full xl:text-right">
    <nav>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/projects">Projects</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/contact" class="btn btn-primary">Contact</nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
nav a {
  @apply m-2 p-1 inline-block;
}
</style>
