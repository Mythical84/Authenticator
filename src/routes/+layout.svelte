<script lang="ts">
    import BottomBar from "$lib/BottomBar/BottomBar.svelte";
    // Topbar if I want to use it later
    import TopBar from "$lib/TopBar/TopBar.svelte";
</script>

<TopBar />
<slot />
<BottomBar />