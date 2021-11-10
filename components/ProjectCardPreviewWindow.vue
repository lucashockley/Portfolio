<template>
  <div
    class="screenshot-window"
    :class="right ? 'right xl:ml-4' : 'left xl:-ml-4'"
    :data-aos="right ? 'rotate-right' : 'rotate-left'"
    data-aos-duration="400"
    :data-aos-anchor="`#${project.slug}`"
  >
    <div class="window-bar">
      <div class="mac-window-icon"></div>
      <div class="mac-window-icon"></div>
      <div class="mac-window-icon"></div>
    </div>

    <a :href="project.url" target="_blank" rel="noopener">
      <div class="h-full bg-gray-900 w-full rounded-b absolute z-0"></div>

      <transition name="fade">
        <img
          v-show="loaded"
          class="h-full object-cover w-full rounded-b z-10 absolute"
          @load="loaded = true"
          :src="require(`~/assets/img/${project.slug}-screenshot.png`)"
          alt="Project Screenshot"
        />
      </transition>
    </a>
  </div>
</template>

<script>
export default {
  props: ['project', 'right'],
  data() {
    return {
      loaded: false,
    };
  },
};
</script>

<style>
.screenshot-window {
  @apply -top-52 xl:-top-3/20 w-full max-w-lg xl:max-w-full left-1/2 transform -translate-x-1/2 xl:translate-x-0 absolute duration-300 h-64 xl:h-over xl:w-1/2 z-10;
}

.window-bar {
  @apply bg-gray-700 h-5 rounded-t flex items-center pl-2 duration-300;
}

.screenshot-window:hover > .window-bar {
  @apply bg-gray-500;
}

.screenshot-window:hover > .window-bar > .mac-window-icon {
  @apply bg-gray-400;
}

.screenshot-window.left {
  @apply xl:left-0;
}

.screenshot-window.right {
  @apply xl:right-0;
}

.mac-window-icon {
  @apply h-1.5 w-1.5 rounded-full mr-1.5 bg-gray-500 duration-300;
}

[data-aos='rotate-right'],
[data-aos='rotate-left'] {
  transform: rotateX(20deg) translateX(-50%);
}

[data-aos='rotate-right'].aos-animate,
[data-aos='rotate-left'].aos-animate {
  transform: rotateX(0deg) translateX(-50%);
}

@media only screen and (min-width: 1280px) {
  .screenshot-window.left:hover {
    /* transform: rotateY(14deg) rotateX(6deg); */
    transform: rotateY(14deg);
  }

  .screenshot-window.right:hover {
    /* transform: rotateY(-14deg) rotateX(6deg); */
    transform: rotateY(-14deg);
  }

  [data-aos='rotate-right'] {
    transform: rotateY(-25deg);
  }

  [data-aos='rotate-right'].aos-animate {
    /* transform: rotateY(-10deg) rotateX(6deg); */
    transform: rotateY(-10deg);
  }

  [data-aos='rotate-left'] {
    transform: rotateY(25deg);
  }

  [data-aos='rotate-left'].aos-animate {
    /* transform: rotateY(10deg) rotateX(6deg); */
    transform: rotateY(10deg);
  }
}
</style>
