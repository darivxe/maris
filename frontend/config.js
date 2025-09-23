// config.js
export const API_URL =
  process.env.EXPO_PUBLIC_API_URL || "http://localhost:8000"; // change to Railway/Render URL after deploy

export const TOKENS = {
  admin: "admin-token-123",
  minter: "minter-token-456",
};
