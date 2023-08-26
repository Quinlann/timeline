<template>
	<div class="timeline__container">
		<div class="timeline__counter">{{ pointLabel }}</div>
		<input type="range" min="0" max="100" class="timeline"
			:step="stepPrecision"
			@input="changedRange"
			v-model="rangeValue"
		>
		<div class="timeline__selection"></div>
	</div>
</template>

<script setup>
	import { useMapStore } from '/src/stores/MapStore.js';
	import { ref, onBeforeMount, onMounted } from 'vue';
	const MapStore = useMapStore();

	const stepPrecision = .1;
	let pointLabel = ref('');
	let rangeValue = 0;

	onBeforeMount(() => {
		setTimelineDate(MapStore.timelineStartDateStr);	
	});

	const setTimelineDate = (dateStr) => {
		pointLabel.value = MapStore.euConvertDateStr(dateStr);
		MapStore.timelinePoint = rangeValue;
	}

	const changedRange = () => {
		updateTimelinePoint();
	}

	const updateTimelinePoint = () => {
		setTimelineDate(convertPctToDate(rangeValue));
	}

	const convertPctToDate = (pct) => {
		const startDateInMilSec = MapStore.timelineStartDate.getTime(),
			pctDateInMilSec = startDateInMilSec + (MapStore.startEndDateDiff * (pct/100)),
			pctDateInString = new Date(pctDateInMilSec).toISOString().substring(0, 10);

		return pctDateInString;
	}

</script>

<style scoped lang="less">
@import "/src/global.less";

.timeline {
	margin: 2rem;
	width: calc(100% - 4rem);
	height: .2rem;
	border-radius: 5px;
	-webkit-appearance: none;
	cursor: pointer;
	background: @item-color;

	&__counter {
		font-size: 2rem;
		font-family: 'Oxanium', sans-serif;
		transform-origin: bottom;
		transition: .2s;
		color: @background-color-inverted;
	}
	
	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 5px;
		height: 2rem;
		border-radius: 1rem;
		background: @item-color;
		transition: .2s;
	}
	
	&::-moz-range-thumb {
		width: 1.2rem;
		height: 3rem;
		border-radius: .5rem;
		background: @item-color;
	}
	
	&__container {
		position: fixed;
		bottom: 0;
		height: 10rem;
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		z-index: 1;
		
		&:hover .timeline::-webkit-slider-thumb {
			height: 1.5rem;
			width: 3rem;
		}
		
		&:active .timeline__counter {
			transform: scale(2);
			color: @pink;
		}
	}
}
</style>