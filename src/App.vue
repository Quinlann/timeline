<script>
import Navigation from './components/Navigation.vue'
import Timeline from './components/Timeline.vue'
import Wrapper from './components/Wrapper.vue'
import SideBar from './components/SideBar.vue'

export default {
  components: {Navigation,Timeline,Wrapper,SideBar},
  data() {
    return {}
  }
}
</script>

<template>
  <Navigation/>
  <SideBar/>
  <Timeline/>
  <Wrapper/>
</template>

<style lang="less">
body {
	margin: 0;
	font-family: sans-serif;
	font-size: 1rem;
}
</style>