<template>
  <div class="home">
    <div v-if="projects.length && !isLoading">
      <div v-for="(project, key) in projects" :key="key">
        <ProjectCard :project="project" class="mb-3"/>
      </div>
    </div>
    <div v-else-if="projects.length && isLoading">
      loading...
    </div>
    <div v-else>empty</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import ProjectCard from '@/components/projects/ProjectCard.vue'
export default Vue.extend({
  name: 'Home',
  
  components: {
    ProjectCard,
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
