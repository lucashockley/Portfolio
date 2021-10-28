<template>
  <header>
    <ThemeToggle />

    <nav class="px-5 flex flex-wrap justify-center items-center gap-2 text-gray-500">
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        class="hover:text-black dark:hover:text-white duration-200 px-2"
        >{{ link.title }}</a
      >
    </nav>
  </header>
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
header {
  @apply select-none flex justify-center md:justify-between gap-3 items-center p-8 fixed w-full z-50 bg-white dark:bg-gray-900 top-0 flex-wrap duration-300;
}
</style>
