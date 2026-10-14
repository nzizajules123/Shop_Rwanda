import { useState } from "react";
import { Link } from "react-router-dom";
import { UserRound, Eye, EyeOff, ArrowRight } from "lucide-react";
import AuthLayout, { Field, fieldClass } from "../components/AuthLayout";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({ email: "", password: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setMessage("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.password.length < 6) {
      setMessage("Your password must have at least 6 characters.");
      return;
    }
    setMessage("Form validated. Connect Firebase Authentication to sign in.");
  }

  return (
    <AuthLayout
      isLogin
      panelTitle="Welcome back to better shopping."
      panelText="Sign in to continue exploring products and enjoy a convenient shopping experience."
      icon={<UserRound size={25} />}
      title="Welcome back!"
      subtitle="Enter your details to access your account."
      footer={
        <>
          New to Shop Rwanda?{" "}
          <Link to="/register" className="font-bold text-blue-600 hover:text-blue-800">
            Create account
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <Field label="Email address" id="email">
          <input
            id="email" name="email" type="email" autoComplete="email"
            value={form.email} onChange={handleChange}
            placeholder="you@example.com" className={fieldClass} required
          />
        </Field>

        <Field label="Password" id="password">
          <div className="relative">
            <input
              id="password" name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              value={form.password} onChange={handleChange}
              placeholder="At least 6 characters" minLength={6}
              className={`${fieldClass} pr-16`} required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-500 hover:text-blue-600"
            >
              {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
            </button>
          </div>
        </Field>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setMessage("Password recovery will be available after Firebase Authentication is connected.")}
            className="text-sm font-semibold text-blue-600 hover:text-blue-800"
          >
            Forgot password?
          </button>
        </div>

        {message && (
          <p role="status" className="break-words rounded-xl border border-blue-100 bg-blue-50 p-3 text-sm leading-6 text-blue-800">
            {message}
          </p>
        )}

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
        >
          Sign in <ArrowRight size={19} />
        </button>
      </form>
    </AuthLayout>
  );
}