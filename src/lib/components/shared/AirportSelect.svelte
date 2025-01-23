<!-- <script lang='ts'>
    import { clickOutside } from '$lib/utils/click-outside';
    import { createEventDispatcher } from 'svelte';
    
    export let placeholder = "Select airport";
    export let value = null;
    
    
    
   
    const AIRPORTS = [
      { city: 'Jakarta', code: 'CGK', country: 'Indonesia' },
      { city: 'Singapore', code: 'SIN', country: 'Singapore' },
      { city: 'Bangkok', code: 'BKK', country: 'Thailand' },
      { city: 'Kuala Lumpur', code: 'KUL', country: 'Malaysia' },
      { city: 'Manila', code: 'MNL', country: 'Philippines' }
    ];
    
    let isOpen = false;
    let searchTerm = '';
    let selectedAirport: string | null = null;
    
    $: filteredAirports = AIRPORTS.filter(airport => 
      airport.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      airport.code.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    function handleInputChange(e) {
      searchTerm = e.target.value;
      isOpen = true;
      selectedAirport = null;
    }
    
    function handleSelectAirport(airport) {
      selectedAirport = airport;
      searchTerm = airport.city;
      isOpen = false;
      dispatch('change', airport);
    }
    
    function handleClickOutside() {
      isOpen = false;
    }
  </script>
  
  <div class="relative w-full" use:clickOutside on:clickoutside={handleClickOutside}>
    <input
      type="text"
      bind:value={searchTerm}
      on:focus={() => isOpen = true}
      on:input={handleInputChange}
      {placeholder}
      class="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    
    {#if selectedAirport}
      <span class="absolute right-3 top-2 text-xs text-gray-500">
        {selectedAirport.code}
      </span>
    {/if}
    
    {#if isOpen}
      <div
        class="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto"
      >
        {#if filteredAirports.length > 0}
        
          {#each filteredAirports as airport}
            
            <div
              on:click={() => handleSelectAirport(airport)}
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
          <div class="px-3 py-2 text-sm text-gray-500">
            No airports found
          </div>
        {/if}
      </div>
    {/if}
  </div> -->

<script lang="ts">
  import { clickOutside } from '$lib/utils/click-outside';
  import { Label } from '../ui/label';

  let { placeholder = 'Select airport', label, onChange } = $props();

  // Sample airport data - replace with your actual data
  const AIRPORTS = $state([
    { city: 'Jakarta', code: 'CGK', country: 'Indonesia' },
    { city: 'Singapore', code: 'SIN', country: 'Singapore' },
    { city: 'Bangkok', code: 'BKK', country: 'Thailand' },
    { city: 'Kuala Lumpur', code: 'KUL', country: 'Malaysia' },
    { city: 'Manila', code: 'MNL', country: 'Philippines' },
  ]);

  let isOpen = $state(false);
  let searchTerm = $state('');
  let selectedAirport = $state(null);

  const filteredAirports = $derived(
    AIRPORTS.filter(
      (airport) =>
        airport.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        airport.code.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  function handleInputChange(e: any) {
    searchTerm = e.target.value;
    isOpen = true;
    selectedAirport = null;
  }

  function handleSelectAirport(airport: any) {
    selectedAirport = airport;
    searchTerm = airport.city;
    isOpen = false;
    if (onChange) {
      onChange(airport);
    }
  }

  function handleClickOutside() {
    isOpen = false;
  }
</script>

<section>
  <Label class="text-[10px] text-gray-500 font-semibold">{label}</Label>

  <div
    class="relative w-fit"
    use:clickOutside
    onclickoutside={handleClickOutside}
  >
    <input
      type="text"
      bind:value={searchTerm}
      onfocus={() => (isOpen = true)}
      oninput={handleInputChange}
      {placeholder}
      class="w-full text-sm cursor-pointer border py-2 px-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    {#if selectedAirport}
      <span class="absolute right-3 top-3 text-xs text-gray-500 font-medium">
        {selectedAirport.code}
      </span>
    {/if}

    {#if isOpen}
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
