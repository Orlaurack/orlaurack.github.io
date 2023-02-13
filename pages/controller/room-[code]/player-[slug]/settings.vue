<template>
	<div class="player-settings">
		<h1 v-html="playerName"></h1>
		
		<h2>Avatar</h2>
		<PlayerAvatar class="avatar" :avatar="avatar"/>
		<div class="previous" @click="previousModel">◄</div>
		<div class="next" @click="nextModel">►</div>
		<div class="colors">			
			<ColorPalette @change="changeBodyColor" :colors="bodyColors"></ColorPalette>
			<ColorPalette @change="changeEyeColor" :colors="eyeColors"></ColorPalette>
		</div>

		<LongBtn @click="start()"/>
	</div>
</template>

<script>
import { ref as firestoreRef, get, onValue, set } from "firebase/database"


export default {
	data (){
		return {
			bodyColors: [],
			eyeColors: [],
			playerName: '<span class="loader"></span>',
			avatar: null,
			models: ['default', 'red', 'cat', 'mario64', 'dark', 'naruto', 'kawaii', 'wheatley', 'dragon']
		}
	},
	methods: {
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
		changeBodyColor(color){
			this.avatar.body.color = color
			
			this.update()
		},
		changeEyeColor(color){
			this.avatar.eye.color = color
			this.update()
		},
		previousModel(){
			const index = this.models.indexOf(this.avatar.eye.model)
			this.avatar.eye.model = this.models[index>0?index-1:this.models.length-1]
			this.update()
		},
		nextModel(){
			const index = this.models.indexOf(this.avatar.eye.model)
			this.avatar.eye.model = this.models[index<this.models.length-1?index+1:0]
			this.update()
		},
		update(){
			const rtdb = useRTDB() 
			const route = useRoute() 

			set(firestoreRef(rtdb, `rooms/${route.params.code}/players/${route.params.slug}/avatar`), this.avatar)
		},
		start(){
			const rtdb = useRTDB() 
			const route = useRoute()
			
			set(firestoreRef(rtdb, `rooms/${route.params.code}/state`), 'player_ready')
		}
	},
	mounted: async function(){
		const rtdb = useRTDB() 
		const route = useRoute()
		this.fullScreen()

		onValue(firestoreRef(rtdb, `rooms/${route.params.code}/state`), (snapshot) => {
			if(snapshot.val() == 'player_ready'){
				const router = useRouter()
				router.push(`./`)
			}
		})		
		
		const player = await get(firestoreRef(rtdb, `rooms/${route.params.code}/players/${route.params.slug}`))
		const colors = await get(firestoreRef(rtdb, `rooms/${route.params.code}/colors`))
		
		this.playerName = player.val().name
		this.bodyColors = colors.val().body
		this.eyeColors = colors.val().eye

		onValue(firestoreRef(rtdb, `rooms/${route.params.code}`), (snapshot) => {
			const room = snapshot.val()
			const playersColors = Object.values(room.players).map(player=>player.avatar?.body.color)
			
			this.bodyColors = room.colors.body.filter(color=>!playersColors.includes(color))
		})
		const avatar = await get(firestoreRef(rtdb, `rooms/${route.params.code}/players/${route.params.slug}/avatar`))
		if (avatar.exists()) {
			this.avatar = avatar.val()
		} else {
			this.avatar = {body: {color: this.bodyColors[0]}, eye: {color: this.eyeColors[0], model: 'default'}}
			set(firestoreRef(rtdb, `rooms/${route.params.code}/players/${route.params.slug}/avatar`), this.avatar)
		}
	},
	computed: {
	}
}
</script>

<style lang="sass">
.player-settings
	text-align: center
	witdh: 100%
	.avatar
		margin: 0 auto
		width: fit-content
.loader
	border: 4px solid #000
	border-radius: 50%
	border-top-color: transparent
	width: 27.6px
	height: 27.6px
	animation: spin 300ms linear infinite
	display: block
	margin: 0 auto

.previous,.next
	position: absolute
	margin-top: -180px
	font-size: 50px
	cursor: pointer
.next
	right: 0

.colors
	display: flex
	flex-direction: column
	gap: 30px
@keyframes spin 
	0% 
		transform: rotate(0deg)
	100% 
		transform: rotate(360deg)

</style>