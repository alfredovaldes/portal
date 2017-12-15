<template>
  <v-form ref="form" lazy-validation>
    Agregar una nueva parada:
    <v-flex>
      <v-text-field
        label="Descripcion"
        v-model="descripcion"
      ></v-text-field>
      <v-text-field
        label="Latitud"
        v-model="latitud"
        type="number"
      ></v-text-field>
      <v-text-field
        label="Longitud"
        v-model="longitud"
        type="number"
      ></v-text-field>
    </v-flex> 
    <v-btn color="primary"
      @click="post"
    >
      Enviar
    </v-btn>
  </v-form>
</template>
<script>
import EndpointParada from '@/services/EndpointParada'

export default {
  data () {
    return {
      descripcion:'',
      latitud :'',
      longitud:''
    }
  },
  methods:{
    async post () {
      let objUpd = {
        body : {
          descripcion:this.descripcion,
          latitud :this.latitud,
          longitud:this.longitud,
        }
      }
      this.upd = (await EndpointParada.post(objUpd)).data
    }
  }
}
</script>
