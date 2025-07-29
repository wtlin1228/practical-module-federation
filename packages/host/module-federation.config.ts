import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";

export default createModuleFederationConfig({
  name: "host",
  remotes: {
    carousel: "carousel@http://localhost:3001/mf-manifest.json",
    checkout: "checkout@http://localhost:3002/mf-manifest.json",
    search: "search@http://localhost:3003/mf-manifest.json",
  },
  shareStrategy: "loaded-first",
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
});
