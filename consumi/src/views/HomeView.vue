<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="logo" class="mt-8" contain height="200" />
      </v-col>

      <v-col class="mb-4">
        <h1 class="text-h4 font-weight-bold mb-3">
          Bem-vindo ao <span class="text-primary">Consumi</span> Beta 👋
        </h1>

        <p class="text-subtitle-1 mt-2 mb-6">
          Controle seus gastos, entenda seus hábitos e receba insights. Estamos só começando!
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-btn color="primary" @click="irParaDashboard" size="x-large"> Começar </v-btn>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-btn variant="text" class="mt-4" @click="enviarFeedback"> Enviar feedback 💬 </v-btn>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">Nossas Redes</h2>

        <v-row justify="center">
          <v-btn
            icon
            @click="abrirLink('https://instagram.com/consumi.app')"
            :aria-label="'Instagram'"
            class="mx-2"
          >
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn icon @click="abrirLink('https://twitter.com/consumiapp')" :aria-label="'Twitter'" class="mx-2">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
          <v-btn
            icon
            @click="abrirLink('https://linkedin.com/company/consumi')"
            :aria-label="'LinkedIn'"
            class="mx-2"
          >
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'

// Importa o logo (ajuste o caminho conforme sua estrutura de pastas)
const logo = ref(new URL('@/assets/consumi.png', import.meta.url).href)

const router = useRouter()

function irParaDashboard() {
  router.push({ name: 'dashboard' }) // ou 'Dashboard' se sua rota tiver esse nome
}

function enviarFeedback() {
  const email = 'mailto:contato@consumi.app?subject=Feedback%20Consumi%20Beta'
  window.open(email, '_blank')
}

function abrirLink(url: string) {
  window.open(url, '_blank')
}
</script>