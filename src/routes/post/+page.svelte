<script>
    import { goto } from '$app/navigation';
	import Markdown from 'svelte-exmarkdown';

    let title;
    let content = "";
    let user;
   
    async function onClick () {
        const body = {
            title,
            content,
            user
        }
        console.log("posting:", body);
        const res = await fetch("/api/post", {
            method: "PUT",
            body: JSON.stringify(body)
        });
        console.log("post status: ", res.status);
        if (res.status == 201)
            goto("../feed");
    }
</script>

<style>
input {
    @apply m-2;
}
textarea {
    width: 100%;
    height: 200px;
    resize: vertical;
    border: 1px solid #ccc; 
    padding: 8px;
}

/* The following styles is to fix the overrides done by tailwind */

</style>

<div class="flex"> 
<input bind:value={user} placeholder="Enter alias here...">
<input bind:value={title} placeholder="Enter title here...">
<div class="grow"/> 
<button class="btn-1" on:click={onClick}>Post</button>
<button class="btn-1" on:click={_ => goto("/feed")}>Cancel</button>
</div>
<br>
<br>    

<textarea bind:value={content} placeholder="Enter content here..."></textarea><br>
<br>


<!-- This encapsulating div is necessary to apply markdown-specific styles to the generated result -->
<!-- We need to redefine the styling because tailwind resets all defaults for tags, and markdown renderers only assigns tags. -->
<div class="font-medium text-lg">Markdown Preview: </div>
<div class="md border-2 border-solid rounded p-4">
    <Markdown  md={content}/>
</div>




