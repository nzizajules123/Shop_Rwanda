import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Eye, EyeOff, ArrowRight } from "lucide-react";
import AuthLayout, { Field, fieldClass } from "../components/AuthLayout";

export default function RegistrationPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({
    name: "", phone: "", email: "", password: "", confirmPassword: "", acceptedTerms: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setMessage("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.password.length < 6) {
      setMessage("Your password must have at least 6 characters.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setMessage("Your passwords do not match.");
      return;
    }
    if (!form.acceptedTerms) {
      setMessage("Please accept the terms to continue.");
      return;
    }
    setMessage("Form validated. Connect Firebase Authentication to create an account.");
  }

  return (
    <AuthLayout
      isLogin={false}
      panelTitle="Your shopping journey starts here."
      panelText="Create your account and discover products selected for your everyday needs."
      icon={<ShoppingBag size={25} />}
      title="Create your account"
      subtitle="Fill in your details to join Shop Rwanda."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/login" className="font-bold text-blue-600 hover:text-blue-800">
            Sign in
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <Field label="Full name" id="name">
          <input
            id="name" name="name" autoComplete="name"
            value={form.name} onChange={handleChange}
            placeholder="Your full name" className={fieldClass} required
          />
        </Field>

        <Field label="Phone number" id="phone">
          <input
            id="phone" name="phone" type="tel" autoComplete="tel"
            value={form.phone} onChange={handleChange}
            placeholder="+250..." className={fieldClass} required
          />
        </Field>

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
              autoComplete="new-password"
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

        <Field label="Confirm password" id="confirmPassword">
          <input
            id="confirmPassword" name="confirmPassword"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            value={form.confirmPassword} onChange={handleChange}
            placeholder="Enter your password again" className={fieldClass} required
          />
        </Field>

        <label className="flex items-start gap-3 text-sm leading-5 text-slate-600">
          <input
            type="checkbox" name="acceptedTerms"
            checked={form.acceptedTerms} onChange={handleChange}
            className="mt-1 accent-blue-600" required
          />
          <span>I agree to the terms of service and privacy policy.</span>
        </label>

        {message && (
          <p role="status" className="break-words rounded-xl border border-blue-100 bg-blue-50 p-3 text-sm leading-6 text-blue-800">
            {message}
          </p>
        )}

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
        >
          Create account <ArrowRight size={19} />
        </button>
      </form>
    </AuthLayout>
  );
}