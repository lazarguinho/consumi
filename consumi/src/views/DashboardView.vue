<template>
  <v-app>
    <v-main class="pa-4">
      <v-container fluid>
        <!-- Título e Saudação -->
        <v-row class="mt-6" align="center" justify="space-between" no-gutters>
          <v-col cols="auto">
            <h1><span class="text-primary">Consumi</span></h1>
          </v-col>

          <v-col cols="auto" class="text-end">
            <v-btn icon color="primary" :aria-label="'Ler QR Code'">
              <v-icon>mdi-qrcode-scan</v-icon>
            </v-btn>
          </v-col>
        </v-row>

        <!-- Cartões de Resumo -->
        <v-container class="my-8 px-0">
          <div class="d-flex flex-row ga-4 overflow-auto" style="scroll-snap-type: x mandatory">
            <!-- Card 1 -->
            <v-card class="min-width-800" variant="tonal" style="scroll-snap-align: start">
              <v-card-title class="d-flex align-center justify-space-between">
                <div class="text-overline d-flex align-center">
                  <v-icon icon="mdi-currency-usd" size="small" class="me-1" />
                  Gastos Totais
                </div>
              </v-card-title>
              <v-card-text class="text-h5">
                {{ formatarMoeda(gastosTotais) }}
                <v-chip color="red" size="x-small" label variant="elevated" class="ml-1">
                  - 8,3%
                </v-chip>
                <div class="text-caption text-medium-emphasis">vs mês passado: R$ 5.678,23</div>
              </v-card-text>
            </v-card>
          </div>
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const nomeUsuario = ref('Mateus')
const gastosTotais = ref(1249.99)
const categoriaMaiorGasto = ref('Mercado')
const mediaDiaria = ref(41.66)

const ultimosGastos = ref([
  { id: 1, descricao: 'Supermercado', valor: 120.9 },
  { id: 2, descricao: 'Transporte', valor: 35.0 },
  { id: 3, descricao: 'Café', valor: 12.5 },
])

function formatarMoeda(valor: number) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function atualizarDados() {
  // lógica para puxar dados do backend
  console.log('Dados atualizados!')
}

onMounted(() => {
  // Aqui pode ir a lógica para renderizar um gráfico com Chart.js
})
</script>
