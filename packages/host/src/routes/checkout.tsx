import React from "react";
import { loadRemote } from "@module-federation/enhanced/runtime";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/checkout")({
  loader: async () => {
    const module = await loadRemote("checkout");
    // @ts-expect-error
    return { Root: module.default };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { Root } = Route.useLoaderData();

  const [count, setCount] = React.useState(0);

  return (
    <div>
      <div>Host: count={count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Host +1</button>
      <Root count={count} setCount={setCount} />
    </div>
  );
}
