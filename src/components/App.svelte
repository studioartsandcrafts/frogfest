<script lang="ts">
  import Header from "./Header.svelte";
  import Logo from "./Logo.svg?raw";
  import Lineup from "./Lineup.svg?raw";
  // import SmoothScroller from "./SmoothScroller.svelte";
</script>

<Header />
<section
  class=" relative mt-2 mx-2 flex flex-col items-center justify-center text-white px-5 lg:px-0 text-center rounded-[7rem] z-1"
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
    <p class="text-xl lg:text-3xl lg:-mb-5">"MUSIC" TO MY EARS</p>
    {@html Logo}
  </div>
  <div
    class="z-10 flex flex-col items-center text-[var(--secondary2)] pointer-events-none"
  >
    <picture data-depth="5" class="z-10">
      <img
        sizes="(max-width: 1400px) 100vw, 1400px"
        srcset="
        girl/girl_alhirl_c_scale,w_200.png 200w,
        girl/girl_alhirl_c_scale,w_427.png 427w,
        girl/girl_alhirl_c_scale,w_591.png 591w,
        girl/girl_alhirl_c_scale,w_751.png 751w,
        girl/girl_alhirl_c_scale,w_885.png 885w,
        girl/girl_alhirl_c_scale,w_1019.png 1019w,
        girl/girl_alhirl_c_scale,w_1124.png 1124w,
        girl/girl_alhirl_c_scale,w_1400.png 1400w"
        src="girl/girl_alhirl_c_scale,w_1400.png"
        alt="frogfest magical girl"
      />
    </picture>
    <div class="z-0 absolute bottom-[0%] w-full" aria-hidden="true">
      {@html Lineup}
    </div>
  </div>
</section>
<section
  class="w-full flex justify-center my-[25vh] flex-col items-center text-center px-3"
>
  <p class="max-w-lg text-xl lg:text-3xl text-center">
    Melodies of heaven ♫ your <i class="font-bold">favorite </i> audio visual experience
  </p>
  <p class="text-base lg:first-letter:text-xl font-bold mt-6">
    3 hours of music from 8 — 11PM PST ON August 18
  </p>
  <p class="text-base lg:first-letter:text-xl">
    Post your art throughout the event on Twitter using <i class="font-bold"
      >#frogfest2023art</i
    >
  </p>
  <p class="text-base lg:text-xl mt-6">
    W28 P35 MIST, PRIMAL LAMIA, FFXIV <b class="italic">OR</b>
    <a href="https://twitch.tv/slyleaf" class="underline hover:text-blue-500"
      >WATCH ON TWITCH.TV</a
    >
  </p>
</section>
<section class=" w-full max-w-[90vw] h-full mx-auto min-h-[50vh]">
  <div class="vidwrapper">
    <iframe
      src="https://www.youtube-nocookie.com/embed/h-HquI7zbBA"
      title="frogfest video teaser 2023"
    />
  </div>
</section>

<style lang="postcss">
  section {
    color: var(--secondary2);
  }
  .vidwrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;
  }

  .vidwrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
</style>
