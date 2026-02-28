<script>
  import MoodSlider from '$lib/components/MoodSlider.svelte';
  import EmotionPicker from '$lib/components/EmotionPicker.svelte';
  import EntryCard from '$lib/components/EntryCard.svelte';
  import { getEntries, createEntry } from '$lib/api';

  let mood = 50;
  let note = '';
  let selectedEmotions = [];
  let entries = [];

  async function load() {
    entries = await getEntries();
  }

  load();

  async function save() {
    await createEntry(mood, note, selectedEmotions);
    note = '';
    await load();
  }
</script>

<div class="space-y-10">

  <section class="space-y-6">
    <h2 class="text-xl text-gray-200">Twój dzień</h2>

    <MoodSlider bind:value={mood} />
    <EmotionPicker bind:selected={selectedEmotions} />

    <textarea bind:value={note}
      class="w-full bg-[#1a1c1f] p-4 rounded-xl resize-none min-h-[100px]"
      placeholder="Zapisz kilka słów..."
    />

    <button on:click={save}
      class="bg-blue-600/20 hover:bg-blue-600/30 px-6 py-3 rounded-xl">
      Zapisz swój dzień
    </button>

    <p class="text-xs text-gray-500">
      Twoje dane są prywatne i widoczne tylko dla Ciebie.
    </p>
  </section>

  <section class="space-y-4">
    {#each entries as entry}
      <EntryCard {entry} />
    {/each}
  </section>

</div>