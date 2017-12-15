<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="grey darken-4" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form autocomplete="off">
              <v-text-field
                label="Email"
                v-model="email"
              ></v-text-field>
            <br>
              <v-text-field
              password
                label="Password"
                type="password"
                v-model="password"
                autocomplete="new-password"
              ></v-text-field>
          </form>
          <br>
          <div class="error" v-html="error" />
          <br>
          <v-btn
            class="deep-orange darken-1"
            dark
            @click="login">
            Login
          </v-btn>
          <p>No tienes cuenta? Puedes registrarte <router-link to="/register">aquí</router-link></p>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import firebase from 'firebase'

export default {
  name:'login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    /*login () {
      this.$router.replace('dashboard/catalogos')
    }*/
    login: function() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          this.$router.replace('dashboard/catalogos')
        },
        function (err) {
          alert('Usuario o password incorrecto')
        }
      )
    }
  }
}
</script>