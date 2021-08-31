<template>
  <div class="add-project">
    <form class="form">
      <div class="input-group">
        <label class="label" for="title">Title</label>
        <input type="text" class="input" placeholder="Your name" />
      </div>
      <div class="input-group">
        <label class="label" for="Detail">Detail</label>
        <textarea class="input" placeholder="Your name" />
      </div>
      <button class="button">Add</button>
    </form>
  </div>
</template>

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

        &:focus
          @apply ring-2 ring-indigo-400
</style>
