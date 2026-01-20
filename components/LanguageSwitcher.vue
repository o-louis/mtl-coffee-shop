<script setup lang="ts">
const { locale, setLocale } = useI18n()

function toggleLocale() {
  setLocale(locale.value === 'fr' ? 'en' : 'fr')
}
</script>

<template>
  <button
    class="px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-100/80 backdrop-blur-sm border border-gray-300/50 hover:bg-gray-200/80 transition-all text-gray-800"
    @click="toggleLocale"
  >
    {{ $t('language.switch') }}
  </button>
</template>
