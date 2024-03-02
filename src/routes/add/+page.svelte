<script>
    let pageState = "default"
    
    function onQrCode() {
        pageState = "Qr Code"
    }

    function onManual() {
        pageState = "Manual"
    }
</script>

<main>
    {#if pageState == "default"}
        <button class="box" id="qrcode" on:click={onQrCode}>
            <h2>Scan QR Code</h2>
        </button>

        <button class="box" id="manual" on:click={onManual}>
            <h2>Enter Code Manually</h2>
        </button>
    {:else if pageState == "Qr Code"}
        Idk Qr code stuff but that takes effor
    {:else}
        <input type="text" />
    {/if}
</main>

<style>
    .box {
        border-bottom: black solid 3px;
        height: 100px;
        width: 100%;
        background-color: white;
    }

    .box:hover {
        animation: none;
    }
</style>