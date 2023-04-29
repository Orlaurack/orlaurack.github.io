<template>
	<div class="win-menu" :class="{win}">
		<h1>WIN !!!!!!</h1>
		
		<div class="btn" @click="closeGame">Quit game</div>
	</div>
</template>

<script>
import { ref as firestoreRef, set } from "firebase/database"

export default {
	props: ['win'],
	methods: {
		closeGame(){
			const rtdb = useRTDB() 
			const route = useRoute()
			set(firestoreRef(rtdb, `rooms/${route.params.code}/state`), 'player_ready')
		}
	}
}
</script>

<style lang="sass" scoped>
.win-menu
	pointer-events: none
	position: absolute
	top:0
	left:0
	z-index: 200
	width: 100%
	height: 100%
	transition: 1000ms
	color: transparent
	display: flex
	flex-direction: column
	align-items: center
	h1
		color: transparent
		transition: 1000ms
		flex: 1
		text-align: center
		font-size: 200px
		animation: glow 3s linear infinite, scale 2s linear infinite, rotate 1s linear infinite
	&.win
		pointer-events: all
		background: #fff3
		backdrop-filter: blur(15px)
		h1
			color: #ff8888

		.btn
			display: inline-block
			border: 1px solid white
			border-radius: 10px
			color: white
			padding: 10px 
			cursor: pointer
			margin-bottom: 100px

@keyframes glow
	0%
		filter: hue-rotate(0deg)
	100%
		filter: hue-rotate(360deg)
@keyframes rotate
	0%
		transform: scale(120%) 
	50%
		transform: scale(90%) 
	100%
		transform: scale(120%) 


</style>