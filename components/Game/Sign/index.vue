<template>
	<div class="sign">
		<div class="score">
			{{ score }}
			<div class="append" v-if="score_append!=''">{{ score_append }}</div>
		</div>
		<GameSignSettings :settings="settings"/>
		<GameSignWin :win="win"/>
		<GameSignLoose :loose="loose"/>
		<div class="players">
			<div class="player" v-for="(player, name) in players" :key="name" >
				<PlayerAvatar :avatar="player.avatar" small :active="name == turn" />
			</div>
		</div>
		<div class="grid">
			<div v-for="(row, y)  of grid" :key="y" class="row">
				<div v-for="(cell, x)  of row" :key="x" class="cell">
					<GameSignCell :validated="cell.validated" :withBg="true" :color="cell.color" :sign="cell.sign" />
				</div>
			</div>
		</div>
		<div style="display: flex; flex-direction: column; gap: 20px; cursor:pointer; display: none">
			<div v-for="(sound, s) of ['place-sign', 'complete-row', 'win', 'lose','test1', 'test2', 'test3','test4', 'test5', 'test6','test7', 'test8', 'test9']" :key="s" @click="play_sound(sound)">{{sound}}</div>
		</div>
	</div>
</template>

<script>
import { ref as firestoreRef, get, onValue, set } from "firebase/database"
const joker_color = '#fff'
export default {
	props: ['players', 'size'],
	data () {
		return {
			grid: [],
			ssstest: true,
			turn: null,
			playing: true,
			sound_timout: true,
			score: 0,
			score_append: '',
			settings: {
				handSize: 3,
				//difficulty: 0,
				signs: ['hearth', 'star', 'moon', 'sun', 'triangle', 'circle', 'square'],
 				colors: ['#ff4444', '#ffff44', '#44ff44', '#44ffff', '#4444ff', '#ff44ff', '#666666', '#dddddd'],
				hearth: 3,  // skip count
				trashMode: 0, // 0: 'selected', 1: 'all', 2: 'choice'
				playerHearth: 3,
				playerScore: false,
				chanceEraser: 10/100,
				chanceJoker: 5/100,
				mapSize: 8,
				placeScore: 10, 
				rowScore: 100,
				completeScore: 1000,
				remplace_mode: false
			},
			audios:{
				placeSign: null,
				loose: null,
				win: null,
				completeRow: null
			},
			win: false,
			loose: false,
			gridEmpty: true
		}
	},
	async mounted () {
		
		const rtdb = useRTDB() 
		const route = useRoute()

		const snapshot = await get(firestoreRef(rtdb, `rooms/${route.params.code}/game/sign`))
		if(snapshot.exists()){
			const sign = snapshot.val()
			this.grid = sign.grid
			this.settings.colors = sign.colors
			this.settings.signs = sign.signs			
			this.score = sign.score
			this.main_plotline()
		}else{
			for (let index = 0; index < this.size; index++) {
				this.grid.push(Array(this.size).fill({sign: '', color: ''}))
			}

			set(firestoreRef(rtdb, `rooms/${route.params.code}/game/sign`), {state: true, grid: this.grid, signs: this.settings.signs, colors: this.settings.colors, score: 0, grid_empty: true, win: false, loose: false, remplace_mode: this.settings.remplace_mode, max_hearth: this.settings.hearth})
			
			for(const player of Object.keys(this.players)){
				let signs = Array.from({length: this.settings.handSize}, this.get_random_sign);
				set(firestoreRef(rtdb, `rooms/${route.params.code}/players/${player}/controller/sign/hand`), signs)
				set(firestoreRef(rtdb, `rooms/${route.params.code}/players/${player}/controller/sign/hearth`), this.settings.hearth)
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
	unmounted(){

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
			onValue(firestoreRef(rtdb, `rooms/${route.params.code}/game/sign/status`), (snapshot)=>{
				if(snapshot.exists()){
					this.ssstest = snapshot.val()
				}
			})
			onValue(firestoreRef(rtdb, `rooms/${route.params.code}/game/sign/grid_empty`), (snapshot)=>{
				if(snapshot.exists()){
					this.gridEmpty = snapshot.val()
				}
			})

			this.read_players()
			
		},
		read_players(){
			const rtdb = useRTDB() 
			const route = useRoute()
			
			for(const player of Object.keys(this.players)){
				onValue(firestoreRef(rtdb, `rooms/${route.params.code}/players/${player}/controller/sign/action`), async (snapshot) => {
					
					if(this.playing){
						const state = await get(firestoreRef(rtdb, `rooms/${route.params.code}/game/sign/state`))
						if(snapshot.exists() && player == this.turn && state.exists() && state.val()){
							
							await set(firestoreRef(rtdb, `rooms/${route.params.code}/game/sign/state`), false)
							
							const action = snapshot.val()
							await set(firestoreRef(rtdb, `rooms/${route.params.code}/players/${player}/controller/sign/action`), null)
							
							if(action.trash){
								await this.trashSign(action.index, player)
							}else{
								await this.placeSign(action, player)
							}
							
							await set(firestoreRef(rtdb, `rooms/${route.params.code}/game/sign/state`), true)
						}
					}
				})
			}
		},
		async trashSign(index, player){
			const rtdb = useRTDB() 
			const route = useRoute()
			const hearths = await get(firestoreRef(rtdb, `rooms/${route.params.code}/players/${player}/controller/sign/hearth`));
			if( hearths.exists()){
				const current_hearths = hearths.val()-1;
				set(firestoreRef(rtdb, `rooms/${route.params.code}/players/${player}/controller/sign/hearth`), current_hearths);
				set(firestoreRef(rtdb, `rooms/${route.params.code}/players/${player}/controller/sign/hand/${index}`), this.get_random_sign())
				
				if(current_hearths<=0){
					this.loose = true
					this.play_sound('lose')
					set(firestoreRef(rtdb, `rooms/${route.params.code}/game/sign/win`), true)
				}
			}
		},
		async placeSign(action, player){
			console.log('place')
			this.playing = false
			const rtdb = useRTDB() 
			const route = useRoute()
			const snapshot = await get(firestoreRef(rtdb, `rooms/${route.params.code}/players/${player}/controller/sign/hand/${action.index}`))
		
		
			if(snapshot.exists()){
				let sign = snapshot.val()
				if(action.joker){
					sign = {sign: 'joker', color: joker_color}
					this.play_sound('place-joker')
				}else{

					this.play_sound('place-sign')
				}
				sign.validated = true
				//console.log(`${player} a mis son ${sign.sign} ${sign.color} sur la case [${action.y}:${action.x}]`)
				
				await set(firestoreRef(rtdb, `rooms/${route.params.code}/game/sign/grid/${action.y}/${action.x}`), sign.sign == 'eraser' ? {color: '', sign: ''} : sign)
				
				set(firestoreRef(rtdb, `rooms/${route.params.code}/players/${player}/controller/sign/hand/${action.index}`), this.get_random_sign())
				const hearths = await get(firestoreRef(rtdb, `rooms/${route.params.code}/players/${player}/controller/sign/hearth`));
				if( hearths.exists() && hearths.val() < this.settings.hearth){
					set(firestoreRef(rtdb, `rooms/${route.params.code}/players/${player}/controller/sign/hearth`), hearths.val()+1);
				}
			
				//console.log(`il/elle as à maintenant une nouvelle pièce`)
				//console.log(this.gridIsEmpty(), this.gridEmpty)
	
				
				this.scoring(10)
				if(await this.checkWin()){
					set(firestoreRef(rtdb, `rooms/${route.params.code}/game/sign/win`), true)
					this.win = true
					this.play_sound('win')
				}

				await set(firestoreRef(rtdb, `rooms/${route.params.code}/game/sign/grid_empty`), this.gridIsEmpty())

				this.next_turn(player)
			}
		},
		play_sound(sound_name){
			if(this.sound_timout){
				this.sound_timout = false;	
				setTimeout(() => {
					this.sound_timout = true;
				}, 500);
				const beep = new Audio(`/audio/${sound_name}.mp3`)
				beep.play()
			} 
		},
		async checkWin(){			
			const rtdb = useRTDB() 
			const route = useRoute()

			for(const y in this.grid){
				let rowFull = true
				for(const x in this.grid[y]){
					if(!!this.grid[y][x] && this.grid[x][y].sign == ''){
						rowFull = false
					}
				}
				if(rowFull){
					//console.log('row', y)

					await new Promise(resolve => setTimeout(resolve, 1000))
					this.play_sound('complete-row')
					for(const x in this.grid[y]){
						await new Promise(resolve => setTimeout(resolve, 20))
						set(firestoreRef(rtdb, `rooms/${route.params.code}/game/sign/grid/${x}/${y}`), {validated: true, sign: '', color: ''})
						//set_full_life();
					}
					
					this.scoring(100)
				}
			}
			
			for(const x in this.grid[0]){
				let columnFull = true
				for(const y in this.grid){
					
					if(!!this.grid[y][x] && this.grid[x][y].sign == ''){
						columnFull = false
					}
				}
				if(columnFull){
					//onsole.log('col', x)

					await new Promise(resolve => setTimeout(resolve, 1000))
					this.play_sound('complete-row')
					for(const y in this.grid){
						await new Promise(resolve => setTimeout(resolve, 100))
						set(firestoreRef(rtdb, `rooms/${route.params.code}/game/sign/grid/${x}/${y}`), {validated: true, sign: '', color: ''})
						//set_full_life();
					}

					this.scoring(100)
				}
			}

			for(const row of this.grid){
				for(const cell of row){
					if (!cell.validated){
						return false
					}
				}
			}
			return true
		},
		async scoring(value){
			const rtdb = useRTDB() 
			const route = useRoute()
			this.score_append = '+'+value
			const new_score = this.score+value
			await set(firestoreRef(rtdb, `rooms/${route.params.code}/game/sign/score`), new_score );
			

			const interval = setInterval(() => {
				if(this.score < new_score){
					this.score ++
				} else {
				  clearInterval(interval)
				}
			}, 20);

			setTimeout(() => {
				this.score_append = ''
				clearInterval(interval)
				this.score = new_score				
			}, 1500)
		},
		gridIsEmpty(){
			for(const row of this.grid){
				for(const cell of row){
					if(cell.sign){
						return false
					}
				}
			}
			console.log('grid empty !');
			return true
		},
		async next_turn(turn){
			const rtdb = useRTDB() 
			const route = useRoute()
			const players = Object.keys(this.players)
			const new_player = (players.indexOf(turn) === players.length - 1) ? players[0] : players[players.indexOf(turn) + 1]
			
			// console.log(`c'est mainteanant à ${new_player} de jouer`)
			// console.log(players, turn)
			
			await set(firestoreRef(rtdb, `rooms/${route.params.code}/controller/turn`), new_player)
			setTimeout(() => {
				this.playing = true
				console.log('hop');
			}, 1000);
		},
		get_random_sign(){
			if(Math.random() < this.settings.chanceEraser){
				return {sign: 'eraser', color: '#B11717'}
			}else if(Math.random() < this.settings.chanceJoker){
				return {sign: 'joker', color: joker_color}
			}

			return {sign: this.settings.signs[Math.floor(Math.random()*this.settings.signs.length)], color: this.settings.colors[Math.floor(Math.random()*this.settings.colors.length)]}
		}
	}
}
</script>

<style lang="sass" scoped>
.sign
	position: absolute
	overflow: hidden
	width: 100%
	height: 100%
	background: #333
	display: flex
	justify-content: center
	align-items: center
	.score
		position: absolute
		top: 0
		font-size: 24px
		padding: 20px
		color: white
		z-index: 3

		.append
			animation: 1000ms ease-out up
			animation-fill-mode: forwards 
			position: absolute
			
			
	.players
		position: absolute
		top: 0
		left: 0
		width: calc(100% - 60px)
		height: 100%
		display: flex
		flex-wrap: wrap
		pointer-events: none
		margin: 0 30px
		z-index: 2

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
		z-index: 1
		.row
			display: flex
			flex: 1
			flex-direction: column
			.cell
				flex: 1
@keyframes up 
	0%
		opacity: 0
		transform: scale( 100%)
	10%
		transform: translateY(0) scale(110%)
		opacity: 1
	100%
		transform: translateY(10px) scale(200%)
		opacity: 0
</style>