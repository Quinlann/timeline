<template>
	<div class="info entityInfo">
		<div class="info__header">
			<div class="top">
				<div class="icon"><font-awesome-icon icon="fa-solid fa-user" /></div>
				<div class="name">[EntityName]</div>
				<button class="closeBtn"
					@click="closePop"
				><font-awesome-icon icon="fa-solid fa-xmark" /></button>
			</div>
			<div class="bottom">
				<div class="path">World 1</div>
			</div>
		</div>
		<div class="info__body">

			<div class="info__story">

			</div>
		</div>

		<div class="info__footer">
		</div>
	</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue';

	const props = defineProps(['closePop']);

	const createDrag = () => {
		// https://www.w3schools.com/howto/howto_js_draggable.asp
		const popupNode = document.querySelector('.info');
		dragElement(popupNode);

		function dragElement(elmnt) {
			var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
			popupNode.querySelector('.info__header').onmousedown = dragMouseDown;

			function dragMouseDown(e) {
				e = e || window.event;
				e.preventDefault();
				pos3 = e.clientX;
				pos4 = e.clientY;
				document.onmouseup = closeDragElement;
				document.onmousemove = elementDrag;
			}

			function elementDrag(e) {
				e = e || window.event;
				e.preventDefault();
				pos1 = pos3 - e.clientX;
				pos2 = pos4 - e.clientY;
				pos3 = e.clientX;
				pos4 = e.clientY;
				elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
				elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
			}

			function closeDragElement() {
				document.onmouseup = null;
				document.onmousemove = null;
			}
		}
	}

	onMounted(() => {
		createDrag();
	});

</script>

<style scoped lang="less">

@import "/src/global.less";

@timelineColWidth: 18rem;
@padding: 1rem;
@margin: 1rem;

.info {
	position: absolute;
	background-color: fade(black, 20%);
	backdrop-filter: blur(10px);
	max-width: 45rem;
	width: 45rem;
	overflow: hidden;
	z-index: 1;

	&.entityInfo {
		.info__header .path { display: none }
	}

	&__header {
		display: flex;
		flex-direction: column;
		padding: @padding;
		
		.icon, .name {
			padding: .25rem;
			border-radius: .25rem;
			font-size: 1.5rem;
			float: left;
			transition: .2s;
			color: @background-color-inverted;
		}

		.icon {
			margin-right: .5rem;
			width: 2.5rem;
			text-align: center;
		}
		
		.name {
			font-weight: bold;
		}

		.closeBtn {
			float: right;
			opacity: .5;
			color: @background-color-inverted;
			&:hover { opacity: 1; }
		}

		.path {
			font-size: .8rem;
		}
	}

	&__body {
		display: flex;
		min-height: 12rem;
		padding: 1rem;
		background-color: fade(white, 2%);
	}

	&__info {
		width: ~"calc(100% - (@{timelineColWidth} + @{margin}))";
		margin-right: @margin;
	}

	&__story {
		width: @timelineColWidth;
	}

	&__footer {
		width: 100%;
		clear: both;
		display: flex;
		justify-content: space-between;
	}

	.block-bit {
		float: left;
		padding: .5rem;
		background-color: fade(@white, 10%);
		border-radius: 1rem;
		margin: 0 .5rem .5rem 0;
		transition: .2s;
		color: @background-color-inverted;
		&:hover { background-color: fade(@white, 20%); }
		.icon { display: inline-block }
	}
}
</style>