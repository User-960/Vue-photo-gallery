<template >
  <v-container>
    <vPhoto v-for="photo in photos" :key="photo.id" :photo="photo"/>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import vPhoto from '@/components/screens/photo/v-Photo.vue'
import { IPhoto } from '@/interfaces/photo.interfaces'
import UsersService from '@/service/users-service'

const photosData: IPhoto[] = []

export default Vue.extend({
  components: {
    vPhoto
  },
  data: () => ({
    photos: photosData
  }),
  async mounted() {
    await UsersService.getUsers(this.$url)
    .then(res => this.photos = res)
    .then(() => this.showNumber(this.photos))
  },
  methods: {
    showNumber(array: IPhoto[]) {
      console.log(array.length)
    }
  }
})
</script>

<style lang="scss">
  
</style>