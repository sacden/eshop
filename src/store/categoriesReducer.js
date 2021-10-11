const defaultState = {
  categories: [
    { id: 1, category: "Phones", icon: "bi bi-phone" },
    { id: 2, category: "Smartwatches", icon: "bi bi-smartwatch" },
    { id: 3, category: "Cameras", icon: "bi bi-camera-video" },
    { id: 4, category: "Photocameras", icon: "bi bi-camera" },
    { id: 5, category: "Tablets", icon: "bi bi-tablet" },
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
