import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "Store/store";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { DAppProvider } from "@usedapp/core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const config = {
  readOnlyChainId: 1337,
  multicallAddresses: {},
};
root.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <Provider store={store}>
        <App />
        <ToastContainer />
      </Provider>
    </DAppProvider>
  </React.StrictMode>
);

reportWebVitals();
