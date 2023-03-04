import React, { useEffect, useState } from "react";
import Loader from "../components/loader/loader";
import { getFromLocalStorage, getTokenWithPromise } from "../helpers/utils/localStorage.util";
import ProtectedRoutes from "./routes/protected-routes";
import UnprotectedRoutes from "./routes/unprotected-routes";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AUTH_TOKEN } from "../helpers/constants";
import { useSelector } from "react-redux";

const App = () => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadingState = useSelector((state) => state.data.loading);

  const t = getFromLocalStorage(AUTH_TOKEN);
  console.log(t);
  const getToken = () => {
    getTokenWithPromise()
      .then((token) => {
        if (token) {
          setToken(token);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <Router>
      <ToastContainer />

      {loadingState && <Loader />}

      {loading ? <Loader /> : token ? <ProtectedRoutes /> : <UnprotectedRoutes />}
    </Router>
  );
};

export default App;
