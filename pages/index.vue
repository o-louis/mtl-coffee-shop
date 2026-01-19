<script setup lang="ts">
import type { Cafe } from '~/types/cafe'

const {
  categories,
  neighborhoods,
  searchQuery,
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
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Rechercher un café, une adresse, un quartier..."
            class="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
          />
          <svg
            class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </section>

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
