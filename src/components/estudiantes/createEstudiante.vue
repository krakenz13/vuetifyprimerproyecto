<template>
  <form>
    <v-card>
      <v-toolbar :color="'indigo-darken-4'" density="compact">
        <v-toolbar-title>Registro clientes</v-toolbar-title>
        <v-btn icon>
          <v-icon>mdi:mdi-content-save-check</v-icon>
        </v-btn>
        <v-btn icon to="listado">
          <v-icon>mdi:mdi-home</v-icon>
        </v-btn>
      </v-toolbar>
      

      <v-row no-gutters>
        <v-col md="4">
          <v-img
            style="margin: auto; padding: 20px"
            :width="330"
            aspect-ratio="16/9"
            cover
            src="https://cdn3.iconfinder.com/data/icons/leto-user-group/64/__man_user_person-512.png"
          ></v-img>
        </v-col>
        <v-col md="8">
          <div style="margin: 20px">
            <v-text-field type="text" label="Nombre"></v-text-field>
            <v-text-field type="text" label="Apellido"></v-text-field>
            <v-text-field type="text" label="Cedula"></v-text-field>
            <v-text-field type="text" label="Telefono"></v-text-field>
            <v-file-input label="Agregar foto" variant="filled" prepend-icon="mdi-camera"></v-file-input>
          </div>
        </v-col>
      </v-row>

      <!-- <v-row no-gutters>
        <v-col md="12">
          <div style="margin: 20px">
            <v-btn class="me-4" color="secondary" type="submit"> submit </v-btn>
            <v-btn color="secondary"> clear </v-btn>
          </div>
        </v-col>
      </v-row> -->
    </v-card>
  </form>
</template>


