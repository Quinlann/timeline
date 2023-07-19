<template>
	<div class="window__container">
		<Creation 
			v-if="showCreationPop"
			:closePop="closeCreationPop"
			ref="creationRef"
		/>
	</div>
</template>

<script setup>
	import { useMapStore } from '/src/stores/MapStore.js';
	const MapStore = useMapStore(),
	MapData = MapStore.MapData;

	import { ref, nextTick, onBeforeMount, onMounted } from 'vue';

	import Creation from './window/Creation.vue';

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
	div { pointer-events: auto }
}
</style>