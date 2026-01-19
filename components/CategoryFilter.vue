<script setup lang="ts">
import type { Category, CategoryId } from '~/types/cafe'

defineProps<{
  categories: Category[]
  selected: CategoryId[]
}>()

const emit = defineEmits<{
  toggle: [categoryId: CategoryId]
}>()
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <button
      v-for="category in categories"
      :key="category.id"
      class="px-4 py-2 rounded-full text-sm font-medium transition-colors"
      :class="
        selected.includes(category.id)
          ? 'bg-amber-600 text-white'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      "
      @click="emit('toggle', category.id)"
    >
      {{ category.icon }} {{ category.name }}
    </button>
  </div>
</template>
