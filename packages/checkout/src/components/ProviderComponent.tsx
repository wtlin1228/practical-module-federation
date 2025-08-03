import React from "react";
import "./ProviderComponent.css";

const Provider: React.FC<{
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}> = (props) => {
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
      <div>Checkout: count={props.count}</div>
      <button onClick={() => props.setCount((c) => c - 1)}>Checkout: -1</button>
    </div>
  );
};

export default Provider;
