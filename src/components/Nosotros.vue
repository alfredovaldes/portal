<template>
  <v-container
    fluid
    grid-list-sm
    tag="section"
    id="grid">
    <v-layout row wrap>
      <v-flex tag="h1" class="headline">Nosotros</v-flex>
      <v-flex d-flex xs12 order-xs5>
        <v-layout column>
          <v-flex>
            <v-card flat>
              <v-card-text
                v-text="lorem">
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex>
            <v-card flat>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      lorem: `Ponemos a tu alcance el servicio y administracion de localizacion de autobuses`
    })
  }
</script>