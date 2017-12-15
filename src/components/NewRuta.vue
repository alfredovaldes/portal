<template>
  <v-form ref="form" lazy-validation>
    Agregar una nueva ruta:
    <v-flex>
      <v-text-field
        label="Nombre"
        v-model="nombre"
      ></v-text-field>
      <v-text-field
        label="NombreLargo"
        v-model="nombreLargo"
      ></v-text-field>
      <v-text-field
        label="NombreOrden"
        v-model="nombreOrden"
      ></v-text-field>
      <v-text-field
        label="Trayecto"
        v-model="trayecto"
        multi-line
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
import EndpointRuta from '@/services/EndpointRuta'

export default {
  data () {
    return {
      nombre:'',
      nombreLargo:'',
      nombreOrden:'',
      trayecto:''
    }
  },
  methods:{
    async post () {
      let objUpd = {
        body : {
          nombre:this.nombre,
          nombreLargo:this.nombreLargo,
          nombreOrden:this.nombreOrden,
          trayecto:this.trayecto
        }
      }
      this.upd = (await EndpointRuta.post(objUpd)).data
    }
  }
}
</script>
