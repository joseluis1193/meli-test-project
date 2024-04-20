const SEARCH_WITH_CATEGORIES = {
  data: {
    results: [{
      id: "1",
      title: "Product 1",
      currency_id: "ARS",
      category_id: "Category 1",
      price: 1000.9,
      thumbnail: "https://example.com/product1.jpg",
      condition: "new",
      shipping: {
        free_shipping: true
      },
      seller: {
        id: 1
      }
    }],
    filters: [{
      id: "category",
      name: "Category 1",
      values: [{
        id: "1",
        name: "Category value",
        path_from_root: [{
          id: "1",
          name: "Category it 1"
        },
        {
          id: "2",
          name: "Category test 1"
        }]
      }]
    }],
  }
};

const SEARCH_WITHOUT_CATEGORIES = {
  data: {
    results: [{
      id: "1",
      title: "Product 1",
      currency_id: "ARS",
      category_id: "Category 1",
      price: 1000.9,
      thumbnail: "https://example.com/product1.jpg",
      condition: "new",
      shipping: {
        free_shipping: true
      },
      seller: {
        id: 1
      }
    }],
    filters: [],
  }
};

const SEARCH_WITHOUT_SELLER = {
  data: {
    results: [{
      id: "1",
      title: "Product 1",
      currency_id: "ARS",
      category_id: "Category 1",
      price: 1000.9,
      thumbnail: "https://example.com/test.jpg",
      condition: "new",
      shipping: {
        free_shipping: true
      },
      seller: {}
    }],
    filters: [{
      id: "category",
      name: "Category 1",
      values: [{
        id: "1",
        name: "Category value",
        path_from_root: [{
          id: "1",
          name: "Category it 1"
        },
        {
          id: "2",
          name: "Category test 1"
        }]
      }]
    }],
  }
};

const CITY_DATA = {
  data: {
    address: {
      city: "Test City"
    }
  }
};

const SELLER_DATA = {
  data: {
    id: "1",
    name: "Test name"
  }
};

const ITEM_DATA = {
  data: {
    id: "1",
    title: "Product 1",
    currency_id: "ARS",
    category_id: "Category 1",
    price: 1000.9,
    thumbnail: "https://example.com/test.jpg",
    condition: "new",
    seller_id: 1,
    sold_quantity: 10,
    shipping: {
      free_shipping: true
    }
  }
}

module.exports = {
  SEARCH_WITH_CATEGORIES,
  SEARCH_WITHOUT_CATEGORIES,
  SEARCH_WITHOUT_SELLER,
  CITY_DATA,
  SELLER_DATA,
  ITEM_DATA
};
