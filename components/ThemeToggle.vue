<template>
  <div @click="changeColourMode" class="cursor-pointer duration-300">
    <transition name="swap">
      <div v-if="$colorMode.value === 'light'" key="light">☀️</div>
      <div v-else key="dark">🌒</div>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    changeColourMode() {
      this.$colorMode.preference = this.$colorMode.value === 'light' ? 'dark' : 'light';
    },
  },
};
</script>

<style>
.swap-enter,
.swap-leave-to {
  @apply absolute opacity-0;
}

.swap-enter {
  transform: translateY(-100%);
}

.swap-leave-to {
  transform: translateY(100%);
}

.swap-enter-active,
.swap-leave-active {
  @apply duration-300;
}
</style>
