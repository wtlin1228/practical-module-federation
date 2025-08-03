import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "search",
  exposes: {
    ".": "./src/components/ProviderComponent.tsx",
  },
  shared: {
    react: { singleton: true, requiredVersion: "^18.3.1" },
    "react-dom": { singleton: true, requiredVersion: "^18.3.1" },
  },
  getPublicPath: `function() { return "http://localhost:3003/"; }`,
});
