import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart({ cartItems, setCartItems, orders, setOrders }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const placeOrder = () => {
    setLoading(true);

    setTimeout(() => {
      const tokenNumber = Math.floor(100 + Math.random() * 900);

      const newOrder = {
        token: tokenNumber,
        items: cartItems,
        total: totalAmount,
      };

      setOrders([...orders, newOrder]); //  SAVE ORDER
      setCartItems([]);                 // CLEAR CART
      setLoading(false);

      navigate("/orders");              //  GO TO NEW PAGE
    }, 1500);
  };

  return (
    <div className="cart">
      <h2>🛒 Cart</h2>

      {cartItems.length === 0 && <p>No items added</p>}

      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          {item.name} × {item.qty}
        </div>
      ))}

      {cartItems.length > 0 && (
        <>
          <h3>Total: ₹{totalAmount}</h3>
          <button className="order-btn" onClick={placeOrder}>
            {loading ? "Processing Payment..." : "Place Order"}
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;


