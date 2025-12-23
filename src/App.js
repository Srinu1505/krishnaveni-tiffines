import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Orders from "./components/Orders";

import "./styles.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [search, setSearch] = useState("");
  const [orders, setOrders] = useState([]);

  return (
    <>
      {/* HEADER ALWAYS VISIBLE */}
      <Header
        cartItems={cartItems}
        search={search}
        setSearch={setSearch}
      />

      {/* MAIN CONTENT */}
      <div className="app-content">
        <Routes>
          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <Menu
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  search={search}
                />
                <Cart
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  orders={orders}
                  setOrders={setOrders}
                />
              </>
            }
          />

          {/* ORDERS PAGE */}
          <Route
            path="/orders"
            element={
              <Orders
                orders={orders}
                setOrders={setOrders}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;







