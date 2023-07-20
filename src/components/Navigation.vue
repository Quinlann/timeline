<template>
	<div id="navigation">
		<div class="dropdowns">
			<div class="dropdowns__collected world-specific">
				<NavBtn
					title="Worlds"
				/>
				<NavBtn
					title="Locations"
					:items="locations"
				/>
				
				<NavBtn
					title="Routes"
				/>
			</div>
			<NavBtn 
				title="Entities"
				:items="entities"
				@add-entity="addEntity"
				@open-entity="openEntity"
			/>
			<NavBtn
				title="Events"
			/>
			<!-- :dropdownOptions="settings.events" -->
		</div>
		<div class="settings">
			<font-awesome-icon icon="fa-solid fa-sliders" />
			<div class="settings__panel">
				<div class="settings__block">
					<div class="setting">Dark mode</div>
					<input type="checkbox">
				</div>
				<div class="settings__block">
					<div class="setting">Date format</div>
					<select class="date-format" id="dateFormat">
						<option value="dmy">d-m-y</option>
						<option value="mdy">d-m-y</option>
						<option value="ymd">y-m-d</option>
					</select>
				</div>
				<div class="settings__block">
					<div class="setting">Sidebar placement</div>
					<select class="sidebar-setting" id="sideBar">
						<option value="left">Left</option>
						<option value="right">Right</option>
					</select>
				</div>
				<div class="settings__block">
					<div class="setting"></div>
					<button>Close all windows</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import NavBtn from './navigation/NavBtn.vue';

const props = defineProps(['entities','locations','addEntity','openEntity']);

</script>

<style scoped lang="less">
@import "/src/global.less";
@worldColor: @turquoise;

#navigation {
	background-color: fade(black, 10%);
	backdrop-filter: blur(10px);
	height: @navigation-height;
	width: 100%;
	position: fixed;
	top: 0;

	.dropdowns {
		display: inline-flex;
		align-items: center;
		height: 100%;

		&__collected {
			display: flex;
			align-items: center;
			height: 100%;
			padding: 0 .25rem;
			margin-right: .25rem;
			&:first-child { border-radius: 0 2rem 2rem 0 }
			&.world-specific { background: fade(@worldColor, 10%) }
		}
	}

	@settingsBtnSize: 2rem;

	.settings {
		background-color: fade(@white, 20%);
		color: @background-color-inverted;
		border-radius: (@settingsBtnSize / 2);
		width: @settingsBtnSize;
		height: @settingsBtnSize;
		line-height: @settingsBtnSize;
		text-align: center;
		float: right;
		margin: .5rem;
		position: relative;
		
		&:hover {
			background-color: fade(@white, 30%);
			border-radius: (@settingsBtnSize / 2) (@settingsBtnSize / 2) 0 0;
			.settings__panel { display: block }
		}

		&__panel {
			display: none;
			min-width: 13rem;
			padding: 1rem;
			text-align: left;
			font-size: .8rem;
			background-color: fade(@white, 30%);
			position: absolute;
			top: 100%; right: 0;
			border-radius: (@settingsBtnSize / 2) 0 (@settingsBtnSize / 2) (@settingsBtnSize / 2);
			line-height: 1;
		}

		&__block {
			height: 1.5rem;
			display: flex;
			align-items: center;
			justify-content: space-between;
			&:not(:last-child) { margin-bottom: .5rem }
		}

		input { margin: 0 }

		select {
			border-radius: 1rem;
			background-color: fade(black, 20%);
			color: @white;
			border: none;
			option { background-color: fade(black, 80%) }
		}

		button {
			padding: .25rem;
			width: 100%;
			border-radius: 1rem;
			background: fade(black, 20%);
			color: @white;
			&:hover { background: @item-color }
		}
	}
}
</style>