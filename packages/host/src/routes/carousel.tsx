import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/carousel")({
  loader: async () => {
    const module = await import("carousel");
    return { Root: module.default };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { Root } = Route.useLoaderData();

  return <Root />;
}
