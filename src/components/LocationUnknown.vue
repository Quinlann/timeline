<template>
	<div 
		id="location-unknown"
		v-if="entitiesWithUknownLocation.length > 0"
	>
		<div>Location Unknown</div>
		<template
			v-for="entity in entities"
		>
			<div
				v-if="entity.locationUnknown"
			>{{ entity.name }}</div>
		</template>
	</div>
</template>

<script setup>
	import { useMapStore } from '/src/stores/MapStore.js';
	import { computed } from 'vue';

	const MapStore = useMapStore(),
	MapData = MapStore.MapData;

	const entities = MapData.entities;

	const entitiesWithUknownLocation = computed(() => {
		return entities.filter(x => x.locationUnknown === true);
	});

</script>

<style scoped lang="less">
	@import "/src/global.less";

	#location-unknown {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: fixed;
		right: 0;
		top: 50%;
		background: white;
		padding: 10px;
	}
</style>