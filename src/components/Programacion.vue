<template>

  <v-card color="grey lighten-4" flat>
    <v-card-text>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs6>
            <v-subheader>Dias</v-subheader>
          </v-flex>
          <v-flex xs6>
            <v-select
              v-bind:items="dias"
              v-model="e1"
              label="Select"
              single-line bottom></v-select>
          </v-flex>
          <v-flex xs6>
            <v-subheader>Hora</v-subheader>
          </v-flex>
          <v-flex xs6>
           <v-text-field
              label="Label Text"
              value="12:30:00"
              type="time"
              
            ></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-subheader>Ruta</v-subheader>
          </v-flex>
          <v-flex xs6>
             <v-select
              v-bind:items="ruta"
              v-model="e2"
              label="Select"
              single-line
              bottom
            ></v-select>
          </v-flex>
          <v-flex xs6>
          <v-subheader>Camion</v-subheader>
          </v-flex>
          <v-flex xs6>
            <v-select
              v-bind:items="unidad"
              v-model="e3"
              label="Select"
              single-line
              bottom
            ></v-select>
          </v-flex>
          <v-flex xs6>

          <v-subheader>Chofer</v-subheader>
          </v-flex>
          <v-flex xs6>
             <v-select
              v-bind:items="chofer"
              v-model="e4"
              label="Select"
              single-line
              bottom
            ></v-select>
          </v-flex>

          <v-flex xs6>
         
    
  </div>
            </v-select>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>

</template>
<script>
  export default {
    data () {
      return {
        e1: null,
        e2: null,
        e3: null,
        e4: null,
        dias: [
          { text: 'Lunes' },
          { text: 'Martes' },
          { text: 'Miercoles' },
          { text: 'Jueves' },
          { text: 'Viernes' },
          { text: 'Sabado' },
          { text: 'Domingo' }
        ],
        ruta: [
         { text: 'Ruta1' },
          { text: 'Ruta2' },
          { text: 'Ruta3' },
          { text: 'Ruta4' },
          { text: 'Ruta5' },
          { text: 'Ruta6' },
          { text: 'Ruta7' }
        ],
        unidad: [
          { text: 'Modelo95' },
          { text: 'Modelo96' },
          { text: 'Modelo97' },
          { text: 'Modelo98' },
          { text: 'Modelo99' },
          { text: 'Modelo2000' },
          { text: 'Modelo2001' }
        ],
         chofer: [
          { text: 'Luis' },
          { text: 'Miguel' },
          { text: 'Martin' },
          { text: 'Ulises' },
          { text: 'Eduardo' },
          { text: 'Carlos' },
          { text: 'Raul' }
        ]
        
      }
    }
  }
</script>