import { useEffect } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { registerRemotes } from "@module-federation/enhanced/runtime";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "./App.css";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
