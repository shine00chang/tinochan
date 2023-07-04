<script>
    // States
    let forums;

    async function onclick () {
        const response = await fetch ("/api/test");
        forums = await response.json();
        console.log(forums);
    }
</script>

<div> 
    <p>Click here to load forums from the database</p>
    <button on:click={onclick}>Load Now!</button><br>

    {#if forums != undefined} 
        {#each forums as { title, content }}
            <h3>{title}</h3>
            <p>{content}<p>
            <br>WW
        {/each}
    {/if}
</div>
