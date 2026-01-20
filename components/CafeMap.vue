<script setup lang="ts">
import type { Cafe } from '~/types/cafe'

const props = defineProps<{
  cafes: Cafe[]
  selectedCafe?: Cafe | null
}>()

const emit = defineEmits<{
  select: [cafe: Cafe]
}>()

const center = ref<[number, number]>([45.5017, -73.5673])
const zoom = ref(12)

watch(
  () => props.selectedCafe,
  (cafe) => {
    if (cafe) {
      center.value = [cafe.coordinates.lat, cafe.coordinates.lng]
      zoom.value = 15
    }
  }
)
</script>

<template>
  <div class="h-full w-full rounded-xl overflow-hidden border border-gray-200/50 shadow-lg">
    <LMap
      :zoom="zoom"
      :center="center"
      :use-global-leaflet="false"
      class="h-full w-full"
    >
      <LTileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        layer-type="base"
        name="CartoDB Positron"
      />
      <LCircleMarker
        v-for="cafe in cafes"
        :key="cafe.id"
        :lat-lng="[cafe.coordinates.lat, cafe.coordinates.lng]"
        :radius="5"
        :fill="true"
        fill-color="#ef4444"
        :fill-opacity="1"
        color="#dc2626"
        :weight="2"
        @click="emit('select', cafe)"
      >
        <LPopup>
          <strong>{{ cafe.name }}</strong>
          <br />
          <span class="text-sm">{{ cafe.address }}</span>
        </LPopup>
      </LCircleMarker>
    </LMap>
  </div>
</template>
