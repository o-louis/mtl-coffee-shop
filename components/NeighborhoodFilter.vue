<script setup lang="ts">
const props = defineProps<{
  neighborhoods: string[]
  selected: string[]
}>()

const emit = defineEmits<{
  toggle: [neighborhood: string]
}>()

const isExpanded = ref(false)
const collapsedCount = 8

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

      <button
        v-if="hiddenCount > 0"
        class="px-3 py-1.5 rounded-full text-sm font-medium bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors"
        @click="isExpanded = !isExpanded"
      >
        {{ isExpanded ? 'Voir moins ↑' : `+${hiddenCount} quartiers ↓` }}
      </button>
    </div>

    <p v-if="selected.length > 0" class="mt-2 text-sm text-gray-500">
      {{ selected.length }} quartier{{ selected.length > 1 ? 's' : '' }} sélectionné{{ selected.length > 1 ? 's' : '' }}
    </p>
  </div>
</template>
