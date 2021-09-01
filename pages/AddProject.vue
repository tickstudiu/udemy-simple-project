<template>
  <div class="add-project">
    <form class="form" @submit.prevent="onSubmit">
      <div class="input-group">
        <label class="label" for="title">Title</label>
        <input
          type="text"
          class="input"
          placeholder="Your name"
          v-model="form.title"
          :class="{ 'input-error': $v.form.title.$error }"
        />
        <BaseInputErrorMsgs :data="$v.form.title" class="mt-1" />
      </div>
      <div class="input-group">
        <label class="label" for="Detail">Detail</label>
        <textarea
          class="input"
          :class="{ 'input-error': $v.form.details.$error }"
          placeholder="Your name"
          v-model="form.details"
        />
        <BaseInputErrorMsgs :data="$v.form.details" class="mt-1" />
      </div>
      <button class="button">Add</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { required, maxLength } from 'vuelidate/lib/validators'
import BaseInputErrorMsgs from '@/components/bases/BaseInputErrorMsgs.vue'
export default Vue.extend({
  name: 'Add',

  components: {
    BaseInputErrorMsgs,
  },

  data() {
    return {
      form: {
        title: null,
        details: null,
        complete: true as boolean
      },
    }
  },

  methods: {
    onSubmit(): void {
      // check form
      this.$v.form.$touch()

      if (!this.$v.$invalid) {
        console.log('done')
      }
    },
  },

  validations(): any {
    return {
      form: {
        title: {
          required,
          maxLength: maxLength(255),
        },
        details: {
          required,
          maxLength: maxLength(255),
        },
      },
    }
  },
})
</script>

<style lang="sass" scoped>
.add-project
  .form
    .button
      @apply text-indigo-50 font-bold bg-indigo-600 py-2 px-4 rounded transition-all

      &:hover
        @apply bg-indigo-500

    .input-group
      @apply mb-3 flex align-baseline

      .label
        @apply mr-3 text-gray-700 font-bold inline-block mb-3
      .input
        @apply border bg-gray-100 py-2 px-4 outline-none rounded

        &.input-error
          @apply border-red-500

        &:focus
          @apply ring-2 ring-indigo-400
</style>
