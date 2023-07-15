<script>
    import { goto } from '$app/navigation';
</script>

<img src="src\routes\bannerv4.png" alt="Banner" class="mx-auto">

<div class ="flex justify-center items-center flex-col space-y-4 ">
   
    <!--<div class="font-bold text-8xl underline decoration-sky-500"> Tinochan </div> -->
    
    <button class="text-3xl hover-1" on:click={_ => goto("/feed")}>→Enter Forum←</button> 
   
    <p> (You need to log in first) </p>

</div>