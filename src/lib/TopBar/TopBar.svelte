<script lang="ts">
    import { page } from '$app/stores'

	let title: string;

	$: if ($page.url.pathname == "/") {
		title = "Account Manager"
	} else if ($page.url.pathname == '/add') {
		title = "Add Account"
	}
</script>

<main>
	<h1>{title}</h1>
	<a href="/add">+</a>
</main>

<style>
	main {
		height: 70px;
		border-bottom: 3px solid black;
		padding-left: 10px;
	}

	a {
		position: absolute;
		top: 5px;
		right: 20px;
		width: 75px;
		height: 75px;
		border: 2px solid black;
		border-radius: 50%;
		color: black;
		text-decoration: none;
		text-align: center;
		line-height: 75px;
		font-size: 75px;
	}

	/*
    a {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 40px;
        color: black;
        text-decoration: none;
    }

    #circle {
        position: absolute;
        border: 3px solid black;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        top: 10px;
        right: 10px;
		}
	*/
</style>
