import Vue from 'vue'

import MainPage from '@/pages/MainPage.vue'

describe('MainPage.test.ts', () => {
	let cmp
	let vm: any

	beforeEach(() => {
		// Create a copy of the original component
		cmp = Vue.extend(MainPage)
		vm = new cmp({
			// Replace data value with this fake data
			data: { title: 'Home Page' }
		}).$mount() // Instances and mounts the component
	})

	it('equals title of page to Home Page', () => {
		expect(vm.title).toEqual('Home Page')
	})
})
