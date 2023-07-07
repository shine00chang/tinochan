<script>
    import { goto } from '$app/navigation';

    let username;
    let password;

    async function onClick () {
        const body = {
            username,
            password
        };

        console.log("logging in with input: ", body);

        const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify(body)
        });
        console.log("login returned with status: ", res.status);
        if (res.status === 200) 
            goto("/");
    }
</script>

<h1> Login </h1>
<input bind:value={username}><br>
<input bind:value={password}><br>
<button on:click={onClick}>login</button>
