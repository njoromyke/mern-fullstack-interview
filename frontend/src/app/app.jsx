import React, { useEffect, useState } from "react";
import Loader from "../components/loader/loader";
import { getTokenWithPromise } from "../helpers/utils/localStorage.util";
import ProtectedRoutes from "./routes/protected-routes";
import UnprotectedRoutes from "./routes/unprotected-routes";

const App = () => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const getToken = () => {
    getTokenWithPromise()
      .then((token) => {
        if (token) {
          setToken(token);
        }

        setToken("");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getToken();
  }, []);

  return <>{loading ? <Loader /> : token ? <ProtectedRoutes /> : <UnprotectedRoutes />}</>;
};

export default App;
