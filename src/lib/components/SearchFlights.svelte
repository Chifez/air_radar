<script lang="ts">
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
  import BookingOptions from './shared/BookingOptions.svelte';
  import { activeTab } from './store';
  import { TAB, type FlightTrackingParams } from '$lib/utils/types';
  import { format } from 'date-fns';

  let trip = [
    { value: 'round trip', label: 'Round trip' },
    { value: 'one way', label: 'One way' },
  ];

  let size = [
    {
      value: 'one',
      label: 'One passenger',
    },
    {
      value: 'Two',
      label: 'Two passengers',
    },
    {
      value: 'more',
      label: '2+ passengers',
    },
  ];

  let user_class = [
    {
      value: 'first',
      label: 'First class',
    },
    {
      value: 'bussiness',
      label: 'Bussiness class',
    },
    {
      value: 'economic',
      label: 'Economy',
    },
  ];

  // let current_tab = $state($activeTab);

  let searchvalue = {}; //make this a global value

  let departureDate = $state(new Date());
  let returnDate = $state(new Date());

  function handleDepartureChange(date: Date) {
    let departure = date
      ? format(date, 'yyyy-MM-dd')
      : format(departureDate, 'yyyy-MM-dd');

    console.log('Selected departure date:', date);
    return (searchvalue = { ...searchvalue, departure_date: departure });
  }

  function handleReturnChange(date: Date) {
    let arrival = date
      ? format(date, 'yyyy-MM-dd')
      : format(returnDate, 'yyyy-MM-dd');
    console.log('Selected return date:', date);
    return (searchvalue = { ...searchvalue, arrival_date: arrival });
  }

  async function searchFlights(searchParams: FlightTrackingParams) {
    console.log('search querys', searchParams);
    console.log('search value', searchvalue);
    // const queryString = new URLSearchParams(
    //   Object.entries(searchParams).filter(([_, v]) => v != null)
    // ).toString();

    // try {
    //   const response = await fetch(`/api/flights?${queryString}`);
    //   if (!response.ok) throw new Error('Flight search failed');
    //   return await response.json();
    // } catch (error) {
    //   console.error('Flight search error:', error);
    //   return null;
    // }
  }

  const toggle = (value: string) => {
    $activeTab = value;
    console.log('value', value);
  };
  // $effect(() => console.log('current tab', current_tab));
</script>

<section class="px-6 md:px-10 py-2">
  <div
    class="space-y-4 w-full rounded-2xl p-6 my-10 flex flex-col justify-center bg-white"
  >
    <form class="flex items-center justify-between">
      {#if $activeTab == TAB.TRACKER}
        <div class="flex items-center gap-2">
          <Label class="text-xs">Flight ID:</Label>
          <Input
            placeholder="Flight id"
            class="w-52 h-8 py-1 text-xs"
            onchange={(e) => {
              searchvalue = {
                ...searchvalue,
                flight_number: e.currentTarget.value,
              };
            }}
          />
        </div>
      {:else}
        <div class="flex gap-4">
          <BookingOptions options={trip} />
          <BookingOptions options={size} />
          <BookingOptions options={user_class} />
        </div>
      {/if}

      <RadioGroup.Root
        bind:value={$activeTab}
        onValueChange={toggle}
        class="flex flex-row gap-2 text-xs font-normal"
      >
        <div class="flex items-center space-x-2">
          <RadioGroup.Item value={TAB.BOOKINGS} id="r2" />
          <Label for="r2" class="text-xs font-medium">Bookings</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroup.Item value={TAB.TRACKER} id="r1" />
          <Label for="r1" class="text-xs font-medium">Tracker</Label>
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
            onChange={(airport: any) => {
              searchvalue = { ...searchvalue, departure_airport: airport.code };
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
            onChange={(airport: any) => {
              searchvalue = { ...searchvalue, arrival_airport: airport.code };
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
          on:click={() => searchFlights(searchvalue)}
          class="bg-blue-600 hover:bg-blue-600 text-white w-full h-full text-lg"
          >Search Flights</Button
        >
      </div>
    </form>
  </div>
</section>
