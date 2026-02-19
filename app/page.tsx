/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function LoginPage() {
  const [remember,setRemember]=useState(false);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [showPassword,setShowPassword]=useState(false);
  const [loading,setLoading]=useState(false);

  const isValid=email.length>3 && password.length>3;

  const mouseX=useMotionValue(0);
  const mouseY=useMotionValue(0);

  const smoothX=useSpring(mouseX,{stiffness:100,damping:20});
  const smoothY=useSpring(mouseY,{stiffness:100,damping:20});

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect=e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX-rect.left);
    mouseY.set(e.clientY-rect.top);
  }

  return (
    <div onMouseMove={handleMouseMove} className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-black px-4 relative overflow-hidden text-white">
      {/* Spotlight that follows mouse */}
      <motion.div
        className="pointer-events-none absolute w-75 h-75 rounded-full blur-3xl"
        style={{
          background:"radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(0,0,0,0) 80%)",
          left: smoothX,
          top: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.4)] p-8"
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <span className="text-sm tracking-[0.3em] font-serif text-purple-300">
            PEARL
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-semibold text-center bg-linear-to-r from-purple-400 via-slate-300 to-purple-400 bg-clip-text text-transparent">
          Pearl Thoughts
        </h2>

        <p className="text-center text-gray-400 text-sm mt-2 mb-8">
          Sign in to your account
        </p>

        <div className="space-y-4">
          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-400 transition"
          />

          {/*Password*/}
          <div className="relative">
            <input type={showPassword ? "text" : "password"}
              placeholder="Password" value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-400 transition pr-16"
            />

            {password && (
              <button type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-300 transition text-sm font-medium cursor-pointer"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            )}
          </div>

          {/* Remember Me*/}
          <div className="flex items-center justify-between text-sm text-gray-400">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={remember} onChange={() => setRemember(!remember)} className="accent-purple-500 cursor-pointer"/>
              Remember me
            </label>

            <button className="hover:text-purple-400 transition cursor-pointer">
              Forgot password?
            </button>
          </div>

          {/* Login Button */}
          <motion.button
            whileTap={{scale:0.97}}
            whileHover={{scale:1.02}}
            disabled={!isValid||loading}
            onClick={()=>{
              setLoading(true);
              setTimeout(()=>setLoading(false), 1500);
            }}
            className={`w-full py-3 rounded-xl font-medium transition ${
              isValid?"bg-linear-to-r from-purple-600 to-indigo-600 hover:opacity-90 cursor-pointer":"bg-gray-700 cursor-not-allowed"
            }`}
          >
            {loading?"Authenticating...":"Login"}
          </motion.button>

          {/* Divider */}
          <div className="flex items-center gap-3 text-gray-600 text-sm">
            <div className="flex-1 h-px bg-white/10" />
            Or continue with
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Google */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3 rounded-xl bg-white text-black flex items-center justify-center gap-3 transition cursor-pointer"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </motion.button>
        </div>

        {/* Sign Up */}
        <p className="text-center text-sm mt-8 text-gray-400">
          {`Don't have an account?`}{" "}
          <span className="text-purple-400 cursor-pointer hover:underline">
            Sign Up
          </span>
        </p>
      </motion.div>
    </div>
  );
}
