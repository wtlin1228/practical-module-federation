import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";
import Button from "@mui/material/Button";
import "./ProviderComponent.css";

const theme = createTheme();

const Provider: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={{ ".a": { backgroundColor: "red" } }} />

      <style>
        {`
          .a {
            background-color: red;
          }
        `}
      </style>

      <div className="container">
        <div className="icon-container">
          <img
            src="https://module-federation.io/svg.svg"
            alt="logo"
            className="logo-image"
          />
        </div>
        <h1 className="title">Hello Module Federation 2.0</h1>
        <Button
          variant="contained"
          color="warning"
          onClick={() => setCount((c) => c + 1)}
        >
          {count}
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default Provider;
