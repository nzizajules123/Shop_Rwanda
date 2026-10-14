import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingBag, ShoppingCart, Search, UserRound, Menu, X } from "lucide-react";

export default function Navbar({ cartCount, search, setSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    navigate("/#products");
    setMenuOpen(false);
  }

  const linkStyle = ({ isActive }) =>
    `text-sm font-semibold transition ${
      isActive ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
    }`;

  return (
    <>
      <div className="bg-blue-950 px-4 py-2 text-center text-xs font-medium text-white">
        Welcome to Shop Rwanda — Discover something great!
      </div>

      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <Link to="/" className="flex shrink-0 items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
              <ShoppingBag size={23} />
            </span>
            <span className="text-xl font-black tracking-tight text-blue-950">
              Shop<span className="text-blue-600">Rwanda</span>
            </span>
          </Link>

          {/* Desktop search */}
          <form
            onSubmit={handleSearch}
            className="hidden max-w-md flex-1 items-center rounded-xl border border-slate-200 bg-slate-50 px-4 focus-within:border-blue-500 md:flex"
          >
            <Search size={19} className="text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-transparent px-3 py-3 text-sm outline-none"
              aria-label="Search products"
            />
            <button className="text-sm font-semibold text-blue-600">Search</button>
          </form>

          {/* Desktop links */}
          <div className="hidden items-center gap-6 md:flex">
            <NavLink to="/" end className={linkStyle}>Home</NavLink>
            <Link to="/#products" className="text-sm font-semibold text-slate-600 hover:text-blue-600">
              Products
            </Link>
            <NavLink to="/login" className={linkStyle}>
              <span className="flex items-center gap-1"><UserRound size={17} /> Login</span>
            </NavLink>
            <NavLink
              to="/register"
              className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              Register
            </NavLink>
            <Link
              to="/#products"
              aria-label="Shopping cart"
              className="relative rounded-xl bg-blue-50 p-3 text-blue-700"
            >
              <ShoppingCart size={20} />
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-xs text-white">
                {cartCount}
              </span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-slate-700 md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="space-y-4 border-t border-slate-100 bg-white p-5 md:hidden">
            <form onSubmit={handleSearch} className="flex items-center gap-2 rounded-xl border p-3">
              <Search size={18} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full outline-none"
              />
            </form>
            <Link to="/" onClick={() => setMenuOpen(false)} className="block font-semibold">Home</Link>
            <Link to="/#products" onClick={() => setMenuOpen(false)} className="block font-semibold">
              Products {cartCount > 0 && `(cart: ${cartCount})`}
            </Link>
            <Link to="/login" onClick={() => setMenuOpen(false)} className="block font-semibold">Login</Link>
            <Link to="/register" onClick={() => setMenuOpen(false)} className="block font-semibold text-blue-600">
              Register
            </Link>
          </div>
        )}
      </header>
    </>
  );
}