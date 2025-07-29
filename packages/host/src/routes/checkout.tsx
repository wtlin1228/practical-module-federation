import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/checkout")({
  loader: async () => {
    const module = await import("checkout");
    return { Root: module.default };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { Root } = Route.useLoaderData();

  return <Root />;
}
