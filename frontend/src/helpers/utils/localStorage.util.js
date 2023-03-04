import { AUTH_TOKEN } from "../constants";

export function getFromLocalStorage(itemName) {
  const fromSessionStorage = localStorage.getItem(itemName);
  if (!fromSessionStorage) {
    return;
  }

  return JSON.parse(fromSessionStorage);
}

export function storeLocally(itemName, itemValue) {
  localStorage.setItem(itemName, JSON.stringify(itemValue));
}

export function removeFromLocalStorage(itemName) {
  localStorage.removeItem(itemName);
}

export function getTokenWithPromise() {
  return new Promise((resolve) => {
    const token = getFromLocalStorage(AUTH_TOKEN);
    resolve(token);
  });
}

export function isAuthorized() {
  const token = getFromLocalStorage(AUTH_TOKEN);

  return !!token;
}
