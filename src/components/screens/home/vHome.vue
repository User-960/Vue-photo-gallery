<template >
  <div :class='$style.wrapper'>
    <h1>{{ titlePage }}</h1>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'vHome',
  props: {
    titlePage: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" module>
  .wrapper {
    width: 100%;
    text-align: center;
  }
</style>