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
					text: 'A'
				},
				{
					color: 'blue',
					x: 25,
					y: 33,
					text: 'B'
				}
			]
    }
  },
  beforeMount() {
    this.entities.forEach((obj, index) => obj.id = index);
  },
  mounted(){
    setTimeout(() => {
      console.log('adding');
      this.entities.push({
        color: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`,
        x: Math.floor(Math.random() * 101),
        y: Math.floor(Math.random() * 101),
        text: 'C'
      });
    }, 1000);
  }
}
</script>

<template>
  <Navigation/>
  <SideBar/>
  <Timeline/>
  <Wrapper :entities="entities"/>
</template>

<style lang="less">
body {
	margin: 0;
	font-family: sans-serif;
	font-size: 1rem;
}
</style>