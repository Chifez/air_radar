<script>
  import Map from './shared/Map.svelte';

  let flightData = {
    flight_date: '2019-12-12',
    flight_status: 'active',
    departure: {
      airport: 'San Francisco International',
      timezone: 'America/Los_Angeles',
      iata: 'SFO',
      icao: 'KSFO',
      latitude: 37.6213, // Add latitude and longitude for departure airport
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
      latitude: 32.8968, // Add latitude and longitude for arrival airport
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
      latitude: 36.2856,
      longitude: -106.807,
      altitude: 8846.82,
      direction: 114.34,
      speed_horizontal: 894.348,
      speed_vertical: 1.188,
      is_ground: false,
    },
  };
</script>

<section class="flex flex-row gap-2 items-start mb-32 px-6 md:px-10 py-2">
  <div
    class="space-y-4 w-full rounded-2xl p-6 my-10 flex flex-col justify-center bg-white"
  >
    <Map {flightData} />
  </div>

  <div
    class="space-y-4 w-[30%] h-max rounded-2xl p-6 my-10 flex flex-col justify-center bg-white"
  >
    <p>flight number</p>
    <p>Departure Airport</p>
    <p>Arrival Airport</p>
    <p>longitude and Latitude</p>
  </div>
</section>
