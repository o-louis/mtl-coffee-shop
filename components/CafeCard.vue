<script setup lang="ts">
import type { Cafe, CategoryId } from '~/types/cafe'

defineProps<{
  cafe: Cafe
}>()

const emit = defineEmits<{
  select: [cafe: Cafe]
}>()

const categoryStyles: Record<CategoryId, string> = {
  work: 'bg-blue-500 text-white shadow-blue-500/30',
  takeaway: 'bg-orange-500 text-white shadow-orange-500/30',
  reading: 'bg-purple-500 text-white shadow-purple-500/30',
  social: 'bg-pink-500 text-white shadow-pink-500/30',
  specialty: 'bg-emerald-500 text-white shadow-emerald-500/30',
}
</script>

<template>
  <article
    class="bg-white/70 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-4 hover:bg-white/90 hover:border-gray-300/50 hover:shadow-lg transition-all cursor-pointer"
    @click="emit('select', cafe)"
  >
    <h3 class="font-bold text-lg text-blue-900">{{ cafe.name }}</h3>
    <p class="text-sm text-gray-500 mt-1">{{ cafe.neighborhood }}</p>
    <p class="text-sm text-gray-600 mt-1">{{ cafe.address }}</p>

    <p v-if="cafe.description" class="text-gray-700 mt-2 text-sm">
      {{ cafe.description }}
    </p>

    <div class="flex flex-wrap gap-2 mt-3">
      <span
        v-for="category in cafe.categories"
        :key="category"
        class="text-xs font-medium px-3 py-1 rounded-full shadow-md"
        :class="categoryStyles[category]"
      >
        {{ $t(`categories.${category}`) }}
      </span>
    </div>

    <div v-if="cafe.website || cafe.instagram" class="mt-3 flex gap-3">
      <a
        v-if="cafe.website"
        :href="cafe.website"
        target="_blank"
        rel="noopener"
        class="text-blue-700 hover:text-blue-900 transition-colors"
        @click.stop
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      </a>
      <a
        v-if="cafe.instagram"
        :href="`https://instagram.com/${cafe.instagram}`"
        target="_blank"
        rel="noopener"
        class="text-blue-700 hover:text-blue-900 transition-colors"
        @click.stop
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </a>
    </div>
  </article>
</template>
