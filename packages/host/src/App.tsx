import { useEffect } from "react";
import { registerRemotes } from "@module-federation/enhanced/runtime";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "./App.css";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const App = () => {
  useEffect(() => {
    registerRemotes([
      {
        name: "carousel",
        entry: `http://localhost:3001/mf-manifest.json`,
      },
      {
        name: "checkout",
        entry: `http://localhost:3002/mf-manifest.json`,
      },
    ]);
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
