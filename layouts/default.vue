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

.text-container {
  @apply max-w-2xl mx-auto;
}
</style>
