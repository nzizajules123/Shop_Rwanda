export const products = [
  { id: 1, name: "Wireless Headphones", category: "Electronics", price: 25000, rating: 4.8,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600" },
  { id: 2, name: "Classic Sneakers", category: "Fashion", price: 35000, rating: 4.7,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600" },
  { id: 3, name: "Smart Watch", category: "Electronics", price: 45000, rating: 4.9,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600" },
  { id: 4, name: "Travel Backpack", category: "Accessories", price: 20000, rating: 4.6,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600" },
];

export const categories = ["All", "Electronics", "Fashion", "Accessories"];

export const money = (price) => `${price.toLocaleString("en-US")} RWF`;