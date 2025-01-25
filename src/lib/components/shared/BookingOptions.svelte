<script lang="ts">
  import * as Select from '$lib/components/ui/select/index.js';

  let { options } = $props();
</script>

<Select.Root portal={null}>
  <Select.Trigger class="border-none w-fit">
    <Select.Value
      placeholder={options[0].label}
      class="text-xs text-gray-500 pr-4"
    />
  </Select.Trigger>
  <Select.Content>
    <Select.Group>
      <!-- <Select.Label>{label}</Select.Label> -->
      {#each options as item}
        <Select.Item
          class="text-xs text-gray-500"
          value={item.value}
          label={item.label}>{item.label}</Select.Item
        >
      {/each}
    </Select.Group>
  </Select.Content>
  <Select.Input name="options" />
</Select.Root>
