<script>
  let flight = [1, 2, 4, 5, 6];
</script>

<section class="px-6 md:px-10 space-y-4">
  <p class="font-bold text-lg">Top flights</p>
  <div
    class="grid grid-cols-3 items-center justify-between gap-4 border border-black rounded-2xl"
  >
    {#each flight as flight, idx}
      <div class="flex-1 h-52 border rounded-xl border-blue-500">
        <p>flight image</p>
        <p>flight description</p>
        <p>fligth pricing</p>
      </div>
    {/each}
  </div>
</section>
