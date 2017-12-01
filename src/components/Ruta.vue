<template>
  <v-card>
    <v-card-title>
      Datos de las Rutas
      <v-spacer></v-spacer>
      <v-text-field
        append-icon="search"
        label="Search"
        single-line
        hide-details
        v-model="search"
      ></v-text-field>
    </v-card-title>
    <v-data-table
        v-bind:headers="headers"
        v-bind:items="items"
        v-bind:search="search"
      >
      <template slot="items" slot-scope="props">
        <td>
          <v-edit-dialog
            lazy
          > {{ props.item.nombre }}
            <v-text-field
              slot="input"
              label="Edit"
              v-model="props.item.nombre"
              single-line
              counter
              :rules="[max50chars]"
            ></v-text-field>
          </v-edit-dialog>
        </td>
        <td class="text-xs-right">{{ props.item.id }}</td>
        <td class="text-xs-right">{{ props.item.nombreLargo }}</td>
         <td class="text-xs-right">{{ props.item.nombreOrden }}</td>
          <td class="text-xs-right">{{ props.item.trayecto }}</td>
          <td class="text-xs-right">{{ props.item.tipo }}</td>
          <td class="text-xs-right">{{ props.item.activo }}</td>
      </template>
      <template slot="pageText" slot-scope="{ pageStart, pageStop }">
        From {{ pageStart }} to {{ pageStop }}
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
import EndpointRuta from '@/services/EndpointRuta'

  export default {
    data () {
      return {
        max25chars: (v) => v.length <= 25 || 'Input too long!',
        tmp: '',
        search: '',
        pagination: {},
        headers: [
          {
            text: 'Id',
            align: 'left',
            sortable: false,
            value: 'id'
          },
          {
            text: 'nombre',
            align: 'left',
            sortable: false,
            value: 'nombre'
          },
          {
            text: 'nombreLargo',
            align: 'left',
            sortable: false,
            value: 'nombreLargo'
          },
          {
            text: 'nombreOrden',
            align: 'left',
            sortable: false,
            value: 'nombreOrden'
          },
           {
            text: 'trayecto',
            align: 'left',
            sortable: false,
            value: 'trayecto'
          },
           {
            text: 'tipo',
            align: 'left',
            sortable: false,
            value: 'tipo'
          },
           {
            text: 'activo',
            align: 'left',
            sortable: false,
            value: 'activo'
          }
        ],
        items: []
      }
    },
    async mounted () {
      this.items = (await EndpointParada.index()).data 
    }
  }
</script>

