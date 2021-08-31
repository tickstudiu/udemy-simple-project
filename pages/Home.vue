<template>
  <div class="home">
      <div v-if="projects.length">
          have some
      </div>
      <div>
          empty
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
export default Vue.extend({
  async fetch() {
    await this.$store.dispatch('home/fetchProjects')
  },

  computed: {
    ...mapState('home', {
      projects: 'projects',
      isLoading: 'isLoading',
    }),
  },
})
</script>
