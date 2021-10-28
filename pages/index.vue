<template>
  <main>
    <Notifications
      ref="notis"
      :notifications="notifications"
      :removeNotification="removeNotification"
    />

    <NewNavigation ref="header" />

    <Home />
    <Projects />
    <About />
    <Contact :addNotification="addNotification" />
  </main>
</template>

<script>
export default {
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
