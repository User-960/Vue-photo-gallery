import { render } from '@testing-library/vue'

import vHome from './vHome.vue'

describe('test vHome component', () => {
	it('render Component', () => {
		const { debug } = render(vHome)

		debug()
	})
})
