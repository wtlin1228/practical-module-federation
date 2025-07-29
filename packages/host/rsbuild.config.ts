import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { tanstackRouter } from "@tanstack/router-plugin/rspack";
import moduleFederationConfig from "./module-federation.config";

export default defineConfig({
  mode: "development",
  output: {
    minify: false,
  },
  plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig)],
  tools: {
    rspack: {
      plugins: [
        tanstackRouter({
          target: "react",
          autoCodeSplitting: true,
        }),
      ],
    },
  },
});
