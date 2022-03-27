import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductsContextProvider } from "../src/Context/ProductsContext"
import { AuthContextProvider } from "../src/Context/AuthContext"
import { CartContextProvider } from "./Context/CartContext";
import { WishlistContextProvider } from "./Context/WishlistContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductsContextProvider>
        <AuthContextProvider>
          <CartContextProvider>
            <WishlistContextProvider>
              <App />
            </WishlistContextProvider>
          </CartContextProvider>
        </AuthContextProvider>
      </ProductsContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
