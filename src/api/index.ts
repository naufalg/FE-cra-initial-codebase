import axios from "axios";
import { API_ENDPOINTS } from "environments";

export const authLogin = async (params: any) => {
  try {
    const res = await axios.get(API_ENDPOINTS);
    console.log(res);
  } catch (err) {
    throw err;
  }
};
