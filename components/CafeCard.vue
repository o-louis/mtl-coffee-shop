<script setup lang="ts">
import type { Cafe } from '~/types/cafe'

defineProps<{
  cafe: Cafe
}>()

const emit = defineEmits<{
  select: [cafe: Cafe]
}>()
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

    <div class="flex flex-wrap gap-1 mt-3">
      <span
        v-for="category in cafe.categories"
        :key="category"
        class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
      >
        {{ $t(`categories.${category}`) }}
      </span>
    </div>

    <div v-if="cafe.website || cafe.instagram" class="mt-3 flex gap-3 text-sm">
      <a
        v-if="cafe.website"
        :href="cafe.website"
        target="_blank"
        rel="noopener"
        class="text-blue-700 hover:text-blue-900 hover:underline"
        @click.stop
      >
        {{ $t('cafes.website') }}
      </a>
      <a
        v-if="cafe.instagram"
        :href="`https://instagram.com/${cafe.instagram}`"
        target="_blank"
        rel="noopener"
        class="text-blue-700 hover:text-blue-900 hover:underline"
        @click.stop
      >
        {{ $t('cafes.instagram') }}
      </a>
    </div>
  </article>
</template>
