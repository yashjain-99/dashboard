import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  if (darkModeMediaQuery.matches) {
    rootElement.classList.add("dark");
  }
  darkModeMediaQuery.addEventListener("change", (e) => {
    if (e.matches) {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
    }
  });

  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
