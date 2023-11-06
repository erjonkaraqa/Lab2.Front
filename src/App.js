import logo from "./logo.svg";
import "./App.css";

import UserRoutes from "./config/UserRoutes";
import AdminRoutes from "./config/AdminRoutes";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<UserRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
