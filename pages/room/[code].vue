<template>
	<div>
		<GameJoin v-if="state=='settings'" :code="code" :players="players"/>
		<GameHub v-else-if="state=='player_ready'" :code="code" :players="players"/>
		<GameSign v-else-if="state=='play_sign'" :code="code" :players="players" :size="8"/>
	</div>
</template>

<script>
import { ref as firestoreRef, set, onValue } from "firebase/database"

const players = ref(null)

export default {
	data() {
    return {
			players: [],
			state: null,
			code: null
		}
	},
	mounted: function(){
		const rtdb = useRTDB() 
		const route = useRoute() 

		this.code = route.params.code

		onValue(firestoreRef(rtdb, `rooms/${this.code}/players`), (snapshot) => {
			this.players = snapshot.val()			
		})
		onValue(firestoreRef(rtdb, `rooms/${this.code}/state`), (snapshot) => {
			this.state = snapshot.val()
		})
	}
}
</script>

<style lang="sass" scoped>
.players
	display: flex
	flex-direction: row

</style>