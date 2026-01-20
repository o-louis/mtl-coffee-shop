<script setup lang="ts">
import type { Category, CategoryId } from '~/types/cafe'

defineProps<{
  categories: Category[]
  selected: CategoryId[]
}>()

const emit = defineEmits<{
  toggle: [categoryId: CategoryId]
}>()

const categoryStyles: Record<CategoryId, { selected: string; unselected: string }> = {
  work: {
    selected: 'bg-blue-500 text-white border-blue-400 shadow-md shadow-blue-500/30',
    unselected: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100',
  },
  takeaway: {
    selected: 'bg-orange-500 text-white border-orange-400 shadow-md shadow-orange-500/30',
    unselected: 'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100',
  },
  reading: {
    selected: 'bg-purple-500 text-white border-purple-400 shadow-md shadow-purple-500/30',
    unselected: 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100',
  },
  social: {
    selected: 'bg-pink-500 text-white border-pink-400 shadow-md shadow-pink-500/30',
    unselected: 'bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100',
  },
  specialty: {
    selected: 'bg-emerald-500 text-white border-emerald-400 shadow-md shadow-emerald-500/30',
    unselected: 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100',
  },
}
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <button
      v-for="category in categories"
      :key="category.id"
      class="px-4 py-2 rounded-full text-sm font-medium transition-all border"
      :class="
        selected.includes(category.id)
          ? categoryStyles[category.id].selected
          : categoryStyles[category.id].unselected
      "
      @click="emit('toggle', category.id)"
    >
      {{ category.icon }} {{ $t(`categories.${category.id}`) }}
    </button>
  </div>
</template>
