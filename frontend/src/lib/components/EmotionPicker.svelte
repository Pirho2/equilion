<script>
  export let selected = [];

  const emotions = [
    "Spokój",
    "Niepokój",
    "Motywacja",
    "Zmęczenie",
    "Wdzięczność",
    "Frustracja"
  ];

  function toggle(emotion) {
    if (selected.includes(emotion)) {
      selected = selected.filter(e => e !== emotion);
    } else {
      selected = [...selected, emotion];
    }
  }
</script>

<div class="flex flex-wrap gap-2">
  {#each emotions as emotion}
    <button on:click={() => toggle(emotion)}
      class="px-3 py-1 rounded-full text-sm
      {selected.includes(emotion)
        ? 'bg-blue-600/30'
        : 'bg-gray-700'}">
      {emotion}
    </button>
  {/each}
</div>