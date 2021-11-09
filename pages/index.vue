<template>
  <main>
    <Notifications
      ref="notis"
      :notifications="notifications"
      :removeNotification="removeNotification"
    />

    <Navigation ref="header" />

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
  watch: {
    colorModeValue() {
      let faviconLink = document.querySelector("link[rel~='icon']");
      faviconLink.href = `/${this.colorModeValue}-favicon.ico`;
    },
  },
  computed: {
    colorModeValue() {
      return this.$colorMode.value;
    },
  },
  data() {
    return {
      notifications: [],
    };
  },
  mounted() {
    let scrollPosition = window.scrollY;

    window.onscroll = () => {
      let newScrollPosition = window.scrollY;

      if (scrollPosition > newScrollPosition) {
        this.$refs.header.$el.style.top = '0';
        this.$refs.notis.$el.style.top = '80px';
      } else {
        this.$refs.header.$el.style.top = '-25%';
        this.$refs.notis.$el.style.top = '0';
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
