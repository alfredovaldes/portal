<template>
<div class="text-xs-center">
    <v-menu offset-y>
      <v-btn color="primary" dark slot="activator">Programacion de Rutas, choferes</v-btn>
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title" @click="">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
   
  </div>
  
</template>
 
<script>
  /////////////////////////////////////////
  // New in 0.4.0
  
 
  export default {
    data () {
      return {
        center: {lat: 25.416168, lng: -100.9522682}, 
        markers: [{
          position: {lat: 25.416168, lng: -100.9522682}
        }, {
          position: {lat: 25.416168, lng: -100.9522682}
        }],
        items: [
        { title: 'Camion' },
        { title: 'Chofer' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ]
      }
    }
  }
</script> 