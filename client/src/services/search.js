import axios from "axios";

// Constants
import { ITEMS_URL } from "../constants"

export const searchService = async (search) => {
  try {
    const { data } = await axios.get(ITEMS_URL, {
      params: {
        query: search
      }
    });

    return data;
  } catch (error) {
    throw error;
  }
};