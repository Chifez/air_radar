<script lang="ts">
  import { onMount } from 'svelte';
  import { clickOutside } from '$lib/utils/click-outside';
  import { Label } from '../ui/label';
  import { env } from '$env/dynamic/public';
  import { airportList } from '$lib/utils/data';

  // Airport interface for type safety
  interface Airport {
    city: string;
    code: string;
    country: string;
  }

  let { placeholder = 'Select airport', label, onChange } = $props();

  let airports = $state<Airport[]>([]);
  let isLoading = $state(false);
  let error = $state<string | null>(null);

  let isOpen = $state(false);
  let searchTerm = $state('');
  let selectedAirport = $state<Airport | null>(null);

  const filteredAirports = $derived(
    airports.filter(
      (airport) =>
        airport.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        airport.code.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  async function fetchAirports() {
    isLoading = true;
    error = null;

    try {
      // Replace with your actual Aviationstack API key
      // const API_KEY = '2683ae397de97ec69cbe30d844ad8168';
      // const response = await fetch(
      //   `http://api.aviationstack.com/v1/airports?access_key=${API_KEY}&limit=100`
      // );

      // if (!response.ok) {
      //   throw new Error('Failed to fetch airports');
      // }

      const data = airportList;
      console.log('airports', data);
      // Transform API response to match our Airport interface
      airports = data.data
        .map((airport: any) => ({
          city: airport.airport_name,
          code: airport.iata_code,
          country: airport.country_name,
        }))
        .filter((airport: Airport) => airport.code && airport.city);
    } catch (err) {
      error = err instanceof Error ? err.message : 'An unknown error occurred';
      console.error(error);
    } finally {
      isLoading = false;
    }
  }

  function handleInputChange(e: any) {
    searchTerm = e.target.value;
    isOpen = true;
    selectedAirport = null;
  }

  function handleSelectAirport(airport: Airport) {
    selectedAirport = airport;
    searchTerm = airport.city;
    isOpen = false;
    if (onChange) {
      onChange(airport);
    }
  }

  // Fetch airports when component mounts
  onMount(() => {
    fetchAirports();
  });
</script>

<section>
  <Label class="text-[10px] text-gray-500 font-semibold">{label}</Label>

  <div class="relative w-fit" use:clickOutside={() => (isOpen = false)}>
    <input
      type="text"
      bind:value={searchTerm}
      onfocus={() => (isOpen = true)}
      oninput={handleInputChange}
      {placeholder}
      class="w-full text-sm cursor-pointer text-ellipsis border py-2 pl-1 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    {#if isLoading}
      <div class="absolute z-10 w-full mt-1 text-sm text-gray-500">
        Loading airports...
      </div>
    {:else if error}
      <div class="absolute z-10 w-full mt-1 text-sm text-red-500">
        {error}
      </div>
    {/if}

    {#if selectedAirport !== null}
      <span
        class="absolute h-full w-[20%] flex items-center justify-center text-center right-0 top-0 text-xs text-gray-500 font-medium"
      >
        {selectedAirport.code}
      </span>
    {/if}

    {#if isOpen && !isLoading && !error}
      <div
        class="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto no-scrollbar"
      >
        {#if filteredAirports.length > 0}
          {#each filteredAirports as airport}
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div
              onclick={() => handleSelectAirport(airport)}
              class="px-3 py-2 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
            >
              <div>
                <div class="text-sm font-medium">{airport.city}</div>
                <div class="text-xs text-gray-500">{airport.country}</div>
              </div>
              <div class="text-sm font-semibold text-gray-500">
                {airport.code}
              </div>
            </div>
          {/each}
        {:else}
          <div class="px-3 py-2 text-sm text-gray-500">No airports found</div>
        {/if}
      </div>
    {/if}
  </div>
</section>
