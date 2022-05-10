import axios from "axios";
import { API_BASE_URL } from "./config";

export const getUserByName = async (name) => {
  await axios.get(`${API_BASE_URL}/users/${name}`).then((r) => console.log(r));
};
