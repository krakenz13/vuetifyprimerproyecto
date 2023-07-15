<template class="container1">
  <v-card>
    <template v-slot:title>
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

    <template v-slot:subtitle>
      Listado de clientes
      <v-divider></v-divider>
      <br /><br />
    </template>

    <template v-slot:text>
      <v-table fixed-header>
        <thead>
          <tr>
            <th class="text-left">Foto</th>
            <th class="text-left">Nombre</th>
            <th class="text-left">Apellido</th>
            <th class="text-left">Cedula</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.calories }}</td>

            <td>
              <v-btn style="margin: 10px" rounded="xs" size="x-small" icon="mdi-eye" color="secondary" to="vista">
              </v-btn>
              <v-btn style="margin: 10px" rounded="xs" size="x-small" icon="mdi-pen" color="primary" to="editar">
              </v-btn>
              <v-btn style="margin: 10px" rounded="xs" size="x-small" icon="mdi-delete" color="red-darken-4" to="">
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </template>
  </v-card>

  <v-data-table :items="items" :headers="headers">
    <template v-slot:item.columnName="{ item }">
      <!-- Contenido personalizado para la celda "columnName" -->
      {{ item.columnName }}
    </template>
    <template v-slot:item.columnName2="{ item }">
      <!-- Contenido personalizado para la celda "columnName2" -->
      <div>{{ item.columnName2 }}</div>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { RouterLink } from 'vue-router'
  import httpClient from '../../httpClient/Api'
  import { any } from '@amcharts/amcharts5/.internal/core/util/Array'
  import { onMounted } from 'vue'

  const router = useRouter()

  const desserts = [
    {
      name: 'Frozen Yogurt',
      calories: 159,
    },
    {
      name: 'Ice cream sandwich',
      calories: 237,
    },
    {
      name: 'Eclair',
      calories: 262,
    },
    {
      name: 'Cupcake',
      calories: 305,
    },
    {
      name: 'Gingerbread',
      calories: 356,
    },
    {
      name: 'Jelly bean',
      calories: 375,
    },
    {
      name: 'Lollipop',
      calories: 392,
    },
    {
      name: 'Honeycomb',
      calories: 408,
    },
    {
      name: 'Donut',
      calories: 452,
    },
    {
      name: 'KitKat',
      calories: 518,
    },
  ]

  const items = [
    { columnName: 'Valor 1', columnName2: 'Valor 2' },
    // más datos aquí
  ]
  const headers = [
    { text: 'Columna 1', value: 'columnName' },
    { text: 'Columna 2', value: 'columnName2' },
    // más encabezados aquí
  ]


</script>
