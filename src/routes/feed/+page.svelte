<script>
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    import Forum from '$lib/components/forum.svelte';

    export let data;
    const { forums } = data;

</script>

<div class="space-y-4">

<!--<div class="text-2xl">(；一_一)</div>-->
<br>

<div class="flex justify-center">
    <div class="items-center h-32 text-5xl">Forum List</div>
</div>

<button class="btn-1" on:click={_ => goto("/post")}>create forum</button><br>

{#each forums as forum}
    <Forum forum={forum}/>
{/each}

</div>
