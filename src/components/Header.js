import logo from "../assets/images/logo.jpeg";

function Header({ cartItems, search, setSearch }) {
  const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  return (
    <header className="header">

      {/* LEFT - LOGO */}
      <div className="header-left">
        <img src={logo} alt="Krishnaveni Tiffines" />
      </div>

      {/* CENTER - SEARCH */}
      <div className="header-center">
        <input
          type="text"
          placeholder="Search items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* RIGHT - CART */}
      <div className="header-right">
        <span className="cart-icon">🛒</span>
        <span className="cart-count">{totalQty}</span>
        <span className="cart-total">₹{totalAmount}</span>
      </div>

    </header>
  );
}

export default Header;


