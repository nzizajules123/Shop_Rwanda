import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 bg-blue-950 px-5 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
        <Link to="/" className="text-xl font-black">
          Shop<span className="text-blue-400">Rwanda</span>
        </Link>
        <p className="text-center text-sm text-blue-100/70">
          © {new Date().getFullYear()} Shop Rwanda. All rights reserved.
        </p>
        <div className="flex gap-5 text-sm text-blue-100/80">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/login" className="hover:text-white">Login</Link>
          <Link to="/register" className="hover:text-white">Register</Link>
        </div>
      </div>
    </footer>
  );
}