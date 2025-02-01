<script>
  import { ArrowRight, Plane } from 'lucide-svelte';
  import Brand from './shared/Brand.svelte';
  import Map from './shared/Map.svelte';
  import JsBarcode from 'jsbarcode';
  import { afterUpdate, onMount } from 'svelte';

  let currentIndex = 0;
  let flightData = [
    {
      flight_date: '2019-12-12',
      flight_status: 'active',
      departure: {
        airport: 'San Francisco International',
        timezone: 'America/Los_Angeles',
        iata: 'SFO',
        icao: 'KSFO',
        latitude: 37.6213,
        longitude: -122.379,
        terminal: '2',
        gate: 'D11',
        delay: 13,
        scheduled: '2019-12-12T04:20:00+00:00',
        estimated: '2019-12-12T04:20:00+00:00',
        actual: '2019-12-12T04:20:13+00:00',
        estimated_runway: '2019-12-12T04:20:13+00:00',
        actual_runway: '2019-12-12T04:20:13+00:00',
      },
      arrival: {
        airport: 'Dallas/Fort Worth International',
        timezone: 'America/Chicago',
        iata: 'DFW',
        icao: 'KDFW',
        latitude: 32.8968,
        longitude: -97.038,
        terminal: 'A',
        gate: 'A22',
        baggage: 'A17',
        delay: 0,
        scheduled: '2019-12-12T04:20:00+00:00',
        estimated: '2019-12-12T04:20:00+00:00',
        actual: null,
        estimated_runway: null,
        actual_runway: null,
      },
      airline: {
        name: 'American Airlines',
        iata: 'AA',
        icao: 'AAL',
      },
      flight: {
        number: '1004',
        iata: 'AA1004',
        icao: 'AAL1004',
        codeshared: null,
      },
      aircraft: {
        registration: 'N160AN',
        iata: 'A321',
        icao: 'A321',
        icao24: 'A0F1BB',
      },
      live: {
        updated: '2019-12-12T10:00:00+00:00',
        latitude: 37.6213,
        longitude: -122.379,
        altitude: 8846.82,
        direction: 114.34,
        speed_horizontal: 894.348,
        speed_vertical: 1.188,
        is_ground: false,
      },
    },
    {
      flight_date: '2023-10-15',
      flight_status: 'active',
      departure: {
        airport: 'John F. Kennedy International',
        timezone: 'America/New_York',
        iata: 'JFK',
        icao: 'KJFK',
        latitude: 40.6413,
        longitude: -73.7781,
        terminal: '4',
        gate: 'B32',
        delay: 5,
        scheduled: '2023-10-15T08:00:00+00:00',
        estimated: '2023-10-15T08:05:00+00:00',
        actual: '2023-10-15T08:05:00+00:00',
        estimated_runway: '2023-10-15T08:05:00+00:00',
        actual_runway: '2023-10-15T08:05:00+00:00',
      },
      arrival: {
        airport: 'Los Angeles International',
        timezone: 'America/Los_Angeles',
        iata: 'LAX',
        icao: 'KLAX',
        latitude: 33.9416,
        longitude: -118.4085,
        terminal: '5',
        gate: '52A',
        baggage: '5',
        delay: 0,
        scheduled: '2023-10-15T11:00:00+00:00',
        estimated: '2023-10-15T11:00:00+00:00',
        actual: null,
        estimated_runway: null,
        actual_runway: null,
      },
      airline: {
        name: 'Delta Air Lines',
        iata: 'DL',
        icao: 'DAL',
      },
      flight: {
        number: '456',
        iata: 'DL456',
        icao: 'DAL456',
        codeshared: null,
      },
      aircraft: {
        registration: 'N123DN',
        iata: 'B737',
        icao: 'B737',
        icao24: 'A0F2CC',
      },
      live: {
        updated: '2023-10-15T09:30:00+00:00',
        latitude: 38.8895,
        longitude: -77.0353,
        altitude: 10058.4,
        direction: 270.5,
        speed_horizontal: 850.0,
        speed_vertical: 0.5,
        is_ground: false,
      },
    },
    {
      flight_date: '2023-10-16',
      flight_status: 'active',
      departure: {
        airport: 'Heathrow Airport',
        timezone: 'Europe/London',
        iata: 'LHR',
        icao: 'EGLL',
        latitude: 51.4706,
        longitude: -0.4619,
        terminal: '5',
        gate: 'A10',
        delay: 10,
        scheduled: '2023-10-16T12:00:00+00:00',
        estimated: '2023-10-16T12:10:00+00:00',
        actual: '2023-10-16T12:10:00+00:00',
        estimated_runway: '2023-10-16T12:10:00+00:00',
        actual_runway: '2023-10-16T12:10:00+00:00',
      },
      arrival: {
        airport: 'Charles de Gaulle Airport',
        timezone: 'Europe/Paris',
        iata: 'CDG',
        icao: 'LFPG',
        latitude: 49.0097,
        longitude: 2.5479,
        terminal: '2E',
        gate: 'K35',
        baggage: '10',
        delay: 0,
        scheduled: '2023-10-16T14:30:00+00:00',
        estimated: '2023-10-16T14:30:00+00:00',
        actual: null,
        estimated_runway: null,
        actual_runway: null,
      },
      airline: {
        name: 'British Airways',
        iata: 'BA',
        icao: 'BAW',
      },
      flight: {
        number: '789',
        iata: 'BA789',
        icao: 'BAW789',
        codeshared: null,
      },
      aircraft: {
        registration: 'G-XLEA',
        iata: 'A380',
        icao: 'A380',
        icao24: 'A0F3DD',
      },
      live: {
        updated: '2023-10-16T13:00:00+00:00',
        latitude: 49.5,
        longitude: 1.5,
        altitude: 11582.4,
        direction: 135.0,
        speed_horizontal: 900.0,
        speed_vertical: 0.2,
        is_ground: false,
      },
    },
  ];

  const goToNext = () => {
    if (currentIndex < flightData.length - 1) {
      currentIndex += 1;
    } else {
      currentIndex = 0;
    }

    const container = document.querySelector('.flight-scroll-container');
    if (container) {
      container.scrollTo({
        left: container.offsetWidth * currentIndex,
        behavior: 'smooth',
      });
    }
  };

  const getFlightStatusColor = (/** @type {string} */ status) => {
    if (status == 'active') {
      return 'text-yellow-700 bg-yellow-200';
    } else if (status == 'not-active') {
      return 'text-red-700 bg-red-200';
    } else {
      return 'text-green-700 bg-green-200';
    }
  };

  onMount(() => {
    flightData.forEach((flight, index) => {
      JsBarcode(`#barcode-${index}`, flight.flight.iata, {
        format: 'CODE128',
        displayValue: true,
      });
    });
  });
