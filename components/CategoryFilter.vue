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
      class="px-4 py-2 rounded-full text-sm font-medium transition-all"
      :class="
        selected.includes(category.id)
          ? 'bg-gray-800 backdrop-blur-sm text-white border border-gray-700'
          : 'bg-white/60 backdrop-blur-sm text-gray-700 border border-gray-200/50 hover:bg-white/80'
      "
      @click="emit('toggle', category.id)"
    >
      {{ category.icon }} {{ $t(`categories.${category.id}`) }}
    </button>
  </div>
</template>
