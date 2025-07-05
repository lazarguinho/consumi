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

<script lang="ts">
import { defineComponent } from 'vue'

// Logo
import logo from '../assets/consumi.png'

export default defineComponent({
  name: 'HelloWorld',

  data() {
    return {
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader/tree/next',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify/tree/next',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      logo,
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Roadmap',
          href: 'https://vuetifyjs.com/en/introduction/roadmap/',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }
  },
})
</script>
