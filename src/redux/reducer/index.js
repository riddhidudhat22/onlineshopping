import { combineReducers } from "redux";
import { CategoryReducer } from "./Ctegory.reducer";

export const rootReducer=combineReducers({
    category:CategoryReducer,
   
})