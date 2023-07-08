<script>
    import { goto } from '$app/navigation';

    let username;
    let password;

    async function onClick () {
        const body = {
            username,
            password
        };

        console.log("signing up with input: ", body);

        const res = await fetch("/api/signup", {
            method: "PUT",
            body: JSON.stringify(body)
        });
        console.log("signup returned with status: ", res.status);
        if (res.status == 200) 
            goto("../login");
    }
</script>

<div
    class="space-y-4"    
    >
<label>username: </label>
<input bind:value={username}><br>
<label>password: </label>
<input bind:value={password}><br>
<button class="btn-1" on:click={onClick}>Signup</button>
</div>
