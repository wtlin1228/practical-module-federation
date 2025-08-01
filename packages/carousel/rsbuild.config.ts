import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { pluginLess } from "@rsbuild/plugin-less";
import { tanstackRouter } from "@tanstack/router-plugin/rspack";
import moduleFederationConfig from "./module-federation.config";

export default defineConfig({
  output: {
    minify: false,
    assetPrefix: "http://localhost:3001/",
    filename: {
      css: "carousel_[name].[contenthash:8].css",
    },
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation(moduleFederationConfig),
    pluginLess(),
  ],
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
  server: {
    port: 3001,
  },
});
