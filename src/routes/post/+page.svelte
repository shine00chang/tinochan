<script>
    import { goto } from '$app/navigation';
    let title;
    let content;
   
    async function onClick () {
        const body = {
            title,
            content
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
    textarea {
      width: 100%;
      height: 200px;
      resize: vertical;
      border: 1px solid #ccc; 
    padding: 8px;
    }
  </style>

<!--<big class="rounded-full hover-1">Create Post</big><br>-->

<input bind:value={title} placeholder="Enter title here..."><br>
<br>    
<textarea bind:value={content} placeholder="Enter content here..."></textarea><br>
<br>
<button class="btn-1" on:click={onClick}>Post</button>
<button class="btn-1" on:click={_ => goto("/feed")}>Cancel</button>


