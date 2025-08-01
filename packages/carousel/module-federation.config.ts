import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "carousel",
  exposes: {
    "./App": "./src/App.tsx",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
  getPublicPath: `function() { return "http://localhost:3001/"; }`,
});
