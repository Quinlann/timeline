<script>
</script>

<template>
    
    <div class="creation entityCreator">
		<div class="creation__header">
			<div class="top">
				<div class="icon"><font-awesome-icon icon="fa-solid fa-user" /></div>
				<div class="name">Benjamin Bak Egede</div>
				<div class="editBtn"><font-awesome-icon icon="fa-solid fa-pen" /></div>
				<div class="closeBtn"><font-awesome-icon icon="fa-solid fa-xmark" /></div>
			</div>
			<div class="bottom">
				<div class="path">World 1</div>
			</div>
		</div>
		<div class="creation__info">
			<div class="block">
				<div class="block__header">
					<div class="block__title">Nickname(s)</div>
					<div class="removeBtn"><font-awesome-icon icon="fa-solid fa-minus" /></div>
				</div>
				<div class="block__content">
					<div class="info-bit">Bem</div>
					<div class="info-bit btn add"><font-awesome-icon icon="fa-solid fa-plus" /></div>
				</div>
			</div>
			<div class="block">
				<div class="block__header">
					<div class="block__title">Description</div>
					<div class="removeBtn"><font-awesome-icon icon="fa-solid fa-minus" /></div>
				</div>
				<div class="block__content"><input type="textarea"></div>
			</div>
			<div class="block">
				<div class="block__header">
					<div class="block__title">Images</div>
					<div class="removeBtn"><font-awesome-icon icon="fa-solid fa-minus" /></div>
				</div>
				<div class="block__content">
					<div class="info-bit img"></div>
					<div class="info-bit img btn add"><font-awesome-icon icon="fa-solid fa-plus" /></div>
				</div>
			</div>
		</div>

		<div class="creation__timeline">
			<div class="block">
				<div class="block__title">Timeline</div>
				<div class="block__content">					
					<div class="time">
						<div class="type birth">
							<div class="date">05.10.1992</div>
							<div class="icon"><font-awesome-icon icon="fa-solid fa-sun" /></div>
							<div class="setting">Jyllinge</div>
						</div>
						<div class="btns">
							<div class="editBtn"><font-awesome-icon icon="fa-solid fa-pen" /></div>
						</div>
					</div>

					<div class="time">
						<div class="type place">
							<div class="date">03.21.2001</div>
							<div class="icon"><font-awesome-icon icon="fa-solid fa-location-dot" /></div>
							<div class="setting">Roskilde</div>
						</div>
						<div class="btns">
							<div class="editBtn"><font-awesome-icon icon="fa-solid fa-pen" /></div>
						</div>
					</div>

					<div class="time">
						<div class="type travel">
							<div class="date">2004</div>
							<div class="icon"><font-awesome-icon icon="fa-solid fa-route" /></div>
							<div class="setting">T: 50% L: 10%</div>
						</div>
						<div class="btns">
							<div class="editBtn"><font-awesome-icon icon="fa-solid fa-pen" /></div>
						</div>
					</div>

					<div class="time">
						<div class="type place">
							<div class="date">03.02.2004</div>
							<div class="icon"><font-awesome-icon icon="fa-solid fa-location-dot" /></div>
							<div class="setting">Jyllinge</div>
						</div>
						<div class="btns">
							<div class="editBtn"><font-awesome-icon icon="fa-solid fa-pen" /></div>
						</div>
					</div>

					<div class="time">
						<div class="type death">
							<div class="date">05.10.2023</div>
							<div class="icon"><font-awesome-icon icon="fa-solid fa-skull" /></div>
							<div class="setting">Roskilde</div>
						</div>
						<div class="btns">
							<div class="editBtn"><font-awesome-icon icon="fa-solid fa-pen" /></div>
						</div>
					</div>

					<div class="time">
						<div class="type birth">
							<div class="date">05.10.2024</div>
							<div class="icon"><font-awesome-icon icon="fa-solid fa-sun" /></div>
							<div class="setting">Roskilde</div>
						</div>
						<div class="btns">
							<div class="editBtn"><font-awesome-icon icon="fa-solid fa-pen" /></div>
						</div>
					</div>

					<div class="time">
						<div class="type change">
							<div class="date">05.10.2024</div>
							<div class="icon"><font-awesome-icon icon="fa-solid fa-feather-pointed" /></div>
							<div class="setting">Bing Bong</div>
						</div>
						<div class="btns">
							<div class="editBtn"><font-awesome-icon icon="fa-solid fa-pen" /></div>
						</div>
					</div>

					<div class="time add"><font-awesome-icon icon="fa-solid fa-plus" /></div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="less">

@import "/src/global.less";

