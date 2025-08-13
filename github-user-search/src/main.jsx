const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;
console.log("Github Api Key:", apiKey);

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
