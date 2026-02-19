/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

export default function LoginPage() {
  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const isValid = email.length > 3 && password.length > 3;

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 px-4 relative overflow-hidden">
      
      <div className="absolute w-72 h-72 bg-cyan-500/30 blur-3xl rounded-full -top-20 -left-20" />
      <div className="absolute w-72 h-72 bg-purple-500/30 blur-3xl rounded-full bottom-0 right-0" />

      {/* Card */}
      <div className="relative w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 text-white">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-lg font-semibold tracking-wide">
            LOGO
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-semibold mb-2 text-center bg-linear-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Pearl Thoughts
        </h2>
        <p className="text-center text-gray-300 text-sm mb-6">
          Login to continue
        </p>

        <div className="space-y-4">
          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />

          {/* Remember M section */}
          <div className="flex items-center justify-between text-sm text-gray-300">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="accent-cyan-500"
              />
              Remember me
            </label>

            <button className="hover:text-cyan-400 transition cursor-pointer">
              Forgot password?
            </button>
          </div>

          {/*Login Button*/}
          <button
            disabled={!isValid || loading}
            onClick={() => {
              setLoading(true);
              setTimeout(() => setLoading(false), 1500);
            }}
            className={`w-full py-3 rounded-xl font-medium transition-all duration-300 
              ${isValid? "bg-cyan-500 hover:bg-cyan-600 hover:scale-[1.02] active:scale-95 cursor-pointer":"bg-gray-500 cursor-not-allowed"}
            `}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <div className="flex-1 h-px bg-white/20" />
            Or continue with
            <div className="flex-1 h-px bg-white/20" />
          </div>

          {/* Google Button */}
          <button className="w-full py-3 rounded-xl bg-white text-black flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
        </div>

        {/* Sign Up */}
        <p className="text-center text-sm mt-6 text-gray-300">
          {`Don't have an account?`}{" "}
          <span className="text-cyan-400 cursor-pointer hover:underline">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
