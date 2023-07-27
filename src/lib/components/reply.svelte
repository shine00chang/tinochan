<script>
	import Markdown from 'svelte-exmarkdown';
    import { invalidateAll } from '$app/navigation';

    export let forumId;
    export let reply;

    let replying = false;
    let userTag = "";
    let content = "";

    
    const onReply = async () => {
        const body = {
            user: userTag,
            content,
            forumId,
            referenceId: reply._id,
        }
        const response = await fetch('/api/reply', {
            method: "PUT",
            body: JSON.stringify(body)
        });

        if (response.status != 201) {
            console.error('reply PUT\'ing failed.');
        } else {
            console.log('reply created');
            reset();
            await invalidateAll();
        }
    }

    const reset = () => {
        replying = false;
        userTag = "";
        content = "";
    }
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
        <button class="btn-1" on:click={reset}>cancel</button>
    {/if}
</div>



<div class="flex m-3 mr-0">
    <div class="mr-6 w-1 bg-zinc-200">
    </div>

    <div class="grow">
        <!-- Replying Interface -->
        {#if replying}
            <div>

            <div class="font-bold">Write your reply: </div>
            <div class="flex"> 
                <input bind:value={userTag} placeholder="Enter alias here...">
                <div class="grow"/> 
                <button class="btn-1" on:click={onReply}>reply</button>
            </div>
            <br>
            <br>    

            <textarea class="border-2 border-solid rounded p-2" style="width: 100%;" bind:value={content} placeholder="Enter reply here..."></textarea>
            </div>
            <hr>
            <br>
        {/if}

        <!-- reference replies -->
        {#each reply.references as ref}
            <svelte:self forumId={forumId} reply={ref}/>
        {/each}
    </div>
</div>

