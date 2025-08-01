import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

const LinkStyle = {
  color: "white",
};

const BoxStyle = {
  padding: "12px 24px",
  border: "solid 1px #fff",
  borderRadius: "6px",
};

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <div
          style={{
            position: "absolute",
            width: "100%",
            backgroundColor: "darkslategrey",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 10,
              padding: "8px",
              alignItems: "center",
            }}
          >
            <Link to="/" style={LinkStyle}>
              Home
            </Link>
            <Link to="/carousel" style={LinkStyle}>
              Carousel
            </Link>
            <Link to="/checkout" style={LinkStyle}>
              Checkout
            </Link>
            <Link to="/search" style={LinkStyle}>
              Search
            </Link>

            <div className="a" style={BoxStyle}>
              a
            </div>
            <div className="b" style={BoxStyle}>
              b
            </div>
            <div className="c" style={BoxStyle}>
              c
            </div>
            <div className="d" style={BoxStyle}>
              d
            </div>
            <div className="e" style={BoxStyle}>
              e
            </div>
          </div>
        </div>
        <div style={{ paddingTop: 60.5 }}>
          <Outlet />
        </div>
      </>
    );
  },
});
