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
        v-for='photo in photosData'
        :key='photo.id' 
        :photo='photo'
        />
    </v-row>
    <div class='warningText' v-else>Фотографий нет</div>

    <vPhotoDialog />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import vPhoto from '@/components/screens/photo/vPhoto.vue'
import vPhotoForm from '@/components/screens/photo/vPhotoForm.vue'
import vPhotoDialog from '@/components/screens/photo/vPhotoDialog.vue'
import { IPhoto } from '@/interfaces/photo.interfaces'
import { EPhotoActions } from '@/store/modules/photo/actions'
import { mapActions } from 'vuex'

export default Vue.extend({
  name: 'PhotosPage',
  components: {
    vPhoto,
    vPhotoForm,
    vPhotoDialog
  },
  data: () => ({}),
  computed: {
    photosData(): IPhoto[] {
      return this.$store.getters.GET_PHOTOS
    }
  },
  mounted() {
    this.GET_PHOTOS_FROM_API()
  },
  methods: {
    ...mapActions([EPhotoActions.GET_PHOTOS_FROM_API]),
    addPhoto(photo: IPhoto) {
      this.$store.dispatch(EPhotoActions.ADD_NEW_PHOTO, photo)
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