const defaultState = {
  products: [
    { id: 1, category: "phone", model: "Iphone 8", price: "10000", photo: "iphone-8.jpeg", productNumber: "mhgq3gh1" },
    { id: 2, category: "phone", model: "Iphone XS", price: "30000", photo: "iphone-xs.jpeg", productNumber: "mhgq3gh2" },
    { id: 3, category: "phone", model: "Iphone XR", price: "35000", photo: "iphone-xr.jpeg", productNumber: "mhgq3gh3" },
    { id: 4, category: "phone", model: "Iphone 11", price: "50000", photo: "iphone-11.jpeg", productNumber: "mhgq3gh4" },
    { id: 5, category: "phone", model: "Iphone 12", price: "60000", photo: "iphone-12.jpeg", productNumber: "mhgq3gh5" },
  ],
};
export const productReducer = (state = defaultState, action) => {
  switch (action) {
    case "SHOW_PRODUCTS":
      return [...state];
    default:
      return state;
  }
};
