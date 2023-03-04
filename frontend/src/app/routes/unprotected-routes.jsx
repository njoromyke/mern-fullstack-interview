import React from "react";

import { Routes, Route } from "react-router-dom";
import Login from "../../pages/auth/login";
import Register from "../../pages/auth/register";

const UnprotectedRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default UnprotectedRoutes;
