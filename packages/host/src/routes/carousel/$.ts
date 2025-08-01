import { createFileRoute } from "@tanstack/react-router";

// the routes under /carousel is handled by the remote app's router
export const Route = createFileRoute("/carousel/$")();
