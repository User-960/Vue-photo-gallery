import { render, screen } from '@testing-library/vue'

import vNavBar from './vNavBar.vue'

describe('test vNavBar component', () => {
	it('render component', () => {
		// given / arrange

		// when / act
		render(vNavBar)

		// then / assert
		screen.getByTestId('appBar')
	})

	it('render component with default classes', () => {
		// given / arrange
		const defaultClasses = 'logo'

		// when / act
		render(vNavBar)

		// then / assert
		expect(screen.getByTestId('logo').getAttribute('class')).toBe(
			defaultClasses
		)
	})
})
