<template>
	<div class="sign-controller">
		<template v-if="win||loose">
			<h1>Game over</h1>
			<span @click="retry">Ressayer</span>
			<span @click="quite">Quitter</span>
		</template>
		<template v-else>
			<div class="hearths">
				<svg v-for="(hearth, key) of maxHearths" :key="key" :fill="hearths>=hearth?'#ff0000':'#404040'" :stroke="hearths>=hearth?'#880000':'#000000'" width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">		
					<path d="M18.6274 13.2038L12 20L5.37258 13.2038C3.54247 11.3271 3.54247 8.28428 5.37258 6.40755C7.20269 4.53083 10.1699 4.53082 12 6.40754C13.8301 4.53082 16.7973 4.53082 18.6274 6.40754C20.4575 8.28427 20.4575 11.327 18.6274 13.2038Z" stroke-width="1.5" />				
				</svg>
			</div>
			<div class="grid">
				<div v-for="(row, y) of grid" :key="y" class="row">
					<div 
						v-for="(cell, x) of row" 
						:key="x"
						class="cell"
						@click="selectCell(x, y)" 
					>
						<GameSignCell :selectable="selectable(x, y)" :withBg="true" v-if="!cell.sign" />

						<GameSignCell v-else  :color="cell.color" :sign="cell.sign" :selectable="selectable(x, y)" :withBg="true"/>

					</div>
				</div>
			</div>
			<div class="options">
				<template v-if="gridEmpty && myTurn">
					<GameSignCell class="my-sign" sign="joker" color="#ffffff" @click="selectSign(0)" :class="{selected: true}"/>
				</template>
				<template v-else>
					<GameSignCell class="my-sign" v-for="(sign, key) of mySigns" :key="key" :color="sign.color" :sign="sign.sign" @click="selectSign(key)" :class="{selected: selected==key}"/>
				</template>
				<svg class="trash" @click="trash" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M17.8333 22H6.16663C5.24663 22 4.49996 21.2533 4.49996 20.3333V7H19.5V20.3333C19.5 21.2533 18.7533 22 17.8333 22ZM10.3333 10.3333C10.3333 9.87333 9.95996 9.5 9.49996 9.5C9.03996 9.5 8.66663 9.87333 8.66663 10.3333V17.8333C8.66663 18.2933 9.03996 18.6667 9.49996 18.6667C9.95996 18.6667 10.3333 18.2933 10.3333 17.8333V10.3333ZM15.3333 10.3333C15.3333 9.87333 14.96 9.5 14.5 9.5C14.04 9.5 13.6666 9.87333 13.6666 10.3333V17.8333C13.6666 18.2933 14.04 18.6667 14.5 18.6667C14.96 18.6667 15.3333 18.2933 15.3333 17.8333V10.3333ZM20.3333 6.16667H3.66663V4.5H8.66663V3.25C8.66663 2.56083 9.22746 2 9.91663 2H14.0833C14.7708 2 15.3333 2.55917 15.3333 3.25V4.5H20.3333V6.16667ZM10.3333 4.5H13.6666V3.66667H10.3333V4.5Z" fill="black"/>
				</svg>
			</div>
		</template>
	</div>
</template>

<script>
import { ref as firestoreRef, onValue, get } from "firebase/database"


