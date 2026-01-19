<script setup lang="ts">
import type { Cafe } from '~/types/cafe'

defineProps<{
  cafe: Cafe
}>()

const emit = defineEmits<{
  select: [cafe: Cafe]
}>()

const { getCategoryName } = useCafes()
</script>

<template>
  <article
    class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer"
    @click="emit('select', cafe)"
  >
    <h3 class="font-bold text-lg text-gray-900">{{ cafe.name }}</h3>
    <p class="text-sm text-gray-500 mt-1">{{ cafe.neighborhood }}</p>
    <p class="text-sm text-gray-600 mt-1">{{ cafe.address }}</p>

    <p v-if="cafe.description" class="text-gray-700 mt-2 text-sm">
      {{ cafe.description }}
    </p>

    <div class="flex flex-wrap gap-1 mt-3">
      <span
        v-for="cat in cafe.categories"
        :key="cat"
        class="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full"
      >
        {{ getCategoryName(cat) }}
      </span>
    </div>

    <div v-if="cafe.website || cafe.instagram" class="mt-3 flex gap-3 text-sm">
      <a
        v-if="cafe.website"
        :href="cafe.website"
        target="_blank"
        rel="noopener"
        class="text-amber-600 hover:underline"
        @click.stop
      >
        Site web
      </a>
      <a
        v-if="cafe.instagram"
        :href="`https://instagram.com/${cafe.instagram}`"
        target="_blank"
        rel="noopener"
        class="text-amber-600 hover:underline"
      >
        Instagram
      </a>
    </div>
  </article>
</template>
