<template>
	<div 
		id="location-unknown"
		v-if="entitiesWithUknownLocation.length > 0"
	>
		<div class="location-unknown__title">Location Unknown</div>
		<template
			v-for="entity in entities"
		>
			<div class="location-unknown__entity"
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
		background: fade(@black, 80%);
		color: white;
		padding: .5rem;
		border-radius: .5rem;
		margin-right: .5rem;
		animation: windowReveal .5s;
	}

	.location-unknown {
		&__title {
			font-weight: bold;
			opacity: .2;
			margin-bottom: .5rem;
		}

		&__entity {
			opacity: .5;
			width: 100%;
			text-align: center;
			border-radius: 1rem;
			transition: .2s;
			animation: windowReveal .5s;

			&:hover {
				opacity: 1;
				background-color: fade(purple, 80%);
			}
		}
	}
</style>