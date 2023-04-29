<template>
    <div :style="{ 
        left: this.x + '%',
        top: this.y + '%',
        backgroundColor: this.color,
        display: this.visible ? 'block' : 'none'
        }" 
        class="entity e4">{{ this.name }}</div>    
</template>

<script>
export default {
    props: ['color','x','y','name','visible'],
}
</script>

<style></style>