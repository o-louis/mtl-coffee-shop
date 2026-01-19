<script setup lang="ts">
const { locale, setLocale } = useI18n()

function toggleLocale() {
  setLocale(locale.value === 'fr' ? 'en' : 'fr')
}
</script>

<template>
  <button
    class="px-3 py-1.5 rounded-lg text-sm font-medium bg-white/20 hover:bg-white/30 transition-colors"
    @click="toggleLocale"
  >
    {{ $t('language.switch') }}
  </button>
</template>
