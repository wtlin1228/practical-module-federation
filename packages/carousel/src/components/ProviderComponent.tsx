/**
 * .a is injected by <GlobalStyles> of MUI
 * .b is injected by inline style
 * .c is injected by component level <link>
 * .d is injected by sync CSS import
 * .e is injected by async CSS import
 */

import React from "react";
import GlobalStyles from "@mui/material/GlobalStyles";
import Button from "@mui/material/Button";
import { Foo } from "./foo";
import { Bar } from "./bar";

// this turns the sync CSS asset into async
export const loadCss = async () => {
  await import("./ProviderComponent.css");
};

const Provider: React.FC = () => {
  return (
    <>
      <GlobalStyles styles={{ ".a": { backgroundColor: "rebeccapurple" } }} />

      <style>
        {`
          .b {
            background-color: steelblue;
          }
        `}
      </style>

      <link
        href="http://localhost:3001/carousel-static-styles.css"
        rel="stylesheet"
        type="text/css"
      />

      <div className="container">
        <div className="icon-container">
          <img
            src="https://module-federation.io/svg.svg"
            alt="logo"
            className="logo-image"
          />
        </div>
        <h1 className="title">Hello Module Federation 2.0</h1>
        <Button variant="contained" color="warning" onClick={loadCss}>
          Click to load the async style
        </Button>
      </div>

      <Foo />
      <Bar />
    </>
  );
};

export default Provider;
