<template>
  <v-card>
    <v-card-title>
      Paradas
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
      
      <template slot="items" scope="props">
        <td>
          <v-edit-dialog
            lazy
          > {{ props.item.id }}
            <v-text-field
              slot="input"
              label="Edit"
              v-model="props.item.id"
              single-line
              counter
              :rules="[max50chars]"
            ></v-text-field>
          </v-edit-dialog>
        </td>
        <td class="text-xs-right">{{ props.item.descripcion }}</td>
        <td class="text-xs-right">{{ props.item.latitud }}</td>  
        <td class="text-xs-right">{{ props.item.longitud }}</td>  
      </template>
      <template slot="pageText" scope="{ pageStart, pageStop }">
        From {{ pageStart }} to {{ pageStop }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import EndpointParada from '@/services/EndpointParada'

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
            text: 'Descripcion',
            align: 'left',
            sortable: false,
            value: 'descripcion'
          },
          {
            text: 'Latitud',
            align: 'left',
            sortable: false,
            value: 'latitud'
          },
          {
            text: 'Longitud',
            align: 'left',
            sortable: false,
            value: 'longitud'
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