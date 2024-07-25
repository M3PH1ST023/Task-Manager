import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "react-toastify/dist/ReactToastify.css";

import "./assets/css/global.css";
import "./assets/css/pages/pages.css";
import "./assets/css/pages/auth/auth.css";
import "./assets/css/pages/dashboard/dashboard.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
