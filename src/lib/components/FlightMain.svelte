<script lang="ts">
  import { TAB } from '$lib/utils/types';
  import FlightInfo from './FlightInfo.svelte';
  import SearchFlights from './SearchFlights.svelte';
  import { activeTab } from './store';
  import TopFlights from './TopFlights.svelte';
</script>

<section>
  <SearchFlights />
  {#if $activeTab === TAB.BOOKINGS}
    <TopFlights />
  {:else}
    <FlightInfo />
  {/if}
</section>
