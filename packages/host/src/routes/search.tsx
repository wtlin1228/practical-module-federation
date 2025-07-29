import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/search")({
  loader: async () => {
    const module = await import("search");
    return { Root: module.default };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { Root } = Route.useLoaderData();

  return <Root />;
}
