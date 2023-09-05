import { GetterTree } from 'vuex'

import { PhotosState } from './types'
import { IPhoto, RootState } from '@/interfaces/photo.interfaces'

export enum EPhotoGetters {
	GET_PHOTOS = 'GET_PHOTOS',
	GET_DIALOG_VISIBLE = 'GET_DIALOG_VISIBLE',
	GET_CURRENT_PHOTO = 'GET_CURRENT_PHOTO'
}

export const getters: GetterTree<PhotosState, RootState> = {
	[EPhotoGetters.GET_PHOTOS](state): IPhoto[] {
		let newArray: IPhoto[] = []
		for (let i = 0; i < state.photos.length; i++) {
			newArray.push(state.photos[i])
		}
		return newArray
	},
	[EPhotoGetters.GET_DIALOG_VISIBLE]: state => state.isDialogVisible,
	[EPhotoGetters.GET_CURRENT_PHOTO]: state => state.currentPhoto
}
