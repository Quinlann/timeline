<template>
    <div class="sidebar left">
        <SidebarSearch/>
        <SidebarResults/>
    </div>
</template>

<script>
import SidebarSearch from './sidebar/SidebarSearch.vue'
import SidebarResults from './sidebar/SidebarResults.vue'

export default{
    components: {SidebarSearch,SidebarResults}
}
</script>

<style lang="less">
.sidebar {
	width: 15rem;
	position: fixed;
	top: 3rem;
	opacity: .5;
	transition: .5s;
	z-index: 1;
	&.left { left: 0 }
	&.right { right: 0 }
	.section { padding: 1rem }
	&:hover { opacity: 1 }
} 
</style>