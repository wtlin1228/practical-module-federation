import "./App.css";

import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";

export const App = () => {
  return <RouterProvider router={router} />;
};
