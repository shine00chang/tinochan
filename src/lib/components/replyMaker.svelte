<script>
    import { createEventDispatcher } from 'svelte';

    const  dispatch = createEventDispatcher();
    
    export let forumId;
    export let referenceId;

    let userTag = "";
    let content = "";

    
    const onReply = async () => {
        const body = {
            user: userTag,
            content,
            forumId,
            referenceId,
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
        }
    }

    const reset = () => {
        dispatch("done");
        userTag = "";
        content = "";
    }
</script>

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
