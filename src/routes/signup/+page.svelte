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

<h1> Signup </h1>
<input bind:value={username}><br>
<input bind:value={password}><br>
<button on:click={onClick}>Signup</button>
