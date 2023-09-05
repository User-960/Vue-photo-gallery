<template >
  <v-dialog
   v-model='$store.getters.GET_DIALOG_VISIBLE'
   max-width="600"
   @click:outside="$store.commit('HIDE_DIALOG')"
  >
   <v-card>
    <v-card-title>{{ fullTitle }}</v-card-title>
    <v-card-text>
      <v-img :src='$store.getters.GET_CURRENT_PHOTO?.url' width='200' height='200'/>
    </v-card-text>
   </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'vPhotoDialog',
  computed: {
    fullTitle(): string {
      return `Name of photo - ${this.$store.getters.GET_CURRENT_PHOTO?.title}`
    }
  }
})
</script>

<style lang="scss">
  
</style>