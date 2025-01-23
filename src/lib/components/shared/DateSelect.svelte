<script lang="ts">
  import { Calendar } from '$lib/components/ui/calendar';
  import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from '$lib/components/ui/popover';
  import type { DateValue } from '@internationalized/date';
  import { format } from 'date-fns';
  import { CalendarRange } from 'lucide-svelte';

  let { label = '', onChange } = $props();

  let value: DateValue | undefined = $state(undefined);

  const formattedDate = $derived(
    value ? format(value, 'MM/dd/yyyy') : format(new Date(), 'MM/dd/yyyy')
  );
</script>

<Popover>
  <PopoverTrigger>
    <div
      class="flex items-center gap-2 p-4 cursor-pointer hover:bg-gray-50 rounded-lg"
    >
      <CalendarRange size={20} strokeWidth={1.25} />
      <span class="font-semibold space-y-1">
        <p class="text-[10px] text-gray-500 text-start">{label}</p>
        <div class="flex items-center gap-1 text-sm">
          <p>{formattedDate}</p>
        </div>
      </span>
    </div>
  </PopoverTrigger>
  <PopoverContent class="w-auto p-0">
    <Calendar bind:value initialFocus />
  </PopoverContent>
</Popover>
