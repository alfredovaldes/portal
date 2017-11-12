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
        <td class="text-xs-right">{{ props.item.nolicencia }}</td>
        <td class="text-xs-right">{{ props.item.vigencialicencia }}</td>
        <td class="text-xs-right">{{ props.item.dirchofer }}</td>
        <td class="text-xs-right">{{ props.item.telchofer }}</td>
        <td class="text-xs-right">{{ props.item.celchofer }}</td>
        <td class="text-xs-right">{{ props.item.emailchofer }}</td>
        <td class="text-xs-right">{{ props.item.fechanacimiento }}</td>
        <td class="text-xs-right">{{ props.item.fechaalta }}</td>
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
          { text: 'Nolicencia', value: 'nolicencia' },
          { text: 'Vigencialicencia', value: 'vigencialicencia' },
          { text: 'Dirchofer', value: 'dirchofer' },
          { text: 'Telchofer', value: 'telchofer' },
          { text: 'Celchofer', value: 'celchofer' },
          { text: 'Emailchofer', value: 'emailchofer' },
          { text: 'Fechanacimiento', value: 'fechanacimiento' },
          { text: 'Fechaalta', value: 'fechaalta' },
          { text: 'Fotochofer', value: 'fotochofer' }
         
        ],
        items: [
          {
            value: false,
            name: 'Daniel Camacho Gutierrez',
            id: '1',
            nolicencia: '568',
            vigencialicencia:'02/05/17',
            dirchofer:'227, calle 16, amp. morelos',
            telchofer:'4543630',
            celchofer:'8441256987',
            emailchofer:'h_gtewolol@outlook.com',
            fechanacimiento:'30/09/1985',
            fechaalta:'11/11/2017',
            fotochofer:':)'
           
          },
          {
            value: false,
            name: '',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            sodium: 129,
            
          },
          {
            value: false,
            name: '',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            sodium: 337,
            
          },
          {
            value: false,
            name: '',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            sodium: 413,
            
          },
          {
            value: false,
            name: '',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            sodium: 327,
            
          },
          {
            value: false,
            name: '',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            sodium: 50,
           
          },
          {
            value: false,
            name: '',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            sodium: 38,
            
          },
          {
            value: false,
            name: '',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            sodium: 562,
            
          },
          {
            value: false,
            name: '',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            sodium: 326,
            
          },
          {
            value: false,
            name: '',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            sodium: 54,
            
          }
        ]
      }
    }
  }
</script>