<template>
	<div :style="{ 
		left: x + '%',
		top: y + '%',
		backgroundColor: color,
		display: visible ? 'block' : 'none'
		}" 
		class="entity e4">{{ name }}</div>    
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useMapStore } from '/src/stores/MapStore.js';
const MapStore = useMapStore(),
	MapData = MapStore.MapData;
import { watch } from 'vue';

const props = defineProps(['entity','color','x','y','name','visible']);

const { timelinePoint } = storeToRefs(MapStore)

watch(timelinePoint, () => {
	const closestStoryEntry = getClosestStoryEntry();
	if(closestStoryEntry) updateEntity(closestStoryEntry);
});

const getClosestStoryEntry = () => {
	const storyEntriesLowerThanPoint = props.entity.story.filter(x => x.startPct <= timelinePoint.value);
	if(storyEntriesLowerThanPoint.length < 1) return false;
	return storyEntriesLowerThanPoint[storyEntriesLowerThanPoint.length-1];
}

const updateEntity = (entry) => {
	props.entity.activeEntryId = entry.id;

	if(entry.type === 'place') setEntityPos(entry.left, entry.top);
	else if(entry.type === 'travel') {
		getNextTravelPinPos(entry.route.pins);
	}
}

const setEntityPos = (x, y) => {
	props.entity.x = x;
	props.entity.y = y;
}

const getNextTravelPinPos = (routePins) => {
	const pinLowerThanPoint = routePins.filter(x => x.pct <= timelinePoint.value),
		closestPin = pinLowerThanPoint[pinLowerThanPoint.length-1];

	setEntityPos(closestPin.left, closestPin.top);
}

</script>

<style></style>