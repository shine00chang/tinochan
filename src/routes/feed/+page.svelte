<script>
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    // States
    let forums;

    async function onclick () {
        const response = await fetch ("/api/post");
        forums = await response.json();
        console.log(forums);
    }

    onMount(onclick);
</script>

<div class="space-y-4">

<div class="text-2xl">/ᐠ｡ꞈ｡ᐟ\ɴʏᴀ~</div>
<div class="text-3xl">Welcome to Tinochan's forum!</div>

<!--<div>Click here to load forums from the database</div>
<button class="btn-1" on:click={onclick}>Load Now!</button><br>-->

<button class="btn-1" on:click={_ => goto("/post")}>Create Post</button><br>

{#if forums != undefined} 
    {#each forums as { title, content }}
        <div class="text-xl font-medium">{title}</div>
        <div>{content}</div>
        <br>
    {/each}
{/if}

</div>
