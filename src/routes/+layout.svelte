<script>
    import { onMount } from 'svelte';
    import "../app.css";
    import { goto, invalidateAll } from '$app/navigation';

    export let data;

    console.log(data);

    async function onLogout () {
        await fetch("/api/logout", { method: "POST" });
        await invalidateAll();
    }
</script>

<!-- NavBar --> 
<div class="sticky flex flex-row space-x-8 p-4 bg-gradient-to-r from-zinc-200 to-sky-200 drop-shadow-lg"> 

    <!-- Home Button -->
    <div on:click={_ => goto("/")}>
        <img src="/homev1.png" alt="Button" class="h-10 w-10"/>
    </div>

    <div class="grow"></div>

    <!-- Login managament buttons, Varies depending on login status -->
    {#if !data.session_cookie}

        <button class="rounded-full hover-1" on:click={_ => goto("/login") }>login</button>
        <button class="rounded-full hover-1" on:click={_ => goto("/signup")}>signup</button>
      
    {:else}

        <button class="rounded-full hover-1" on:click={_ => goto("/feed")}>forums</button>
        <button class="rounded-full hover-1" on:click={onLogout}>logout</button>

       
    {/if}   
</div>

<!-- Page Slot -->
<div class="p-6">
<slot/>
</div>


<!-- Footer -->
<footer class=" text-xs py-4 text-center bottom-0">
    <p>See any bugs? report them</p> 
    <a class="text-blue-500" href="https://github.com/shine00chang/tinochan">here.</a><br>
    <br>
    <p>&copy; 2023 Tinovation Club. All rights reserved.</p>
</footer>
