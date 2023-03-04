import React from "react";
import { Route, Routes } from "react-router-dom";

const RouterComponent = () => {
  const Home = React.lazy(() => import("../../pages/home/home"));

  const routes = [
    {
      path: "/",
      component: <Home />,
      index: true,
    },
  ];

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map((route, index) => {
          return <Route key={index} path={route.path} element={route.component} />;
        })}
      </Routes>
    </React.Suspense>
  );
};

export default RouterComponent;
