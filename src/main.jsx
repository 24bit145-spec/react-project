import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/global.css";

// Context
import AuthProvider from "./context/AuthContext";
import InvoiceProvider from "./context/InvoiceContext";
import ClientProvider from "./context/ClientContext";

// Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <InvoiceProvider>
          <ClientProvider>
            <App />
          </ClientProvider>
        </InvoiceProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);