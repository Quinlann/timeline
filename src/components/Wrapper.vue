<script>
import Entity from './map/Entity.vue'
import Creation from './creation/Creation.vue'

export default {
	props:['entities'],
	components:  {Entity,Creation},
	data() {
		return {
			showCreationPop: false,
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
			this.openCreationPop();
		},
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

<template>
<div id="wrapper">
    <Creation 
		v-if="showCreationPop"
		:closePop="closeCreationPop"
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
		/>
	</div>
</div>
</template>

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
	outline: 1px solid white;
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