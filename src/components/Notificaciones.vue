<template>
<form>
  <v-flex xs6>
  <div class="form-group">
    <h1 class="display-1 mb-3">
  <label class="form-control-label" for="name">Rutas Saltillo</label>
    </h1>
  <input required id="name" v-model="mensaje" name="name" class="form-control form-control-warning" 
  type="text" > </div><!-- /form-group -->
  
  <button @click="sendNotification">Enviar Notificacion</button>
  </v-flex>
</form>
</template>
<script>
import EndpointNotificacion from '@/services/EndpointNotificacion'

export default {
  data () {
    return {
      mensaje: ''
    }
  },
  methods: {
    async sendNotification() {
      var element = this.mensaje;
      console.log(element);
      this.notificacion = (await EndpointNotificacion.post({mensaje:mensaje})).data 
    }
  }
}
</script>

<style>
button {
 border: none;
 background: #3a7999;
 color: #f2f2f2;
 padding: 10px;
 font-size: 18px;
 border-radius: 5px;
 position: relative;
 box-sizing: border-box;
 transition: all 500ms ease;
}

</style>