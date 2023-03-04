import api from "../../services/api";
import { STATUS_CODE_OK_MAX, STATUS_CODE_OK_MIN } from "../constants";
import { showNotification } from "./notification.util";

const promiseFunc = (promise) => new Promise((resolve) => resolve(promise));

function isResponseSuccess(response) {
  return response.status >= STATUS_CODE_OK_MIN && response.status < STATUS_CODE_OK_MAX;
}

export function sendGetRequest(url, successMessage) {
  return promiseFunc(handleError(handleSuccess(api.get(url), successMessage))).then((response) =>
    isResponseSuccess(response) ? response.data : Promise.reject(response)
  );
}

export function sendDeleteRequest(url, successMessage) {
  return promiseFunc(handleError(handleSuccess(api.delete(url), successMessage))).then((response) =>
    isResponseSuccess(response) ? response.data : Promise.reject(response)
  );
}

export function sendUpdateRequest(url, params, successMessage) {
  return promiseFunc(handleError(handleSuccess(api.put(url, params), successMessage))).then((response) =>
    isResponseSuccess(response) ? response.data : Promise.reject(response)
  );
}

export function sendPostRequest(url, params, successMessage) {
  return promiseFunc(handleError(handleSuccess(api.post(url, params), successMessage))).then((response) =>
    isResponseSuccess(response) ? response.data : Promise.reject(response)
  );
}

function handleSuccess(promiseFunc, successMessage) {
  return promiseFunc.then((response) => {
    if (successMessage) {
      showNotification(successMessage, "success");
    }
    return response;
  });
}

function handleError(promiseFunc) {
  return promiseFunc.catch((error) => {
    if (error?.response?.data) {
      const message = error.response.data.message;
      if (message) {
        showNotification(message, "error");
      } else {
        showNotification("Something went wrong", "error");
      }
    }
    return error;
  });
}
