<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
theme.global.name.value = prefersDark.matches ? 'dark' : 'light'

prefersDark.addEventListener('change', (e) => {
  theme.global.name.value = e.matches ? 'dark' : 'light'
})
</script>