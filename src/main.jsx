import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import AppFam from "./AppFam.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <div id="app-wrapper">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/fam/*" element={<AppFam />} />
      </Routes>
    </div>
  </BrowserRouter>
);
