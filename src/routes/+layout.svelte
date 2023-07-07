<script>
    import { goto } from '$app/navigation';

    async function onLogin () {
        console.log("hii");
        goto("/login");
    }

    async function onSignup () {
        goto("/signup");
    }

    async function onLogout () {
        await fetch("/api/logout", { method: "POST" });
    }
</script>

<div> 
    <a style="font-size: 2rem" on:click={() => goto("/")}>Tinochan! <a>
    <a href="/login">login</a>
    <a href="/signup">signup</a>
    <a href="/" on:click={onLogout}>logout</a>

    <br>
    <hr>
    <br>
</div>

<slot/>
