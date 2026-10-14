import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from ".Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";

// Scrolls to #products (or any #id) after navigation, without reloading the page
function ScrollToHash() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        document
          .getElementById(location.hash.slice(1))
          ?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return null;
}

export default function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  const addToCart = (product) => setCart((prev) => [...prev, product]);

  return (
    <div className="min-h-screen bg-slate-50">
      <ScrollToHash />
      <Navbar cartCount={cart.length} search={search} setSearch={setSearch} />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              addToCart={addToCart}
              search={search}
              setSearch={setSearch}
            />
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </div>
  );
}