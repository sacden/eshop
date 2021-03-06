const defaultState = {
  products: [
    { id: 1, category: "phone", model: "Iphone 8", price: 90000, photo: "iphone-8.jpeg", productNumber: "mhgq3gh1" },
    { id: 2, category: "phone", model: "Iphone XS", price: 30000, photo: "iphone-xs.jpeg", productNumber: "mhgq3gh2" },
    { id: 3, category: "phone", model: "Iphone XR", price: 35000, photo: "iphone-xr.jpeg", productNumber: "mhgq3gh3" },
    { id: 4, category: "phone", model: "Yphone 11", price: 50000, photo: "iphone-11.jpeg", productNumber: "mhgq3gh4" },
    { id: 5, category: "phone", model: "Aphone 12", price: 60000, photo: "iphone-12.jpeg", productNumber: "mhgq3gh5" },
    { id: 6, category: "tablets", model: "Tablet 8", price: 90000, photo: "iphone-8.jpeg", productNumber: "mhgq3gh1" },
    { id: 7, category: "tablets", model: "Tablet XS", price: 30000, photo: "iphone-xs.jpeg", productNumber: "mhgq3gh2" },
    { id: 8, category: "tablets", model: "Tablet XR", price: 35000, photo: "iphone-xr.jpeg", productNumber: "mhgq3gh3" },
    { id: 9, category: "tablets", model: "Tablet 11", price: 50000, photo: "iphone-11.jpeg", productNumber: "mhgq3gh4" },
    { id: 10, category: "tablets", model: "Tablet 12", price: 60000, photo: "iphone-12.jpeg", productNumber: "mhgq3gh5" },
  ],
};
export const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SORT_PRODUCTS_BY_PRICE_MIN":
      return { ...state, products: state.products.slice().sort((a, b) => a["price"] - b["price"]) };
    case "SORT_PRODUCTS_BY_PRICE_MAX":
      return { ...state, products: state.products.slice().sort((a, b) => b["price"] - a["price"]) };
    case "SORT_PRODUCTS_BY_MODEL":
      return { ...state, products: [...state.products].sort((a, b) => a[action.payload].localeCompare(b[action.payload])) };
    case "SEARCH_PRODUCTS":
      if (action.payload) {
        return {
          ...state,
          products: [...state.products].filter((product) => product.model.toLowerCase().includes(action.payload.toLowerCase())),
        };
      } else return { ...defaultState };
    default:
      return state;
  }
};
