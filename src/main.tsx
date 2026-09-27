import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import PageMain from "./pages/PageMain";

createRoot(document.querySelector("body")!).render(
  <StrictMode>
    <PageMain />
  </StrictMode>,
);
