<template>
	<div class="sign-controller">
		<div class="grid">
			<div v-for="(row, y) of grid" :key="y" class="row">
				<div 
					v-for="(cell, x) of row" 
					:key="x"
					class="cell"
					:class="{selectable: selectable(x, y)}"
					@click="selectCell(x, y)" 
				>
					<GameSignCell v-if="!cell.sign" />
					<div v-else></div>

				</div>
			</div>
		</div>
		<div class="options">
			<template v-if="gridEmpty">
				<GameSignCell class="my-sign" sign="jocker" @click="selectSign(0)" :class="{selected: selected==0}"/>
			</template>
			<template v-else>
				<GameSignCell class="my-sign" v-for="(sign, key) of mySigns" :key="key" :color="sign.color" :sign="sign.sign" @click="selectSign(key)" :class="{selected: selected==key}"/>
			</template>
			<svg class="trash" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M17.8333 22H6.16663C5.24663 22 4.49996 21.2533 4.49996 20.3333V7H19.5V20.3333C19.5 21.2533 18.7533 22 17.8333 22ZM10.3333 10.3333C10.3333 9.87333 9.95996 9.5 9.49996 9.5C9.03996 9.5 8.66663 9.87333 8.66663 10.3333V17.8333C8.66663 18.2933 9.03996 18.6667 9.49996 18.6667C9.95996 18.6667 10.3333 18.2933 10.3333 17.8333V10.3333ZM15.3333 10.3333C15.3333 9.87333 14.96 9.5 14.5 9.5C14.04 9.5 13.6666 9.87333 13.6666 10.3333V17.8333C13.6666 18.2933 14.04 18.6667 14.5 18.6667C14.96 18.6667 15.3333 18.2933 15.3333 17.8333V10.3333ZM20.3333 6.16667H3.66663V4.5H8.66663V3.25C8.66663 2.56083 9.22746 2 9.91663 2H14.0833C14.7708 2 15.3333 2.55917 15.3333 3.25V4.5H20.3333V6.16667ZM10.3333 4.5H13.6666V3.66667H10.3333V4.5Z" fill="black"/>
			</svg>
		</div>
	</div>
</template>

<script>
import { ref as firestoreRef, onValue } from "firebase/database"


export default {
	data(){
		return {
			selected: null,
			grid: [],
			signs: [],
			colors: [],
			mySigns: []
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
			if(this.myTurn && (this.selected != null || this.mySigns.length == 1)){	
				console.log(this.selectable(x, y))
				if(this.selectable(x, y)){
					this.$emit("select", { index: this.selected??0, x, y})
					this.selected = null
				}
			}
		},
		checkIsCompatible(x, y, sign){
			if(sign){
				if(sign.sign = 'joker') return true
				
				if(grid[x] && grid[x][y]){
					if(grid[x][y].sign == 'joker') return true
					if(grid[x][y].sign == '') return true
					const gridSign = grid[x][y];
					console.log(gridSign, sign)
					return sign.color == gridSign.color || sign.sign == gridSign.sign
				}else{
					return true
				}
			}			
		},
		selectable(x, y){
			const s = this.selected || this.mySigns.length == 1 ? 0 : null
			if(s!=null){
				console.log(
					this.checkIsCompatible(x+1, y, this.mySigns[s]),
					this.checkIsCompatible(x+1, y, this.mySigns[s]),
					this.checkIsCompatible(x+1, y, this.mySigns[s]),
 					this.checkIsCompatible(x+1, y, this.mySigns[s]) 
				)
				return (
					this.checkIsCompatible(x+1, y, this.mySigns[s]) &&
					this.checkIsCompatible(x+1, y, this.mySigns[s]) &&
					this.checkIsCompatible(x+1, y, this.mySigns[s]) &&
 					this.checkIsCompatible(x+1, y, this.mySigns[s]) 
				)
			}else{
				return false
			}
		},
		gridEmpty(){
			for(const row of this.grid){
				for(const cell of row){
					if(cell.sign){
						return false
					}
				}
			}
			return true
		}

	},
	mounted(){
		const rtdb = useRTDB() 
		const route = useRoute()

		onValue(firestoreRef(rtdb, `rooms/${route.params.code}/game/sign/grid`), (snapshot)=>{
			if(snapshot.exists()){
				this.grid = snapshot.val()
			}
		})
		onValue(firestoreRef(rtdb, `rooms/${route.params.code}/players/${route.params.slug}/controller/sign/hand`), (snapshot)=>{
			if(snapshot.exists()){
				this.mySigns = snapshot.val()
				console.log('ah', this.mySigns)
			}
		})
	}

}
</script>

<style lang="sass" scoped>
:root
	--selection-color: #fff4
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