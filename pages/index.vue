<template>
	<div class="index">
		<h1>Bienvenux</h1>
		<NuxtLink @click="create_room">Créer une partie</NuxtLink>
	</div>
</template>

<script>
import { ref as firestoreRef, set } from "firebase/database"

export default {
	data: ()=>{
		return {

		}
	},
	methods: {
    generate_code() {
			return Math.random().toString(36).toUpperCase().replace(/[0-9O]/g, '').substring(1,5)
    },
		create_room(){
			const rtdb = useRTDB()
			const router = useRouter()
			const code = this.generate_code()
			
			set(firestoreRef(rtdb, 'rooms/' + code), {
				state: 'settings', 
				colors: {
					body: [
						'#3A93AC',
						'#4ECDC4',
						'#89dF94',
						'#F9F871',
						'#FFCC00',
						'#F09819',
						'#FF6B6B',
						'#F58CDA',
						'#956CFF'
					],
					eye: [
						'#184BFF',
						'#FF3F15',
						'#85D700',
						'#7FAB00',
						'#65E2E2',
						'#CB851C',
						'#E9E4D7',
						'#1E9800',
						'#A619D7',
						'#FFA2FB',
						'#006C7A',
						'#222222'
					]
				}
			})
			router.push(`/room/${code}`) 
		}
  },
}
</script>

<style lang="sass" scoped>
.index
	display: flex
	flex-direction: column
	margin: 0 auto
	height: 100vh
	justify-content: center
	align-items: center

	h1
		color: #4444ff
		animation: glow 4s linear infinite
		font-size: 200px
		font-weight: 800
		letter-spacing: 20px
		text-shadow: 0px -5px #7777ff, 0px -10px #AAAAff, 0px -15px #DDDDff
		transition: 400ms
		transition-timing-function: ease-in-out
		cursor: default
		&:hover
			text-shadow: 0px -120px #AAAAff, 0px -240px #CCCCff, 0px -360px #EEEEff
			transform: translateY(120px)
	a 
		background: linear-gradient(to left, #ff8888, #ffff44, #88ff88)
		border: 5px solid purple
		border-radius: 100px
		color: purple
		width: max-content
		padding: 20px
		animation: glow 4s linear infinite
		font-size: 50px
		transition: 300ms
		cursor: pointer
		&:hover
			opacity: .6
			color: #000
			border-color: #000


@keyframes glow
	0%
		filter: hue-rotate(0deg)
	100%
		filter: hue-rotate(360deg)

</style>