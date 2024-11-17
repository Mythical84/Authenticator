<script lang="ts">
	import * as OTPAuth from 'otpauth'
	import { name, pass, tfaSecret } from '$lib/currentData'
	import {goto} from '$app/navigation';
	
	export let secret: string;
	export let website: string;
	export let password: string;

	let token: string;
	let seconds: number;
	
	function updateKey() {
		if (secret != undefined) {
			let totp = new OTPAuth.TOTP({secret: secret})
			token = totp.generate()
			seconds = (totp.period * (1 - ((Date.now() / 1000 / totp.period) % 1))) | 0;
			seconds += 1
		}
	}

	function setCardData() {
		name.set(website)
		pass.set(password)
		tfaSecret.set(secret)

		goto('/edit')
	}

	setInterval(updateKey, 1000)

</script>

<main>
	<div>
		name: {website}<br/>
		password: {password}<br/>
		token: {token}<br/>
		{seconds}<br/>
	</div>
	<button on:click|preventDefault={setCardData}>edit</button>
</main>

<style>
	main {
		border: 3px solid black;
		border-top: none;
		padding-left: 10px;
		display: flex;
		justify-content: space-between;
	}

	button {
		border: none;
	}
</style>
