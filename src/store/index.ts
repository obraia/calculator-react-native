import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

import { reducers } from "./ducks";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["menuReducers"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
