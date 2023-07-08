<script>
    import { goto } from '$app/navigation';
</script>

<div class="font-bold text-4xl underline decoration-sky-500"> Tinochan </div>
<br>

<button class="hover-1" on:click={_ => goto("/feed")}>Go to Tinochan's secret stash!</button>
<p> (You need to log in first) </p>
