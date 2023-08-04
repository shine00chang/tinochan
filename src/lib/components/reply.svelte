<script>
	import Markdown from 'svelte-exmarkdown';
    import ReplyMaker from '$lib/components/replyMaker.svelte';

    export let forumId;
    export let reply;

    let replying = false;
</script>


<div class="font-medium italic text-s">{reply.user}: </div>
<hr>

<div class="mx-10 md"> 
    <Markdown md={reply.content}/>
</div>
<div class="flex">
    <div class="grow"/>

    {#if !replying}
        <button class="btn-1" on:click={() => replying = true}>reply</button>
    {:else}
        <button class="btn-1" on:click={() => replying = false}>cancel</button>
    {/if}
</div>



<div class="flex mx-3 mr-0">
    <div class="mr-6 w-1 bg-zinc-200">
    </div>

    <div class="grow">
        <!-- Replying Interface -->
        {#if replying}
            <ReplyMaker on:done on:done={() => replying=false} forumId={forumId} referenceId={reply._id}/>
        {/if}

        <!-- reference replies -->
        {#each reply.references as ref}
            <svelte:self forumId={forumId} reply={ref}/>
        {/each}
    </div>
</div>

