<template>
  <v-card>
    <v-card-title>
      Datos de los Choferes
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
          > {{ props.item.nomChofer }}
            <v-text-field
              slot="input"
              label="Edit"
              v-model="props.item.nomChofer"
              single-line
              counter
              :rules="[max50chars]"
            ></v-text-field>
          </v-edit-dialog>
        </td>
        <td class="text-xs-right">{{ props.item.id }}</td>
        <td class="text-xs-right">{{ props.item.fotoChofer }}</td>
      </template>
      <template slot="pageText" slot-scope="{ pageStart, pageStop }">
        From {{ pageStart }} to {{ pageStop }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import EndpointChofer from '@/services/EndpointChofer'
  export default {
    data () {
      return {
        max25chars: (v) => v.length <= 25 || 'Input too long!',
        tmp: '',
        search: '',
        pagination: {},
        headers: [
          {
            text: 'id',
            align: 'left',
            sortable: false,
            value: 'id'
          },{
            text: 'nombre',
            align: 'left',
            sortable: false,
            value: 'nomChofer'
          },{
            text: 'foto',
            align: 'left',
            sortable: false,
            value: 'fotoChofer'
          },
        ],
        items: []
      }
    },
    async mounted () {
      this.items = (await EndpointChofer.index()).data 
    }
  }
</script>