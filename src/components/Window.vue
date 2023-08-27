<template>
	<div class="window__container">
		<Creation 
			v-if="showCreationPop"
			:closePop="closeCreationPop"
			ref="creationRef"
		/>

		<InfoWindow />

		<div class="prompt">
			<div class="prompt__title"></div>
			<div class="prompt__body">
				<p>Are you sure you want to delete [EntityName]</p>
			</div>
			<div class="prompt__buttons">
				<button class="decline">No</button>
				<button class="accept">Yes</button>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { useMapStore } from '/src/stores/MapStore.js';
	const MapStore = useMapStore(),
	MapData = MapStore.MapData;

	import { ref, nextTick, onBeforeMount, onMounted } from 'vue';

	import Creation from './window/Creation.vue';
	import InfoWindow from './window/InfoPage.vue';

	const openCreationPop = () => {
		showCreationPop.value = true;
	};

	const closeCreationPop = () => {
		showCreationPop.value = false;
	};

	const creationRef = ref(null);

	const openEntity = (entityId) => {
		openCreationPop();
		nextTick(() => {
			creationRef.value.setEntity(entityId);
		});
	};

	let showCreationPop = ref(false);

	defineExpose({openEntity});

</script>

<style lang="less">
@import "/src/global.less";

@padding: 1rem;
@margin: 1rem;

.window__container {
	position: fixed;
	left: 0;
	top: 0;
	display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
	pointer-events: none;
	color: @background-color-inverted;
	z-index: 1;
	
	& > div { 
		pointer-events: auto;
		animation: windowReveal .3s;
		border-radius: @padding;
	}
}

.prompt {
	max-width: 60%;
	padding: 1rem;
	background-color: fade(@black, 80%);
	text-align: center;

	display: none;

	&__buttons {
		display: flex;
		justify-content: space-evenly;

		button {
			min-width: 5rem;
			padding: .5rem;
			font-size: 1rem;
			align-items: center;
			border-radius: .5rem;
			background-color: fade(@white, 20%);
			color: @white;
			&.accept { background: @item-color }
		}
	}
}
</style>