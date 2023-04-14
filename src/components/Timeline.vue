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
@import "/src/global.less";

.timeline {
	margin: 2rem;
	width: calc(100% - 4rem);
	height: 5px;
	border-radius: 5px;
	-webkit-appearance: none;
	cursor: pointer;
	background: @item-color;

	&__counter {
		font-size: 2rem;
		transform-origin: bottom;
		transition: .2s;
	}
	
	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 5px;
		height: 2rem;
		border-radius: 1rem;
		background: @item-color;
		transition: .2s;
	}
	
	&::-moz-range-thumb {
		width: 1.2rem;
		height: 3rem;
		border-radius: .5rem;
		background: @item-color;
	}
	
	&__container {
		position: fixed;
		bottom: 0;
		height: 10rem;
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		z-index: 1;
		
		&:hover .timeline::-webkit-slider-thumb {
			height: 1.5rem;
			width: 3rem;
		}
		
		&:active .timeline__counter {
			transform: scale(2);
			color: @pink;
		}
	}
}
</style>