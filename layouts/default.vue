<template>
  <div>
    <TheHeader />
    <Nuxt />
  </div>
</template>

<style>
.btn {
  @apply duration-200 py-3 px-6 rounded;
}

.btn-primary {
  @apply bg-blue-400 hover:bg-blue-500 text-white;
}

.btn-secondary {
  @apply bg-white hover:bg-gray-100 text-black;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  @apply transition-all duration-500;
}

.fade-slide-enter,
.fade-slide-leave-to {
  @apply opacity-0 transform-gpu translate-y-10;
}
</style>
