<script>
  export let value = 50;
</script>

<div class="space-y-2">
  <input type="range" min="1" max="100" bind:value
    class="w-full accent-blue-500" />
  <div class="text-sm text-gray-400">{value}</div>
</div>