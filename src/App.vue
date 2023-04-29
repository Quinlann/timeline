<template>
	<SideBar/>
	<Navigation :addEntity="addEntity"/>
	<Timeline
		@update-timeline-point="updateTimelinePoint"
		:pointLabel="`${this.timelineDate} | ${this.timelineEntryName}`"
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
	components: {Navigation,Timeline,Wrapper,SideBar},
	data() {
		return {
			entities: [
				{
					color: 'red',
					story: [
						// entries:
						{
							id: 0,
							name: 'Romania',
							left: 54.6,
							top: 38.6,
							startDate: '1999-10-05',
							type: 'place',
							location: 'Romania',
							route: '',
						},
						{
							id: 0,
							name: 'Romania - Hong Kong',
							left: 0,
							top: 0,
							startDate: '2000-03-05',
							type: 'travel',
							location: '',
							route: 'r_0',
						},
						{
							id: 1,
							name: 'Hong Kong',
							top: 51,
							left: 80.7,
							startDate: '2000-03-21',
							type: 'place',
							location: 'Hong Kong',
							route: '',
						},
						{
							id: 2,
							name: 'Colombia',
							top: 61,
							left: 26.7,
							startDate: '2000-05-10',
							type: 'place',
							location: 'Colombia',
							route: '',
						},
						{
							id: 3,
							name: 'Budapest',
							top: 37.7,
							left: 52.8,
							startDate: '2000-07-12',
							type: 'place',
							location: 'Budapest',
							route: '',
						},
						{
							id: 4,
							name: 'Rotterdam',
							top: 34.5,
							left: 48.9,
							startDate: '2000-08-26',
							type: 'place',
							location: 'Rotterdam',
							route: '',
						},
						{
							id: 5,
							name: 'Romania',
							left: 54.6,
							top: 38.6,
							startDate: '2000-09-04',
							type: 'place',
							location: 'Romania',
							route: '',
						},
					],
					text: '47',
					x: 54.6,
					y: 38.6,
					visible: true
				}
			],
			timelinePoint: 0,
			timelineDate: '1999-10-05',
			timelineEntryName: 'Romania',
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
				}
			]
		}
	},
	beforeMount() {
		this.setEntityIds();
		this.convertDateStrs();
		this.setStartEndDates();
		this.convertDatesToPct();
		this.setRoutes();
	},
	computed: {
		startEndDateDiff() {
			return this.entities[0].endDate.getTime() - this.entities[0].startDate.getTime();
		}
	},
	methods:{
		setEntityIds(){
			this.entities.forEach((obj, index) => obj.id = index);
		},
		addEntity(){
			this.$refs.wrapper.addEntity();
			return
			this.entities.push({
				color: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`,
				x: Math.floor(Math.random() * 101),
				y: Math.floor(Math.random() * 101),
				text: this.entities.length.toString(),
				id: this.entities.length
			});
		},
		convertDateStrs() {
			this.entities[0].story.forEach((obj) => obj.startDateObj = new Date(obj.startDate));
		},
		setStartEndDates() {
			this.entities[0].startDate = this.entities[0].story[0].startDateObj;
			this.entities[0].endDate = this.entities[0].story[this.entities[0].story.length-1].startDateObj;
		},
		convertDatesToPct() {
			for (let i = 0; i < this.entities[0].story.length; i++) {
				const entry = this.entities[0].story[i];
				entry.startPct = this.convertDateToPct(entry.startDateObj);
			}
		},
		convertDateToPct(dateObj) {
			return (dateObj.getTime() - this.entities[0].story[0].startDateObj.getTime()) / this.startEndDateDiff * 100;
		},
		setRoutes() {
			for (let i = 0; i < this.entities[0].story.length; i++) {
				if(this.entities[0].story[i].type !== 'travel') continue
				
				const travelEntry = this.entities[0].story[i];
				travelEntry.route = this.routes.find(x => x.id === travelEntry.route);

				travelEntry.route.startDate = this.entities[0].story[1].startDate;
				travelEntry.route.startDateObj = this.entities[0].story[1].startDateObj;
				travelEntry.route.startPct = this.convertDateToPct(travelEntry.route.startDateObj);

				travelEntry.route.endDate = this.entities[0].story[i+1].startDate;
				travelEntry.route.endDateObj = this.entities[0].story[i+1].startDateObj;
				travelEntry.route.endPct = this.convertDateToPct(travelEntry.route.endDateObj);

				const pctPrPin = (travelEntry.route.endPct - travelEntry.route.startPct) / (travelEntry.route.pins.length - 1);
				
				travelEntry.route.pins[0].pct = travelEntry.route.startPct;
				for (let i = 1; i < travelEntry.route.pins.length; i++) {
					travelEntry.route.pins[i].pct = travelEntry.route.startPct + (i * pctPrPin);
				}
			}
		},
		convertPctToDate(pct) {
			const startDateInMilSec = this.entities[0].startDate.getTime(),
			pctDateInMilSec = startDateInMilSec + (this.startEndDateDiff * (pct/100)),
			pctDateInString = new Date(pctDateInMilSec).toISOString().substring(0, 10);
			return pctDateInString
		},
		updateTimelinePoint(newPoint) {
			this.timelinePoint = newPoint;
			this.timelineDate = this.convertPctToDate(this.timelinePoint);
		},
		setEntityPos(x,y){
			this.entities[0].x = x;
			this.entities[0].y = y;
		},
		updateEntity(entry){
			this.timelineEntryName = entry.name;

			if(entry.type === 'place') this.setEntityPos(entry.left, entry.top);
			else if(entry.type === 'travel') {
				this.getNextTravelPinPos(entry.route.pins);
			}
		},
		getNextTravelPinPos(routePins){
			const pinLowerThanPoint = routePins.filter(x => x.pct <= this.timelinePoint),
			closestPin = pinLowerThanPoint[pinLowerThanPoint.length-1];

			this.setEntityPos(closestPin.left, closestPin.top);
		}
	},
	watch: {
		timelinePoint(point){
			const storyEntriesLowerThanPoint = this.entities[0].story.filter(x => x.startPct <= point),
			closestEntry = storyEntriesLowerThanPoint[storyEntriesLowerThanPoint.length-1];

			this.updateEntity(closestEntry);
		}
	}
}
</script>

<style lang="less">
* { box-sizing: border-box }

body {
	margin: 0;
	font-family: sans-serif;
	font-size: 1rem;
	-webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>