</script>

<section class="flex flex-row gap-2 mb-32 px-6 md:px-10 py-2">
  <div
    class="space-y-4 w-full rounded-2xl p-6 my-10 flex flex-col justify-center bg-white"
  >
    <Map {flightData} />
  </div>

  <div
    class="space-y-4 w-[30%] min-h-full rounded-2xl py-6 px-4 my-10 flex flex-col justify-start bg-white"
  >
    <div class="flex items-center justify-between text-center">
      <div>
        <p class="text-xs text-gray-400">
          {currentIndex + 1} of {flightData.length}
        </p>
      </div>
      <p class="flex-1 text-center font-semibold text-sm">Flight Details</p>
      <!-- svelte-ignore a11y_click_events_have_key_events -->
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <div
        class="flex-end bg-gray-300 rounded-lg p-2 cursor-pointer"
        onclick={goToNext}
      >
        <ArrowRight strokeWidth={1.25} size={14} />
      </div>
    </div>

    <div
      class="flex items-start justify-between w-full whitespace-nowrap overflow-x-hidden flight-scroll-container"
    >
      {#each flightData as data, index}
        <div class="min-w-full transition-transform duration-500">
          <div class="flex items-center justify-between border-b pt-4 pb-6">
            <span class="font-mono">
              <p class="font-medium text-sm">{data.airline.name}</p>
              <p class="text-xs text-gray-400">{data.aircraft.registration}</p>
            </span>
            <Brand />
          </div>
          <div
            class="w-full flex items-center justify-between gap-2 border-b pt-4 pb-6"
          >
            <span class="w-full font-mono">
              <p class="font-medium text-lg">{data.departure.iata}</p>
              <p class="text-[11px] text-gray-400">{data.departure.airport}</p>
              <p class="text-[9px] text-gray-400">10:00am</p>
            </span>

            <div class="w-full flex items-center justify-center plane">
              <Plane fill="#1d4ed8" strokeWidth={0} size={20} />
            </div>

            <span class="w-full font-mono">
              <p class="font-medium text-lg">{data.arrival.iata}</p>
              <p class="text-[11px] text-gray-400">{data.arrival.airport}</p>
              <p class="text-[9px] text-gray-400">3:00pm</p>
            </span>
          </div>
          <div
            class="flex flex-col items-center justify-between gap-8 border-b pt-4 pb-6 font-mono"
          >
            <div
              class="w-full flex items-start justify-between text-[10px] text-gray-400"
            >
              <span>
                <p>Altitude</p>
                <p class="text-sm font-medium text-black">
                  {data.live.altitude} ft
                </p>
              </span>
              <span>
                <p>Ground Speed</p>
                <p class="text-sm font-medium text-black">
                  {data.live.speed_horizontal} km/s
                </p>
              </span>
              <span>
                <p>Flight Time</p>
                <p class="text-sm font-medium text-black">12:44pm</p>
              </span>
            </div>
            <div
              class="w-full flex items-start justify-between text-[10px] text-gray-400"
            >
              <span>
                <p>Air Speed</p>
                <p class="text-sm font-medium text-black">
                  {data.live.speed_horizontal} kts
                </p>
              </span>
              <span>
                <p>Time</p>
                <p class="text-sm font-medium text-black">9:49am UTC</p>
              </span>
              <span class="flex flex-col items-center justify-center">
                <p>Status</p>
                <span
                  class={`${getFlightStatusColor(data.flight_status)} text-sm font-medium py-1 px-2 rounded-xl`}
                  >{data.flight_status}</span
                >
              </span>
            </div>
          </div>

          <div class="barcode-container flex justify-center py-4">
            <svg id={`barcode-${index}`}></svg>
          </div>
        </div>
      {/each}

      <!-- end -->
    </div>
  </div>
</section>

<style>
  .plane {
    transform-origin: center;
    transition: all 2s ease-in-out;
    opacity: 1;
    transform: translate(0, 0) rotate(45deg);
  }
</style>
