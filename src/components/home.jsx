import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Search,
  ArrowRight,
  Star,
  ShieldCheck,
  Truck,
  Headphones,
  Heart,
} from "lucide-react";
import { products, categories, money } from "../data/products";

export default function HomePage({ addToCart, search, setSearch }) {
  const [category, setCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);

  const visibleProducts = products.filter((product) => {
    const matchesCategory = category === "All" || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (id) =>
    setFavorites((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );

  return (
    <main className="bg-slate-50">
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-8 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-12">
        <div className="rounded-3xl bg-blue-50 px-6 py-10 sm:px-10 sm:py-14">
          <span className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold tracking-wider text-blue-700">
            YOUR SHOPPING DESTINATION
          </span>
          <h1 className="mt-6 max-w-xl text-4xl font-black leading-tight tracking-tight text-blue-950 sm:text-6xl">
            Find what you love.
            <span className="text-blue-600"> Shop smarter.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
            Discover everyday essentials, electronics, fashion, and accessories with Shop Rwanda.
          </p>
          <Link
            to="/#products"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-700"
          >
            Explore products <ArrowRight size={19} />
          </Link>
          <div className="mt-9 flex flex-wrap gap-5 text-sm font-medium text-slate-600">
            <span className="flex items-center gap-2"><ShieldCheck className="text-blue-600" size={19} /> Easy shopping</span>
            <span className="flex items-center gap-2"><Truck className="text-blue-600" size={19} /> Convenient orders</span>
          </div>
        </div>

        <div className="relative min-h-80 overflow-hidden rounded-3xl bg-slate-200 sm:min-h-[450px]">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200"
            alt="Shopping store"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/30 bg-white/90 p-5 backdrop-blur-md">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Discover something new</p>
            <p className="mt-2 text-xl font-black text-blue-950">Your next favorite product awaits.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Shop confidently", text: "A simple shopping experience" },
            { icon: Truck, title: "Convenient shopping", text: "Explore products in one place" },
            { icon: Headphones, title: "Customer support", text: "Help when you need it" },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5">
              <div className="rounded-xl bg-blue-50 p-3 text-blue-600"><Icon size={23} /></div>
              <div>
                <h3 className="font-bold text-blue-950">{title}</h3>
                <p className="mt-1 text-sm text-slate-500">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-10 lg:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-blue-600">OUR COLLECTION</p>
            <h2 className="mt-2 text-3xl font-black text-blue-950">Featured products</h2>
            <p className="mt-2 text-slate-500">Find something you will love.</p>
          </div>
          <label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3">
            <Search size={18} className="text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Find a product"
              className="w-full py-3 text-sm outline-none sm:w-48"
            />
          </label>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                category === item
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-blue-400"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visibleProducts.map((product) => {
            const liked = favorites.includes(product.id);
            return (
              <article
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/5"
              >
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <button
                    type="button"
                    onClick={() => toggleFavorite(product.id)}
                    aria-label="Toggle favorite"
                    className="absolute right-3 top-3 rounded-full bg-white p-2.5 text-slate-600 shadow-sm hover:text-red-500"
                  >
                    <Heart size={18} fill={liked ? "currentColor" : "none"} className={liked ? "text-red-500" : ""} />
                  </button>
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold text-blue-600">{product.category}</p>
                  <h3 className="mt-2 font-bold text-blue-950">{product.name}</h3>
                  <div className="mt-3 flex items-center gap-1 text-sm text-amber-500">
                    <Star size={15} fill="currentColor" />
                    <span className="font-semibold">{product.rating}</span>
                    <span className="text-slate-400">sample rating</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-2">
                    <strong className="text-lg text-blue-950">{money(product.price)}</strong>
                    <button
                      type="button"
                      onClick={() => addToCart(product)}
                      aria-label={`Add ${product.name} to cart`}
                      className="rounded-xl bg-blue-50 p-3 text-blue-700 transition hover:bg-blue-600 hover:text-white"
                    >
                      <ShoppingCart size={19} />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {visibleProducts.length === 0 && (
          <p className="py-16 text-center text-slate-500">No matching products found. Try another search.</p>
        )}
      </section>

      <section className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-blue-950 p-8 text-white sm:flex-row sm:items-center sm:p-12">
          <div>
            <p className="text-xs font-bold tracking-widest text-blue-300">JOIN OUR COMMUNITY</p>
            <h2 className="mt-3 text-3xl font-black">Ready to start shopping?</h2>
            <p className="mt-3 text-sm leading-6 text-blue-100/75">Create an account to get started with Shop Rwanda.</p>
          </div>
          <Link
            to="/register"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-blue-950 transition hover:bg-blue-100"
          >
            Create account <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-sm text-slate-500 sm:flex-row lg:px-8">
          <a href="/" className="font-black text-blue-950">
            Shop<span className="text-blue-600">Rwanda</span>
          </a>
          <p>© {new Date().getFullYear()} Shop Rwanda. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
