<template>
  <main class="w-10/12 m-auto mb-96">
    <div data-aos="fade-in">
      <h1 class="text-center text-3xl font-medium py-6 xl:py-10">My Work</h1>

      <p class="text-center pt-8">
        Here's a mix of personal and client projects I've worked on over the past couple of years.
      </p>
    </div>

    <ProjectCard
      v-for="(project, index) in projects"
      :key="project.name"
      :project="project"
      :right="index % 2 === 1"
    />
  </main>
</template>

<script>
export default {
  data() {
    return {
      projects: this.$store.state.projects,
    };
  },
};
</script>

<style></style>
