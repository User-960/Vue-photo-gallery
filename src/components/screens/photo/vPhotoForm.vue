<template >
  <v-container>
    <v-row class="d-flex">
      <v-text-field v-model='title' />
      <v-file-input v-model='img' />
      <v-btn @click='addPhoto'>Add</v-btn>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { IPhoto } from '@/interfaces/photo.interfaces'

export default Vue.extend({
  name: 'vPhotoForm',
  data: () => ({
    title: '',
    img: null
  }),
  methods: {
    addPhoto() {
      const reader = new FileReader()

      reader.onload = () => {
        let newPhoto: IPhoto = {
          id: Date.now(),
          title: this.title,
          url: reader.result
        }
        this.$emit('addPhoto', newPhoto)
      }
      
      if (this.img) {
        let newImg: Blob
        newImg = this.img
        reader.readAsDataURL(newImg)
      }
      
    }
  },
})
</script>

<style lang="scss" module>
  
</style>