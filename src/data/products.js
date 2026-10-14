export const categories = ["All", "Electronics", "Fashion", "Home", "Accessories"];

export const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 120000,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Classic Denim Jacket",
    category: "Fashion",
    price: 90000,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Minimal Desk Lamp",
    category: "Home",
    price: 35000,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Leather Travel Bag",
    category: "Accessories",
    price: 70000,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Smart Watch",
    category: "Electronics",
    price: 150000,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Cotton Summer Set",
    category: "Fashion",
    price: 60000,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    name: "Coffee Maker",
    category: "Home",
    price: 110000,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    name: "Sunglasses",
    category: "Accessories",
    price: 25000,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1577803947579-9f0f5d9d2468?auto=format&fit=crop&w=900&q=80",
  },
];

export const money = (value) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
};
