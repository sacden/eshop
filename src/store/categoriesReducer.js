const defaultState = {
  categories: [
    { id: 1, category: "Phones" },
    { id: 2, category: "PCs" },
    { id: 3, category: "Notebooks" },
    { id: 4, category: "Monitors" },
    { id: 5, category: "Tablets" },
  ],
};
export const categoriesReducer = (state = defaultState, action) => {
  switch (action) {
    case "SHOW_CATEGORIES":
      return [...state];
    default:
      return state;
  }
};
