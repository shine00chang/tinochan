<script>
    import "../app.css";
    import { goto } from '$app/navigation';

    async function onLogout () {
        await fetch("/api/logout", { method: "POST" });
        goto("/");
    }
</script>


<div class="sticky flex flex-row space-x-8 p-4 bg-gradient-to-r from-zinc-200 to-sky-200 drop-shadow-lg"> 
    <div on:click={_ => goto("/")}>
        <img src="src\routes\png\homev1.png" alt="Button" class="h-10 w-10"/>
    </div>

    <div class="grow"></div>

    <button class="rounded-full hover-1" on:click={_ => goto("/login")}>login</button>
    <button class="rounded-full hover-1" on:click={_ => goto("/signup")}>signup</button>
    <button class="rounded-full hover-1" on:click={onLogout}>logout</button>
</div>


<div class="p-6">
<slot/>
</div>


<footer class=" text-xs py-4 text-center bottom-0">
    <p>&copy; 2023 Tinovation Club. All rights reserved.</p>
  </footer>