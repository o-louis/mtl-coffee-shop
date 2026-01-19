import { cafes } from '~/data/cafes'
import { categories } from '~/data/categories'
import type { Cafe, CategoryId } from '~/types/cafe'

export function useCafes() {
  const selectedCategories = ref<CategoryId[]>([])
  const selectedNeighborhoods = ref<string[]>([])

  const neighborhoods = computed(() => {
    const unique = [...new Set(cafes.map((c) => c.neighborhood))]
    return unique.sort()
  })

  const filteredCafes = computed<Cafe[]>(() => {
    return cafes.filter((cafe) => {
      const matchesCategory =
        selectedCategories.value.length === 0 ||
        selectedCategories.value.some((cat) => cafe.categories.includes(cat))
      const matchesNeighborhood =
        selectedNeighborhoods.value.length === 0 ||
        selectedNeighborhoods.value.includes(cafe.neighborhood)
      return matchesCategory && matchesNeighborhood
    })
  })

  function toggleCategory(categoryId: CategoryId) {
    const index = selectedCategories.value.indexOf(categoryId)
    if (index === -1) {
      selectedCategories.value.push(categoryId)
    } else {
      selectedCategories.value.splice(index, 1)
    }
  }

  function getCategoryName(categoryId: CategoryId): string {
    return categories.find((c) => c.id === categoryId)?.name ?? categoryId
  }

  function toggleNeighborhood(neighborhood: string) {
    const index = selectedNeighborhoods.value.indexOf(neighborhood)
    if (index === -1) {
      selectedNeighborhoods.value.push(neighborhood)
    } else {
      selectedNeighborhoods.value.splice(index, 1)
    }
  }

  return {
    cafes,
    categories,
    neighborhoods,
    selectedCategories,
    selectedNeighborhoods,
    filteredCafes,
    toggleCategory,
    toggleNeighborhood,
    getCategoryName,
  }
}
