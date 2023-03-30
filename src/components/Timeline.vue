<script>
export default {}
</script>

<template>
<div class="timeline__container">
    <div class="timeline__counter">1974</div>
    <input type="range" class="timeline">
    <div class="timeline__selection"></div>
</div>
</template>

<style scoped lang="less">
.timeline__container {
	position: fixed;
	bottom: 0;
	height: 10rem;
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
    justify-content: center;
	z-index: 1;
}

.timeline__container:hover .timeline::-webkit-slider-thumb {
	height: 1rem;
	width: 2rem;
}

.timeline__container:active .timeline__counter {
	transform: scale(1.5);
	color: red;
}

.timeline__counter {
	font-size: 2rem;
	transform-origin: bottom;
	transition: .2s;
}

.timeline {
	margin: 2rem;
	width: calc(100% - 4rem);
	height: 2px;
	-webkit-appearance: none;
	cursor: pointer;
	background: red;
}

.timeline::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 2px;
  height: 1.5rem;
  border-radius: 1rem;
  background: red;
  transition: .2s;
}

.timeline::-moz-range-thumb {
  width: 1.2rem;
  height: 3rem;
  border-radius: .5rem;
  background: red;
}
</style>