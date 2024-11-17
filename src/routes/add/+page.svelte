<script lang="ts">
	import { doc, setDoc } from "firebase/firestore";
	import { db } from "$lib/firebase"
	import { goto } from "$app/navigation";

	let pageState = "default"
	
	function onQrCode() {
		pageState = "Qr Code"
	}

	function onManual() {
		pageState = "Manual"
	}

	let secret: string;
	let website: string;
	let password: string;
	let picker: any;

	async function storeData() {
		await setDoc(doc(db, "Websites", website), {
			name: website,
			secret: secret,
			password: password
		})
		secret = ""
		website = ""
		password = ""
		goto("/")
	}

	async function parseCode(): Promise<void> {
		return new Promise<void>(async (resolve, reject) => {
			if (!picker || !picker.files || picker.files.length <= 0) {
				reject("No file selected")
				return;
			}
			const file = picker.files[0];
			console.log(file);
			resolve();
		})
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
			<input type="file" accept="image/x-png, image/jpeg" bind:this={picker} on:change={() => parseCode()}>
    {:else}
			Totp secret: <input type="password" bind:value={secret} /><br/>
			Website Name: <input type="text" bind:value={website}><br/>
			Password: <input type="password" bind:value={password}><br/>
			<button on:click|preventDefault={storeData}>Submit</button>
    {/if}
</main>

<style>
    .box {
		border: black solid 3px;
		border-top: none;
        height: 100px;
        width: 100%;
		background-color: white;
    }

    .box:hover {
        animation: none;
	}
</style>
