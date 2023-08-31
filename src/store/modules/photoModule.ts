import { Commit } from 'vuex'

import { IPhoto } from '@/interfaces/photo.interfaces'
import UsersService from '@/service/users-service'

interface StateRepo {
	photos: Array<IPhoto>
}

export default {
	state: {
		photos: [] as IPhoto[]
	},
	mutations: {
		setPhotos(state: StateRepo, photos: IPhoto[]) {
			state.photos = photos
		}
	},
	getters: {
		getAllPhotos(state: StateRepo) {
			let newArray: IPhoto[] = []

			for (let i = 0; i < state.photos.length; i++) {
				if (state.photos.length === 10) {
					newArray.push(state.photos[i])
				}
			}

			return newArray
		}
	},
	actions: {
		GET_PHOTOS_FROM_API({ commit }: { commit: Commit }) {
			UsersService.getUsers('https://jsonplaceholder.typicode.com')
				.then((res: IPhoto[]) => commit('setPhotos', res))
				.catch(error => {
					console.log(error)
					return error
				})
		}
	}
}
