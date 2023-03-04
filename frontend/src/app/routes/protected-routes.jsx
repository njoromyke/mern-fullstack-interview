import React from "react";
import Navbar from "../../components/navbar/navbar";
import RouterComponent from "./route";

const ProtectedRoutes = () => {
  return (
    <>
      <Navbar />
      <RouterComponent />
    </>
  );
};

export default ProtectedRoutes;
