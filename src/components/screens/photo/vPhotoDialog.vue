<template >
  <v-dialog
   v-model='isDialogVisible'
   max-width="600"
  >
   <v-card>
    <v-card-title>{{ photo?.title }}</v-card-title>
    <v-card-text>
      <v-img :src='photo?.url' width='200' height='200'/>
    </v-card-text>
   </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { IPhoto } from '@/interfaces/photo.interfaces'
import Vue, { PropType } from 'vue'

export default Vue.extend({
  name: 'vPhotoDialog',
  data: () => ({}),
  props: {
    photo: {
      type: Object as PropType<IPhoto | null>,
      required: true
    },
    isDialogVisible: {
      type: Boolean,
      required: false
    }
  }
})
</script>

<style lang="scss">
  
</style>