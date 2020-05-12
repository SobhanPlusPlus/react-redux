 
import { combineReducers, createStore } from "redux";

import  LodingReducer  from "./reducers/loding-reducers"
import  UserReducer  from "./reducers/user-reducers"

// Root Reducers

const rootReducer = combineReducers({
    LodingReducer,
    UserReducer
});

// Store
export const store = createStore(
   rootReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);