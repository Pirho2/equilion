<script>
  export let entry;
</script>

<div class="bg-[#1a1c1f] p-4 rounded-xl space-y-2">
  <div class="text-sm text-gray-400">
    {new Date(entry.date).toLocaleDateString()}
  </div>

  <div class="text-gray-200">
    Nastrój: {entry.mood}
  </div>

  <div class="text-gray-300 text-sm">
    {entry.note}
  </div>
</div>