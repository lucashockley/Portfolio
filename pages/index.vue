<template>
  <main>
    <header ref="header">
      <ThemeToggle />
      <Navigation />
    </header>

    <Notifications
      ref="notifications"
      :notifications="notifications"
      :removeNotification="removeNotification"
    />

    <Home />
    <Projects />
    <About />
    <Contact :addNotification="addNotification" />
  </main>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: this.colorModeValue === 'light' ? '/light-favicon.ico' : '/dark-favicon.ico',
        },
      ],
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Hi! My name's Lucas Hockley. I'm a full stack web developer from the UK, who enjoys making interesting things for the web. Currently I'm studying computer science at the University of Leeds.`,
        },
      ],
    };
  },
  data() {
    return {
      notifications: [],
    };
  },
  computed: {
    colorModeValue() {
      return this.$colorMode.value;
    },
  },
  watch: {
    colorModeValue() {
      let faviconLink = document.querySelector("link[rel~='icon']");
      faviconLink.href = `/${this.colorModeValue}-favicon.ico`;
    },
  },
  mounted() {
    let scrollPosition = window.scrollY;

    window.onscroll = () => {
      let newScrollPosition = window.scrollY;

      if (scrollPosition > newScrollPosition) {
        this.$refs.header.style.top = '0';
        this.$refs.notifications.$el.style.top = '80px';
      } else {
        this.$refs.header.style.top = '-25%';
        this.$refs.notifications.$el.style.top = '0';
      }

      scrollPosition = newScrollPosition;
    };
  },
  methods: {
    addNotification(notification) {
      const id = Math.random();
      this.notifications.push({ id: id, ...notification });

      setTimeout(() => {
        this.removeNotification(id);
      }, 5000);
    },
    removeNotification(id) {
      this.notifications = this.notifications.filter(n => n.id !== id);
    },
  },
};
</script>

<style>
header {
  @apply select-none flex justify-center md:justify-between gap-3 items-center p-8 fixed w-full z-50 bg-white dark:bg-gray-900 top-0 flex-wrap duration-300;
}
</style>
