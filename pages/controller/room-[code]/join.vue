<template>
	<div class="join-form">
		<h1>Salon {{ $route.params.code }}</h1>
		<label id="input-name">Nom <input type="text" name="name" ref="name"></label>
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
			const name = this.cleanString(this.$refs.name.value)
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
		}
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
		input
			height: 30px
			flex: 1
			border: none
			border-bottom: #aaa 1px solid
			font-size: 20px
			&:focus
				outline: none
	#join-btn
		height: 40px
</style>