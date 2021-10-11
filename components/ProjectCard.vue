<template>
  <div data-aos="fade-up" :data-aos-offset="project.offset" class="project-card">
    <div class="contents-container" :class="{ 'xl:flex-row-reverse': !right }">
      <div class="screenshot-window" :class="right ? 'right xl:ml-4' : 'left xl:-ml-4'">
        <div class="window-bar">
          <div class="mac-window-icon bg-red-500"></div>
          <div class="mac-window-icon bg-yellow-400"></div>
          <div class="mac-window-icon bg-green-400"></div>
        </div>
        <a :href="project.url" target="_blank">
          <div class="h-full bg-gray-900 w-full rounded-b absolute z-0"></div>

          <transition name="fade">
            <img
              v-show="loaded"
              class="h-full object-cover w-full rounded-b z-10 absolute"
              @load="loaded = true"
              :src="`/img/ProjectPreviews/${project.slug}-screenshot.png`"
              alt="Project Screenshot"
            />
          </transition>
        </a>
      </div>

      <div
        class="xl:w-1/2 w-full px-8 py-14 xl:py-16 xl:px-12 text-left"
        :class="[project.textClass, { 'xl:text-right': right }]"
      >
        <h2 class="text-3xl font-medium mb-4">{{ project.name }}</h2>

        <p class="my-4">{{ project.info }}</p>

        <p class="text-gray-400">
          <span v-for="(technology, i) in project.technologies" :key="technology"
            >{{ technology }}
            <template v-if="i !== project.technologies.length - 1"> / </template>
          </span>
        </p>

        <div
          class="flex justify-center xl:justify-start flex-wrap mt-8 xl:mt-4"
          :class="right ? 'xl:flex-row-reverse' : 'xl:flex-row'"
        >
          <a
            :href="project.url"
            target="_blank"
            class="btn bg-blue-500 hover:bg-blue-600 text-white inline-block w-max mt-2"
            >Visit the Site</a
          >
          <a
            v-if="project.source"
            :href="project.source"
            target="_blank"
            class="btn hover:bg-gray-900 inline-block w-max mt-2 mx-4"
            >View the Source</a
          >
        </div>
        <!-- <nuxt-link :to="`/projects/${project.slug}`" class="duration-200 hover:text-gray-300"
          >More about this project</nuxt-link
        > -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loaded: false,
    };
  },
  props: ['project', 'right'],
};
</script>

<style>
.project-card {
  @apply mx-auto my-16 mt-72 xl:my-40 xl:mt-56 rounded-md text-white bg-gray-800;
  max-width: 90rem;
}

.contents-container {
  @apply w-10/12 m-auto flex pt-16 xl:pt-0 relative;
  perspective: 1200px;
}

.screenshot-window {
  @apply -top-52 xl:-top-3/20 w-full max-w-lg xl:max-w-full left-1/2 transform -translate-x-1/2 xl:translate-x-0 absolute duration-300 h-64 xl:h-over xl:w-1/2 z-10;
}

.window-bar {
  @apply bg-gray-700 h-5 rounded-t flex items-center pl-1.5 duration-300;
}

.screenshot-window:hover > .window-bar {
  @apply bg-gray-500;
}

.screenshot-window.left {
  @apply xl:left-0;
}

.screenshot-window.right {
  @apply xl:right-0;
}

.mac-window-icon {
  @apply h-1.5 w-1.5 rounded-full mx-1 bg-gray-400;
}

@media only screen and (min-width: 1280px) {
  .screenshot-window.left {
    transform: rotateY(6deg);
  }

  .screenshot-window.right {
    transform: rotateY(-6deg);
  }

  .screenshot-window.left:hover {
    transform: rotateY(11deg);
  }

  .screenshot-window.right:hover {
    transform: rotateY(-11deg);
  }
}
</style>
