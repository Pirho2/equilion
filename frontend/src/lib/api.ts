const API = "https://twoj-backend-url.onrender.com";

export async function register(email: string, password: string) {
  const res = await fetch(`${API}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  if (!res.ok) throw new Error();
}

export async function login(email: string, password: string) {
  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  return data.token;
}

export async function getEntries() {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API}/entries/me`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  return await res.json();
}

export async function createEntry(mood: number, note: string, emotions: string[]) {
  const token = localStorage.getItem("token");

  await fetch(`${API}/entries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ mood, note, emotions })
  });
}