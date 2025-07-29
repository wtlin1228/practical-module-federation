import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <div
          style={{
            position: "absolute",
            width: "100%",
            backgroundColor: "cornsilk",
          }}
        >
          <div style={{ display: "flex", gap: 10, padding: "8px" }}>
            <Link to="/">Home</Link>
            <Link to="/carousel">Carousel</Link>
            <Link to="/checkout">Checkout</Link>
            <Link to="/search">Search</Link>
          </div>
        </div>
        <Outlet />
      </>
    );
  },
});
