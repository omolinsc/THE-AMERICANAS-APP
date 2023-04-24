import { Store, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import mainReducer from "./combineReducers";

const store: Store = createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;