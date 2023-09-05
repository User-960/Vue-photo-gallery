import { Module } from 'vuex'

import { actions } from './actions'
import { getters } from './getters'
import { mutations } from './mutations'
import { PhotosState } from './types'
import { RootState } from '@/interfaces/photo.interfaces'

const state: PhotosState = {
	photos: [],
	photosEmptyText: ''
}

export const photoModule: Module<PhotosState, RootState> = {
	state,
	mutations,
	getters,
	actions
}
