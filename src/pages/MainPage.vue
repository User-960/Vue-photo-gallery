<template>
	<div>
		<vHome :titlePage="title" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

import vHome from '@/components/screens/home/vHome.vue'

export default Vue.extend({
	name: 'MainPage',
	data: () => ({
		title: 'Home Page'
	}),
	components: {
		vHome
	}
})
</script>

<style lang="scss"></style>
