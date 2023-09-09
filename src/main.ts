import Vue from 'vue'

import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import '@/assets/styles/global.css'

Vue.config.productionTip = false
Vue.prototype.$url = 'https://jsonplaceholder.typicode.com'

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount('#app')
