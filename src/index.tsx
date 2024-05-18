import { StrictMode } from "react";
import App from "./App";
import "./style.css";
import { createRoot } from "react-dom/client";
import { Leva } from "leva";

const root = createRoot(document.querySelector("#root") as Element);

root.render(
  <StrictMode>
    <Leva collapsed />
    <App />
  </StrictMode>
);
