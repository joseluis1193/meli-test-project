import axios from "axios";

// Constants
import { ITEMS_URL } from "../constants"

export const detailService = async (id) => {
  try {
    const { data } = await axios.get(`${ITEMS_URL}/${id}`);

    return data;
  } catch (error) {
    throw error;
  }
};