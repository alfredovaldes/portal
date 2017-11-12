<template>
  <gmap-map
    :center="center"
    :zoom="7"
    style="width: 800px; height: 600px"
  >
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
</template>
 
<script>
  /////////////////////////////////////////
  // New in 0.4.0
  import * as VueGoogleMaps from 'vue2-google-maps';
  import Vue from 'vue';
 
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
        center: {lat: 32.19304, lng: -114.99933}, 
        markers: [{
          position: {lat: 32.19304, lng: -114.99933}
        }, {
          position: {lat: 25.416168, lng: -100.9522682}
        }]
      }
    }
  }
</script> 