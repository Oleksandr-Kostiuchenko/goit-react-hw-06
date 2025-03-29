//* React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//* Components
import "./index.css";
import App from "./App.jsx";

//* Redux
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

//* Persistor
import { PersistGate } from "redux-persist/integration/react";
import { persistedStore } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
