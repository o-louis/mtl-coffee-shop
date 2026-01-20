<script setup lang="ts">
const { locale, setLocale } = useI18n()

function toggleLocale() {
  setLocale(locale.value === 'fr' ? 'en' : 'fr')
}
</script>

<template>
  <button
    class="p-1.5 rounded-lg bg-gray-100/80 backdrop-blur-sm border border-gray-300/50 hover:bg-gray-200/80 transition-all"
    @click="toggleLocale"
    :title="$t('language.switch')"
  >
    <!-- French flag -->
    <svg v-if="locale === 'en'" class="w-6 h-4 rounded-sm" viewBox="0 0 900 600">
      <rect width="300" height="600" fill="#002654"/>
      <rect x="300" width="300" height="600" fill="#fff"/>
      <rect x="600" width="300" height="600" fill="#ce1126"/>
    </svg>
    <!-- UK flag -->
    <svg v-else class="w-6 h-4 rounded-sm" viewBox="0 0 60 30">
      <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
      <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
      <g clip-path="url(#s)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>
      </g>
    </svg>
  </button>
</template>
