<template>
  <div>
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
      
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">
          <v-btn fab dark small color="red" @click="borrar(props.item)">
            <v-icon dark>clear</v-icon>
          </v-btn>{{ props.item.id }}
        </td>
        <td>
          <v-edit-dialog
            lazy
            large
            @save="update(props.item)"
          > {{ props.item.descripcion }}
            <v-text-field
              slot="input"
              label="Edit"
              v-model="props.item.descripcion"
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
          > {{ props.item.latitud }}
            <v-text-field
              slot="input"
              label="Edit"
              v-model="props.item.latitud"
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
          > {{ props.item.longitud }}
            <v-text-field
              slot="input"
              label="Edit"
              v-model="props.item.longitud"
              single-line
              counter
            ></v-text-field>
          </v-edit-dialog>
        </td>
      </template>
      <template slot="pageText" slot-scope="{ pageStart, pageStop }">
        From {{ pageStart }} to {{ pageStop }}
      </template>
    </v-data-table>
  </v-card>
  <v-card>
  <v-flex>
  <NewParada />
  </v-flex>
  </v-card>
  </div>
</template>

<script>
import NewParada from '@/components/NewParada'
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
    },
    methods : {
      async update (este) {
        let objUpdate = {
          params:{
            id: este.id
          },
          body:{
            descripcion: este.descripcion,
            latitud: este.latitud,
            longitud: este.longitud
          }
        }
        this.upd = (await EndpointParada.put(objUpdate)).data
      },
      async borrar (este){
        let objUpdate = {
          params:{
            id: este.id
          }
        }
        this.del = (await EndpointParada.delete(objUpdate)).data
      }
    },
    components:{ NewParada }
  }
</script>