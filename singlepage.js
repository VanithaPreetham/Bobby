function SinglePage() {
  // Sample product data
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 15 },
    { id: 3, name: 'Product 3', price: 20 },
  ];

  // Cart state
  const [cart, setCart] = React.useState([]);

  // Function to add item to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">Navbar</a>
        </div>
      </nav>

      {/* Header */}
      <header className="jumbotron">
        <div className="container">
          <h1>Welcome to My Store</h1>
          <p>Explore our products below:</p>
        </div>
      </header>

      {/* Products Section - Cards */}
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Price: ${product.price}</p>
                  <button onClick={() => addToCart(product)} className="btn btn-primary">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div className="container mt-5">
        <h2>Your Cart</h2>
        <ul className="list-group">
          {cart.map((item, index) => (
            <li className="list-group-item" key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <footer className="py-4 bg-light text-center">
        <p>&copy; 2023 MyStore. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SinglePage;
