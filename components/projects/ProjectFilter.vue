<template>
  <div class="project-filter">
    <ul class="list">
      <li
        class="item"
        :class="{ active: filter === Filter.All }"
        @click="updateFilter(Filter.All)"
      >
        all
      </li>
      <li
        class="item"
        :class="{ active: filter === Filter.COMPLETED }"
        @click="updateFilter(Filter.COMPLETED)"
      >
        completed
      </li>
      <li
        class="item"
        :class="{ active: filter === Filter.ONGOING }"
        @click="updateFilter(Filter.ONGOING)"
      >
        ongoing
      </li>
    </ul>
    <div v-if="projects.length && !isLoading && !isError">
      <slot name="loaded" :filterProjects="filterProjects"> </slot>
    </div>
    <div v-else-if="!projects.length && isLoading && !isError">loading...</div>
    <div v-else-if="!projects.length && !isLoading && isError">error</div>
    <div v-else>empty</div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { ProjectItem } from '@/types/project'
import { Filter } from '@/enums/filter'

export default Vue.extend({
  props: {
    projects: {
      type: Array,
      default: () => [],
    } as PropOptions<Array<ProjectItem>>,
    isLoading: {
      type: Boolean,
      default: false,
    } as PropOptions<boolean>,
    isError: {
      type: Boolean,
      default: false,
    } as PropOptions<boolean>,
  },

  data() {
    return {
      Filter,
      filter: 'all',
    }
  },

  computed: {
    filterProjects(): Array<ProjectItem> {
      switch (this.filter) {
        case Filter.ALL:
          return this.projects
        case Filter.COMPLETED:
          return this.projects.filter(
            (project: ProjectItem) => project.complete
          )
        case Filter.ONGOING:
          return this.projects.filter(
            (project: ProjectItem) => !project.complete
          )
        default:
          return this.projects
      }
    },
  },

  methods: {
    updateFilter(by: string) {
      this.filter = by
    },
  },
})
</script>

<style lang="sass" scoped>
.project-filter
  .list
    @apply flex justify-start
    .item
      @apply mr-3 text-blue-500

      &:not(.active):hover
        @apply underline

      &.active
        @apply underline
</style>
