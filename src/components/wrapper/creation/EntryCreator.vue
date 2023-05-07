<template>
    <div class="storyEntryCreator place">
		<div class="block when">
			<h3>When</h3>
			<div class="block__inner">
				<input type="text">
			</div>
		</div>
		<div class="block what">
			<h3>What</h3>
			<div class="block__inner">
				<select class="entrySetting" name="entrySetting">
					<option value="Place">Place</option>
					<option value="Travel">Travel</option>
				</select>
				<select class="placeSetting" name="placeSetting">
					<option value="Location">Location</option>
					<option value="Coordinates">Coordinates</option>
					<option value="Unknown">Unknown</option>
				</select>
				<select class="locationList" name="locationList">
					<option value="Location1">Location1</option>
					<option value="Location2">Location2</option>
				</select>
			</div>
		</div>
		<div class="block why">
			<h3>Why</h3>
			<div class="block__inner">
				<input type="text">
			</div>
		</div>
		<div class="storyEntryCreator__footer">
			<button class="deleteBtn"
				@click="this.$emit('close-entry-creator')"
			><font-awesome-icon icon="fa-solid fa-trash" /></button>
			<button class="acceptBtn"><font-awesome-icon icon="fa-solid fa-check" /></button>
		</div>
	</div>
</template>

<script></script>

<style scoped lang="less">

@import "/src/global.less";

.storyEntryCreator {
	max-width: 12rem;
	width: 12rem;
	padding: .5rem;
	background: @black;
	text-align: center;
	border-radius: 1.5rem;
	position: absolute;
	z-index: 1;

	input, select {
		padding: .5rem;
		border-radius: 1rem;
		border: none;
		color: white;
	}

	select {
		background-color: fade(@black, 20%);
		&:not(:last-child) { margin-bottom: .25rem; }
		option { background-color: fade(black, 80%) }
	}

	input {
		background-color: fade(@white, 20%);
	}

	.block {
		&__inner {
			display: flex;
			flex-direction: column;
		}

		h3 { margin-bottom: .5rem }

		&.when input { text-align: center }

		&.what {
			select { text-align: center }
		}
	}

	&.place {
		outline: .2rem solid @red;
		
		.block.what .block__inner {
			.gradient(@red, darken(@red,10%));
			padding: .25rem;
			border-radius: 1.2rem;
		}
	}

	&__footer {
		width: 100%;
		clear: both;
		padding-top: 1rem;
		display: flex;
		justify-content: space-between;

		.deleteBtn, .acceptBtn {
			width: 2.5rem;
			height: 2.5rem;
			line-height: 2.5rem;
			text-align: center;
			border-radius: 50%;
		}

		.deleteBtn {
			background-color: fade(@red, 20%);
			&:hover { background-color: fade(@red, 30%) }
		}

		.acceptBtn {
			background-color: fade(@green, 20%);
			&:hover { background-color: fade(@green, 30%) }
		}
	}
}

</style>