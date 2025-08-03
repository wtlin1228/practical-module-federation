import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";
import { dependencies } from "./package.json";

export default createModuleFederationConfig({
  name: "carousel",
  exposes: {
    "./App": "./src/App.tsx",
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: dependencies.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: dependencies["react-dom"],
    },
    "@mui/material": {
      singleton: true,
      version: "7.2.0",
      requiredVersion: dependencies["@mui/material"],
    },
  },
  getPublicPath: `function() { return "http://localhost:3001/"; }`,
});
