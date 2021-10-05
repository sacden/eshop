import { createStore, combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { categoriesReducer } from "./categoriesReducer";

const rootReducer = combineReducers({
  products: productReducer,
  categories: categoriesReducer,
});

export const store = createStore(rootReducer);
