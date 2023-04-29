<template>
	<div class="join-form">
		<h1>Salon {{ $route.params.code }}</h1>
		<label @click="focus_name" id="input-name">Nom : <span contenteditable="true" name="name" id="name" ref="name"></span></label>
		<input id="join-btn" @click="joinRoom" type="submit" value="Rejoindre le salon">
	</div>
</template>

<script>
import { ref as firestoreRef, get, set } from "firebase/database"

export default {
	methods: {
		cleanString(string) {
			return string.replace(/[^A-Za-z0-9\s\u00C0-\u017F]/g, '').trim()
		},
		slugString(string) {
			return string.normalize( 'NFD' ).replace( /[\u0300-\u036f]/g, '' ).toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-')
		},
		joinRoom() {
			const name = this.cleanString(this.$refs.name.innerText)
			if(name.length){
				const rtdb = useRTDB()
				const route = useRoute()
				const slug = this.slugString(name)
				const playerRef = firestoreRef(rtdb, `rooms/${route.params.code}/players/${slug}`)
				get(playerRef).then((snapshot)=>{
					if(!snapshot.exists() || confirm("ce nom est déja utilisé, essayez vous de retourner dans le salon ?")){
						set(playerRef, {name: name})
						const router = useRouter()
						router.push(`player-${slug}/settings`)
					}
				})
			}
		},
		focus_name(){
			this.$refs.name.focus()
		}
	},
	mounted(){
		this.focus_name()
	}
}
</script>

<style lang="sass" scoped>
.join-form
	display: flex
	flex-direction: column
	margin: 20px
	gap:40px
	h1
		text-align: center
	#input-name
		display: flex
		gap: 10px
		height: 30px
		align-items: center
		justify-content: center
		color: #aaa
		font-size: 24px
		span#name
			color: #000
			height: 30px
			min-width: 10px
			border: none
			outline: #0002 3px double
			padding: 10px 12px
			&:focus
				outline-color: black
	#join-btn
		padding: 20px
		min-width: 50%
		margin: 0 auto 
		border: 0px solid #0004
		font-family: "Kanit"
		font-weight: 900
		font-size: 24px
		border-radius: 100px
		color: #6666dd
		cursor: pointer
		background: linear-gradient(to right, #ff6666, #dddd66, #66ff66)
		animation: glow linear infinite 5000ms
		transition: 200ms
		&:hover, &:active
			transform: scale(120%)
		

@keyframes glow
	0%
		filter: hue-rotate(0deg)
	100%
		filter: hue-rotate(360deg)
</style>