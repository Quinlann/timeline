<template>
	<div class="map__container">
		<div class="map">
			<img src="/src/assets/worldmap.svg">
			<Entity 
				v-for="entity in entities"
				:entity="entity"
				:color="entity.color"
				:x="entity.x"
				:y="entity.y"
				:name="entity.text"
				:visible="entity.visible"
				@click="openEntity(entity.id);"
			/>
		</div>
	</div>
</template>

<script setup>
	import { useMapStore } from '/src/stores/MapStore.js';
	const MapStore = useMapStore(),
	MapData = MapStore.MapData;

	import { ref, nextTick, onBeforeMount, onMounted } from 'vue';

	import Entity from './map/Entity.vue';

	const entities = MapData.entities;

	const emit = defineEmits(['openEntity']);

	const openEntity = (entityId) => {
		emit('openEntity', entityId);
	};

	let showCreationPop = ref(false);

	/** ZOOM */
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

.map {
	background-size: contain;
	width: 100%;
	position: fixed;
	img { filter: invert(100%) }

	&__container {
		min-height: 100vh;
		position: relative;
		padding-top: @navigation-height;
		display: flex;
		justify-content: center;
		align-items: center;
		background: @background-color;
		color: @background-color-inverted;
	}
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