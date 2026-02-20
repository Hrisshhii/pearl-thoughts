"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OTPPage() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const router = useRouter();

  function handleChange(value: string, index: number) {
    if (!/^[0-9]?$/.test(value)) return;
    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);

    if(value&&index<3){
      const nextInput=document.getElementById(`otp-${index+1}`);
      nextInput?.focus();
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
        
        <h2 className="text-2xl font-semibold text-center mb-2">
          OTP Verification
        </h2>
        <p className="text-center text-gray-400 text-sm mb-8">
          Enter the 4-digit code sent to your number
        </p>

        <div className="flex justify-center gap-4 mb-8">
          {otp.map((digit, index) => (
            <input
              id={`otp-${index}`}
              key={index}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              maxLength={1}
              inputMode="numeric"
              className="w-14 h-14 text-center text-xl rounded-xl bg-white/10 border border-white/10 focus:ring-1 focus:ring-purple-400 outline-none"
            />
          ))}
        </div>

        <button
          onClick={() => router.push("/home")}
          className="w-full py-3 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 hover:opacity-90 cursor-pointer"
        >
          Verify
        </button>
      </div>
    </div>
  );
}