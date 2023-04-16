<script></script>

<template>
<div class="section">
    <div class="entity">
        <div class="icon red">B</div>
        <div class="name">Benjamin Bak Egede</div>
    </div>
    <div class="entity">
        <div class="icon purple">H</div>
        <div class="name">Henrik Tobiesen Aabom</div>
    </div>
    <div class="entity">
        <div class="icon green">H</div>
        <div class="name">Han Solo</div>
    </div>
    <div class="entity">
        <div class="icon blue">P</div>
        <div class="name">Philip Marquard</div>
    </div>
    <div class="entity">
        <div class="icon brown">L</div>
        <div class="name">Luke Skywalker</div>
    </div>
    <div class="entity">
        <div class="icon orange">J</div>
        <div class="name">Jack Boone</div>
    </div>
</div>
</template>

<style scoped lang="less">
@import "/src/global.less";
@icon-size: 1.5rem;

.entity {
	display: flex;
	border-radius: @icon-size;
	padding: (@icon-size / 4);
	cursor: pointer;
	
	&:hover {
		background: @item-color;
		color: @item-color-inverted;
	}
	
	.icon, .name {
		height: @icon-size;
		line-height: @icon-size;
	}
	
	.icon {
		min-width: @icon-size;
		width: @icon-size;
		border-radius: 50%;
		outline: 1px solid white;
		text-align: center;
		color: white;
		
		&.red { background-color: red }
		&.purple { background-color: purple }
		&.green { background-color: green }
		&.blue { background-color: blue }
		&.brown { background-color: brown }
		&.orange { background-color: orange }
	}
	
	.name {
		float: left;
		margin-left: (@icon-size / 4);
		//font-weight: bold;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
}
</style>