<script>
    import "../app.css";
    import { goto } from '$app/navigation';

    async function onLogout () {
        await fetch("/api/logout", { method: "POST" });
        goto("/");
    }
</script>

<div class="flex flex-row space-x-8 p-4 bg-gradient-to-r from-zinc-200 to-sky-200 drop-shadow-lg"> 
    <div 
        class="font-bold text-2xl underline decoration-sky-500 duration-300 hover:font-black hover:tracking-widest"
        on:click={_ => goto("/")}
    >Tinochan</div>

    <div class="grow"></div>

    <button class="rounded-full hover-1" on:click={_ => goto("/login")}>login</button>
    <button class="rounded-full hover-1" on:click={_ => goto("/signup")}>signup</button>
    <button class="rounded-full hover-1" on:click={onLogout}>logout</button>
</div>


<div class="p-6">
<slot/>
</div>
