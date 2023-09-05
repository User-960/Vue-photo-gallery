<template >
  <v-container>
    <h2>
      {{ $store.state.globalTitle }}
    </h2>

    <vPhotoForm v-if='photosData.length < 21' @addPhoto='addPhoto'/>
    <div class='warningText' v-else>You cannot add more photos</div>

    <div 
      :style="{marginBottom: '30px', fontSize: '20px'}" 
      v-if="photosData.length > 0"
    >
      Total {{ photosData.length }} photos
    </div>

    <v-row v-if='$store.getters.GET_PHOTOS.length > 0'>
      <vPhoto
        @openPhoto='openPhoto' 
        v-for='photo in photosData'
        :key='photo.id' 
        :photo='photo'
        />
    </v-row>
    <div class='warningText' v-else>Фотографий нет</div>

    <vPhotoDialog :photo='currentPhoto ? currentPhoto : {}' v-model='isDialogVisible' />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import vPhoto from '@/components/screens/photo/vPhoto.vue'
import vPhotoForm from '@/components/screens/photo/vPhotoForm.vue'
import vPhotoDialog from '@/components/screens/photo/vPhotoDialog.vue'
import { IPhoto } from '@/interfaces/photo.interfaces'
import { EPhotoActions } from '@/store/modules/photo/actions'

let currentPhotoData: IPhoto | null = null

export default Vue.extend({
  name: 'PhotosPage',
  components: {
    vPhoto,
    vPhotoForm,
    vPhotoDialog
  },
  data: () => ({
    currentPhoto: currentPhotoData,
    isDialogVisible: false
  }),
  computed: {
    photosData(): IPhoto[] {
      return this.$store.getters.GET_PHOTOS
    }
  },
  mounted() {
    this.$store.dispatch(EPhotoActions.GET_PHOTOS_FROM_API)
  },
  methods: {
    addPhoto(photo: IPhoto) {
      this.$store.dispatch(EPhotoActions.ADD_NEW_PHOTO, photo)
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