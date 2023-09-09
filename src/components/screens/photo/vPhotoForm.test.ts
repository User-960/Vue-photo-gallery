import { fireEvent, render, screen } from '@testing-library/vue'

import vPhotoForm from './vPhotoForm.vue'

describe('test vPhotoForm component', () => {
	it('click on button form', () => {
		// given / arrange

		// when / act
		render(vPhotoForm)
		const submitButton = screen.getByTestId('btnForm')

		// then / assert
		// fireEvent.click(submitButton)
		expect(submitButton).toBeTruthy()
	})
})
