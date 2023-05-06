<template>
	<SideBar/>
	<Navigation 
		:addEntity="addEntity"
		:openEntity="openEntity"
		:entities="entities"
	/>
	<Timeline
		@update-timeline-point="updateTimelinePoint"
		:pointLabel="timelineDate"
	/>
	<Wrapper 
		:entities="entities"
		ref="wrapper"
	/>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Timeline from './components/Timeline.vue'
import Wrapper from './components/Wrapper.vue'
import SideBar from './components/SideBar.vue'

export default {
	components: {
		Navigation,
		Timeline,
		Wrapper,
		SideBar
	},
	data() {
		return {
			entities: [
				{
					name: 'Agent 47',
					text: '47',
					visible: true,
					color: 'black',
					activeEntryId: 0,
					story: [
						{
							name: 'Romania',
							left: 54.6,
							top: 38.6,
							startDateStr: '1999-10-05',
							type: 'place',
							location: 'Romania',
							route: '',
						},
						{
							name: 'Romania - Hong Kong',
							left: 0,
							top: 0,
							startDateStr: '2000-03-05',
							type: 'travel',
							location: '',
							route: 'r_0',
							routeBackward: false,
						},
						{
							name: 'Hong Kong',
							left: 80.7,
							top: 51,
							startDateStr: '2000-03-21',
							type: 'place',
							location: 'Hong Kong',
							route: '',
						},
						{
							name: 'Colombia',
							left: 26.7,
							top: 61,
							startDateStr: '2000-05-10',
							type: 'place',
							location: 'Colombia',
							route: '',
						},
						{
							name: 'Budapest',
							left: 52.8,
							top: 37.7,
							startDateStr: '2000-07-12',
							type: 'place',
							location: 'Budapest',
							route: '',
						},
						{
							name: 'Rotterdam',
							left: 48.9,
							top: 34.5,
							startDateStr: '2000-08-26',
							type: 'place',
							location: 'Rotterdam',
							route: '',
						},
						{
							name: 'Romania',
							left: 54.6,
							top: 38.6,
							startDateStr: '2000-09-04',
							type: 'place',
							location: 'Romania',
							route: '',
						},
					],
				},
				{
					name: 'Agent 17',
					text: '17',
					visible: true,
					color: 'orange',
					activeEntryId: 0,
					story: [
						{
							name: 'Romania',
							left: 25.6,
							top: 25.6,
							startDateStr: '1999-10-15',
							type: 'place',
							location: 'Romania',
							route: '',
						},
						{
							name: 'Hong Kong',
							left: 51,
							top: 51,
							startDateStr: '2000-03-01',
							type: 'place',
							location: 'Hong Kong',
							route: '',
						},
						{
							name: 'Romania - Hong Kong',
							left: 0,
							top: 0,
							startDateStr: '2000-03-23',
							type: 'travel',
							location: '',
							route: 'r_0',
							routeBackward: false,
						},
						{
							name: 'Colombia',
							left: 93,
							top: 33,
							startDateStr: '2000-06-15',
							type: 'place',
							location: 'Colombia',
							route: '',
						},
						{
							name: 'A to B',
							left: 0,
							top: 0,
							startDateStr: '2000-06-24',
							type: 'travel',
							location: 'Colombia',
							route: 'r_1',
							routeBackward: true,
						},
						{
							name: 'Colombia',
							left: 25,
							top: 25,
							startDateStr: '2000-09-04',
							type: 'place',
							location: 'Colombia',
							route: '',
						},
					],
				},
			],
			routes: [
				{
					id: 'r_0',
					name: 'Romania - Hongkong',
					pins: [
						{
							left: 54.6,
							top: 38.6,
						},
						{
							left: 56.6,
							top: 35.6,
						},
						{
							left: 59.6,
							top: 39.6,
						},
						{
							left: 60.6,
							top: 43.6,
						},
						{
							left: 62.6,
							top: 45.6,
						},
						{
							left: 66.6,
							top: 46.6,
						},
						{
							left: 69.6,
							top: 48.6,
						},
						{
							left: 73.6,
							top: 49.7,
						},
						{
							left: 76.6,
							top: 50.2,
						},
						{
							left: 79.1,
							top: 51,
						},
						{
							left: 80.7,
							top: 51,
						}
					],
				},
				{
					id: 'r_1',
					name: 'A - B',
					pins: [
						{
							left: 33,
							top: 33,
						},
						{
							left: 43,
							top: 33,
						},
						{
							left: 53,
							top: 33,
						},
						{
							left: 63,
							top: 33,
						},
						{
							left: 73,
							top: 33,
						},
						{
							left: 83,
							top: 33,
						},
						{
							left: 93,
							top: 33,
						},
					],
				},
			],
			timelinePoint: 0,
			timelineDate: '',
			timelineStartDateStr: '1999-10-05',
			timelineEndDateStr: '2000-09-04',
		}
	},
	beforeMount() {
		this.setEntityIds();
		this.setEntryIds();
		this.convertDateStrs();
		this.setStartEndDates();
		this.convertDatesToPct();
		this.setRoutes();
		this.setTimelineDate();
		this.setEntitiesStartPos();
	},
	computed: {
		startEndDateDiff() {
			return this.timelineEndDate.getTime() - this.timelineStartDate.getTime();
		}
	},
	methods:{
		setEntityIds(){
			this.entities.forEach((obj, index) => obj.id = index);
		},
		setEntryIds(){
			for (let e = 0; e < this.entities.length; e++) {
				const story = this.entities[e].story;
				story.forEach((entry, index) => {
					entry.id = index;
				});
			}
		},
		addEntity(){
			this.$refs.wrapper.addEntity();
		},
		openEntity(entityId) {
			this.$refs.wrapper.openEntity(this.entities[entityId]);
		},
		convertDateStrs() {
			this.timelineStartDate = new Date(this.timelineStartDateStr);
			this.timelineEndDate = new Date(this.timelineEndDateStr);

			this.entities.forEach((entity) => {
				entity.story.forEach((obj) => obj.startDate = new Date(obj.startDateStr));
			});
		},
		setStartEndDates() {
			this.entities.forEach((entity) => {
				entity.startDate = entity.story[0].startDate;
				entity.endDate = entity.story[entity.story.length-1].startDate;
			});
		},
		convertDatesToPct() {
			this.entities.forEach((entity) => {
				entity.story.forEach((entry) => {
					entry.startPct = this.convertDateToPct(entry.startDate);
				});
			});
		},
		convertDateToPct(dateObj) {
			return (dateObj.getTime() - this.timelineStartDate.getTime()) / this.startEndDateDiff * 100;
		},
		setRoutes() {
			this.entities.forEach((entity) => {
				for (let i = 0; i < entity.story.length; i++) {
					if(entity.story[i].type !== 'travel') continue
					
					const travelEntry = entity.story[i],
					reouteRawData = this.routes.find(x => x.id === travelEntry.route);
					travelEntry.route = JSON.parse(JSON.stringify(reouteRawData));

					if(travelEntry.routeBackward) travelEntry.route.pins.reverse();

					travelEntry.route.startDate = entity.story[i].startDate;
					travelEntry.route.startPct = this.convertDateToPct(travelEntry.route.startDate);

					travelEntry.route.endDate = entity.story[i+1].startDate;
					travelEntry.route.endPct = this.convertDateToPct(travelEntry.route.endDate);

					const pctPrPin = (travelEntry.route.endPct - travelEntry.route.startPct) / (travelEntry.route.pins.length - 1);
					
					travelEntry.route.pins[0].pct = travelEntry.route.startPct;
					for (let i = 1; i < travelEntry.route.pins.length; i++) {
						travelEntry.route.pins[i].pct = travelEntry.route.startPct + (i * pctPrPin);
					}
				}
			});
		},
		setTimelineDate() {
			this.timelineDate = this.timelineStartDateStr;
		},
		setEntitiesStartPos() {
			this.entities.forEach((entity) => {
				entity.x = entity.story[0].left;
				entity.y = entity.story[0].top;
			});
		},
		convertPctToDate(pct) {
			const startDateInMilSec = this.timelineStartDate.getTime(),
			pctDateInMilSec = startDateInMilSec + (this.startEndDateDiff * (pct/100)),
			pctDateInString = new Date(pctDateInMilSec).toISOString().substring(0, 10);
			return pctDateInString
		},
		updateTimelinePoint(newPoint) {
			this.timelinePoint = newPoint;
			this.timelineDate = this.convertPctToDate(this.timelinePoint);
		},
		setEntityPos(entity,x,y){
			entity.x = x;
			entity.y = y;
		},
		updateEntity(entity, entry){
			entity.activeEntryId = entry.id;

			if(entry.type === 'place') this.setEntityPos(entity, entry.left, entry.top);
			else if(entry.type === 'travel') {
				this.getNextTravelPinPos(entity, entry.route.pins);
			}
		},
		getNextTravelPinPos(entity, routePins){
			const pinLowerThanPoint = routePins.filter(x => x.pct <= this.timelinePoint),
			closestPin = pinLowerThanPoint[pinLowerThanPoint.length-1];

			this.setEntityPos(entity, closestPin.left, closestPin.top);
		},
		clickedMapEntity(entity) {
			this.$refs.wrapper.openEntity(entity);
		},
	},
	watch: {
		timelinePoint(point){
			this.entities.forEach((entity) => {
				const storyEntriesLowerThanPoint = entity.story.filter(x => x.startPct <= point);
			
				if(storyEntriesLowerThanPoint.length < 1) return

				const closestEntry = storyEntriesLowerThanPoint[storyEntriesLowerThanPoint.length-1];

				this.updateEntity(entity,closestEntry);
			});
		}
	}
}
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