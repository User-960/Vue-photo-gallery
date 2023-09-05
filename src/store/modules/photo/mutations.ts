import { MutationTree } from 'vuex'

import { PhotosState } from './types'
import { IPhoto } from '@/interfaces/photo.interfaces'

export enum EPhotoMutation {
	SET_PHOTOS = 'SET_PHOTOS',
	ADD_PHOTO = 'ADD_PHOTO',
	SHOW_DIALOG = 'SHOW_DIALOG',
	HIDE_DIALOG = 'HIDE_DIALOG',
	SET_CURRENT_PHOTO = 'SET_CURRENT_PHOTO'
}

export const mutations: MutationTree<PhotosState> = {
	[EPhotoMutation.SET_PHOTOS](state, photos: IPhoto[]) {
		if (photos) {
			state.photos = photos
		} else {
			state.photosEmptyText = 'Фотографий нет'
		}
	},
	[EPhotoMutation.ADD_PHOTO](state, photo: IPhoto) {
		state.photos.push(photo)
	},
	[EPhotoMutation.SHOW_DIALOG](state) {
		state.isDialogVisible = true
	},
	[EPhotoMutation.HIDE_DIALOG](state) {
		state.isDialogVisible = false
	},
	[EPhotoMutation.SET_CURRENT_PHOTO](state, photo: IPhoto) {
		state.currentPhoto = photo
	}
}
