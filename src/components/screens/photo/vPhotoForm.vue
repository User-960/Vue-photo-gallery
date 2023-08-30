<template >
  <v-container>
    <v-row class="d-flex">
      <v-text-field/>
      <v-file-input/>
      <v-btn>Add</v-btn>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'vPhotoForm'
})
</script>

<style lang="scss" module>
  
</style>