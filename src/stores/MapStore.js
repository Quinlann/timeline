import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import mapData from '../data/map.json'

export const useMapStore = defineStore('mapStore', () => {
	const MapData = ref(mapData);
	
	const entities = mapData.entities,
	locations = mapData.locations,
	routes = mapData.routes;

	let timelinePoint = ref(0),
	timelineStartDateStr = ref(mapData.timelineStartDateStr),
	timelineEndDateStr = ref(mapData.timelineEndDateStr);

	const init = () => {
		setEntityIds();
		setEntryIds();
		setLocationsId();
		convertEntryLocations();
		convertDateStrs();
		setStartEndDates();
		convertDatesToPct();
		setRoutes();
		setEntitiesStartPos();
	}

	const setEntityIds = () => {
		entities.forEach((entity, index) => entity.id = index);
	}

	const setEntryIds = () => {
		for (let e = 0; e < entities.length; e++) {
			const story = entities[e].story;
			story.forEach((entry, index) => {
				entry.id = index;
			});
		}
	}

	const setLocationsId = () => {
		locations.forEach((location,i) => {location.id = i;});
	}

	const convertEntryLocations = () => {
		for (let e = 0; e < entities.length; e++) {
			const story = entities[e].story;
			story.forEach((entry) => {
				const locationName = entry.location;
				if(locationName) {
					const location = locations.find(x => x.name === locationName);
					if(location) {
						entry.left = location.left;
						entry.top = location.top;
					}
				}
			});
		}
	}

	const convertDateStrs = () => {	
		entities.forEach((entity) => {
			entity.story.forEach((entry) => entry.startDate = new Date(entry.startDateStr));
		});
	}

	const timelineStartDate = computed(() => {
		return new Date(timelineStartDateStr.value);
	});

	const timelineEndDate = computed(() => {
		return new Date(timelineEndDateStr.value);
	});

	const setStartEndDates = () => {
		entities.forEach((entity) => {
			entity.startDate = entity.story[0].startDate;
			entity.endDate = entity.story[entity.story.length-1].startDate;
		});
	};

	const convertDatesToPct = () => {
		entities.forEach((entity) => {
			entity.story.forEach((entry) => {
				entry.startPct = convertDateToPct(entry.startDate);
			});
		});
	};

	const convertDateToPct = (dateObj) => {
		return (dateObj.getTime() - timelineStartDate.value.getTime()) / startEndDateDiff.value * 100;
	};

	const startEndDateDiff = computed(() => {
		return timelineEndDate.value.getTime() - timelineStartDate.value.getTime();
	});

	const setRoutes = () => {
		entities.forEach((entity) => {
			for (let i = 0; i < entity.story.length; i++) {
				if(entity.story[i].type !== 'travel') continue
				
				const travelEntry = entity.story[i],
				reouteRawData = routes.find(x => x.id === travelEntry.route);
				travelEntry.route = JSON.parse(JSON.stringify(reouteRawData));

				if(travelEntry.routeBackward) travelEntry.route.pins.reverse();

				travelEntry.route.startDate = entity.story[i].startDate;
				travelEntry.route.startPct = convertDateToPct(travelEntry.route.startDate);

				travelEntry.route.endDate = entity.story[i+1].startDate;
				travelEntry.route.endPct = convertDateToPct(travelEntry.route.endDate);

				const pctPrPin = (travelEntry.route.endPct - travelEntry.route.startPct) / (travelEntry.route.pins.length - 1);
				
				travelEntry.route.pins[0].pct = travelEntry.route.startPct;
				for (let i = 1; i < travelEntry.route.pins.length; i++) {
					travelEntry.route.pins[i].pct = travelEntry.route.startPct + (i * pctPrPin);
				}
			}
		});
	};

	const setEntitiesStartPos = () => {
		entities.forEach((entity) => {
			entity.x = entity.story[0].left;
			entity.y = entity.story[0].top;
		});
	};

	/**
	 * Converts american date string to eu date string
	 * @param {String} dateStr 'yyyy-mm-dd'
	 * @returns 'dd-mm-yyyy'
	 */
	const euConvertDateStr = (dateStr) => {
		return dateStr.split("-").reverse().toString().replaceAll(",", "-");
	}

	return {
		MapData,
		timelinePoint,
		timelineStartDateStr,
		timelineStartDate,
		timelineEndDateStr,
		timelineEndDate,
		startEndDateDiff,
		init,
		convertEntryLocations,
		euConvertDateStr,
	}
});