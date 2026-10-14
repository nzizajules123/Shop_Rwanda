
import React, { useState } from "react";
import "./Home.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 25000,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
  },
  {
    id: 2,
    name: "Classic Sneakers",
    category: "Fashion",
    price: 35000,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Electronics",
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
  },
  {
    id: 4,
    name: "Travel Backpack",
    category: "Accessories",
    price: 20000,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  const formatPrice = (price) =>
    `${price.toLocaleString("en-US")} RWF`;

  return (
    <div className="shop-home">
      <div className="top-message">
        Welcome to Shop Rwanda — Your shopping destination!
      </div>

      <nav className="shop-navbar">
        <a href="/" className="shop-logo">
          Shop<span>Rwanda</span>
        </a>

        <div className="shop-search">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button aria-label="Search products">⌕</button>
        </div>

        <div className="shop-nav-actions">
          <a href="#products">Products</a>
          <a href="#categories">Categories</a>
          <a href="#cart">
            🛒 Cart ({cart.length})
          </a>
        </div>
      </nav>

      <main>
        <section className="shop-hero">
          <div className="hero-content">
            <span className="hero-label">SHOP LOCAL. SHOP SMART.</span>
            <h1>
              Discover Your
              <br />
              Next Favorite Thing.
            </h1>
            <p>
              Explore quality products, great deals, and everyday
              essentials with Shop Rwanda.
            </p>
            <a href="#products" className="shop-button">
              Shop Now →
            </a>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000"
              alt="Modern shopping store"
            />
          </div>
        </section>

        <section className="shop-categories" id="categories">
          <div className="section-heading">
            <div>
              <span className="eyebrow">EXPLORE OUR STORE</span>
              <h2>Shop by Category</h2>
            </div>
          </div>

          <div className="category-list">
            {["All", "Electronics", "Fashion", "Accessories"].map(
              (item) => (
                <button
                  key={item}
                  className={
                    category === item
                      ? "category-chip active"
                      : "category-chip"
                  }
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              )
            )}
          </div>
        </section>

        <section className="shop-products" id="products">
          <div className="section-heading">
            <div>
              <span className="eyebrow">HANDPICKED FOR YOU</span>
              <h2>Featured Products</h2>
            </div>
            <span className="product-count">
              {filteredProducts.length} products
            </span>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <article className="product-card" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <span className="product-badge">Featured</span>
                </div>

                <div className="product-details">
                  <span className="product-category">
                    {product.category}
                  </span>
                  <h3>{product.name}</h3>
                  <div className="product-bottom">
                    <strong>{formatPrice(product.price)}</strong>
                    <button
                      className="add-cart"
                      onClick={() =>
                        setCart((previous) => [
                          ...previous,
                          product.id,
                        ])
                      }
                      aria-label={`Add ${product.name} to cart`}
                    >
                      +
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="empty-products">
              No products found. Try another search.
            </p>
          )}
        </section>

        <section className="shop-promo" id="cart">
          <div>
            <span className="eyebrow">YOUR SHOPPING JOURNEY</span>
            <h2>Good products. Great experiences.</h2>
            <p>
              Find something you love and start shopping today.
            </p>
          </div>
          <div className="promo-cart">
            <span>Items in your cart</span>
            <strong>{cart.length}</strong>
            <span>
              {formatPrice(
                cart.reduce((total, id) => {
                  const product = products.find(
                    (item) => item.id === id
                  );
                  return total + (product ? product.price : 0);
                }, 0)
              )}
            </span>
          </div>
        </section>
      </main>

      <footer className="shop-footer">
        <a href="/" className="shop-logo">
          Shop<span>Rwanda</span>
        </a>
        <p>© {new Date().getFullYear()} Shop Rwanda. All rights reserved.</p>
      </footer>
    </div>
  );
}
