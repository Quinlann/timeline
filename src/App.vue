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
            {
              id: 0,
              name: 'Romania',
              left: 54.6,
              top: 38.6,
              startDate: '1999-10-05',
              endDate: '1999-10-15'
            },
            {
              id: 1,
              name: 'Hongkong',
              top: 51,
              left: 80.7,
              startDate: '2000-03-21',
              endDate: '2000-03-27'
            },
            {
              id: 2,
              name: 'Colombia',
              top: 61,
              left: 26.7,
              startDate: '2000-05-10',
              endDate: '2000-05-20'
            },
            {
              id: 3,
              name: 'Budapest',
              top: 37.7,
              left: 52.8,
              startDate: '2000-07-12',
              endDate: '2000-07-13'
            },
            {
              id: 4,
              name: 'Rotterdam',
              top: 34.5,
              left: 48.9,
              startDate: '2000-08-26',
              endDate: '2000-08-28'
            },
            {
              id: 5,
              name: 'Romania',
              left: 54.6,
              top: 38.6,
              startDate: '2000-09-04',
              endDate: '2000-09-05'
            },
          ],
					text: '47',
          x: 54.6,
          y: 38.6,
          visible: true
				}
			],
      timelinePoint: 0,
      timelineDate: '1999-10-05'
    }
  },
  beforeMount() {
    this.setEntityIds();
    this.convertDateStrs();
    this.setStartEndDates();
    this.convertDatesToPct();
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
      this.entities[0].story.forEach((obj) => obj.endDateObj = new Date(obj.endDate));
    },
    setStartEndDates() {
      this.entities[0].startDate = this.entities[0].story[0].startDateObj;
      this.entities[0].endDate = this.entities[0].story[this.entities[0].story.length-1].endDateObj;
    },
    convertDatesToPct() {
      for (let i = 0; i < this.entities[0].story.length; i++) {
        const location = this.entities[0].story[i];
        location.startPct = (location.startDateObj.getTime() - this.entities[0].story[0].startDateObj.getTime()) / this.startEndDateDiff * 100;
        location.endPct = (location.endDateObj.getTime() - this.entities[0].story[0].startDateObj.getTime()) / this.startEndDateDiff * 100;
      }
    },
    convertPctToDate(pct) {
      const startDateInMilSec = this.entities[0].startDate.getTime(),
      pctDateInMilSec = startDateInMilSec + (this.startEndDateDiff * (pct/100)),
      pctDateInString = new Date(pctDateInMilSec).toISOString().substring(0, 10);
      return pctDateInString
    },
    updateTimelinePoint(newPoint) {
      this.timelinePoint = newPoint / 10;
      this.timelineDate = this.convertPctToDate(this.timelinePoint);
    }
  },
  watch: {
    timelinePoint(point){
      const storyEntriesLowerThanPoint = this.entities[0].story.filter(x => x.startPct <= point && x.endPct >= point);

      if(storyEntriesLowerThanPoint.length <= 0) {
        this.entities[0].visible = false;
        return
      }

      this.entities[0].visible = true;
      const closestEntry = storyEntriesLowerThanPoint[storyEntriesLowerThanPoint.length-1];
      this.entities[0].x = closestEntry.left;
      this.entities[0].y = closestEntry.top;
    }
  }
}
</script>

<template>
  <Navigation :addEntity="addEntity"/>
  <SideBar/>
  <Timeline
    @update-timeline-point="updateTimelinePoint"
    :pointLabel="this.timelineDate"
  />
  <Wrapper :entities="entities"/>
</template>

<style lang="less">
* { box-sizing: border-box }

body {
	margin: 0;
	font-family: sans-serif;
	font-size: 1rem;
}
</style>