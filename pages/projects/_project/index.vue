<template>
  <main>
    <div class="flex flex-col-reverse" :class="project.bgClass">
      <h1 :class="project.textClass" class="text-5xl font-medium w-1/2 mx-auto pt-80 pb-16">
        {{ project.name }}
      </h1>
    </div>

    <div class="w-1/2 mx-auto py-8">
      <!-- <h2 class="my-14 font-medium text-xl">About the Project</h2> -->

      <p class="py-8">{{ project.about }}</p>
    </div>

    <div class="mx-auto w-3/4">
      <div class="grid">
        <img class="mx-auto" :src="`/img/${project.slug}/long1.png`" alt="" />
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      project: this.$store.state.projects.find(p => p.slug === this.$route.params.project),
    };
  },
  mounted() {
    console.log(this.project);
  },
};
</script>

<style></style>
