import React from "react";
import logo from "../assets/images/logo.jpeg";

import idli from "../assets/images/idliimg.jpg";
import dosa from "../assets/images/dosa.jpg";
import pesaDosa from "../assets/images/pesaradosa.jpg";
import vada from "../assets/images/vada.jpg";
import bonda from "../assets/images/bonda.jpg";
import uggani from "../assets/images/uggani.jpg";
import tea from "../assets/images/tea.jpg";
import coffee from "../assets/images/coffee.jpg";
import milk from "../assets/images/milk.jpg";
import puri from "../assets/images/puri.jpg";
import water from "../assets/images/water.jpg";
import drinks from "../assets/images/softdrinks.jpg";

const menuItems = [
  { id: 1, name: "Idli", price: 30, image: idli },
  { id: 2, name: "Plain Dosa", price: 50, image: dosa },
  { id: 3, name: "Puri", price: 40, image: puri },
  { id: 4, name: "Pesarattu Dosa", price: 70, image: pesaDosa },
  { id: 5, name: "Vada", price: 40, image: vada },
  { id: 6, name: "Bonda", price: 40, image: bonda },
  { id: 7, name: "Uggani & Bajji", price: 99, image: uggani },
  { id: 8, name: "Tea", price: 25, image: tea },
  { id: 9, name: "Coffee", price: 25, image: coffee },
  { id: 10, name: "Milk", price: 20, image: milk },
  { id: 11, name: "Water Bottle", price: 20, image: water },
  { id: 12, name: "Drinks", price: 20, image: drinks }
];

function Menu({ cartItems, setCartItems, search }) {

  const updateCart = (item, change) => {
    const existingItem = cartItems.find(i => i.id === item.id);

    if (existingItem) {
      setCartItems(
        cartItems
          .map(i =>
            i.id === item.id ? { ...i, qty: i.qty + change } : i
          )
          .filter(i => i.qty > 0)
      );
    } else if (change > 0) {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };

  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="menu-grid">
      {filteredItems.length === 0 && (
        <p style={{ textAlign: "center" }}>No Items Found</p>
      )}

      {filteredItems.map(item => {
        const cartItem = cartItems.find(i => i.id === item.id);
        const qty = cartItem ? cartItem.qty : 0;

        return (
          <div className="menu-card" key={item.id}>
            <div className="image-box">
              <img
                src={item.image}
                alt={item.name}
                className="food-img"
              />
              <img
                src={logo}
                alt="Krishnaveni Tiffines"
                className="watermark"
              />
            </div>

            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <div className="qty">
              <button onClick={() => updateCart(item, -1)}>-</button>
              <span>{qty}</span>
              <button onClick={() => updateCart(item, 1)}>+</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;







