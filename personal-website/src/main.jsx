import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18
import App from "./App";
import "./styles/_variables.css";
import "./styles/_mixins.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
