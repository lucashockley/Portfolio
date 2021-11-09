<template>
  <nav>
    <a
      v-for="link in links"
      :key="link.href"
      :href="link.href"
      class="duration-200 px-2 hover:opacity-100"
      >{{ link.title }}</a
    >
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { href: '#projects', title: 'Work' },
        { href: '#about', title: 'About' },
        { href: '#contact', title: 'Contact' },
      ],
    };
  },
};
</script>

<style>
nav {
  @apply px-5 flex flex-wrap justify-center items-center gap-2 text-black dark:text-white;
}

nav:hover a {
  @apply opacity-40;
}
</style>
