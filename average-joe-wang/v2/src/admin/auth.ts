// Change ADMIN_PASSWORD_HASH to sha256(yourPassword) to set a new password.
// You can generate a sha256 hash at: https://emn178.github.io/online-tools/sha256.html
// Default password: "averagejoe2025"
const ADMIN_PASSWORD_HASH =
  "ecd16d4e5a701027e4bab059ca3e605842ef18dfc84d03c6015080e847fa51ca";

const SESSION_KEY = "ajw_admin_session";

async function sha256(message: string): Promise<string> {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function login(password: string): Promise<boolean> {
  const hash = await sha256(password);
  if (hash === ADMIN_PASSWORD_HASH) {
    sessionStorage.setItem(SESSION_KEY, "1");
    return true;
  }
  return false;
}

export function logout(): void {
  sessionStorage.removeItem(SESSION_KEY);
}

export function isLoggedIn(): boolean {
  return sessionStorage.getItem(SESSION_KEY) === "1";
}
