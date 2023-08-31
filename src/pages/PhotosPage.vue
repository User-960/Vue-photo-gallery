<template >
  <v-container>
    <vPhotoForm v-if='photos.length < 21' @addPhoto='addPhoto'/>
    <div class='warningText' v-else>Вы не можете добавить больше фотографий</div>

    <div 
      :style="{marginBottom: '30px', fontSize: '20px'}" 
      v-if="photos.length !== 0"
    >
      Всего {{ photos.length }} фотографий
    </div>

    <v-row>
      <vPhoto @openPhoto='openPhoto' v-for="photo in photos" :key="photo.id" :photo="photo"/>
    </v-row>

    <vPhotoDialog :photo='currentPhoto ? currentPhoto : {}' v-model='isDialogVisible' />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import vPhoto from '@/components/screens/photo/vPhoto.vue'
import vPhotoForm from '@/components/screens/photo/vPhotoForm.vue'
import vPhotoDialog from '@/components/screens/photo/vPhotoDialog.vue'
import { IPhoto } from '@/interfaces/photo.interfaces'
import UsersService from '@/service/users-service'

let photosData: IPhoto[] = []
let currentPhotoData: IPhoto | null = null

export default Vue.extend({
  components: {
    vPhoto,
    vPhotoForm,
    vPhotoDialog
  },
  data: () => ({
    photos: photosData,
    currentPhoto: currentPhotoData,
    isDialogVisible: false
  }),
  async mounted() {
    await UsersService.getUsers(this.$url)
    .then(res => this.photos = res)
  },
  methods: {
    addPhoto(photo: IPhoto) {
      this.photos.push(photo)
    },
    openPhoto(photo: IPhoto) {
      if (photo) {
        this.currentPhoto = photo
         this.isDialogVisible = true
      }
    }
  }
})
</script>

<style lang="scss">
  .warningText {
    margin-bottom: 20px;
    font-size: 20px;
  }
</style>