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
      <template slot="items" scope="props">
        <td>
          <v-edit-dialog
            lazy
          > {{ props.item.name }}
            <v-text-field
              slot="input"
              label="Edit"
              v-model="props.item.name"
              single-line
              counter
              :rules="[max50chars]"
            ></v-text-field>
          </v-edit-dialog>
        </td>
        <td class="text-xs-right">{{ props.item.id }}</td>
        <td class="text-xs-right">{{  }}</td>
        <td class="text-xs-right">{{ props.item.fotochofer }}</td>
      </template>
      <template slot="pageText" scope="{ pageStart, pageStop }">
        From {{ pageStart }} to {{ pageStop }}
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        max25chars: (v) => v.length <= 25 || 'Input too long!',
        tmp: '',
        search: '',
        pagination: {},
        headers: [
          {
            text: 'Nombre',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'id', value: 'id' },
          { text: 'Fechaalta', value: 'fechaalta' },
          { text: 'Fotochofer', value: 'fotochofer' }
         
        ],
        items: [
          {
            value: false,
            name: 'Daniel Camacho Gutierrez',
            id: '1',
            fechaalta:'11/11/2017',
            fotochofer:':)'  
          },
        
          {
            value: false,
            name: 'Gabriel Camacho Juarez',
            id: '1',
            fechaalta:'11/11/2017',
            fotochofer:':)' ,
            
          }
        ]
      }
    }
  }
</script>