<script>
    import { onMount } from 'svelte';
    import "../app.css";
    import { goto } from '$app/navigation';

    let isLoggedIn = false;

    // Check if user is logged in (Navbar options vary depending on login state)
    onMount(async () => {
        const res = await fetch("/api/login").then(res => res.json());

        if (res.session_cookie) {
            console.log("session cookie found, user is logged in.");
            isLoggedIn = true;
        }
    });

    async function onLogout () {
        await fetch("/api/logout", { method: "POST" });
        goto("/");
    }
</script>

<!-- NavBar --> 
<div class="sticky flex flex-row space-x-8 p-4 bg-gradient-to-r from-zinc-200 to-sky-200 drop-shadow-lg"> 
    <div on:click={_ => goto("/")}>
        <img src="/homev1.png" alt="Button" class="h-10 w-10"/>
    </div>

    <div class="grow"></div>

    <!-- Login managament buttons, Varies depending on login status -->
    {#if isLoggedIn}

        <button class="rounded-full hover-1" on:click={_ => goto("/login")}>login</button>
        <button class="rounded-full hover-1" on:click={_ => goto("/signup")}>signup</button>

    {:else}

        <div class="grow"></div>
        <button class="rounded-full hover-1" on:click={onLogout}>logout</button>

    {/if}
</div>

<!-- Page Slot -->
<div class="p-6">
<slot/>
</div>


<!-- Footer -->
<footer class=" text-xs py-4 text-center bottom-0">
    <p>&copy; 2023 Tinovation Club. All rights reserved.</p>
</footer>
