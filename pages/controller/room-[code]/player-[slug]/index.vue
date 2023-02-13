<template>
	<div class="controller-container" :style="{background: color}" @touchstart="tripleTouch">
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
		resetTouch(){
			setTimeout(function(){
		    this.touchCount = 0
		  }, 1000)
		},
		tripleTouch(){
			this.resetTouch()
			this.touchCount += 1
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
	width: 100%
	height: 100%


</style>