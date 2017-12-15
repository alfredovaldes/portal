<template>
  <v-form ref="form" lazy-validation>
    Agregar una nueva unidad:
    <v-flex>
      <v-text-field
        label="Descripcion"
        v-model="descripcion"
      ></v-text-field>
      <v-text-field
        label="Placas"
        v-model="placas"
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
import EndpointCamion from '@/services/EndpointCamion'

export default {
  data () {
    return {
      descripcion:'',
      placas :''
    }
  },
  methods:{
    async post () {
      let objUpd = {
        body : {
          descripcion:this.descripcion,
          placas :this.placas
        }
      }
      this.upd = (await EndpointCamion.post(objUpd)).data
    }
  }
}
</script>
