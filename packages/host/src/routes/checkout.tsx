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

  return <Root />;
}
