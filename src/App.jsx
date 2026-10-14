import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/home";

export default function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const addToCart = (product) => {
    setCart((previous) => [...previous, product]);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Routes>
        <Route
          path="/"
          element={<HomePage addToCart={addToCart} search={search} setSearch={setSearch} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}