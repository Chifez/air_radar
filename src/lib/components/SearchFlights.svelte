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
  import Input from './ui/input/input.svelte';
  // import { RadioGroup } from 'bits-ui';
  import AirportSelect from './shared/AirportSelect.svelte';
  import DateSelect from './shared/DateSelect.svelte';

  let current_tab = $state('tracker');

  let departureDate = $state(new Date());
  let returnDate = $state(new Date());

  function handleDepartureChange(date) {
    departureDate = date;
    console.log('Selected departure date:', date);
  }

  function handleReturnChange(date) {
    returnDate = date;
    console.log('Selected return date:', date);
  }

  const toggle = (value) => {
    current_tab = value;
    console.log('value', value);
  };
  $effect(() => console.log('current tab', current_tab));
</script>

<section class="px-6 md:px-10 py-2">
  <div
    class="space-y-4 w-full rounded-2xl p-6 my-10 flex flex-col justify-center bg-white"
  >
    <form class="flex items-center justify-between">
      {#if current_tab == 'tracker'}
        <div class="flex items-center gap-2">
          <Label class="text-xs">Flight ID:</Label>
          <Input placeholder="Flight id" class="w-52 h-8 py-1 text-xs" />
        </div>
      {:else}
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
      {/if}

      <RadioGroup.Root
        bind:value={current_tab}
        onValueChange={toggle}
        class="flex flex-row gap-2 text-xs font-normal"
      >
        <div class="flex items-center space-x-2">
          <RadioGroup.Item value="tracker" id="r1" />
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
      <div class="flex items-center gap-2 py-1 px-4">
        <PlaneTakeoff size={14} />
        <div>
          <AirportSelect
            label="From"
            onChange={(airport) => {
              console.log('Selected departure airport:', airport);
              // Handle the selection
            }}
          />
        </div>
      </div>

      <div class="relative flex items-center gap-2 py-1 px-4">
        <span
          class="border p-1 rounded-full absolute top-[35%] bg-white -left-[6%]"
        >
          <ArrowLeftRight size={14} strokeWidth={1.25} />
        </span>
        <PlaneLanding size={14} />
        <div>
          <AirportSelect
            label="To"
            onChange={(airport) => {
              console.log('Selected arrival airport:', airport);
              // Handle the selection
            }}
          />
        </div>
      </div>
      <DateSelect label="Departure Date" onChange={handleDepartureChange} />

      <DateSelect label="Return Date" onChange={handleReturnChange} />
      <div class="w-full h-full flex items-center justify-center p-2">
        <Button
          class="bg-blue-600 hover:bg-blue-600 text-white w-full h-full text-lg"
          >Search Flights</Button
        >
      </div>
    </form>
  </div>
</section>
