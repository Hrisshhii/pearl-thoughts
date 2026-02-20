"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { doctors } from "@/app/home/page";

const slots = [
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
];

export default function BookingPage() {
  const { id } = useParams();
  const router = useRouter();
  const doctor = doctors.find((doc) => doc.id === Number(id));

  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState("14 July 2026");
  const [confirmed, setConfirmed] = useState(false);

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

        {/* Back */}
        <button
          onClick={() => router.back()}
          className="text-sm text-purple-400 hover:underline mb-6"
        >
          ← Back
        </button>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
        >
          {/* Doctor Header */}
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-16 rounded-full bg-linear-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-xl font-semibold">
              {doctor.name.split(" ")[1]?.charAt(0)}
            </div>

            <div>
              <h1 className="text-2xl font-bold">{doctor.name}</h1>
              <p className="text-purple-400 text-sm">
                {doctor.specialization}
              </p>
              <p className="text-gray-400 text-sm">
                ⭐ {doctor.rating} ({doctor.reviews} reviews)
              </p>
            </div>
          </div>

          {/* Date Selector */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-3">
              Select Date
            </h2>

            <div className="flex gap-4">
              {["14 July", "15 July", "16 July"].map((date) => (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`px-4 py-2 rounded-xl transition ${
                    selectedDate === date
                      ? "bg-purple-600"
                      : "bg-white/5 border border-white/10 hover:bg-white/10"
                  }`}
                >
                  {date}
                </button>
              ))}
            </div>
          </div>

          {/* Time Slots */}
          <div>
            <h2 className="text-lg font-semibold mb-4">
              Select Time Slot
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {slots.map((slot) => (
                <motion.div
                  key={slot}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedSlot(slot)}
                  className={`p-3 text-center rounded-xl border cursor-pointer transition ${
                    selectedSlot === slot
                      ? "bg-purple-600 border-purple-600"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
                >
                  {slot}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Panel */}
          {selectedSlot && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 bg-white/5 border border-white/10 rounded-xl p-4"
            >
              <p className="text-gray-400 text-sm">
                Appointment Summary
              </p>
              <p className="mt-2">
                <span className="text-purple-400">
                  {doctor.name}
                </span>{" "}
                on <span>{selectedDate}</span> at{" "}
                <span>{selectedSlot}</span>
              </p>
            </motion.div>
          )}

          {/* Confirm Button */}
          <button
            disabled={!selectedSlot || confirmed}
            onClick={() => setConfirmed(true)}
            className={`mt-8 w-full py-4 rounded-xl font-medium transition 
              ${selectedSlot?"bg-linear-to-r from-purple-600 to-indigo-600 hover:opacity-90":"bg-gray-700 cursor-not-allowed"}`
            }
          >
            {confirmed ? "Appointment Confirmed ✓" : "Confirm Booking"}
          </button>
        </motion.div>
      </div>
    </div>
  );
}