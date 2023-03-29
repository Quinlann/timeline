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
  <div id="my-class">Now with Less</div>
</template>

<style scoped lang="less">
@my-color: yellow;
#my-class {
  background-color: @my-color;
}
</style>
