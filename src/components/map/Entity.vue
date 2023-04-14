<script>
export default {
    props: ['color','x','y','name'],
}
</script>

<template>
    <div :style="{ left: this.x + '%', top: this.y + '%', backgroundColor: this.color}" class="entity e4">{{ this.name }}</div>    
</template>

<style></style>