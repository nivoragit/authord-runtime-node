import { defineConfig } from "tsup";

export default defineConfig({
  entry: { index: "src/mod.ts" },
  format: ["esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  platform: "node",
  external: ["@authord/render-core"]
});
