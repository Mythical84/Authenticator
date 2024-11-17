<script lang="ts">
	import Card from "$lib/Card/Card.svelte";
	import { db } from "$lib/firebase";
	import { getDocs, collection } from 'firebase/firestore';

	let data: any;
	let loaded = false;

	async function getWebsites() {
		let docs = await getDocs(collection(db, "Websites"))
		data = docs.docs.map(doc => doc.data())
		loaded = true;
	}
</script>

{#if !loaded}
	{#await getWebsites()}
		Loading...
	{/await}
{:else}
	{#each data as doc}
		<Card secret={doc.secret} website={doc.name} password={doc.password} />
	{/each}
{/if}
