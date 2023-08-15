<script lang="ts">
  import Header from "./Header.svelte";
  // import SmoothScroller from "./SmoothScroller.svelte";
</script>

<Header />
<section
  class="mt-2 mx-2 flex flex-col items-center justify-center text-white px-5 lg:px-0 text-center rounded-[7rem]"
>
  <img data-depth="5" src="girl.png" alt="frogfest magical girl" />
</section>

<style lang="postcss">
  section {
    background: var(--gradient1);
  }
</style>
