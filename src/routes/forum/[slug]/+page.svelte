<script>
	import Markdown from 'svelte-exmarkdown';
    import Reply from '$lib/components/reply.svelte';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';

    export let data;
    let {  forum, replies } = data;
    $: ({forum, replies} = data);

    async function onShare () {
        navigator.clipboard.writeText($page.url.href );
    }
</script>



<button class="btn-1 text-2xl" on:click={_ => goto("/feed")}>← back</button>
<div class="mx-10 my-10">
<div class="text-5xl font-bold">{forum.title}</div><br>
<div class="font-medium italic text-s">By: {forum.user}</div><br>
<hr>

<div class="md"> 
    <Markdown md={forum.content}/>
</div>

<div class="flex"> 
    <div class="grow"/>
    <button class="btn-1" on:click={onShare}>copy link</button>
</div>
<br>


<!-- Replies -->
{#each replies as reply}
    <Reply forumId={forum._id} reply={reply}/>
    <br>
    <br>
{/each}

</div>
