import axios from "axios";
import { AUTH_TOKEN, CONFIG, NOT_AUTHENTICATED_STATUS } from "../helpers/constants";
import { getFromLocalStorage, removeFromLocalStorage } from "../helpers/utils/localStorage.util";

let api = axios.create({
  baseURL: CONFIG.API_URL,
});

const token = getFromLocalStorage(AUTH_TOKEN);

if (token) {
  api = axios.create({
    baseURL: CONFIG.API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  });
}

api.interceptors.response.use(undefined, (err) => {
  if (err.response && err.response.status === NOT_AUTHENTICATED_STATUS) {
    removeFromLocalStorage(AUTH_TOKEN);
    window.location.href = "/sign-in";

    return Promise.reject({
      response: {
        data: {
          message: "You are not authorized to access this page",
        },
      },
    });
  }

  return Promise.reject(err);
});

export default api;
