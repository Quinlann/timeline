<template>
	<div 
		:style="{ 
			left: x + '%',
			top: y + '%',
			backgroundColor: color
			}" 
			class="entity e4"
			:class="locationUnknown === true ? 'location-unknown' : ''"
	>{{ name }}</div>
</template>

<script setup>
	import { storeToRefs } from 'pinia';
	import { useMapStore } from '/src/stores/MapStore.js';
	const MapStore = useMapStore(),
		MapData = MapStore.MapData;
	import { watch } from 'vue';
	import { computed } from 'vue';

	const props = defineProps(['entity','color','x','y','name']);

	const { timelinePoint } = storeToRefs(MapStore)

	let isBorn = true;
	
	let locationUnknown = computed(() => {
		const closestStoryEntry = getClosestStoryEntry();
		const locationIsUnknown = closestStoryEntry ? false : true;
		props.entity.locationUnknown = locationIsUnknown;
		return locationIsUnknown;
	});

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
		
		checkForBirth(entry);

		if(entry.type === 'place') setEntityPos(entry.left, entry.top);
		else if(entry.type === 'travel') {
			getNextTravelPinPos(entry.route.pins);
		}
	}

	const checkForBirth = (entry) => {
		const allBirths = props.entity.story.filter(x => x.type === 'birth');

		allBirths.forEach(birth => {
			if(timelinePoint.value < birth.startPct) {
				console.log('not born');
				isBorn = false;
			} else isBorn = true;
			setEntityPos(entry.left, entry.top);
		});
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

<style scoped lang="less">
	.not-born {
		display: none;
	}

	.location-unknown {
		display: none;
	}
</style>