import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";
import { dependencies } from "./package.json";

export default createModuleFederationConfig({
  name: "checkout",
  exposes: {
    ".": "./src/components/ProviderComponent.tsx",
  },
  shared: {
    react: {
      singleton: true,
      eager: true,
      requiredVersion: dependencies.react,
    },
    "react-dom": {
      singleton: true,
      eager: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
  getPublicPath: `function() { return "http://localhost:3002/"; }`,
});
