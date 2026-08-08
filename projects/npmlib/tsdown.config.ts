import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    main: "src/main.ts",
  },
  format: [ "esm", "cjs" ],

  dts: true,
  sourcemap: true,

  treeshake: false,
  minify: false,
  clean: true,

  exports: {
    packageJson: false,
    inlinedDependencies: false,
  },
  publint: {
    level: "suggestion",
  },
  attw: {
    // Resolution profile:
    //   'strict'   - requires all resolutions (default)
    //   'node16'   - ignores node10 resolution failures
    //   'esm-only' - ignores CJS resolution failures
    profile: "node16",
  },
});
