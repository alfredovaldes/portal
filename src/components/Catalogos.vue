<template>
  <section class="content">
    <v-layout row wrap xs5>
          <v-flex xs12>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Unlimited music now</div>
                <div>Listen to your favorite artists and albums whenenver and wherever, online and offline.</div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark>Listen now</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs5>
            <v-card color="cyan darken-2" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div class="headline">Supermodel</div>
                      <div>Foster the People</div>
                    </div>
                  </v-flex>
                  <v-flex xs5>
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
          <v-flex xs5>
            <v-card color="purple" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div class="headline">Halycon Days</div>
                      <div>Ellie Goulding</div>
                    </div>
                  </v-flex>
                  <v-flex xs5>
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