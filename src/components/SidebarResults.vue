<script></script>

<template>
<div class="section">
    <div class="character">
        <div class="icon red">B</div>
        <div class="name">Benjamin Bak Egede</div>
    </div>
    <div class="character">
        <div class="icon purple">H</div>
        <div class="name">Henrik Tobiesen Aabom</div>
    </div>
    <div class="character">
        <div class="icon green">H</div>
        <div class="name">Han Solo</div>
    </div>
    <div class="character">
        <div class="icon blue">P</div>
        <div class="name">Philip Marquard</div>
    </div>
    <div class="character">
        <div class="icon brown">L</div>
        <div class="name">Luke Skywalker</div>
    </div>
    <div class="character">
        <div class="icon orange">J</div>
        <div class="name">Jack Boone</div>
    </div>
</div>
</template>

<style scoped lang="less">
.character {
	height: 2rem;
	display: flex;
	border-radius: 2rem;
	padding: .5rem;
	cursor: pointer;
}

.character:hover {
	background-color: rgba(255,255,255,.2);
}

.character div {
	height: 2rem;
	line-height: 2rem;
}

.character .icon {
	min-width: 2rem;
	width: 2rem;
	border-radius: 50%;
	outline: 1px solid #ffffff;
	text-align: center;
	color: #ffffff;
}

.icon.red { background-color: red }
.icon.purple { background-color: purple }
.icon.green { background-color: green }
.icon.blue { background-color: blue }
.icon.brown { background-color: brown }
.icon.orange { background-color: orange }

.character .name {
	float: left;
	margin-left: .5rem;
	font-weight: bold;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
</style>