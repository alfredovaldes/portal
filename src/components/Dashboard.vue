<template>
  <v-layout grid-list-md>
    <v-flex xs3>
    <v-navigation-drawer permanent clipped  light>
    <v-toolbar flat>
      
    </v-toolbar>
    <v-divider></v-divider>
    <v-list dense class="pt-0">
      <v-list-tile v-for="item in items" :key="item.title" :to='item.path'>
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
    </v-flex>
    <v-flex xs9>
  <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h3>
          {{$route.name.toUpperCase() }}
          <small>{{ $route.meta.description }}</small>
        </h3>
      </section>
  
      <router-view></router-view>
    </div>
    <!-- /.content-wrapper -->
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          { 
            title: 'Dashboard', 
            icon: 'dashboard',
            path: '/dashboard' 
          },
          { 
            title: 'Catalogos', 
            icon: 'dns',
            path: '/dashboard/catalogos' 
          },
          { 
            title: 'Programacion', 
            icon: 'schedule', 
            path: '/dashboard/programacion'
          },
          { 
            title: 'Visualizacion', 
            icon: 'visibility',
            path: '/dashboard/visualizacion' 
          },
          { 
            title: 'Mensajes', 
            icon: 'chat',
            path: '/dashboard/mensajes'
          },
          { 
            title: 'Notificaciones', 
            icon: 'notifications',
            path: '/dashboard/notificaciones'
          }
        ],
        right: null
      }
    }
  }
</script>