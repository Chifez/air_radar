<script lang="ts">
  import Navigation from '$lib/components/shared/Navigation.svelte';
  import '../app.css';
  let { children } = $props();
</script>

<div class="relative">
  <Navigation />
  {@render children()}
</div>
