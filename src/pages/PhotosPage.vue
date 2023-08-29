<template >
  <v-container>
    <vPhoto v-for="photo in photos" :key="photo.id" :photo="photo"/>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import vPhoto from '@/components/screens/photo/v-Photo.vue'
import {IPhoto} from '@/interfaces/photo.interfaces'

const photosData: IPhoto[] = [
  {id: 1, title: 'Photo 1'},
  {id: 2, title: 'Photo 2'},
  {id: 3, title: 'Photo 3'},
  {id: 4, title: 'Photo 4'}
]

export default Vue.extend({
  data: () => ({
    photos: photosData
  }),
  components: {
    vPhoto
  }
})
</script>

<style lang="scss">
  
</style>