import { ActionTree, Commit } from 'vuex'

import { EPhotoMutation } from './mutations'
import { PhotosState } from './types'
import { IPhoto, RootState } from '@/interfaces/photo.interfaces'
import UsersService from '@/service/users-service'

export enum EPhotoActions {
	GET_PHOTOS_FROM_API = 'GET_PHOTOS_FROM_API',
	ADD_NEW_PHOTO = 'ADD_NEW_PHOTO'
}

export const actions: ActionTree<PhotosState, RootState> = {
	[EPhotoActions.GET_PHOTOS_FROM_API]({ commit }: { commit: Commit }) {
		UsersService.getUsers('https://jsonplaceholder.typicode.com')
			.then((res: IPhoto[]) => commit(EPhotoMutation.SET_PHOTOS, res))
			.catch(error => {
				console.log(error)
				return error
			})
	},
	[EPhotoActions.ADD_NEW_PHOTO]({ commit }: { commit: Commit }, photo: IPhoto) {
		commit(EPhotoMutation.ADD_PHOTO, photo)
	}
}
