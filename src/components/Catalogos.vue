<template>
  <section class="content">
    
           <v-layout row wrap xs8>
          <v-flex xs8>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Consulta</div>
                <div></div>
              </v-card-title>
              <v-card-actions>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs8>
            <v-card color="cyan darken-2" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs8>
                    <div>
                      <div class="headline">Camion</div>
                    </div>
                  </v-flex>
                  <v-flex xs8>
                    <v-card-media
                      src="/static/doc-images/cards/foster.jpg"
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
            <v-flex xs8>
            <v-card color="cyan darken-2" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs8>
                    <div>
                      <div class="headline">Paradas</div>
                    
                    </div>
                  </v-flex>
                  <v-flex xs8>
                    <v-card-media
                      src="/static/doc-images/cards/foster.jpg"
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
          <v-flex xs8>
           <v-card color="cyan darken-2" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs8>
                    <div>
                      <div class="headline">Chofer</div>
                     
                    </div>
                  </v-flex>
                  <v-flex xs8>

                    <v-card-media
                      src="/static/doc-images/cards/foster.jpg"
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
          <v-flex xs8>
            <v-card color="cyan darken-2" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs8>
                    <div>
                      <div class="headline">Ruta</div>
                      
                    </div>
                  </v-flex>
                  <v-flex xs8>
                     <v-card-media
                        src="/static/doc-images/cards/halcyon.png"
                        height="125px"
                        contain
                      ></v-card-media>
                  </v-flex>

                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
  </section>
</template>

<script>
// Require needed datatables modules
export default {
  name: 'Tables'
}
</script>

<style>
/* Using the bootstrap style, but overriding the font to not draw in
   the Glyphicons Halflings font as an additional requirement for sorting icons.
   An alternative to the solution active below is to use the jquery style
   which uses images, but the color on the images does not match adminlte.
@import url('/static/js/plugins/datatables/jquery.dataTables.min.css');
*/
@import url('/static/js/plugins/datatables/dataTables.bootstrap.css');
table.dataTable thead .sorting:after,
table.dataTable thead .sorting_asc:after,
table.dataTable thead .sorting_desc:after {
  font-family: 'FontAwesome';
}
table.dataTable thead .sorting:after {
  content: "\f0dc";
}
table.dataTable thead .sorting_asc:after {
  content: "\f0dd";
}
table.dataTable thead .sorting_desc:after {
  content: "\f0de";
}
</style>