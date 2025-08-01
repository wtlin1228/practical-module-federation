import "./App.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";

const theme = createTheme();

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
