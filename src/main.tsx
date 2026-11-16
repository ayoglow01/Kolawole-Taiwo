import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/globals.css";

// Signal that JS is running: reveal animations only activate with this
// class, so content stays fully visible when JavaScript is unavailable.
document.documentElement.classList.add("js");

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element #root not found — cannot start the application.");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
