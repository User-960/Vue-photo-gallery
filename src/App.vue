<template>
  <v-app>
    <vNavBar/>
    <RouterView/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import vNavBar from '@/components/ui/nav-bar/vNavBar.vue'
import { RouterView } from 'vue-router'

export default Vue.extend({
  name: 'App',
  components: {
    vNavBar,
    RouterView
  }
});
</script>
