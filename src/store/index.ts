import Vue from 'vue'
import Vuex from 'vuex'

import photoModule from '@/store/modules/photoModule'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		photoModule
	}
})
