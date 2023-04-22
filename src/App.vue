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
              location: 'Romania',
              left: 54.6,
              top: 38.6,
              date: '1999-10-05'
            },
            {
              id: 1,
              location: 'Hongkong',
              top: 51,
              left: 80.7,
              date: '2000-03-21'
            },
            {
              id: 2,
              location: 'Colombia',
              top: 61,
              left: 26.7,
              date: '2000-05-10'
            },
            {
              id: 3,
              location: 'Budapest',
              top: 37.7,
              left: 52.8,
              date: '2000-07-12'
            },
            {
              id: 4,
              location: 'Rotterdam',
              top: 34.5,
              left: 48.9,
              date: '2000-08-26'
            },
            {
              id: 5,
              location: 'Romania',
              left: 54.6,
              top: 38.6,
              date: '2000-09-04'
            },
          ],
					text: '47',
          x: 54.6,
          y: 38.6,
				}
			],
      timelinePoint: 0,
      timelineDate: '1999-10-05'
    }
  },
  beforeMount() {
    this.setEntityIds();
    this.convertDateStr();
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
    convertDateStr() {
      this.entities[0].story.forEach((obj) => obj.dateObj = new Date(obj.date));
    },
    convertDatesToPct() {
      this.entities[0].startDate = this.entities[0].story[0].dateObj;
      this.entities[0].endDate = this.entities[0].story[this.entities[0].story.length-1].dateObj;

      for (let i = 0; i < this.entities[0].story.length; i++) {
        const location = this.entities[0].story[i];
        location.pct = (location.dateObj.getTime() - this.entities[0].story[0].dateObj.getTime()) / this.startEndDateDiff * 100;
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
  mounted(){
    console.log(this.entities[0]);
  },
  watch: {
    timelinePoint(point){
      const storyEntriesLowerThanPoint = this.entities[0].story.filter(x => x.pct <= point),
      closestEntry = storyEntriesLowerThanPoint[storyEntriesLowerThanPoint.length-1];
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