export default {
	data(){
		return {
			selected: null,
			grid: [],
			signs: [],
			colors: [],
			mySigns: [],
			gridEmpty: false,
			hearths: [],
			maxHearths: 1,
			remplaceMode: true,
			win: false,
			loose: false
		}
	},
	props: ['myTurn'],
	emits: ['select'],
	methods: {
		selectSign(index){
			if(this.myTurn && this.mySigns.length > 1){
				if(this.selected==index){
					this.selected = null
				}else{
					this.selected = index
				}
			}
		},
		selectCell(x, y){
			const selection = this.getSelection() 
			if(this.myTurn && selection){	
				console.log(selection);
				if(this.selectable(x, y)){
					console.log('emit select: ', { index: this.selected ?? 0, x, y, joker: selection.sign == 'joker' })
					this.$emit("select", { index: this.selected ?? 0, x, y, joker: selection.sign == 'joker' })
					this.selected = null
				}
			}
		},
		trash(){
			const selection = this.getSelection() 
			if(this.myTurn && selection){	
				console.log('emit trash: ', { index: this.selected ?? 0,  })
				this.$emit("select", { index: this.selected ?? 0, trash: true })
				this.selected = null
			}
		},
		checkIsCompatible(x, y, currentSign){
			if(currentSign){
				let result = false
				if(currentSign.sign == 'eraser'){
					return !!this.grid[y][x].sign
				}
				if(this.grid[y][x].sign && !this.remplaceMode){
					return false
				}
				if(currentSign.sign == 'joker'){
					return true
				}
				for(const direction of [[1,0],[0,1],[-1,0],[0,-1]]){
					if(!!this.grid[y + direction[0]] && !!this.grid[y + direction[0]][x + direction[1]]){
						const arroundSign = this.grid[y + direction[0]][x + direction[1]]

						if (arroundSign.sign == 'joker'){
							result = true // joker case
						} else if (currentSign.color == arroundSign.color || currentSign.sign == arroundSign.sign) {
							result = true
						} else if (currentSign.color != arroundSign.color && currentSign.sign != arroundSign.sign && arroundSign.sign != '') {
							return false
						} 
					}
				}
				return result
			}			
		},
		getSelection(){
			if(this.gridEmpty && this.myTurn){
				return {sign: 'joker', color: null};
			}else if(this.mySigns.length == 1){
				return this.mySigns[0]
			}else if(this.selected!==false){
				return this.mySigns[this.selected]
			}else{
				return false
			}
		},
		selectable(x, y){
			const s = this.getSelection()
			
			if(this.gridEmpty){
				return true // can be placed anywhere
			} else if(s){
				const check = this.checkIsCompatible(x, y, s)
				return check
			}else{
				return false // no selection
			}
		},
		quite(){
			const rtdb = useRTDB() 
			const route = useRoute()

			set(firestoreRef(rtdb, `rooms/${route.params.code}/state`), 'player_ready')
		},
		retry(){
			const rtdb = useRTDB() 
			const route = useRoute()

			set(firestoreRef(rtdb, `rooms/${route.params.code}/game/sign`), null)
			set(firestoreRef(rtdb, `rooms/${route.params.code}/state`), 'play_sign')
		}
	},
	async mounted(){
		const rtdb = useRTDB() 
		const route = useRoute()

		const max_hearth = await get(firestoreRef(rtdb, `rooms/${route.params.code}/game/sign/max_hearth`))
		if(max_hearth.exists()){
			this.maxHearths = max_hearth.val();
		}
		
		const remplaceMode = await get(firestoreRef(rtdb, `rooms/${route.params.code}/game/sign/remplace_mode`))
		if(remplaceMode.exists()){
			this.remplaceMode = remplaceMode.val();
		}
		
		onValue(firestoreRef(rtdb, `rooms/${route.params.code}/game/sign/grid`), (snapshot)=>{
			if(snapshot.exists()){
				this.grid = snapshot.val()
			}
		})
		onValue(firestoreRef(rtdb, `rooms/${route.params.code}/players/${route.params.slug}/controller/sign/hand`), (snapshot)=>{
			if(snapshot.exists()){
				this.mySigns = snapshot.val()
			}
		})
		onValue(firestoreRef(rtdb, `rooms/${route.params.code}/players/${route.params.slug}/controller/sign/hearth`), (snapshot)=>{
			if(snapshot.exists()){
				this.hearths = snapshot.val()
			}
		})
		onValue(firestoreRef(rtdb, `rooms/${route.params.code}/game/sign/grid_empty`), (snapshot)=>{
			if(snapshot.exists()){
				this.gridEmpty = snapshot.val()
			}
		})
	}

}
</script>

<style lang="sass" scoped>
.sign-controller
	display: flex
	flex-direction: column
	width: 100%
	height: 100%
	align-items: center
	justify-content: space-evenly
	.grid
		display: flex
		flex-direction: row
		max-width: calc(100vh - 60px)
		max-height: calc(100vh - 60px)
		width: 100vw
		height: 100vw
		gap: 0
		.row
			display: flex
			flex: 1
			gap: 0
			flex-direction: column
			.cell
				flex: 1
				height: 0
				cursor: pointer
				&.selected
					padding: 0px
					margin: 0px
					background: radial-gradient(circle at center, var(--selection-color) 0%, transparent 80%)
	.options
		display: flex
		flex-direction: row
		height: 60px
		width: 100%
		bottom: 0

		.my-sign, .trash
			cursor: pointer
			flex: 1
			height: 60px
			width: 60px
			&.selected
				padding: 50px
				margin: -50px
				background: radial-gradient(circle at center, var(--selection-color) 0%, transparent 40%)
	
@media ('orientation: landscape')
	.sign-controller
		flex-direction: row
		.grid
			max-width: calc(100vw - 60px)
			max-height: calc(100vw - 60px)
			width: 100vh
			height: 100vh
		
		.options
			flex-direction: column
			height: 100%
			width: 60px
		
</style>