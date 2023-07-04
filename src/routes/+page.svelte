<script>
    // States
    let lucky_text;

    async function onclick () {
        const response = await fetch ("/api/test");
        lucky_text = await response.json();
    }
</script>

<div> 
    <p>Get your lucky number from svelte's server!</p>
    <button on:click={onclick}>Claim Now!</button><br>

    {#if lucky_text != undefined} 
        Tada:
        <p>{lucky_text}<p>
    {/if}
</div>
