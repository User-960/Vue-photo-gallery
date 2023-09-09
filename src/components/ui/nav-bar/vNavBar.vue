<template>
	<v-container fluid>
		<v-app-bar color="orange" dark data-testid="appBar">
			<div class="logo" data-testid="logo"></div>
			<v-spacer></v-spacer>
			<!-- <v-btn outlined class="ml-3">
				<router-link to="/" :class="$style.navLink">Main</router-link>
			</v-btn> -->
			<button :class="styles.barBtn">
				<router-link to="/" :class="styles.navLink">Main</router-link>
			</button>
			<!-- <v-btn outlined class="ml-3">
				<router-link to="/photos" :class="$style.navLink">Photos</router-link>
			</v-btn> -->
			<button :class="styles.barBtn">
				<router-link to="/photos" :class="styles.navLink">Photos</router-link>
			</button>
		</v-app-bar>
	</v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name: 'vNavBar',
	components: {}
})
</script>

<style lang="scss" module="styles">
.navLink {
	color: #fff !important;
}

.barBtn {
	margin-left: 5px;
	padding: 10px 20px;
	color: #fff;
	border: 1px solid #fff;
	border-radius: 5px;
	transition: all 0.2s ease-in-out;

	&:hover {
		background-color: #d2d2d2;
	}
}
</style>
