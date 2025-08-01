import { loadRemote } from "@module-federation/enhanced/runtime";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/carousel")({
  loader: async () => {
    const module = await loadRemote("carousel/App");
    // @ts-expect-error
    return { Root: module.App };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { Root } = Route.useLoaderData();

  return <Root />;
}
