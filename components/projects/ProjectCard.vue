<template>
  <div v-if="project" class="project-card" :class="{ active: showDetails }">
    <div class="body">
      <div class="header">
        <h4 class="title" @click="showDetails = !showDetails">
          {{ projectTitle }}
        </h4>
        <div class="icons">
          <fa icon="check" class="icon" />
          <fa icon="edit" class="icon" @click="editProjectLink" />
          <fa icon="trash-alt" class="icon" @click="deleteProject(project.id)"/>
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
    editProjectLink():void {
      this.$router.push({ path: `/project/${this.project.id}` })
    },

    async deleteProject(id: number):Promise<void> {
      await this.$store.dispatch('home/removedProject', {id})
    }
  }
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
            @apply text-gray-900
          &.disabled
            @apply text-gray-300
</style>
