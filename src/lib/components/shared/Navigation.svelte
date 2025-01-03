<script lang="ts">
  import Button from '../ui/button/button.svelte';
</script>

<nav class="py-3 px-6 border-b">
  <div class="flex items-center justify-between">
    <h1 class="text-lg font-bold uppercase">Peace.</h1>
    <div
      class=" cursor-pointer flex gap-4 list-none font-medium text-sm uppercase"
    >
      <li class="text-gray-600 hover:text-black">Tracking</li>
      <li class="text-gray-600 hover:text-black">Places</li>
    </div>

    <Button class="py-2 px-8 h-fit rounded-lg flex items-center gap-1"
      >Booking
    </Button>
  </div>
</nav>
