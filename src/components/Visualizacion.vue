<template>
<div class="text-xs-center">
    <v-menu offset-y>
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title" @click="">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <gmap-map
    :center="center"
    :zoom="12"
    style="width: 800px; height: 600px"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in items"
        :position="m.position"
        :title="m.descripcion"
        :visible="true"
      ></gmap-marker>
    </gmap-map>
  </div>
  
</template>
 
<script>
  /////////////////////////////////////////
  // New in 0.4.0
  import * as VueGoogleMaps from 'vue2-google-maps';
  import Vue from 'vue';
  import EndpointCamion from '@/services/EndpointCamion'
  import EndpointPosicion from '@/services/EndpointPosicion'

 
  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyCXoX6rHnUFafMczK8M-rvTxanV3u7xybA',
      v: 'OPTIONAL VERSION NUMBER',
      // libraries: 'places', //// If you need to use place input
    }
  });
 
  export default {
    data () {
      return {
        center: {lat: 25.4420423, lng: -100.9522682}, 
        markers: [],
        items: []
      }
    },
    async mounted () {
      this.items = (await EndpointCamion.index()).data 
      for (let item of this.items){
        item.position = (await EndpointPosicion.show(item.id)).data
        this.center={lat: 25.4420423, lng: -100.9522682}
       }
    }
  }
</script> 