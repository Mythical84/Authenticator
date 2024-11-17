<script lang="ts">
	import { doc, setDoc, deleteDoc } from "firebase/firestore";
	import { db } from "$lib/firebase"
	import { name, pass, tfaSecret } from "$lib/currentData";
	import {goto} from "$app/navigation";

	let web_name = $name;
	let web_pass = $pass;
	let web_secret = $tfaSecret;

	async function updateData() {
		await deleteDoc(doc(db, "Websites", $name))
		console.log(web_pass)
		await setDoc(doc(db, "Websites", web_name), {
			name: web_name,
			secret: web_secret,
			password: web_pass
		})
		goto("/")
	}

	async function deleteData() {
		if (!confirm("Are you sure?")) return;
		await deleteDoc(doc(db, "Websites", $name))
		goto("/")
	}
</script>

name: <input type=text bind:value={web_name}><br/>
password: <input type=text bind:value={web_pass}><br/>
secret: <input type=text bind:value={web_secret}><br/>
<button on:click|preventDefault={updateData}>update</button><br/>
<button on:click={deleteData}>delete</button><br/>
