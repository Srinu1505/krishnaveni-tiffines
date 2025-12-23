function Orders({ orders, setOrders }) {

  const markAsServed = (token) => {
    const updatedOrders = orders.filter(order => order.token !== token);
    setOrders(updatedOrders);
  };

  return (
    <div className="orders-page">
      <h1> Order List (Counter)</h1>

      {orders.length === 0 && <p>No pending orders</p>}

      {orders.map(order => (
        <div key={order.token} className="order-card">
          <h2>🎟 Token #{order.token}</h2>

          <ul>
            {order.items.map(item => (
              <li key={item.id}>
                {item.name} × {item.qty}
              </li>
            ))}
          </ul>

          <h3>Total: ₹{order.total}</h3>

         
          <button
            className="served-btn"
            onClick={() => markAsServed(order.token)}
          >
             Served
          </button>
        </div>
      ))}
    </div>
  );
}

export default Orders;


