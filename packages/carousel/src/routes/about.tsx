import { createFileRoute } from "@tanstack/react-router";
import { Boo } from "../components/boo";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <>
      <div>Hello from About!</div>
      <Boo />
    </>
  );
}
