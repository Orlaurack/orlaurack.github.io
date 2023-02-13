<template>
	<div class="sign">
		<GameSignSettings :settings="settings"/>
		<div class="players">
			<div class="player" v-for="(player, name) in players" :key="name" >
				<PlayerAvatar :avatar="player.avatar" small :active="name == turn" />
			</div>
		</div>
		<div class="grid">
			<div v-for="(row, y)  of grid" :key="y" class="row">
				<div v-for="(cell, x)  of row" :key="x" class="cell">
					<GameSignCell :color="cell.color" :sign="cell.sign" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref as firestoreRef, get, onValue, set } from "firebase/database"

export default {
	props: ['players', 'size'],
	data () {
		return {
			grid: [],
			signs: [],
			colors: [],
			turn: null,
			settings: {
				handSize: 3,
				difficulty: 0,
			},
			win: false
		}
	},
	async mounted () {
		
		const rtdb = useRTDB() 
		const route = useRoute()

		const snapshot = await get(firestoreRef(rtdb, `rooms/${route.params.code}/game/sign`))
		if(snapshot.exists()){
			const sign = snapshot.val()
			this.grid = sign.grid
			this.colors = sign.colors
			this.signs = sign.signs			
			this.main_plotline()
		}else{
			for (let index = 0; index < this.size; index++) {
				this.grid.push(Array(this.size).fill({sign: '', color: ''}))
			}

			this.signs = ['hearth', 'star', 'moon', 'sun', 'triangle', 'circle', 'square']
			this.colors = ['#ff4444', '#ffff44', '#44ff44', '#44ffff', '#4444ff', '#ff44ff', '#666666', '#dddddd']
			set(firestoreRef(rtdb, `rooms/${route.params.code}/game/sign`), {grid: this.grid, signs: this.signs, colors: this.colors})
			
			for(const player of Object.keys(this.players)){
				let signs = Array.from({length: this.settings.handSize}, this.get_random_sign);
				set(firestoreRef(rtdb, `rooms/${route.params.code}/players/${player}/controller/sign/hand`), signs)
			}

			this.main_plotline()
			set(firestoreRef(rtdb, `rooms/${route.params.code}/controller`), {type: 'sign', turn: Object.keys(this.players)[0]})
		}
		
		onValue(firestoreRef(rtdb, `rooms/${route.params.code}/game/sign/grid`), (snapshot)=>{
			if(snapshot.exists()){
				this.grid = snapshot.val()
			}
		})
	},
	methods:{
		async main_plotline(){
			const rtdb = useRTDB() 
			const route = useRoute()

			onValue(firestoreRef(rtdb, `rooms/${route.params.code}/controller/turn`), (snapshot)=>{
				if(snapshot.exists()){
					this.turn = snapshot.val()
				}
			})

			this.read_players()
			
		},
		read_players(){
			const rtdb = useRTDB() 
			const route = useRoute()
			
			for(const player of Object.keys(this.players)){
				onValue(firestoreRef(rtdb, `rooms/${route.params.code}/players/${player}/controller/sign/action`), async (snapshot) => {
					if(snapshot.exists() && player == this.turn){
						const action = snapshot.val()
						console.log(`${player} a joué`)
						
						await this.place_sign(action, player)

						this.next_turn(player)
					}
				})
			}
		},
		async place_sign(action, player){
			const rtdb = useRTDB() 
			const route = useRoute()
			const snapshot = await get(firestoreRef(rtdb, `rooms/${route.params.code}/players/${player}/controller/sign/hand/${action.index}`))

			if(snapshot.exists()){
				const sign = snapshot.val()
				
				console.log(`${player} as mis son ${sign.sign} ${sign.color} sur la case ${action.y} : ${action.x}`)
				
				set(firestoreRef(rtdb, `rooms/${route.params.code}/game/sign/grid/${action.y}/${action.x}`), sign)
				set(firestoreRef(rtdb, `rooms/${route.params.code}/players/${player}/controller/sign/action`), {})
				set(firestoreRef(rtdb, `rooms/${route.params.code}/players/${player}/controller/sign/hand/${action.index}`), this.get_random_sign())

				console.log(`il/elle as à maintenant une nouvelle pièce`)
			}
		},
		next_turn(turn){
			const rtdb = useRTDB() 
			const route = useRoute()
			const players = Object.keys(this.players)
			const new_player = (players.indexOf(turn) === players.length - 1) ? players[0] : players[players.indexOf(turn) + 1]
			console.log(`c'est mainteanant à ${new_player} de jouer`)
			console.log(players, turn)

			set(firestoreRef(rtdb, `rooms/${route.params.code}/controller/turn`), new_player)
		},
		get_random_sign(){
			return {sign: this.signs[Math.floor(Math.random()*this.signs.length)], color: this.colors[Math.floor(Math.random()*this.colors.length)]}
		}
	}
}
</script>

<style lang="sass" scoped>
.sign
	position: absolute
	width: 100%
	height: 100%
	background: #333
	display: flex
	justify-content: center
	align-items: center
	.players
		position: absolute
		top: 0
		left: 0
		width: 100%
		height: 100%
		display: flex
		flex-wrap: wrap
		.player
			display: flex
			flex: 50%
			align-items: center

			&:nth-child(even)
				justify-content: end
			&:nth-child(odd)
				justify-content: start

	.grid
		display: flex
		flex-direction: row
		max-width: calc(100vh - 150px)
		max-height: calc(100vw - 150px)
		width: calc(100vw - 150px)
		height: calc(100vh - 150px)
		.row
			display: flex
			flex: 1
			flex-direction: column
			.cell
				flex: 1
</style>