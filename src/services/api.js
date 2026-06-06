// ============================================================
// SERVICE: api.js
// ============================================================
// Centralizes all backend API calls.
// The base URL is proxied to the backend via Vite config
// in development, and uses VITE_API_URL in production.
//
// TO CHANGE API BASE URL: update VITE_API_URL in .env
// ============================================================

const BASE_URL = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api`
  : "/api"; // Falls back to Vite proxy in development

/**
 * Send a contact form message to the backend.
 * @param {{ name: string, email: string, message: string }} data
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export async function sendContactMessage(data) {
  const res = await fetch(`${BASE_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const json = await res.json();
  if (!res.ok) throw new Error(json.message || "Request failed");
  return json;
}
