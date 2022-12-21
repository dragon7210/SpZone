import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Mainnet, DAppProvider } from "@usedapp/core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`,
  },
};
root.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <App />
      <ToastContainer />
    </DAppProvider>
  </React.StrictMode>
);

reportWebVitals();
