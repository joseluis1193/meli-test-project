import axios from "axios";

// Constants
import { GET_PRODUCTS } from "../constants"

export const searchService = async (search) => {
  try {
    const { data } = await axios.get(GET_PRODUCTS, {
      params: {
        query: search
      }
    });

    return data;
  } catch (error) {
    throw error;
  }
};