<template >
  <v-container>
    <vPhotoForm @addPhoto='addPhoto'/>

    <div 
      :style="{marginBottom: '30px', fontSize: '20px'}" 
      v-if="photos.length !== 0"
    >
      Всего {{ photos.length }} фотографий
    </div>

    <v-row>
      <vPhoto v-for="photo in photos" :key="photo.id" :photo="photo"/>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import vPhoto from '@/components/screens/photo/vPhoto.vue'
import vPhotoForm from '@/components/screens/photo/vPhotoForm.vue'
import { IPhoto } from '@/interfaces/photo.interfaces'
import UsersService from '@/service/users-service'

const photosData: IPhoto[] = []

export default Vue.extend({
  components: {
    vPhoto,
    vPhotoForm
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
    },
    addPhoto(photo: IPhoto) {
      this.photos.push(photo)
    }
  }
})
</script>

<style lang="scss">
  
</style>