<template>
  <div>
    <nuxt-link v-for="item in menu" :key="item.name" :to="item.link" class="link">
      {{ item.name }}
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { menu } from '@/config/menu'
export default Vue.extend({
  data() {
    return {
      menu,
    }
  },
})
</script>

<style lang="sass" scoped>
.link
  @apply text-blue-500

  &:hover
    @apply underline
</style>


