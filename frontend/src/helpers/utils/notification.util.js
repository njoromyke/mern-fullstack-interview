import { toast } from "react-toastify";

export function showNotification(body, backgroundClass, position) {
  if (backgroundClass === "success") {
    toast.info(body, {
      theme: "colored",
      hideProgressBar: true,
      position: position || "top-right",
      autoClose: 2000,
      pauseOnHover: true,
    });
  } else {
    toast.error(body, {
      theme: "colored",
      hideProgressBar: true,
      position: position || "top-right",
      autoClose: 10000,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }
}
