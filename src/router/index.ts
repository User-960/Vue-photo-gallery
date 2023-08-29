import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import MainPage from '@/pages/MainPage.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'home',
		component: MainPage
	},
	{
		path: '/photos',
		name: 'photos',
		component: () => import('../pages/PhotosPage.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
