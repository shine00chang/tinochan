<script>
	import Markdown from 'svelte-exmarkdown';

    export let reply;
</script>


<div class="font-medium italic text-s">{reply.user}: </div>
<hr>

<div class="mx-10 md"> 
    <Markdown md={reply.content}/>
</div>
<hr>
