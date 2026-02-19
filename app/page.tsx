/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

export default function LoginPage() {
  const [remember, setRemember] = useState(false);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 bg-gray-200 rounded-2xl flex items-center justify-center text-xl font-semibold">
            Your Logo
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        {/* Input */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Login with Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              Remember Me
            </label>

            <button className="text-red-500 hover:underline">
              Forgot Password
            </button>
          </div>

          {/* Login Button */}
          <button 
           onClick={()=>{
            setLoading(true);
            setTimeout(()=>setLoading(false),1500);
           }}
           className="w-full bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 transition">
            {loading?"Logging in...":"Login"}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 text-gray-400 text-sm">
            <div className="flex-1 h-px bg-gray-300" />
            Or login with
            <div className="flex-1 h-px bg-gray-300" />
          </div>

          {/* Google */}
          <button className="w-full border py-3 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
        </div>

        {/* Sign Up */}
        <p className="text-center text-sm mt-6 text-gray-500">
          {`Don't have an account?`}{" "}
          <span className="text-cyan-600 cursor-pointer hover:underline">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
