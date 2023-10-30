import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Dashboard from "../components/User/dashboard";
import FirstPage from "@/pages/FirstPage";
const UserRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/firstPage" element={<FirstPage />} />
      </Routes>
    </>
  );
};

export default UserRoutes;
