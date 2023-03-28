<script>
export default {
  props: ['parentProp'],
  data() {
    return {
      myProp: 'Hello from child!'
    }
  }
}
</script>

<template>
  <h1>{{ parentProp }}</h1>
  {{  myProp }}
</template>

<style scoped>

</style>
