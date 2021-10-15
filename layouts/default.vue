<template>
  <div>
    <TheHeader />
    <Nuxt />
  </div>
</template>

<style>
html {
  overflow: overlay;
}

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
  @apply max-w-2xl mx-auto my-4 px-4;
}

::-webkit-scrollbar {
  @apply w-5;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-200 rounded-full;
  background-clip: padding-box;
  border: solid 6px rgba(0, 0, 0, 0);
}
</style>
