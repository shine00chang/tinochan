<script>
    import { goto } from '$app/navigation';

    let username;
    let password;
    console.log("hi");

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
            goto("../");
    }
</script>

<div
    class="space-y-4"    
    >
<label>username: </label>
<input bind:value={username}><br>
<label>password: </label>
<input type="password" bind:value={password}><br>
<button class="btn-1" on:click={onClick}>login</button>
</div>
