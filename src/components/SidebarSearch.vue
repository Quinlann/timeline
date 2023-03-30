<script></script>

<template>
    <div class="section">
        <select class="category" name="Category" id="category">
            <option value="Category">Category</option>
            <option value="Stories">Stories</option>
            <option value="Locations">Locations</option>
        </select>
        <input class="search" value="Search">
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
}

.category:after {
	content: 'v';
	float: right;
}

.category:hover {
	background-color: rgba(255,255,255,.2);
}

.search {
	padding: .5rem;
	border-radius: 1rem;
	background-color: rgba(0,0,0,.2);
	text-align: center;
	border: none;
	width: 100%;
}

.search:hover {
	background-color: rgba(255,255,255,.3);
}
</style>