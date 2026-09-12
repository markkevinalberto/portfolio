import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CertificatesPage from "./CertificatesPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CertificatesPage />
  </StrictMode>
);
