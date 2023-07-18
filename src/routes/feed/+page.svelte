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

<div class="text-2xl">(；一_一)</div>
<br>
<div class="flex justify-center">
    <div class="items-center h-32 text-5xl">Forum: Main</div>
</div>

<button class="btn-1" on:click={_ => goto("/post")}>Create Post</button><br>

{#if forums != undefined} 
    {#each forums as { user, title, content }}
        <div class="text-xl font-medium">{title}</div>
        <div class="font-bold text-s">By: {user}</div>
        <div>{content}</div>
        <br>
    {/each}
{/if}

</div>
