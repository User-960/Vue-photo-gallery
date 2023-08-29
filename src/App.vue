<template>
  <v-app>
    <NavBar/>
    <RouterView/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from '@/components/ui/nav-bar/NavBar.vue'
import { RouterView} from 'vue-router'

export default Vue.extend({
  name: 'App',
  components: {
    NavBar,
    RouterView
}
});
</script>
