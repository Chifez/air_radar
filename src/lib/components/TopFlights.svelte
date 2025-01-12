<!-- <script>
  import { Plane } from 'lucide-svelte';

  let flight = [1, 2, 4, 5, 6];
</script>

<section class="px-6 md:px-10 space-y-4">
  <p class="font-bold text-lg">Top flights</p>
  <div class="grid grid-cols-3 items-center justify-between gap-8 rounded-2xl">
    {#each flight as flight, idx}
      <div
        class="group flex-1 h-72 rounded-xl overflow-hidden bg-white border-2 border-slate-50"
      >
        <div class="relative w-full h-[65%]">
          <img
            src="/ind-main.jpg"
            alt="banner"
            class="object-cover w-full h-full"
          />
          <span
            class="absolute left-0 top-2 bg-white font-bold rounded-tr-md rounded-br-md px-2 py-1 text-xs text-blue-400 uppercase"
          >
            Bussiness class
          </span>
        </div>
        <div class="space-y-4">
          <span class="flex justify-between p-2">
            <p class="text-sm">Jakarta <strong>(CGK)</strong></p>
            <div class="relative flex-1 flex items-center justify-center">
              <span
                class="absolute invisible group-hover:visible w-full border-[1.5px] border-dashed border-gray-400"
              ></span>
              <Plane
                fill="#1d4ed8"
                strokeWidth={0}
                class="rotate-45"
                size={20}
              />
            </div>
            <p class="text-sm">Paris <strong>(CDG)</strong></p>
          </span>
          <span
            class="flex items-center justify-between p-2 bg-blue-400/30 rounded-md mx-2"
          >
            <Plane size={18} />

            <p class="gap-8 font-black text-blue-500 text-xl italic">
              <sup class="text-sm not-italic font-normal text-gray-400"
                >from</sup
              >
              $232
            </p>
          </span>
        </div>
      </div>
    {/each}
  </div>
</section> -->

<script>
  import { Plane } from 'lucide-svelte';
  import { onMount } from 'svelte';

  let flight = [1, 2, 4, 5, 6];
  let isHovered = Array(flight.length).fill(false);

  function handleMouseEnter(idx) {
    isHovered[idx] = true;
  }

  function handleMouseLeave(idx) {
    isHovered[idx] = false;
  }
</script>

<section class="px-6 md:px-20 space-y-4">
  <p class="font-bold text-lg">Top flights</p>
  <div class="grid grid-cols-3 items-center justify-between gap-8 rounded-2xl">
    {#each flight as _, idx}
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div
        class="group flex-1 h-72 rounded-xl overflow-hidden bg-white border-2 border-slate-50 relative"
        on:mouseenter={() => handleMouseEnter(idx)}
        on:mouseleave={() => handleMouseLeave(idx)}
      >
        <div class="relative w-full h-[65%]">
          <img
            src="/ind-main.jpg"
            alt="banner"
            class="object-cover w-full h-full"
          />
          <span
            class="absolute left-0 top-2 bg-white font-bold rounded-tr-md rounded-br-md px-2 py-1 text-xs text-blue-400 uppercase"
          >
            Bussiness class
          </span>
        </div>
        <div class="space-y-4">
          <span class="flex justify-between p-2">
            <p class="text-sm">Jakarta <strong>(CGK)</strong></p>
            <div class="relative flex-1 flex items-center justify-center">
              <svg
                class="absolute w-full h-full"
                viewBox="0 0 100 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,5 L100,5"
                  class={`path ${isHovered[idx] ? 'active' : ''}`}
                />
              </svg>
              <div class={`plane ${isHovered[idx] ? 'active' : ''}`}>
                <Plane fill="#1d4ed8" strokeWidth={0} size={20} />
              </div>
            </div>
            <p class="text-sm">Paris <strong>(CDG)</strong></p>
          </span>
          <span
            class="flex items-center justify-between p-2 bg-blue-400/30 rounded-md mx-2"
          >
            <Plane size={18} fill="white" />

            <p class="gap-8 font-black text-blue-500 text-xl italic">
              <sup class="text-sm not-italic font-normal text-gray-400"
                >from</sup
              >
              $232
            </p>
          </span>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  .path {
    fill: none;
    stroke: gray;
    stroke-width: 1;
    stroke-dasharray: 2, 2; /* Dotted line pattern */
    stroke-dashoffset: 50; /* Total length of the path (approximate for demo) */
    transition: stroke-dashoffset 2.5s ease-in-out;
  }

  .path.active {
    stroke-dashoffset: 50; /* Reveal the path */
  }
  .plane {
    position: absolute;
    transform-origin: center;
    transition: transform 2s ease-in-out;
    opacity: 1;
    transform: translate(0, 0) rotate(45deg);
  }

  .plane.active {
    opacity: 1;
    animation: movePlane 3s ease-in-out forwards;
  }

  @keyframes movePlane {
    from {
      transform: translate(-400%, 0) rotate(45deg);
    }

    to {
      transform: translate(400%, 0) rotate(45deg);
    }
  }
</style>
