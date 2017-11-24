<template>
<div class="text-xs-center">
    <v-menu offset-y>
      <v-btn color="primary" dark slot="activator">Dropdown</v-btn>
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
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center=m.position"
    ></gmap-marker>
  </gmap-map>
  </div>
  
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
        center: {lat: 25.416168, lng: -100.9522682}, 
        markers: [{
          position: {lat: 25.416168, lng: -100.9522682}
        }, {
          position: {lat: 25.416168, lng: -100.9522682}
        }],
        items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ]
      }
    }
  }
</script> 