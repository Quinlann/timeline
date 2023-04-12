<script></script>

<template>
    <div class="section">
        <select class="category" name="Category" id="category">
            <option value="Category">Category</option>
            <option value="Stories">Stories</option>
            <option value="Locations">Locations</option>
        </select>
		<div class="search-container">
			<font-awesome-icon icon="fa-solid fa-magnifying-glass" />
			<input class="search" value="Search">
		</div>
    </div>
</template>

<style scoped lang="less">
.category {
	padding: .25rem .5rem;
	outline: 1px solid black;
	border-radius: 1.5rem;
	font-weight: bold;
	margin-bottom: .5rem;
	width: 100%;
	background-color: transparent;
	&:hover { background-color: fade(white, 20%) }
	
	&:after {
		content: 'v';
		float: right;
	}
}

.search {
	padding: .5rem;
	border-radius: 1rem;
	background-color: fade(black, 20%);
	text-align: center;
	border: none;
	width: 100%;
	margin-left: 10px;
	&:hover { background-color: fade(black, 30%) }
	
	&-container {
		display: flex;
		align-items: center;
	}
}
</style>