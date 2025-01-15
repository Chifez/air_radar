<script lang="ts">
  import { Plane, Search, Calendar, MapPin } from 'lucide-svelte';

  let searchQuery = '';
  let selectedDate = new Date().toISOString().split('T')[0];

  // Mock flight data
  const flights = [
    {
      id: '1',
      flightNumber: 'FL1234',
      departure: 'New York (JFK)',
      arrival: 'London (LHR)',
      departureTime: '08:00',
      arrivalTime: '20:00',
      status: 'On Time',
      gate: 'A1',
      price: 549.99,
    },
    {
      id: '2',
      flightNumber: 'FL5678',
      departure: 'London (LHR)',
      arrival: 'Paris (CDG)',
      departureTime: '10:30',
      arrivalTime: '12:30',
      status: 'Boarding',
      gate: 'B3',
      price: 199.99,
    },
  ];
</script>

<main class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 py-4">
      <div class="flex items-center space-x-4">
        <Plane class="text-indigo-600 w-8 h-8" />
        <h1 class="text-2xl font-bold text-gray-800">SkyTracker</h1>
      </div>
    </div>
  </nav>

  <div class="max-w-7xl mx-auto px-4 py-8">
    <!-- Search Section -->
    <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="relative">
          <div
            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
          >
            <Search class="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            bind:value={searchQuery}
            placeholder="Search flights..."
            class="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div class="relative">
          <div
            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
          >
            <Calendar class="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="date"
            bind:value={selectedDate}
            class="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <button
          class="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Search Flights
        </button>
      </div>
    </div>

    <!-- Flight List -->
    <div class="space-y-4">
      {#each flights as flight}
        <div
          class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <p class="text-sm text-gray-500">Flight</p>
              <p class="font-semibold">{flight.flightNumber}</p>
            </div>

            <div class="flex items-center space-x-4">
              <div>
                <p class="text-sm text-gray-500">From</p>
                <div class="flex items-center space-x-1">
                  <MapPin class="h-4 w-4 text-gray-400" />
                  <p class="font-semibold">{flight.departure}</p>
                </div>
                <p class="text-sm text-gray-600">{flight.departureTime}</p>
              </div>

              <Plane class="h-5 w-5 text-indigo-600 transform rotate-90" />

              <div>
                <p class="text-sm text-gray-500">To</p>
                <div class="flex items-center space-x-1">
                  <MapPin class="h-4 w-4 text-gray-400" />
                  <p class="font-semibold">{flight.arrival}</p>
                </div>
                <p class="text-sm text-gray-600">{flight.arrivalTime}</p>
              </div>
            </div>

            <div>
              <p class="text-sm text-gray-500">Status</p>
              <span
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  {flight.status === 'On Time'
                  ? 'bg-green-100 text-green-800'
                  : flight.status === 'Delayed'
                    ? 'bg-red-100 text-red-800'
                    : flight.status === 'Boarding'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'}"
              >
                {flight.status}
              </span>
              <p class="text-sm text-gray-600 mt-1">Gate {flight.gate}</p>
            </div>

            <div class="flex flex-col justify-between">
              <div>
                <p class="text-sm text-gray-500">Price</p>
                <p class="text-2xl font-bold text-indigo-600">
                  ${flight.price}
                </p>
              </div>
              <button
                class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors mt-2"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</main>
