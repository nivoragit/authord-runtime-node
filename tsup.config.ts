import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/mod.ts"],
  format: ["esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  platform: "node",
  external: ["@authord/render-core"]
});
