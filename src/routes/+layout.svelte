<script>
    import { goto } from '$app/navigation';

    async function onLogout () {
        await fetch("/api/logout", { method: "POST" });
    }
</script>

<svelte:head>
	<title>Tinochan</title>
	<html lang="en" />
</svelte:head>

<div class="text-2xl"> 
    <div class="" style="font-size: 2rem" on:click={_ => goto("/")}>Tinochan! </div>

    <div class="">spacer</div>

    <div class="" on:click={_ => goto("/login")}>login</div>
    <div class="" on:click={_ => goto("/signup")}>signup</div>
    <div class="" on:click={onLogout}>logout</div>
</div>

<hr>

<slot/>
