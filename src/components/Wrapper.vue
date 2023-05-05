<template>
	<div id="wrapper">
		<Creation 
			v-if="showCreationPop"
			:closePop="closeCreationPop"
			ref="creation"
		/>
		<div class="map">
			<img src="/src/assets/worldmap.svg">
			<Entity 
				v-for="entity in this.entities"
				:color="entity.color"
				:x="entity.x"
				:y="entity.y"
				:name="entity.text"
				:visible="entity.visible"
				@click="clickEntity(entity)"
			/>
		</div>
	</div>
</template>

<script>
import Entity from './wrapper/Entity.vue'
import Creation from './wrapper/Creation.vue'

export default {
	props:['entities'],
	components:  {Entity,Creation},
	data() {
		return {
			showCreationPop: false,
			tempEntity: {
				name:'Benjamin Bak Egede',
				story: [
					{
						name: 'Jyllinge',
						startDateStr: '05.10.1992',
						type: 'birth',
					},
					{
						name: 'Roskilde',
						startDateStr: '03.21.2001',
						type: 'place',
					},
					{
						name: 'T: 50% L: 10%',
						startDateStr: '2004',
						type: 'travel',
					},
					{
						name: 'Jyllinge',
						startDateStr: '03.02.2004',
						type: 'place',
					},
					{
						name: 'Roskilde',
						startDateStr: '05.10.2023',
						type: 'death',
					},
					{
						name: 'Roskilde',
						startDateStr: '05.10.2024',
						type: 'birth',
					},
					{
						name: 'Bing Bong',
						startDateStr: '05.10.2024',
						type: 'change',
					},
				]
			}
		}
	},
	methods: {
		openCreationPop() {
			this.showCreationPop = true;
		},
		closeCreationPop() {
			this.showCreationPop = false;
		},
		addEntity(){
			this.openEntity(this.tempEntity);
		},
		openEntity(entity){
			this.openCreationPop();
			this.$nextTick(() => {
				this.$refs.creation.setEntity(entity);
			});
		},
		clickEntity(entity) {
			this.$parent.clickedMapEntity(entity);
		}
	},
}

let zoom = 100;
document.addEventListener("wheel", function(e) {
	const ZOOM_SPEED = 10;
    const zoomElement = document.querySelector(".map");
	if (e.deltaY > 0) {    
        zoomElement.style.width = `${zoom -= ZOOM_SPEED}%`;  
    } else {    
        zoomElement.style.width = `${zoom += ZOOM_SPEED}%`;
	}
});

</script>

<style scoped lang="less">
@import "/src/global.less";

@icon-size: 2rem;

#wrapper {
	min-height: 100vh;
	position: relative;
	padding-top: @navigation-height;
	display: flex;
	justify-content: center;
	align-items: center;
	background: @background-color;
	color: @background-color-inverted;
}

.map {
	background-size: contain;
	width: 100%;
	position: fixed;
	img { filter: invert(100%) }
}

.entity {
	width: @icon-size;
	height: @icon-size;
	border-radius: 50%;
	text-align: center;
	color: white;
	position: absolute;
	line-height: @icon-size;
	transition: .2s;
	cursor: pointer;
	transform: translate(-50%, -50%);
	&:hover { transform: translate(-50%, -50%) scale(1.2) }
	
	&.red { background-color: red }
	&.purple { background-color: purple }
	&.green { background-color: green }
	&.blue { background-color: blue }
	
	&.e1 { top: 50%; left: 50% }
	&.e2 { top: 40%; left: 20% }
	&.e3 { top: 20%; left: 80% }
	&.e4 { top: 60%; left: 30% }
}
</style>