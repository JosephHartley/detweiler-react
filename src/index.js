import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from './App';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import './fonts/Presicav.otf';

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
