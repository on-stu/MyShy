import axios from "axios";
import { ApiInstance } from "../lib/ApiInstance";

export const CheckIsLoggedIn = async (token) => {
  await axios.post(`${ApiInstance}/checkIsLoggedIn`, { token }).then((res) => {
    if (res.data.status === "success") {
      return res.data;
    } else {
      return res.data;
    }
  });
};
