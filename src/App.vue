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
					color: 'purple',
					x: 50,
					y: 50,
					text: '0'
				},
				{
					color: 'blue',
					x: 25,
					y: 33,
					text: '1'
				}
			]
    }
  },
  beforeMount() {
    this.setEntityIds();
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
    }
  }
}
</script>

<template>
  <Navigation :addEntity="addEntity"/>
  <SideBar/>
  <Timeline/>
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