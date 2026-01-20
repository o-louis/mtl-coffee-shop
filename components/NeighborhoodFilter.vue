<script setup lang="ts">
const props = defineProps<{
  neighborhoods: string[]
  selected: string[]
}>()

const emit = defineEmits<{
  toggle: [neighborhood: string]
}>()

const isExpanded = ref(false)
const collapsedCount = 7

const visibleNeighborhoods = computed(() => {
  if (isExpanded.value) return props.neighborhoods
  return props.neighborhoods.slice(0, collapsedCount)
})

const hiddenCount = computed(() => {
  return Math.max(0, props.neighborhoods.length - collapsedCount)
})
</script>

<template>
  <div>
    <div class="flex flex-wrap gap-2">
      <button
        v-for="neighborhood in visibleNeighborhoods"
        :key="neighborhood"
        class="px-3 py-1.5 rounded-full text-sm font-medium transition-all"
        :class="
          selected.includes(neighborhood)
            ? 'bg-gray-800 backdrop-blur-sm text-white border border-gray-700'
            : 'bg-white/60 backdrop-blur-sm text-gray-700 border border-gray-200/50 hover:bg-white/80'
        "
        @click="emit('toggle', neighborhood)"
      >
        📍 {{ neighborhood }}
      </button>

      <button
        v-if="hiddenCount > 0"
        class="px-3 py-1.5 rounded-full text-sm font-medium bg-white/50 backdrop-blur-sm text-gray-600 border border-gray-200/50 hover:bg-white/70 transition-all"
        @click="isExpanded = !isExpanded"
      >
        {{ isExpanded ? $t('filters.showLess') + ' ↑' : $t('filters.showMore', { count: hiddenCount }) + ' ↓' }}
      </button>
    </div>

    <p v-if="selected.length > 0" class="mt-2 text-sm text-gray-500">
      {{ $t('filters.selected', selected.length) }}
    </p>
  </div>
</template>
