<script setup lang="ts">
defineProps<{
  neighborhoods: string[]
  selected: string[]
}>()

const emit = defineEmits<{
  toggle: [neighborhood: string]
}>()
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <button
      v-for="neighborhood in neighborhoods"
      :key="neighborhood"
      class="px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
      :class="
        selected.includes(neighborhood)
          ? 'bg-emerald-600 text-white'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      "
      @click="emit('toggle', neighborhood)"
    >
      📍 {{ neighborhood }}
    </button>
  </div>
</template>
