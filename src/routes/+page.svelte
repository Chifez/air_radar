<script>
  import Navigation from '$lib/components/shared/Navigation.svelte';
  import Hero from '$lib/components/shared/Hero.svelte';
  import SearchFlights from '$lib/components/SearchFlights.svelte';
  import TopFlights from '$lib/components/TopFlights.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Peace | Home</title>
  <meta name="Home" content="Explore the richness in global exploration" />
</svelte:head>

<div>
  <Navigation />
  <div>
    <Hero />
    <div class="mt-14 pb-10 bg-slate-50">
      <SearchFlights />
      <TopFlights />
    </div>
    <Footer />
  </div>
</div>
