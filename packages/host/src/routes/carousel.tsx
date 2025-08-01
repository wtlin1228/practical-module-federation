import { loadRemote } from "@module-federation/enhanced/runtime";
import { createFileRoute } from "@tanstack/react-router";

let linksToRestore: HTMLLinkElement[] = [];

export const Route = createFileRoute("/carousel")({
  onEnter: () => {
    linksToRestore.forEach((link) => document.head.appendChild(link));
  },
  onLeave: () => {
    const links: HTMLLinkElement[] = [];

    document.head.querySelectorAll("link").forEach((link) => {
      if (
        link.href.startsWith(
          "http://localhost:3001/static/css/async/carousel_"
        ) ||
        link.href.startsWith("http://localhost:3001/static/css/sync/carousel_")
      ) {
        links.push(link);
        link.parentNode?.removeChild(link);
      }
    });

    linksToRestore = links;
  },
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
