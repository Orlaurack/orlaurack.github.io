<template>
	<div class="controller-container" :class="{myTurn}" :style="{background: color}" @touchstart="tripleTouch">
		<ControllerCross v-if="controllerType == 'cross'" @changeDirection="cross"/>
		<ControllerJoystick v-else-if="controllerType == 'joystick'" @changeDirection="joystick"/>
		<ControllerSign v-else-if="controllerType == 'sign'" @select="sign" :myTurn="myTurn"/>
		<ControllerLoader v-else/>
	</div>
</template>

<script>
import { ref as firestoreRef, set, get, onValue } from "firebase/database"

export default {
	data: ()=>{
		return {
			color: '#999999',
			myTurn: false,
			controllerType: 'load',
			touchCount: 0
		}
	},
	methods:{
		cross(move){
			const rtdb = useRTDB() 
			const route = useRoute()
			set(firestoreRef(rtdb, `rooms/${route.params.code}/players/${route.params.slug}/controller/cross`), {[move.direction]: move.value})			
		},
		joystick(move){
			const rtdb = useRTDB() 
			const route = useRoute()
			set(firestoreRef(rtdb, `rooms/${route.params.code}/players/${route.params.slug}/controller/joystick`), move)
		},
		sign(cell){
			const rtdb = useRTDB() 
			const route = useRoute()
			set(firestoreRef(rtdb, `rooms/${route.params.code}/players/${route.params.slug}/controller/sign/action`), cell)
		},
		fullScreen(){
			const elem = document.documentElement
			if (elem.requestFullscreen) {
				elem.requestFullscreen();
			} else if (elem.webkitRequestFullscreen) { // Safari //
				elem.webkitRequestFullscreen();
			} else if (elem.msRequestFullscreen) { // IE11 //
				elem.msRequestFullscreen();
			}
		},
		tripleTouch(){
			this.touchCount += 1
			setTimeout(() => this.touchCount = 0, 700)
		  if (this.touchCount === 3) {
		    this.touchCount = 0
				this.fullScreen()
		  }
		}
	},
	mounted: async function(){
	
		const rtdb = useRTDB() 
		const route = useRoute()

		const avatarSnapshot = await get(firestoreRef(rtdb, `rooms/${route.params.code}/players/${route.params.slug}/avatar`))
		if(avatarSnapshot.exists()){
			const avatar = avatarSnapshot.val()
			this.color = avatar.body.color
		}

		const controllerSnapshot = await get(firestoreRef(rtdb, `rooms/${route.params.code}/controller`))
		if(controllerSnapshot.exists()){
			const controller = controllerSnapshot.val()
			if(this.controllerType != controller.type){
				set(firestoreRef(rtdb, `rooms/${route.params.code}/players/${route.params.slug}/controller/${this.controllerType}`), {})
				
			}
			this.controllerType = controller.type
			this.myTurn = (controller.turn == null || controller.turn == route.params.slug)
		}
		
		
		onValue(firestoreRef(rtdb, `rooms/${route.params.code}/controller`), (snapshot) => {
			if(snapshot.exists()){
				const controller = snapshot.val()
				this.controllerType = controller.type
				this.myTurn = (controller.turn == route.params.slug);
			}
		})		
	}
}
</script>

<style lang="sass">
.controller-container
	position: absolute
	width: calc(100% - 0px)
	height: calc(100% - 0px)
	transition: 500ms filter
	//filter: grayscale(80%) brightness(80%)	
	&.myTurn
		animation: glow 1000ms infinite ease-in-out
		filter: grayscale(0%) brightness(100%)	

@keyframes glow 
	0%
		box-shadow: inset 0 0 100px var(--turn-color)
	50%
		box-shadow: inset 0 0 0px var(--turn-color)
	100%
		box-shadow: inset 0 0 100px var(--turn-color)
</style>