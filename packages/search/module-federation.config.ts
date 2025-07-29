import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "search",
  exposes: {
    ".": "./src/components/ProviderComponent.tsx",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
  getPublicPath: `function() { return "http://localhost:3003/"; }`,
});
