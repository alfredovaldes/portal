<template>
  <v-card color="secondary" flat>
    <v-card-text>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs6>
            <v-subheader class="grey--text text--lighten-1" v-text="'Choferes'"></v-subheader>
          </v-flex>
          <v-flex xs6>
            <v-select
              v-bind:items="choferes"
              v-model="e1"
              label="Select"
              dark
              item-value="id"
              item-text="nomChofer"
            ></v-select>
          </v-flex>
          <v-flex xs6>
            <v-subheader class="grey--text text--lighten-1" v-text="'Camiones'"></v-subheader>
          </v-flex>
          <v-flex xs6>
            <v-select
              :items="camiones"
              v-model="e2"
              label="Select"
              class="input-group--focused"
              dark
              item-value="id"
              item-text="descripcion"
            ></v-select>
          </v-flex>
          </v-flex>
        </v-layout>
         <div>
          <v-btn color="error" @click="post">Asignar cambios</v-btn>
       </div>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
import EndpointChofer from '@/services/EndpointChofer'
import EndpointCamion from '@/services/EndpointCamion'
  export default {
    data () {
      return {
        e1:null,
        e2:null,
      max25chars: v => v.length <= 25 || "Input too long!",
      tmp: "",
      search: "",
      pagination: {},
      headers: [
        {
          text: "id",
          align: "left",
          sortable: false,
          value: "id"
        },
        {
          text: "nomChofer",
          align: "left",
          sortable: false,
          value: "idCamion"
        },{
          text: "fotochofer",
          align: "left",
          sortable: false,
          value: "idChofer"
        }
      ],
      camiones: [],
      choferes: [],
      items:[{text:"a", value:"1"},{text:"b", value:"2"},{text:"c", value:"3"},{text:"d", value:"4"},{text:"e", value:"5"}]

      }
    },
    async mounted () {
      this.choferes = (await EndpointChofer.index()).data
      this.camiones = (await EndpointCamion.index()).data 
    },
    methods:{
      async post(){
        let objUpd = {
          body : {
            idCamion:this.e2,
            idChofer :this.e1
          }
        }
        console.log(objUpd)
        this.upd = (await EndpointCamion.postCamionChofer(objUpd)).data
      }
    }
  } 
</script>
