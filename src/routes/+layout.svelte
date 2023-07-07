<script>
    import { goto } from '$app/navigation';

    async function onLogout () {
        await fetch("/api/logout", { method: "POST" });
    }
</script>

<nav> 
    <div style="font-size: 2rem" on:click={() => goto("/")}>Tinochan! <div>
    <button on:click={_ => goto("/login")}>login</button>
    <button on:click={_ => goto("/signup")}>signup</button>
    <button on:click={onLogout}>logout</button>

    <br>
    <hr>
</nav>

<slot/>
