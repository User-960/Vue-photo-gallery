import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import { RootState } from '@/interfaces/photo.interfaces'
import { photoModule } from '@/store/modules/photo/photoModule'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
	state: {
		globalTitle: 'Photo Gallery'
	},
	modules: {
		photoModule
	}
}

export default new Vuex.Store<RootState>(store)
