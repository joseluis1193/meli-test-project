const express = require("express");
const axios = require('axios');
const cors = require('cors');

// Middlewares
const addAuthor = require('./middleware/author');

// Helpers
const getDecimals = require('./helpers/getDecimals');

const app = express();

const PORT = 3001;
const API_URL = 'https://api.mercadolibre.com';

app.use(cors());

app.get("/", (req, res) => {
  res.send("Healthcheck");
});

app.get("/api/items", addAuthor, async (req, res) => {
  try {
    const search = req.query.query;

    const { data } = await axios.get(`${API_URL}/sites/MLA/search?q=${search}`);

    const getCategories = () => {
      const categories = [];

      data.filters.filter(filter => filter.id === "category").forEach((filter) => {
        filter.values.forEach((value) => {
          if (value.path_from_root) {
            value.path_from_root.forEach((path) => {
              categories.push(path.name);
            });
          }
        });
      });

      return categories;
    };

    const getItems = () => {
      return data.results.map((element) => ({
        items: {
          id: element.id,
          title: element.title,
          price: {
            currency: element.currency_id,
            amount: element.price,
            decimals: getDecimals(element.price)
          },
          picture: element.thumbnail,
          condition: element.condition,
          free_shipping: element.shipping.free_shipping
        }
      }))
    };

    const filteredData = {
      author: {
        name: res.locals.name,
        lastname: res.locals.lastname
      },
      categories: getCategories(),
      items: getItems()
    };

    res.json(filteredData);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error server');
  }
});

app.listen(PORT, () => {
  console.log(`Server running in port: ${PORT}`);
});
