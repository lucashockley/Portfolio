<template>
  <div data-aos="fade-up" class="project-card" :id="project.slug">
    <div class="contents-container" :class="{ 'xl:flex-row-reverse': !right }">
      <ProjectCardPreviewWindow :project="project" :right="right" />

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
          class="flex justify-center items-center xl:justify-start flex-wrap mt-8 xl:mt-4"
          :class="right ? 'xl:flex-row-reverse' : 'xl:flex-row'"
        >
          <span data-aos="fade-up" data-aos-delay="50" :data-aos-anchor="`#${project.slug}`">
            <a
              :href="project.url"
              target="_blank"
              rel="noopener"
              class="btn bg-blue-500 hover:bg-blue-600 text-white inline-block w-max mt-2"
              >Visit the Site</a
            >
          </span>

          <span data-aos="fade-up" data-aos-delay="100" :data-aos-anchor="`#${project.slug}`">
            <a
              v-if="project.source"
              :href="project.source"
              target="_blank"
              rel="noopener"
              class="btn hover:bg-gray-700 inline-block w-max mt-2 mx-2"
              >View the Source</a
            >
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
</style>
