<script>
    import { goto, invalidateAll } from '$app/navigation';

    export let data
</script>

<img src="/bannerv4.png" alt="Banner" class="mx-auto">

<div class ="flex justify-center items-center flex-col space-y-4 ">
   
    <!--<div class="font-bold text-8xl underline decoration-sky-500"> Tinochan </div> -->
    
    <button class="text-3xl hover-1" on:click={_ => goto("/feed")}>Enter Forum: Main</button> 
    {#if !data.session_cookie}
    <p class="text-red-500"> (login required) </p>
    {/if}
</div>
