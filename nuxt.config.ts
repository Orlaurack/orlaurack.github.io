
export default defineNuxtConfig({
	css: [
		`~/assets/sass/index.sass`,
		`~/assets/sass/transition.sass`,
	],
	imports: {
		dirs: [
			'composables',
			'composables/*/index.{ts,js,mjs,mts}',
			'composables/**'
		]
	},
	app: {
		pageTransition: {
			name: 'page',
			mode: 'out-in'
		},
		//baseURL: 'https://orlaurack.github.io/',
		head: {
			meta: [
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
			],			
		}
	},
	
})
