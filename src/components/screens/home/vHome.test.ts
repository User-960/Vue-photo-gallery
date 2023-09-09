import { render, screen } from '@testing-library/vue'

import vHome from './vHome.vue'

describe('test vHome component', () => {
	it('render component with title', () => {
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
