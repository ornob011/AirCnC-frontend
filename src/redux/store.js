import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { persistStore } from "redux-persist";

const middleware = [thunk];

export const store = createStore(rootReducer, applyMiddleware(...middleware));

export const persistor = persistStore(store);
