<template>
  <div v-if="project" class="project-card" :class="{ complete: project.complete }">
    <div class="body">
      <div class="header">
        <h4 class="title" @click="showDetails = !showDetails">
          {{ projectTitle }}
        </h4>
        <div class="icons">
          <fa
            icon="check"
            class="icon"
            :class="{ active: project.complete }"
            @click="toggleComplete(project.id)"
          />
          <fa icon="edit" class="icon" @click="editProjectLink" />
          <fa
            icon="trash-alt"
            class="icon"
            @click="deleteProject(project.id)"
          />
        </div>
      </div>
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
    projectTitle(): string {
      return this.project?.title ?? ''
    },

    projectDetail(): string {
      return this.project?.details ?? ''
    },
  },

  methods: {
    editProjectLink(): void {
      this.$router.push({ path: `/project/${this.project.id}` })
    },

    async deleteProject(id: number): Promise<void> {
      await this.$store.dispatch('project/removedProject', { id })
    },

    async toggleComplete(id: number): Promise<void> {
      await this.$store.dispatch('project/toggleComplete', { id })
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
  @apply border-2 border-gray-500 p-6 transition-all border-red-500

  &.complete
    @apply border-green-500 

  .body
    .header
      @apply flex justify-between align-baseline

      .title
        @apply cursor-pointer

      .icons
        @apply flex justify-start gap-3

        .icon
          @apply text-gray-500 transition-all cursor-pointer
          &:not(.active):not(.disabled):hover
            @apply text-gray-700
          &.active
            @apply text-green-500
          &.disabled
            @apply text-red-300
</style>
