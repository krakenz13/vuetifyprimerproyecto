<template class="container1">
  <v-card>
    <template #title>
      <v-toolbar :color="'indigo-darken-4'" density="compact">
        <v-toolbar-title>Gestión de clientes</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-text-field append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>

        <v-btn icon to="crear">
          <v-icon>mdi:mdi-plus</v-icon>
        </v-btn>
      </v-toolbar>
    </template>
  </v-card>

  <!-- <v-data-table :items="items" :headers="headers">
    <template v-slot:item.columnName="{ item }">
      {{ item.columnName }}
    </template>
    <template v-slot:item.columnName2="{ item }">
      <div>{{ item.columnName2 }}</div>
    </template>
  </v-data-table> -->
</template>

<script setup lang="ts">
  //import { useRouter } from 'vue-router'
  //import { RouterLink } from 'vue-router'
  //import client from '../../clients/Client'
  import HttpClientAdapter from '../../clients/HttpClientAdapter'
  import { onMounted } from 'vue'

  const client = new HttpClientAdapter()

  // const router = useRouter()

  // const desserts = [
  //   {
  //     name: 'Frozen Yogurt',
  //     calories: 159,
  //   },
  //   {
  //     name: 'Ice cream sandwich',
  //     calories: 237,
  //   },
  //   {
  //     name: 'Eclair',
  //     calories: 262,
  //   },
  //   {
  //     name: 'Cupcake',
  //     calories: 305,
  //   },
  //   {
  //     name: 'Gingerbread',
  //     calories: 356,
  //   },
  //   {
  //     name: 'Jelly bean',
  //     calories: 375,
  //   },
  //   {
  //     name: 'Lollipop',
  //     calories: 392,
  //   },
  //   {
  //     name: 'Honeycomb',
  //     calories: 408,
  //   },
  //   {
  //     name: 'Donut',
  //     calories: 452,
  //   },
  //   {
  //     name: 'KitKat',
  //     calories: 518,
  //   },
  // ]

  // const items = [
  //   { columnName: 'Valor 1', columnName2: 'Valor 2' },
  //   // más datos aquí
  // ]
  // const headers = [
  //   { text: 'Columna 1', value: 'columnName' },
  //   { text: 'Columna 2', value: 'columnName2' },
  //   // más encabezados aquí
  // ]

  onMounted(() => {
    console.log('Component mounted')
    client.get('https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
      console.log(response)
    })
  })
</script>
