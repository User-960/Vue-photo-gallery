<template>
  <v-col cols="4">
    <v-card @click.left='openPhoto' :class="{ [$style.active]: isActive }">
      <v-card-title :class="$style.cardTitle">{{ photo.title }}</v-card-title>
      <v-card-text  :class="$style.cardText">
        <v-img :src='photo.url' width='200' height='200'/>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import { PropType }  from 'vue';
import Vue  from 'vue';
import { IPhoto } from '@/interfaces/photo.interfaces'
import { EPhotoMutation } from '@/store/modules/photo/mutations'

export default Vue.extend({
  name: 'vPhoto',
  data: () => ({
     isActive: true,
  }),
  props: {
    photo: {
      type: Object as PropType<IPhoto>,
      required: true
    }
  },
  methods: {
    openPhoto() {
      this.$store.commit(EPhotoMutation.SET_CURRENT_PHOTO, this.photo)
      this.$store.commit(EPhotoMutation.SHOW_DIALOG)
    }
  },
})
</script>

<style lang="scss" module>
.cardTitle {
  align-items: flex-start;
  min-height: 150px;
}

.cardText {
  min-height: 200px;
  text-align: center;
}

.active {
  max-width: 300px;
  width: 100%;
  padding: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
  background-color: rgba(185, 185, 185, 0.2);
}
}

  
</style>