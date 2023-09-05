import { MutationTree } from 'vuex'

import { PhotosState } from './types'
import { IPhoto } from '@/interfaces/photo.interfaces'

export enum EPhotoMutation {
	SET_PHOTOS = 'SET_PHOTOS',
	ADD_PHOTO = 'ADD_PHOTO'
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
	}
}
