<script lang="ts">
  import { ArrowRight, Menu, Plane, X } from 'lucide-svelte';
  import Button from '../ui/button/button.svelte';

  let open = $state(false);
</script>

<nav class="py-3 px-6 md:px-10 border-b relative h-fit md:h-14">
  <div class="flex items-center justify-between">
    <a
      href="/"
      class="font-oswald flex items-center gap-1 text-lg font-bold uppercase"
    >
      <Plane />
      Peace.
    </a>

    <button class="lg:hidden" onclick={() => (open = !open)}>
      {#if open}
        <X />
      {:else}
        <Menu />
      {/if}
    </button>

    <div
      class={`z-20 p-6 space-y-8 absolute left-0 font-poppins cursor-pointer  lg:hidden list-none font-medium text-xs uppercase bg-white w-full h-screen transition ${open ? 'translate-y-0 top-14' : '-translate-y-[100%] -top-14'}`}
    >
      <!-- <button class="absolute top-2 right-2" onclick={() => (open = false)}>
        <X />
      </button> -->
      <a href="/tracker">
        <li class="text-gray-600 hover:text-black">Track</li>
      </a>
      <a href="/#"><li class="text-gray-600 hover:text-black">Popular</li></a>

      <Button
        class="font-poppins py-2 px-8 h-fit rounded-xl flex items-center gap-1"
        >Booking
        <ArrowRight />
      </Button>
    </div>

    <!-- desktop nav -->
    <div
      class="hidden font-poppins cursor-pointer lg:flex gap-4 list-none font-medium text-xs uppercase"
    >
      <a href="/tracker">
        <li class="text-gray-600 hover:text-black">Track Flight</li>
      </a>
      <a href="/#">
        <li class="text-gray-600 hover:text-black">Popular</li>
      </a>
    </div>

    <Button
      class="hidden font-poppins py-2 px-8 h-fit rounded-xl lg:flex items-center gap-1"
      >Booking
      <ArrowRight />
    </Button>
  </div>
</nav>
