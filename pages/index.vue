<script setup lang="ts">
import type { Cafe } from '~/types/cafe'

const {
  categories,
  neighborhoods,
  selectedCategories,
  selectedNeighborhoods,
  filteredCafes,
  toggleCategory,
  toggleNeighborhood,
} = useCafes()

const selectedCafe = ref<Cafe | null>(null)

function selectCafe(cafe: Cafe) {
  selectedCafe.value = cafe
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-amber-700 text-white py-6 px-4">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-3xl font-bold">☕ Cafés Montréal</h1>
        <p class="mt-2 text-amber-100">
          Découvrez les meilleurs cafés de la ville par catégorie
        </p>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 py-6">
      <section class="mb-6">
        <h2 class="text-lg font-semibold text-gray-700 mb-3">
          Filtrer par catégorie
        </h2>
        <CategoryFilter
          :categories="categories"
          :selected="selectedCategories"
          @toggle="toggleCategory"
        />
      </section>

      <section class="mb-6">
        <h2 class="text-lg font-semibold text-gray-700 mb-3">
          Filtrer par quartier
        </h2>
        <NeighborhoodFilter
          :neighborhoods="neighborhoods"
          :selected="selectedNeighborhoods"
          @toggle="toggleNeighborhood"
        />
      </section>

      <div class="grid lg:grid-cols-2 gap-6">
        <section>
          <h2 class="text-lg font-semibold text-gray-700 mb-3">
            {{ filteredCafes.length }} café{{ filteredCafes.length > 1 ? 's' : '' }}
          </h2>
          <div class="space-y-4 max-h-[600px] overflow-y-auto pr-2">
            <CafeCard
              v-for="cafe in filteredCafes"
              :key="cafe.id"
              :cafe="cafe"
              @select="selectCafe"
            />
          </div>
        </section>

        <section class="h-[600px]">
          <h2 class="text-lg font-semibold text-gray-700 mb-3">Carte</h2>
          <ClientOnly>
            <CafeMap
              :cafes="filteredCafes"
              :selected-cafe="selectedCafe"
              @select="selectCafe"
            />
            <template #fallback>
              <div class="h-full bg-gray-200 rounded-lg flex items-center justify-center">
                Chargement de la carte...
              </div>
            </template>
          </ClientOnly>
        </section>
      </div>
    </main>
  </div>
</template>
