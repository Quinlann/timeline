<script>
/*
const zoomElement = document.querySelector(".map");
let zoom = 1;
const ZOOM_SPEED = 0.1;

document.addEventListener("wheel", function(e) {
    if (e.deltaY > 0) {    
        zoomElement.style.transform = `scale(${zoom += ZOOM_SPEED})`;  
    } else {    
        zoomElement.style.transform = `scale(${zoom -= ZOOM_SPEED})`;
	}
});
*/
</script>

<template>
<div id="wrapper">
    <div class="map">
		<!--<img src="/src/assets/worldmap.svg">-->
		<div class="entity red e1">B</div>
		<div class="entity purple e2">H</div>
		<div class="entity green e3">H</div>
		<div class="entity blue e4">P</div>
	</div>
</div>
</template>

<style scoped lang="less">
@import "/src/global.less";

@icon-size: 2rem;

#wrapper {
	//background-color: @green;
	min-height: calc(100vh - @navigation-height);
	position: relative;
	padding-top: @navigation-height;
}

.map {
	background: url('/src/assets/worldmap.svg') no-repeat center;
	background-size: contain;
	width: 100%;
	min-height: 100vh;
	position: fixed;
}

.entity {
	width: @icon-size;
	height: @icon-size;
	border-radius: 50%;
	outline: 1px solid white;
	text-align: center;
	color: white;
	position: absolute;
	line-height: @icon-size;
	transition: .2s;
	cursor: pointer;
	&:hover { transform: scale(1.2) }
	
	&.red { background-color: red }
	&.purple { background-color: purple }
	&.green { background-color: green }
	&.blue { background-color: blue }
	
	&.e1 { top: 50%; left: 50% }
	&.e2 { top: 40%; left: 20% }
	&.e3 { top: 20%; left: 80% }
	&.e4 { top: 60%; left: 30% }
}
</style>