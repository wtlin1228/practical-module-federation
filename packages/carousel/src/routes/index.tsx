import { createFileRoute } from "@tanstack/react-router";
import { Provider } from "../components";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <Provider />;
}
