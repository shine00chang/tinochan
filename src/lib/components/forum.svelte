<script>
    import { goto } from '$app/navigation';
	import Markdown from 'svelte-exmarkdown';

    export let forum;

    const onClick = () => {
        console.log(forum);
        goto(`/forum/${forum._id}`);
    }

</script>

<div class="text-3xl font-bold">{forum.title}</div>
<div class="font-medium italic text-s">By: {forum.user}</div>
<hr>

<div class="md"> 
    <Markdown md={forum.content}/>
</div>

<div class="flex"> 
    <div class="grow"/>
    <button class="btn-1" on:click={onClick}>join</button>
</div>
<br>
