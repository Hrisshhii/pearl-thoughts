"use client";

import { useRouter, useParams } from "next/navigation";
import { doctors } from "@/app/home/page";
import { motion } from "framer-motion";

export default function DoctorProfile() {
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);

  const doctor = doctors.find((doc) => doc.id === id);

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        Doctor not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 relative">
      <div className="max-w-5xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-6 text-sm text-purple-400 hover:underline hover:scale-[1.2] cursor-pointer transition"
        >
          ← Back
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
        >

          {/* Top Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div className="flex gap-6 items-center">
              <div className="w-20 h-20 rounded-full bg-linear-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-2xl font-semibold">
                {doctor.name.split(" ")[1]?.charAt(0)}
              </div>

              <div>
                <h1 className="text-3xl font-bold">
                  {doctor.name}
                </h1>
                <p className="text-purple-400">
                  {doctor.specialization}
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  {doctor.experience} experience
                </p>
              </div>
            </div>

            <div className="text-right">
              <div className="text-yellow-400 text-lg font-medium">
                ⭐ {doctor.rating}
              </div>
              <div className="text-gray-400 text-sm">
                {doctor.reviews} reviews
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 my-8" />

          {/* About */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">About Doctor</h2>
            <p className="text-gray-400">
              {doctor.about}
            </p>
          </div>

          {/* Education & Timing */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <p className="text-gray-400 text-sm">Education</p>
              <p className="mt-1">{doctor.education}</p>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <p className="text-gray-400 text-sm">Available Timing</p>
              <p className="mt-1">{doctor.timing}</p>
            </div>
          </div>

          {/* Book Button */}
          <button
            onClick={() => router.push(`/book/${doctor.id}`)}
            className="w-full py-4 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 hover:opacity-70 font-medium hover:scale-[1.02] cursor-pointer transition"
          >
            Book Appointment
          </button>
        </motion.div>
      </div>
    </div>
  );
}