<template>
	<v-container>
		<v-row class="d-flex">
			<v-text-field v-model="title" name="title" id="photo-input" />
			<v-file-input v-model="img" />
			<button :class="styles.btnForm" @click="addPhoto" data-testid="btnForm">
				<span>Add</span>
			</button>
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
	}
})
</script>

<style lang="scss" module="styles">
.btnForm {
	text-align: center;
	& span {
		display: inline-block;
		border-radius: 5px;
		padding: 10px 20px;
		font-size: 18px;
		text-decoration: none;
		margin: 0px 10px;
		color: white;
		background: #55acee;
		box-shadow: 0 5px 0 #3c93d5;
		transition: 0.3s;
		&:hover {
			background: #6fc6ff;
		}
	}
}
</style>
