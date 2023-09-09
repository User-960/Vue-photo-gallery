module.exports = {
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
	transform: {
		'^.+\\.js$': 'babel-jest',
		'^.+\\.ts?$': 'ts-jest',
		'^.+\\.vue$': '@vue/vue2-jest'
	}
}
