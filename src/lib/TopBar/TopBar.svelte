<script lang="ts">
    import { page } from '$app/stores'

    let title: string;

    $: if ($page.url.pathname == "/") {
        title = "Two Factor Authetication"
    } else if ($page.url.pathname == '/passwords') {
        title = "Passwords"
    } else if ($page.url.pathname == '/add') {
        title = "Add Account"
    }
</script>

<main>
    <h1>{title}</h1>
    <a href="add">+</a>
    <div id="circle"></div>
</main>

<style>
    main {
        height: 70px;
        width: 100vw;
        border-bottom: solid black;
        padding-left: 10px;
    }

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
</style>