<template>
  <div>
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
        <td class="text-xs-center">
          <v-btn fab dark small color="red" @click="borrar(props.item)">
            <v-icon dark>clear</v-icon>
          </v-btn>{{ props.item.id }}
        </td>
        <td>
        <v-edit-dialog
            lazy
            large
            @save="update(props.item)"
          > {{ props.item.nombre }}
            <v-text-field
              slot="input"
              label="Edit"
              v-model="props.item.nombre"
              single-line
              counter
            ></v-text-field>
          </v-edit-dialog>
        </td>
        <td>
          <v-edit-dialog
            lazy
            large
            @save="update(props.item)"
          > {{ props.item.nombreLargo }}
            <v-text-field
              slot="input"
              label="Edit"
              v-model="props.item.nombreLargo"
              single-line
              counter
            ></v-text-field>
          </v-edit-dialog>
        </td>
        <td>
          <v-edit-dialog
            lazy
            large
            @save="update(props.item)"
          > {{ props.item.nombreOrden }}
            <v-text-field
              slot="input"
              label="Edit"
              v-model="props.item.nombreOrden"
              single-line
              counter
            ></v-text-field>
          </v-edit-dialog>
        </td>
        <td class="text-xs-right">{{ props.item.trayecto }}</td>
      </template>
      <template slot="pageText" slot-scope="{ pageStart, pageStop }">
        From {{ pageStart }} to {{ pageStop }}
      </template>
    </v-data-table>
  </v-card>
  <NewRuta />
  </div>
</template>
<script>
import NewRuta from '@/components/NewRuta'
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
          }
        ],
        items: []
      }
    },
    async mounted () {
      this.items = (await EndpointRuta.index()).data 
    },
    methods : {
      async update (este) {
        let objUpdate = {
          params:{
            id: este.id
          },
          body:{
            nombre: este.nombre,
            nombreLargo: este.nombreLargo,
            nombreOrden: este.nombreOrden
          }
        }
        this.upd = (await EndpointRuta.put(objUpdate)).data
      },
      async borrar (este){
        let objUpdate = {
          params:{
            id: este.id
          }
        }
        this.del = (await EndpointRuta.delete(objUpdate)).data
      }
    },
    components:{ NewRuta }
  }
</script>

