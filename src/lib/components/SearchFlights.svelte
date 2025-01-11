<script>
  import {
    CalendarRange,
    ChevronDown,
    PlaneLanding,
    PlaneTakeoff,
  } from 'lucide-svelte';
  import Button from './ui/button/button.svelte';
</script>

<section class="px-6 md:px-10 py-2">
  <div
    class="space-y-4 w-full rounded-2xl p-6 my-10 flex flex-col justify-center bg-white"
  >
    <form class="flex gap-4">
      <div class="flex gap-4 items-center">
        <p class="text-xs text-gray-500">Round Trip</p>
        <ChevronDown size={14} strokeWidth={1.25} />
      </div>
      <div class="flex gap-4 items-center">
        <p class="text-xs text-gray-500">1 passenger</p>
        <ChevronDown size={14} strokeWidth={1.25} />
      </div>
      <div class="flex gap-4 items-center">
        <p class="text-xs text-gray-500">Bussiness & First</p>
        <ChevronDown size={14} strokeWidth={1.25} />
      </div>
    </form>
    <form
      action=""
      class="grid grid-cols-5 divide-x-[1px] gap-4 border rounded-2xl"
    >
      <div class="flex items-center gap-2 p-4">
        <PlaneTakeoff size={14} />
        <span class="font-semibold">
          <p class="text-[10px] text-gray-500">From</p>
          <div class="flex items-center gap-1 text-xs">
            <p>Jakarta</p>
            <p class="text-gray-500">CGK</p>
          </div>
        </span>
      </div>
      <div class="flex items-center gap-2 p-4">
        <PlaneLanding size={14} />
        <span class="font-semibold">
          <p class="text-[10px] text-gray-500">To</p>
          <div class="flex items-center gap-1 text-xs">
            <p>Singapore</p>
            <p class="text-gray-500">SIN</p>
          </div>
        </span>
      </div>
      <div class="flex items-center gap-2 p-4">
        <CalendarRange />
        <span class="font-semibold">
          <p class="text-[10px] text-gray-500">Departure Date</p>
          <div class="flex items-center gap-1 text-xs">
            <p>3/14/2024</p>
          </div>
        </span>
      </div>
      <div class="flex items-center gap-2 p-4">
        <CalendarRange />
        <span class="font-semibold">
          <p class="text-[10px] text-gray-500">Return Date</p>
          <div class="flex items-center gap-1 text-xs">
            <p>3/30/2024</p>
          </div>
        </span>
      </div>
      <div class="w-full h-full flex items-center justify-center p-2">
        <Button
          class="bg-blue-600 hover:bg-blue-600 text-white w-full h-full text-lg"
          >Search Flights</Button
        >
      </div>
    </form>
  </div>
</section>
