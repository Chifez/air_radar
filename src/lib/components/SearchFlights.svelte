<script>
  // @ts-nocheck

  import {
    CalendarRange,
    ChevronDown,
    PlaneLanding,
    PlaneTakeoff,
    ArrowLeftRight,
  } from 'lucide-svelte';
  import Button from './ui/button/button.svelte';
  import { Label } from './ui/label';
  import * as RadioGroup from '$lib/components/ui/radio-group';
  // import { RadioGroup } from 'bits-ui';
</script>

<section class="px-6 md:px-10 py-2">
  <div
    class="space-y-4 w-full rounded-2xl p-6 my-10 flex flex-col justify-center bg-white"
  >
    <form class="flex items-center justify-between">
      <div class="flex gap-4">
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
      </div>
      <RadioGroup.Root
        value="default"
        class="flex flex-row gap-2 text-xs font-normal"
      >
        <div class="flex items-center space-x-2">
          <RadioGroup.Item value="default" id="r1" />
          <Label for="r1" class="text-xs font-medium">Tracker</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroup.Item value="bookings" id="r2" />
          <Label for="r2" class="text-xs font-medium">Bookings</Label>
        </div>
      </RadioGroup.Root>
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
      <div class="relative flex items-center gap-2 p-4">
        <span
          class="border p-1 rounded-full absolute top-[35%] bg-white -left-[6%]"
        >
          <ArrowLeftRight size={14} strokeWidth={1.25} />
        </span>

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
