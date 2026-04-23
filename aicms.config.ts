import { defineConfig } from "aicms";

export default defineConfig({
  storage: {
    driver: process.env.TURSO_DATABASE_URL ? "turso" : "sqlite",
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
    dbPath: "./aicms.db",
  },
  auth: { type: "secret" },
  ai: {
    model: process.env.AICMS_AI_MODEL ?? "claude-haiku-4-5-20251001",
    apiKey: process.env.ANTHROPIC_API_KEY,
  },
});
