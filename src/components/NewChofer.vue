<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    Agregar un nuevo chofer:
    <v-flex>
      <v-text-field
        label="Nombre"
        v-model="nomChofer"
      ></v-text-field>
    </v-flex> 
    <v-btn color="primary"
      @click="post(nomChofer)"
    >
      Enviar
    </v-btn>
  </v-form>
</template>
<script>
import EndpointChofer from '@/services/EndpointChofer'

export default {
  data () {
    return {
      nomChofer:""
    }
  },
  methods:{
    async post (este) {
      console.log(este)
      let body = {
        nomChofer: este
      }
      this.upd = (await EndpointChofer.post(body)).data
    }
  }
}
</script>
