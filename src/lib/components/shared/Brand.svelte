<script>
  import { Plane } from 'lucide-svelte';
  const {
    bgColor = 'bg-black',
    fill = 'white',
    size = 14,
    text = 'text-black',
  } = $props();
</script>

<div class="flex items-center justify-center gap-1">
  <span class="flex p-2 items-center rounded-full {bgColor}">
    <Plane {size} {fill} />
  </span>
  <p class="text-sm font-semibold {text}">Basis</p>
</div>
