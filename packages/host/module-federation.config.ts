import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";
import { dependencies } from "./package.json";

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
    "@mui/material": {
      singleton: true,
      eager: true,
      version: "7.2.0",
      requiredVersion: dependencies["@mui/material"],
    },
  },
});
