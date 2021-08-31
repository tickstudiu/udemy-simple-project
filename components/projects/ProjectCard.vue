<template>
  <div v-if="project" class="project-card">
    <p>{{ projectName }}</p>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { ProjectItem } from '@/types/project'

export default Vue.extend({
  props: {
    project: {
      type: Object,
      default: null,
    } as PropOptions<ProjectItem>,
  },

  computed: {
    projectName(): string {
      return this.project?.title ?? ''
    },
  },
})
</script>
<style lang="sass" scoped>
.project-card 
  @apply border border-gray-500 p-6

</style>
