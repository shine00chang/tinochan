<script>
	import Markdown from 'svelte-exmarkdown';
    import Reply from '$lib/components/reply.svelte';
    import { goto } from '$app/navigation';

    export let data;
    const {
        forum,
        replies
    } = data;

    // States
    let replying = false;
    let userTag = "";
    let replyText = "";

    const onReply = async () => {
        const body = {
            user: userTag,
            content: replyText,
            forumId: forum._id,
        }
        const response = await fetch('/api/reply', {
            method: "PUT",
            body: JSON.stringify(body)
        });

        if (response.status != 201) {
            console.error('reply PUT\'ing failed.');
        } else {
            console.log('reply created');
        }
    }
    function reloadPage() {
    location.reload();
  }
  
  async function onShare () {
        navigator.clipboard.writeText(window.location.href);
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
    <button class="btn-1" on:click={() => {userTag = ""; replyText = ""; replying = true;}}>reply</button>
    <button class="btn-1" on:click={onShare}>copy link</button>
</div>
<br>

<!-- Reply interface -->
{#if replying}
    <div>

    <div class="font-bold">Write your reply: </div>
    <div class="flex"> 
        <input bind:value={userTag} placeholder="Enter alias here...">
        <div class="grow"/> 
        <button class="btn-1" on:click={onReply, reloadPage}>reply</button>
        <!--<button class="btn-1" on:click={() => reply = false}>cancel</button>-->
        <button class="btn-1" on:click={reloadPage}>cancel</button>
    </div>
    <br>
    <br>    

    <textarea class="border-2 border-solid rounded p-2" style="width: 100%;" bind:value={replyText} placeholder="Enter content here..."></textarea>
    <br>
    <br>

    <!-- This encapsulating div is necessary to apply markdown-specific styles to the generated result -->
    <!-- We need to redefine the styling because tailwind resets all defaults for tags, and markdown renderers only assigns tags. -->
    <div class="font-medium text-lg"> Markdown Preview: </div>
    <div class="md border-2 border-solid rounded p-2">
        <Markdown  md={replyText}/>
    </div>
    <hr/>

    </div>
{/if}

<!-- Replies -->
{#each replies as reply}
    <Reply reply={reply}/>
    <br>
    <br>
{/each}

</div>
