<template>
  <div>
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
          > {{ props.item.placas }}
            <v-text-field
              slot="input"
              label="Edit"
              v-model="props.item.placas"
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
    <NewCamion />
  </v-card>
  </div>
</template>

<script>
import EndpointCamion from '@/services/EndpointCamion'
import NewCamion from '@/components/NewCamion'
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
    },
    methods:{
      async update (este) {
        let objUpdate = {
          params:{
            id: este.id
          },
          body:{
            descripcion: este.descripcion,
            placas: este.placas
          }
        }
        this.upd = (await EndpointCamion.put(objUpdate)).data
      },
      async borrar (este){
        let objUpdate = {
          params:{
            id: este.id
          }
        }
        this.del = (await EndpointCamion.delete(objUpdate)).data

      }
    },
    components:{ NewCamion }

  }
</script>