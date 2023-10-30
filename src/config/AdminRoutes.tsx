import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<h1 className="text-center p-5">Admin dashboard here</h1>}
        />
      </Routes>
    </>
  );
};

export default AdminRoutes;
