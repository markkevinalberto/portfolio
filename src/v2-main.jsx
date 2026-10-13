import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomeV2 from "./HomeV2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomeV2 />
  </StrictMode>
);
