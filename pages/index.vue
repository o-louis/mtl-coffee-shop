<script setup lang="ts">
import type { Cafe } from '~/types/cafe'

const { t } = useI18n()

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

useHead({
  title: () => t('site.title'),
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
    <header class="bg-white/60 backdrop-blur-xl border-b border-gray-200/50 text-gray-900 py-6 px-4">
      <div class="max-w-7xl mx-auto flex justify-between items-start">
        <div>
          <h1 class="text-3xl font-bold">{{ $t('site.title') }}</h1>
          <p class="mt-2 text-gray-600">
            {{ $t('site.description') }}
          </p>
        </div>
        <LanguageSwitcher />
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 py-6">
      <section class="mb-6">
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            :placeholder="$t('search.placeholder')"
            class="w-full px-4 py-3 pl-10 rounded-xl bg-white/70 backdrop-blur-xl border border-gray-200/50 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-gray-400/50 focus:border-gray-400 outline-none"
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

      <section class="mb-6 bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/30">
        <h2 class="text-lg font-semibold text-blue-900 mb-3">
          {{ $t('filters.category') }}
        </h2>
        <CategoryFilter
          :categories="categories"
          :selected="selectedCategories"
          @toggle="toggleCategory"
        />
      </section>

      <section class="mb-6 bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/30">
        <h2 class="text-lg font-semibold text-blue-900 mb-3">
          {{ $t('filters.neighborhood') }}
        </h2>
        <NeighborhoodFilter
          :neighborhoods="neighborhoods"
          :selected="selectedNeighborhoods"
          @toggle="toggleNeighborhood"
        />
      </section>

      <div class="grid lg:grid-cols-2 gap-6">
        <section>
          <h2 class="text-lg font-semibold text-blue-900 mb-3">
            {{ $t('cafes.count', filteredCafes.length) }}
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
          <h2 class="text-lg font-semibold text-blue-900 mb-3">{{ $t('map.title') }}</h2>
          <ClientOnly>
            <CafeMap
              :cafes="filteredCafes"
              :selected-cafe="selectedCafe"
              @select="selectCafe"
            />
            <template #fallback>
              <div class="h-full bg-white/70 backdrop-blur-xl rounded-xl border border-gray-200/50 flex items-center justify-center text-gray-500">
                {{ $t('map.loading') }}
              </div>
            </template>
          </ClientOnly>
        </section>
      </div>
    </main>
  </div>
</template>
