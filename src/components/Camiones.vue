<template>
  <v-card>
    <v-card-title>
      Camiones
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
        v-bind:search="search">
      
      <template slot="items" slot-scope="props">
        <td>
          <v-edit-dialog
            lazy> {{ props.item.id }}
            <v-text-field
              slot="input"
              label="Edit"
              v-model="props.item.id"
              single-line
              counter
              :rules="[max50chars]"></v-text-field>
          </v-edit-dialog>
          </td>
        <td class="text-xs-center">{{ props.item.descripcion }}</td>
        <td class="text-xs-center">{{ props.item.placas }}</td>  
      </template>
      <template slot="pageText" slot-scope="{ pageStart, pageStop }">
        From {{ pageStart }} to {{ pageStop }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import EndpointCamion from '@/services/EndpointCamion'

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
            align: 'center',
            sortable: false,
            value: 'id'
          },
          {
            text: 'Descripcion',
            align: 'center',
            sortable: false,
            value: 'descripcion'
          },
          {
            text: 'Placas',
            align: 'center',
            sortable: false,
            value: 'placas'
          }
        ],
        items: []
      }
    },
    async mounted () {
      this.items = (await EndpointCamion.index()).data 
    }
  }
</script>