import { defineConfig } from "oxfmt";

export default defineConfig({
  proseWrap: "always",
  ignorePatterns: [
    "*.js",
    "*.mjs",
    "*.cjs",
    "*.jsx",
    "*.ts",
    "*.mts",
    "*.cts",
    "*.tsx",
    "*.vue",
    "*.svelte",
    "*.astro",

    "dist/**",
  ],
});
