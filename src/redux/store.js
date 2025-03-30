//* Redux
import { configureStore } from "@reduxjs/toolkit";

//* Reducers
import contactsReducer from "./contactsSlice";
import filterReducer from "./filtersSlice";
import favortitesReducer from "./favSlice";

//* Persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistedContactsReducer = persistReducer(
  {
    key: "contacts",
    storage,
  },
  contactsReducer
);

const persistedFavsReducer = persistReducer(
  {
    key: "favorites",
    storage,
  },
  favortitesReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filterReducer,
    fav: persistedFavsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistedStore = persistStore(store);
