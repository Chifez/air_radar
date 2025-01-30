<script>
  import Map from './shared/Map.svelte';

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
    <p>Flight Number</p>
    <p>Departure Airport</p>
    <p>Arrival Airport</p>
    <p>Longitude and Latitude</p>
  </div>
</section>
