<template>
  <div v-if="project" class="project-card" :class="{'active': showDetails}">
    <div class="body" @click="showDetails = !showDetails">
      <h4 class="mb-3">{{ projectName }}</h4>
      <transition name="fade">
        <p v-if="showDetails">{{ projectDetail }}</p>
      </transition>
    </div>
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

  data() {
    return {
      showDetails: false,
    }
  },

  computed: {
    projectName(): string {
      return this.project?.title ?? ''
    },
    projectDetail(): string {
      return this.project?.details ?? ''
    },
  },
})
</script>
<style lang="sass" scoped>
.fade-enter-active, .fade-leave-active
  transition: opacity .2s

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  opacity: 0

.project-card
  @apply border border-gray-500 p-6 transition-all

  &.active
    @apply border-red-500

  .body
    @apply cursor-pointer
</style>
