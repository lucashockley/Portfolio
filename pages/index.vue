<template>
  <main>
    <Notifications :notifications="notifications" :removeNotification="removeNotification" />

    <Navigation />

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
