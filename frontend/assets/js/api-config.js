// ─── API Configuration ───────────────────────────────────────
// When running frontend separately (port 5500), API calls go to backend (port 3000).
// When running full-stack (both on port 3000), API calls use relative paths.

const API_BASE = window.location.port === "5500"
  ? "http://localhost:3000"
  : "";
