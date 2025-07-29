import React, { useState } from "react";
import "./ProviderComponent.css";

const Provider: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <div className="icon-container">
        <img
          src="https://module-federation.io/svg.svg"
          alt="logo"
          className="logo-image"
        />
      </div>
      <h1 className="title">Hello Module Federation 2.0</h1>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </div>
  );
};

export default Provider;
