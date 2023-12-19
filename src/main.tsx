import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./style.css"
import TypeScriptTask from "./components/TypeScriptTask.tsx";
 
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TypeScriptTask />
  </React.StrictMode>
);