<template>
	<Map
		ref="mapRef"
		@openEntity="openEntity"
	/>
	<SideBar />
	<Navigation
		:openEntity="openEntity"
	/>
	<Timeline/>
	<Window
		ref="windowRef"
	/>
</template>

<script setup>
	import { useMapStore } from '/src/stores/MapStore.js';
	const MapStore = useMapStore(),
		MapData = MapStore.MapData;
	import { ref, onBeforeMount } from 'vue';

	import SideBar from './components/Sidebar.vue';
	import Navigation from './components/Navigation.vue';
	import Timeline from './components/Timeline.vue';
	import Map from './components/Map.vue';
	import Window from './components/Window.vue';


	const mapRef = ref(null);
	const windowRef = ref(null);

	onBeforeMount(() => {
		MapStore.init();
	});

	const openEntity = (entityId) => {
		windowRef.value.openEntity(entityId);
	};

</script>

<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Oxanium:wght@300&family=Rubik:wght@400;700&display=swap');

* { box-sizing: border-box }

body {
	margin: 0;
	font-family: 'Rubik', sans-serif;
	font-size: 1rem;
	-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
}

::-webkit-scrollbar { width: .25rem }
::-webkit-scrollbar-track { border-radius: .25rem }

::-webkit-scrollbar-thumb {
	background: fade(white, 20%); 
	border-radius: .25rem;
	&:hover { background: fade(white, 30%) }
}
</style>