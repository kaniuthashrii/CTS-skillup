import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

import { EnrollmentProvider } from "./context/EnrollmentContext";
import ErrorBoundary from "./components/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <EnrollmentProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </EnrollmentProvider>
    </BrowserRouter>
  </React.StrictMode>
);