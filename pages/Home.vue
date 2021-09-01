<template>
  <div class="home">
    <ProjectFilter :projects="projects" :isLoading="isLoading">
      <template #loaded="{ filterProjects }">
        <div v-for="(project, key) in filterProjects" :key="key">
          <ProjectCard :project="project" class="mb-3" />
        </div>
      </template>
    </ProjectFilter>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import ProjectCard from '@/components/projects/ProjectCard.vue'
import ProjectFilter from '@/components/projects/ProjectFilter.vue'
export default Vue.extend({
  name: 'Home',

  components: {
    ProjectCard,
    ProjectFilter,
  },

  async fetch() {
    await this.$store.dispatch('project/fetchProjects')
  },

  computed: {
    ...mapState('project', {
      projects: 'projects',
      isLoading: 'isLoading',
    }),
  },
})
</script>
