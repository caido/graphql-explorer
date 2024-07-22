import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./main.scss";

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
