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
					timeline: [
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
					text: '47'
				}
			],
      timelinePoint: 0
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
      this.entities[0].timeline.forEach((obj) => obj.dateObj = new Date(obj.date));
    },
    convertDatesToPct() {
      this.entities[0].startDate = this.entities[0].timeline[0].dateObj;
      this.entities[0].endDate = this.entities[0].timeline[this.entities[0].timeline.length-1].dateObj;

      for (let i = 0; i < this.entities[0].timeline.length; i++) {
        const location = this.entities[0].timeline[i];
        location.pct = (location.dateObj.getTime() - this.entities[0].timeline[0].dateObj.getTime()) / this.startEndDateDiff * 100;
      }
    },
    updateTimelinePoint(newPoint) {
      this.timelinePoint = newPoint / 10;
    }
  },
  watch: {
    timelinePoint(point){
      const storyEntriesLowerThanPoint = this.entities[0].timeline.filter(x => x.pct <= point),
      closestEntry = storyEntriesLowerThanPoint[storyEntriesLowerThanPoint.length-1];
      console.log('closestEntry:',closestEntry);
    }
  }
}
</script>

<template>
  <Navigation :addEntity="addEntity"/>
  <SideBar/>
  <Timeline
    @update-timeline-point="updateTimelinePoint"
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