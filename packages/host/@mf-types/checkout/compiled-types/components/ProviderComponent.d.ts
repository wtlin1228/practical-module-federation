import React from "react";
import "./ProviderComponent.css";
declare const Provider: React.FC<{
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}>;
export default Provider;
