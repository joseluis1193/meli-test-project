const express = require("express");
const axios = require("axios");
const cors = require("cors");

// Middlewares
const addAuthor = require("./middleware/author");

// Helpers
const { getDecimals, removeDecimals } = require("./helpers/decimals");

const app = express();

const PORT = 3001;
const API_URL = "https://api.mercadolibre.com";

app.use(cors());

app.get("/", (_req, res) => {
  res.send("Healthcheck");
});

app.get("/api/items", addAuthor, async (req, res) => {
  try {
    const search = req.query.query;

    const { data } = await axios.get(`${API_URL}/sites/MLA/search?q=${search}&limit=4`);

    const getCategories = () => {
      return data.filters
        .filter((filter) => filter.id === "category")
        .flatMap((filter) =>
          filter.values.flatMap((value) =>
            value.path_from_root.map((path) => path.name)
          )
        );
    };

    const getSellerAddress = async (sellerId) => {
      const { data } = await axios.get(`${API_URL}/users/${sellerId}`);

      return data.address.city;
    };

    const getItems = async () => {
      return await Promise.all(data.results.map(async (element) => ({
        id: element.id,
        title: element.title,
        price: {
          currency: element.currency_id,
          amount: removeDecimals(element.price),
          decimals: getDecimals(element.price)
        },
        picture: element.thumbnail,
        condition: element.condition,
        free_shipping: element.shipping.free_shipping,
        seller_address: await getSellerAddress(element.seller.id)
      })));
    };

    const filteredData = {
      author: {
        name: res.locals.name,
        lastname: res.locals.lastname
      },
      categories: getCategories(),
      items: await getItems()
    };

    res.json(filteredData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error server");
  }
});

app.get("/api/items/:id", addAuthor, async (req, res) => {
  try {
    const itemId = req.params.id;

    const { data } = await axios.get(`${API_URL}/items/${itemId}`);

    const getCategory = async (categoryId) => {
      const { data } = await axios.get(`${API_URL}/categories/${categoryId}`);

      return data.name;
    };

    const getDescription = async () => {
      const { data } = await axios.get(`${API_URL}/items/${itemId}/description`);

      return data.plain_text;
    };

    const filteredData = {
      author: {
        name: res.locals.name,
        lastname: res.locals.lastname
      },
      item: {
        id: data.id,
        title: data.title,
        category: await getCategory(data.category_id),
        price: {
          currency: data.currency_id,
          amount: removeDecimals(data.price),
          decimals: getDecimals(data.price)
        },
        picture: data.thumbnail,
        condition: data.condition,
        free_shipping: data.shipping.free_shipping,
        sold_quantity: data.sold_quantity,
        description: await getDescription()
      }
    };

    res.json(filteredData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error server");
  }
});

app.listen(PORT, () => {
  console.log(`Server running in port: ${PORT}`);
});
