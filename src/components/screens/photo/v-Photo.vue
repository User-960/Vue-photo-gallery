<template>
  <div>
    {{ photo.id + ' ' + photo.title }}
  </div>
</template>

<script lang="ts">
import { PropType }  from 'vue';
import {IPhoto} from '@/interfaces/photo.interfaces'

export default {
  props: {
    photo: {
      type: Object as PropType<IPhoto>,
      required: true
    }
  }
}
</script>

<style lang="scss">
  
</style>