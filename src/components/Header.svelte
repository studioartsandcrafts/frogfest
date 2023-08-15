<script>
  import TopIcons from "./TopIcons.svelte";
</script>

<header class="text-sm md:text-base">
  <div>
    <p>8 — 11PM PST <span class="ml-4">AUGUST 18 </span></p>
    <p>
      <span>W28</span>
      <span class="ml-4">P35</span>
      <span class="ml-4">MIST,</span>
    </p>
    <p>Primal Lamia</p>
  </div>

  <div class="list flex-col items-center hidden lg:flex">
    <p>
      <span>zwackery</span>
      <span> cat wap b2b deej nuts </span>
      <span> ronsrogue</span>
    </p>
    <p>
      <span> ocoenia b2b vapor cruise</span>
      <span> babubii b2b super d</span>
      <span>sleef</span>
    </p>
    <p>
      <span>mega flare</span>
      <span> good doggo licks </span>
    </p>
  </div>
  <div class="flex flex-col items-end justify-between">
    <p class="">
      <a href="/">www.frogfest.live</a>
    </p>

    <TopIcons />
  </div>
</header>

<style lang="postcss">
  header {
    @apply w-full flex justify-between top-0 uppercase font-bold z-50;
    @apply px-2 py-1 leading-tight;
  }
  .list p {
    @apply inline-flex gap-4;
  }
</style>
