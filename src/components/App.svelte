<script lang="ts">
  import Header from "./Header.svelte";
  import Logo from "./Logo.svg?raw";
  import Lineup from "./Lineup.svg?raw";
  // import SmoothScroller from "./SmoothScroller.svelte";
</script>

<Header />
<section
  class=" relative mt-2 mb-[50rem] mx-2 flex flex-col items-center justify-center text-white px-5 lg:px-0 text-center rounded-[7rem] z-1"
>
  <div class="absolute inset-0 z-0">
    <svg
      class="w-full h-full"
      viewBox="0 0 1402 984"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M1387.51 275.382C1464.33 519.152 1219.15 813.652 839.894 933.167C460.634 1052.68 90.91 951.953 14.0916 708.184C-62.7269 464.414 182.45 169.913 561.71 50.3985C940.969 -69.1163 1310.69 31.6122 1387.51 275.382Z"
        fill="#FED750"
      />
    </svg>
  </div>
  <div
    data-depth="10"
    class="absolute top-[25%] z-20 w-full"
    aria-hidden="true"
  >
    <p class="text-3xl -mb-5">"MUSIC" TO MY EARS</p>
    {@html Logo}
  </div>
  <div class="z-10 flex flex-col items-center text-[var(--secondary2)]">
    <img
      data-depth="5"
      class="z-10"
      src="girl.png"
      alt="frogfest magical girl"
    />

    <div class="z-0 absolute bottom-[0%] w-full" aria-hidden="true">
      {@html Lineup}
    </div>
  </div>
</section>

<style lang="postcss">
  section {
    color: var(--secondary2);
  }
</style>
