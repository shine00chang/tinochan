<script>
	import Markdown from 'svelte-exmarkdown';
    import Reply from '$lib/components/reply.svelte';
    import ReplyMaker from '$lib/components/replyMaker.svelte';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    
    let forum;
    let replies;
    let replying = false;


    const refresh = async () => {
        const rsp = await fetch($page.url.href);
        const data = await rsp.json();
        console.log(data);
        ({forum, replies} = data);
    };


    onMount(refresh);
    setInterval(refresh, 10000);


    async function onShare () {
        navigator.clipboard.writeText($page.url.href );
    }
</script>


{#if forum != undefined}

<button class="btn-1 text-2xl" on:click={_ => goto("/feed")}>← back</button>
<div class="mx-5 my-10">
<div class="text-5xl font-bold">{forum.title}</div><br>
<div class="font-medium italic text-s">By: {forum.user}</div><br>
<hr>

<div class="md"> 
    <Markdown md={forum.content}/>
</div>

<div class="flex"> 
    <div class="grow"/>
    {#if !replying}
        <button class="btn-1" on:click={() => replying = true}>reply</button>
    {:else}
        <button class="btn-1" on:click={() => replying = false}>cancel</button>
    {/if}
    <button class="btn-1" on:click={onShare}>copy link</button>
</div>
<br>

<!-- ReplyMaker -->
{#if replying}
    <ReplyMaker on:done={() => replying=false} forumId={forum._id} referenceId={undefined}/>
{/if}

<!-- Replies -->
{#each replies as reply}
    <Reply on:done={refresh} forumId={forum._id} reply={reply}/>
    <br>
    <br>
{/each}

</div>

{/if}
