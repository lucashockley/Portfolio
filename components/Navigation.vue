<template>
  <nav>
    <a v-for="link in links" :key="link.href" :href="link.href">{{ link.emoji }}</a>
    <ThemeToggle />
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { href: '#home', emoji: '👋', tooltip: 'Home' },
        { href: '#projects', emoji: '🖥️', tooltip: 'Projects' },
        { href: '#about', emoji: '🎓', tooltip: 'About' },
        { href: '#contact', emoji: '✉️', tooltip: 'Contact' },
      ],
    };
  },
};
</script>

<style>
nav {
  @apply fixed select-none flex items-center justify-center xl:justify-end flex-wrap gap-4 w-full py-6 px-9 z-30 bg-white dark:bg-gray-900 border-b-2 border-gray-100 dark:border-gray-800 duration-300;
  font-size: 1.4rem;
}
</style>
