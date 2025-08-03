import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "host",
  remotes: {
    // let's register and load carousel and checkout during runtime
    // carousel: "carousel@http://localhost:3001/mf-manifest.json",
    // checkout: "checkout@http://localhost:3002/mf-manifest.json",
    search: "search@http://localhost:3003/mf-manifest.json",
  },
  shareStrategy: "loaded-first",
  shared: {
    react: { singleton: true, requiredVersion: "^18.3.1" },
    "react-dom": { singleton: true, requiredVersion: "^18.3.1" },
  },
});
