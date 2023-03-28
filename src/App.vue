<script>
import ChildComponent from './components/ChildComponent.vue'

export default {
  components: {ChildComponent},
  data() {
    return {
      propForChild: 'Hello from parent'
    }
  }
}
</script>

<template>
  <ChildComponent :parentProp="propForChild" />
</template>

<style scoped>
</style>