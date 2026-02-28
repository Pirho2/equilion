<script>
  import { goto } from '$app/navigation';
  import { register } from '$lib/api';

  let email = '';
  let password = '';
  let error = '';

  async function handleRegister() {
    try {
      await register(email, password);
      goto('/login');
    } catch (e) {
      error = 'Nie udało się utworzyć konta.';
    }
  }
</script>

<div class="bg-[#1a1c1f] p-8 rounded-xl space-y-6">
  <h2 class="text-xl text-gray-200">Rejestracja</h2>

  <input bind:value={email} placeholder="Email"
    class="w-full bg-[#111214] p-3 rounded-lg outline-none" />

  <input bind:value={password} type="password" placeholder="Hasło"
    class="w-full bg-[#111214] p-3 rounded-lg outline-none" />

  {#if error}
    <p class="text-red-400 text-sm">{error}</p>
  {/if}

  <button on:click={handleRegister}
    class="w-full bg-blue-600/20 hover:bg-blue-600/30 py-3 rounded-lg">
    Utwórz konto
  </button>
</div>