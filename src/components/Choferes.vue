<template>
  <div>
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
          <td class="text-xs-center">
            <v-btn fab dark small color="red" @click="borrarALV(props.item)">
              <v-icon dark>clear</v-icon>
            </v-btn>{{ props.item.id }}</td>
          <td>
            <v-edit-dialog
              lazy
              large
              @save="update(props.item)"
            > {{ props.item.nomChofer }}
              <v-text-field
                slot="input"
                label="Edit"
                v-model="props.item.nomChofer"
                single-line
                counter
                
              ></v-text-field>
            </v-edit-dialog>
          </td>
          
          <td class="text-xs-right">
            <div class="container">
              <img v-if="props.item.fotoChofer" :src="`http://localhost:3000/chofer/${props.item.id}/foto`" height="128" width="128" />
              <img v-else :src="imageSrc" class="image" >
              <input @change="uploadImage($event, props.item)" type="file" name="photo" accept="image/*">
            </div>
          </td>
        </template>
        <template slot="pageText" slot-scope="{ pageStart, pageStop }">
          From {{ pageStart }} to {{ pageStop }}
        </template>
      </v-data-table>
    </v-card>
    <v-flex class="xs6  offset-sm3">
      <v-card>
        <new-chofer />
      </v-card>
    </v-flex>
  </div>
</template>

<script>
import NewChofer from '@/components/NewChofer'
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
        items: [],
        imageSrc: 'https://drii.org/public/images/frontend/default-profile.png'
      }
    },
    methods:{
      async update (este) {
        let objUpdate = {
          params:{
            id: este.id
          },
          body:{
            nomChofer: este.nomChofer
          }
        }
        this.upd = (await EndpointChofer.put(objUpdate)).data
      },
      async getImg (este) {
        let objUpdate = {
          params:{
            id: este.id
          }
        }
        este.img = (await EndpointChofer.getPicture()).data
      },
      async uploadImage (e, item) {
        var files = e.target.files;
        if(!files[0]) {
          return;
        }
        var formData = new FormData();
        formData.append('image', files[0])
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageSrc = e.target.result;
        };
        let objUpdate = {
          params:{
            id: item.id
          },
          data:formData
        }
        try {
          this.picUpd = (await EndpointChofer.postPicture(objUpdate)).data
        } catch (error) {
        }
      },
      async borrarALV (este){
        let objUpdate = {
          params:{
            id: este.id
          }
        }
        this.del = (await EndpointChofer.delete(objUpdate)).data

      }
    },
    async mounted () {
      this.items = (await EndpointChofer.index()).data 
    },
    components:{ NewChofer }
  }
</script>