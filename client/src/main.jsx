import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import AuthProvider from "./context/AuthContext.jsx";

axios.defaults.baseURL = "http://localhost:8000";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <Toaster />
      <div className="dark:bg-slate-900 dark:text-slate-200">
        <App />
      </div>
    </AuthProvider>
  </BrowserRouter>
);
