import { render, screen } from '@testing-library/vue'

import vHome from './vHome.vue'

describe('test vHome component', () => {
	it('render Component', () => {
		// given / arrange
		const titlePage: string = 'Home Page'
		const options = {
			props: { titlePage }
		}

		// when / act
		render(vHome, options)

		// then / assert
		screen.getByText('Home Page')
	})
})
