<template>
	<div class="page entityPage">
		<div class="page__header">
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
		<div class="page__body">
			<div class="page__description">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
			<div class="page__rightCol">
				<div class="images__container">
					<div class="images__main"></div>
					<div class="images__extra">
						<div class="image"></div>
						<div class="image"></div>
					</div>
				</div>
				<div class="info__container ">
					<p>Nicknames:</p>
					<p>Birth:</p>
					<p>Death:</p>
					<p>Skills:</p>
					<p>Teams:</p>
					<p>Categories:</p>
				</div>
			</div>
		</div>

		<div class="page__footer">
			<div class="timeline__container">
				<div class="timeline__bar"></div>
				<div class="timeline__entrys">
					<div class="entry__section birth">
						<div class="entry__date">05.10.1992</div>
						<div class="entry__what">Jyllinge</div>
						<div class="entry__icon"><font-awesome-icon icon="fa-solid fa-sun"/></div>
					</div>
					<div class="entry__section place">
						<div class="entry__date">05.10.1992</div>
						<div class="entry__what">Romania</div>
						<div class="entry__icon"><font-awesome-icon icon="fa-solid fa-location-dot"/></div>
					</div>
					<div class="entry__section place">
						<div class="entry__date">05.10.1992</div>
						<div class="entry__what">Romania</div>
						<div class="entry__icon"><font-awesome-icon icon="fa-solid fa-location-dot"/></div>
					</div>
					<div class="entry__section place">
						<div class="entry__date">05.10.1992</div>
						<div class="entry__what">Romania</div>
						<div class="entry__icon"><font-awesome-icon icon="fa-solid fa-location-dot"/></div>
					</div>
					<div class="entry__section place">
						<div class="entry__date">05.10.1992</div>
						<div class="entry__what">Romania</div>
						<div class="entry__icon"><font-awesome-icon icon="fa-solid fa-location-dot"/></div>
					</div>
					<div class="entry__section place">
						<div class="entry__date">05.10.1992</div>
						<div class="entry__what">Romania</div>
						<div class="entry__icon"><font-awesome-icon icon="fa-solid fa-location-dot"/></div>
					</div>
					<div class="entry__section place">
						<div class="entry__date">05.10.1992</div>
						<div class="entry__what">Romania</div>
						<div class="entry__icon"><font-awesome-icon icon="fa-solid fa-location-dot"/></div>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref, onMounted } from 'vue';

	const props = defineProps(['closePop']);

	const createDrag = () => {
		// https://www.w3schools.com/howto/howto_js_draggable.asp
		const popupNode = document.querySelector('.page');
		dragElement(popupNode);

		function dragElement(elmnt) {
			var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
			popupNode.querySelector('.page__header').onmousedown = dragMouseDown;

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

@rightColWidth: 18rem;
@padding: 1rem;
@margin: 1rem;

.page {
	position: absolute;
	background-color: fade(black, 20%);
	backdrop-filter: blur(10px);
	max-width: 45rem;
	width: 45rem;
	overflow: hidden;
	z-index: 1;

	&.entityPage {
		.page__header .path { display: none }
	}

	&__header {
		display: flex;
		flex-direction: column;
		padding: @padding;
		
		.icon, .name {
			font-size: 1.5rem;
			float: left;
			color: @background-color-inverted;
		}

		.icon {
			margin-right: 1rem;
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

	&__description {
		width: ~"calc(100% - (@{rightColWidth} + @{margin}))";
		margin-right: @margin;
	}

	&__rightCol {
		width: @rightColWidth;
	}

	&__footer {
		width: 100%;
		clear: both;
		display: flex;
		justify-content: space-between;
		overflow:auto;
	}

	.images {
		&__container {
			width: @rightColWidth;
			margin-bottom: @margin;
		}

		&__main,
		&__extra .image {
			background-color: fade(@white, 10%);
			border-radius: .5rem;
			transition: .2s;
			&:hover { background-color: fade(@white, 20%); }
		}
		
		&__main {
			width: 100%;
			height: @rightColWidth * 0.66;
			margin-bottom: .5rem;
		}

		&__extra {
			width: 100%;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-column-gap: .5rem;
			grid-row-gap: .5rem;
			.image { height: 3rem }
		}
	}

	.info {
		&__container {
			width: @rightColWidth;
			background-color: fade(black, 20%);
			padding: 1rem;
			border-radius: .5rem;
		}
	}

	.timeline {
		&__container {
			width: 100%;
			padding: 1rem 1.5rem;
			position: relative;
		}

		&__entrys {
			width: 100%;
			display: flex;
			justify-content: space-between;
		}

		&__bar {
			width: ~"calc(100% - (1.5rem * 2))";
			height: .3rem;
			background-color: fade(@white, 10%);
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	.entry {
		&__section {
			background-color: fade(@white, 10%);
			width: 0;
			height: 6rem;
			display: flex;
			align-items: center;
    		justify-content: center;
			position: relative;

			&:nth-child(odd) {
				&:before { bottom: 50% }
				.entry__date { top: 0 }
				.entry__what { top: 1rem }
			}

			&:nth-child(even) {
				&:before { top: 50% }
				.entry__date { bottom: 0 }
				.entry__what { bottom: 1rem }
			}

			&:last-child {
				.entry__date,
				.entry__what {
					right: .25rem;
					left: auto;
				}
			}

			&:before {
				content: '';
				position: absolute;
				width: 1px;
				height: 0;
				background-color: @white;
				transition: .3s;
				z-index: -1;
			}

			&.birth {
				.entry__icon { color: @yellowDark }
				&:hover, &.active {
					.entry__icon { 
						.gradient(@yellowDark, darken(@yellowDark, 10%));
					}
				}
			}

			&.place {
				.entry__icon { color: @red }
				&:hover, &.active {
					.entry__icon {
						.gradient(@red, darken(@red,10%));
					}
				}
			}

			&:hover, &.active {
				&:before { height: 50% }
				.entry__date, .entry__what { max-width: 10rem }
				.entry__icon { color: @white }
			}
		}

		&__date,
		&__what {
			position: absolute;
			left: .25rem;
			overflow: hidden;
			max-width: 0;
			transition: .3s linear ;
		}

		&__date {
			font-size: .8rem;
			transition-delay: .1s;
		}

		&__what {
			font-size: .7rem;
			transition-delay: .2s;
		}

		&__icon {
			height: 1.5rem;
			min-width: 1.5rem;
			background-color: @white;
			border-radius: 1rem;
			text-align: center;
			line-height: 1.5rem;
		}
	}
}
</style>