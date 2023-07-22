<script>
	import Markdown from 'svelte-exmarkdown';
    export let data;
    const forum = data.forum;

    console.log(data);

    const onReply = () => {
        // TOOD: Make replying interface
    }
</script>

<div class="mx-40 my-10">
<div class="text-5xl font-bold">{forum.title}</div>
<div class="font-medium italic text-s">By: {forum.user}</div>
<hr>

<div class="md"> 
    <Markdown md={forum.content}/>
</div>

<div class="flex"> 
    <div class="grow"/>
    <button class="btn-1" on:click={onReply}>reply</button>
</div>
<br>
</div>