@timelineColWidth: 18rem;
@padding: .5rem;
@margin: .5rem;

.creation {
	//display: none;
	background-color: fade(black, 20%);
	backdrop-filter: blur(10px);
	max-width: 45rem;
	width: 45rem;
	border-radius: .5rem;
	padding: 1rem;
	z-index: 1;

	&.entityCreator {
		.creation__header .path { display: none }
	}

	&__header {
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid fade(black, 50%);
		padding-bottom: .5rem;
		margin-bottom: 1rem;
		&:hover .editBtn { opacity: 1 }
		
		.icon {
			margin-right: .5rem;
			float: left;
			background-color: fade(@white, 10%);
			padding: .25rem;
			width: 2rem;
			text-align: center;
			border-radius: .25rem;
			&:hover { background-color: fade(@white, 20%) }
		}
		
		.name {
			font-weight: bold;
			float: left;
			font-size: 1.5rem;
		}

		.editBtn {
			height: 1.5rem;
			float: left;
			line-height: 1.5rem;
			opacity: 0;
		}

		.closeBtn {
			float: right;
			opacity: .5;
			&:hover { opacity: 1; }
		}

		.path {
			font-size: .8rem;
		}
	}

	&__info {
		float: left;
		width: ~"calc(100% - (@{timelineColWidth} + @{margin}))";
		margin-right: @margin;
	}

	&__timeline {
		float: left;
		width: @timelineColWidth;
		.block__content { flex-direction: column }
	}

	.block {
		&:not(:last-child) { margin-bottom: 1rem }
		
		&__header {
			display: flex;
			justify-content: space-between;

			.removeBtn { opacity: 0 }
			&:hover .removeBtn { opacity: 1 }
		}

		&__title {
			font-weight: bold;
			margin: 0 0 .25rem .25rem;
		}

		&__content {
			padding: .5rem;
			background-color: fade(black, 20%);
			border-radius: 1.5rem;
			display: flex;
		}

		.info-bit {
			background-color: fade(@white, 20%);
			border-radius: 1rem;
			display: inline-block;
			padding: 0 .5rem;
			font-size: .8rem;
			height: 1.5rem;
			line-height: 1.5rem;
			overflow: hidden;
			transition: .2s;
			&:not(:last-child) { margin-right: .25rem }
			&:not(.btn):hover { padding-right: 2rem }
		}

		.btn {
			background-color: fade(@white, 5%);
			border-radius: 1rem;
			width: 1.5rem;
			padding: 0;
			&:hover { background-color: fade(@white, 20%) }
			&.add { text-align: center }
		}

		.img {
			height: 5rem;
			width: 4rem;
			&.add { line-height: 5rem }
		}

		input {
			width: 100%;
			border: none;
			padding: .25rem;
			background-color: transparent;
			//border-radius: 1rem;
			color: @background-color-inverted;
			white-space:wrap;
		}

		.time {
			display: flex;
			font-size: .8rem;
			position: relative;
			&:not(:last-child) { margin-bottom: .25rem }
			&:hover .type { width: ~"calc(100% - 2rem)"; }

			.type {
				width: 100%;
				text-align: center;
				display: flex;
				justify-content: center;
    			align-items: center;
				padding: .25rem;
				border-radius: 1rem;
				transition: .2s;
				position: relative;
				z-index: 1;
				
				.icon {
					color: @white;
					text-align: center;
					width: 2rem;
				}
				
				&.birth { .gradient(@yellowDark, darken(@yellowDark, 10%)); }
				&.place { .gradient(@red, darken(@red,10%)); }
				&.travel { .gradient(@blue, darken(@blue,10%)); }
				&.death { .gradient(@purple, darken(@purple,10%)); }
				&.change { .gradient(grey, darken(grey,10%)); }

				.date, .setting {
					width: 50%;
					background-color: fade(@black, 20%);
					text-align: center;
					padding: .25rem;
					border-radius: 1rem;
					overflow:hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}

			.btns {
				display: flex;
				align-items: center;
				position: absolute;
				top: 0; right: 0;
				height: 100%;
			}

			&.add {
				text-align: center;
				padding: .5rem;
				border-radius: 1rem;
				background-color: fade(@white, 10%);
				display: flex;
				justify-content: center;
				transition: .2s;
				&:hover { background-color: fade(@white, 20%) }
			}
		}
	}

	.editBtn, .deleteBtn, .removeBtn {
		padding: 0 .5rem;
		color: fade(@white, 50%);
		transition: .2s;
	}

	.editBtn:hover, .removeBtn:hover  { color: fade(@white, 80%) }
	.deleteBtn:hover { color: fade(@red, 80%) }
}
</style>