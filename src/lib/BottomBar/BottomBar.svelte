<script lang="ts">
    import passImg from '$lib/BottomBar/key.png'
    import tfaImg from '$lib/BottomBar/home.png'

    let tfa: any;
    let pass: any;
    let init = false;

    function onTfa() {
        tfa.style.background="blue"
        pass.style.background="red"
    }

    function onPass() {
        pass.style.background="blue"
        tfa.style.background="red"
    }

    $: if (tfa != undefined && pass != undefined && !init) {
        if (document.URL.includes("password")) {
            tfa.style.background="red"
            pass.style.background="blue"
        } else {
            tfa.style.background="blue"
            pass.style.background="red"
        }
        init = true
    }

</script>

<main>
    <a href="/" on:click={onTfa} bind:this={tfa} id="tfa">
        <img src={tfaImg} alt="home icon" />
    </a>
    <a href="/passwords" on:click={onPass} bind:this={pass} id="pass">
        <img src={passImg} alt="password icon"/>
    </a>
</main>

<style>
    main {
        position: absolute;
        bottom: 0;
        right: 0;
        display: flex;
        width: 100vw;
        height: 100px;
    }

    #tfa {
        background-color: blue;
    }

    #pass {
        background-color: red;
    }

    a {
        width: 50%;
        flex-grow: 1;
        color: black;
        text-decoration-line: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        height: 80%;
    }

    :global(body) {
        margin: 0;
        padding: 0;
    }
</style>