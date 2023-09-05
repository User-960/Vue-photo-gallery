import { GetterTree } from 'vuex'

import { PhotosState } from './types'
import { IPhoto, RootState } from '@/interfaces/photo.interfaces'

export const getters: GetterTree<PhotosState, RootState> = {
	GET_PHOTOS(state): IPhoto[] {
		let newArray: IPhoto[] = []
		for (let i = 0; i < state.photos.length; i++) {
			newArray.push(state.photos[i])
		}
		return newArray
	}
}
