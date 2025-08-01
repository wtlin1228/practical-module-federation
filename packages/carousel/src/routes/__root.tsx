import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

const LinkStyle = {
  color: "bisque",
};

export const Route = createRootRoute({
  component: () => (
    <>
      <div
        style={{
          padding: 8,
          display: "flex",
          gap: 6,
        }}
      >
        <Link to="/" style={LinkStyle}>
          Home
        </Link>
        <Link to="/about" style={LinkStyle}>
          About
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  ),
});
