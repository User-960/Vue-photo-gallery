<template>
  <v-container fluid>
    <v-app-bar
      color="orange"
      dark
    >
      <v-spacer></v-spacer>
      <v-btn outlined :class="'ml-3'">
        <router-link to="/" :class='$style.navLink'>Main</router-link>
      </v-btn>
      <v-btn outlined class="ml-3">
        <router-link to="/photos" :class='$style.navLink'>Photos</router-link>
      </v-btn>
    </v-app-bar>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'vNavBar',
    components: {}
  })
</script>

<style lang="scss" module>
  .navLink {
    color: #fff !important;
  }
</style>