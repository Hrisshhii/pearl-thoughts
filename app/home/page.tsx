"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";

export const doctors = [
  {
    id: 1,
    name: "Dr. Prakash Das",
    specialization: "Psychologist",
    experience: "7+ years",
    rating: 4.9,
    reviews: 128,
    available: true,
    about: "Experienced psychologist specializing in stress management, therapy, and behavioral treatments.",
    education: "MBBS, MD (Psychiatry)",
    timing: "09:00 AM - 07:00 PM",
  },
  {
    id: 2,
    name: "Dr. Ananya Sharma",
    specialization: "Cardiologist",
    experience: "12+ years",
    rating: 4.8,
    reviews: 214,
    available: true,
    about: "Senior cardiologist with expertise in heart disease and preventive cardiology.",
    education: "MBBS, DM (Cardiology)",
    timing: "10:00 AM - 06:00 PM",
  },
  {
    id: 3,
    name: "Dr. Rohit Mehta",
    specialization: "Dermatologist",
    experience: "5+ years",
    rating: 4.7,
    reviews: 89,
    available: false,
    about: "Specializes in acne treatment, cosmetic dermatology, and skin disorders.",
    education: "MBBS, MD (Dermatology)",
    timing: "11:00 AM - 05:00 PM",
  },
  {
    id: 4,
    name: "Dr. Priya Nair",
    specialization: "Neurologist",
    experience: "9+ years",
    rating: 4.9,
    reviews: 176,
    available: true,
    about: "Expert neurologist focused on stroke care and neurological rehabilitation.",
    education: "MBBS, DM (Neurology)",
    timing: "09:30 AM - 04:30 PM",
  },
  {
    id: 5,
    name: "Dr. Vikram Joshi",
    specialization: "Orthopedic",
    experience: "15+ years",
    rating: 4.6,
    reviews: 302,
    available: true,
    about: "Orthopedic surgeon specializing in joint replacement and sports injuries.",
    education: "MBBS, MS (Orthopedics)",
    timing: "08:30 AM - 03:00 PM",
  },
  {
    id: 6,
    name: "Dr. Sneha Pillai",
    specialization: "Pediatrician",
    experience: "8+ years",
    rating: 4.8,
    reviews: 145,
    available: false,
    about: "Child specialist focused on preventive pediatric healthcare.",
    education: "MBBS, MD (Pediatrics)",
    timing: "10:00 AM - 02:00 PM",
  },
];

const navItems = [
  { name: "Find a Doctor", path: "/home" },
  { name: "Appointments", path: "/appointments" },
  { name: "Records", path: "/records" },
  { name: "Profile", path: "/profile" },
];


export default function HomePage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "available">("all");
  const [activeNav, setActiveNav] = useState("Find a Doctor");
  const router = useRouter();

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doc) => {
      const matchesSearch =
        doc.name.toLowerCase().includes(search.toLowerCase()) ||
        doc.specialization.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        filter === "all" ? true : doc.available === true;

      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  return (
    <div className="min-h-screen flex bg-slate-950 text-white">

      {/* Sidebar */}
      <div className="w-64 bg-white/5 border-r border-white/10 p-6 hidden md:flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold bg-linear-to-r from-white to-purple-400 bg-clip-text text-transparent mb-10">
            Pearl
          </h2>

          <div className="space-y-2 relative">
            {navItems.map((item) => {
              const active = activeNav === item.name;

              return (
                <motion.div
                  key={item.name}
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveNav(item.name)}
                  className={`relative p-3 rounded-xl cursor-pointer transition-all duration-300 
                    ${active?"text-purple-300":"text-gray-400 hover:bg-white/5"}`
                  }
                >
                  {active && (
                    <motion.div layoutId="activeIndicator"
                      className="absolute left-0 top-0 h-full w-1 bg-purple-500 rounded-r-full"
                    />
                  )}

                  {active && (
                    <motion.div layoutId="activeBg"
                      className="absolute inset-0 bg-purple-600/15 rounded-xl -z-10"
                    />
                  )}
                  {item.name}
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="text-xs text-gray-500">
          © 2026 Pearl Health
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 blur-3xl rounded-full pointer-events-none" />
          {/* Header */}
          <div className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-5xl font-bold tracking-tight bg-linear-to-r from-white to-purple-300 bg-clip-text text-transparent">
                Find a Doctor
              </h1>
              <p className="text-gray-400 mt-2">
                Book appointments with top specialists near you
              </p>
            </div>

            <div className="relative">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search doctors..."
                className="w-72 px-4 py-2 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-1 focus:ring-purple-400"
              />
            </div>
          </div>

          <div className="flex gap-6 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4">
              <p className="text-gray-400 text-sm">Total Doctors</p>
              <p className="text-2xl font-semibold">{doctors.length}</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4">
              <p className="text-gray-400 text-sm">Available Today</p>
              <p className="text-2xl font-semibold">
                {doctors.filter(d => d.available).length}
              </p>
            </div>
          </div>

          <div className="h-px bg-white/10 my-8" />

          {/* Filters */}
          <div className="flex gap-4 mb-8">
            <button onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full transition cursor-pointer ${
                filter==="all"?"bg-purple-600 text-white":"bg-white/5 border border-white/10 text-gray-300"
              }`}
            >
              All Doctors
            </button>

            <button
              onClick={() => setFilter("available")}
              className={`px-4 py-2 rounded-full transition cursor-pointer ${
                filter==="available"?"bg-purple-600 text-white":"bg-white/5 border border-white/10 text-gray-300"
              }`}
            >
              Available Today
            </button>
          </div>

          {/* Doctor Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredDoctors.map((doc) => (
              <motion.div
                key={doc.id}
                whileHover={{ y:-8 }}
                onClick={() => router.push(`/doctor/${doc.id}`)}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-6 cursor-pointer backdrop-blur-lg hover:border-purple-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition"
              >
                {/* Top Section */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-semibold">
                      {doc.name.charAt(3)}
                    </div>

                    <div>
                      <h2 className="text-lg font-semibold">{doc.name}</h2>
                      <p className="text-purple-400 text-sm">
                        {doc.specialization}
                      </p>
                    </div>
                  </div>

                  <div className="text-yellow-400 text-sm font-medium">
                    ⭐ {doc.rating} <span className="text-gray-400">({doc.reviews})</span>
                  </div>
                </div>

                {/* Middle */}
                <div className="text-sm text-gray-400 mb-4">
                  {doc.experience} experience
                </div>

                {/* Bottom */}
                <div className="flex justify-between items-center">
                  {doc.available ? (
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                      Available Today
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs">
                      Unavailable
                    </span>
                  )}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/book/${doc.id}`);
                    }}
                    className="px-4 py-2 rounded-lg bg-linear-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-sm font-medium hover:scale-[1.2] transition"
                  >
                    Book
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
        {filteredDoctors.length === 0 && (
          <div className="text-center text-gray-400 mt-10">
            No doctors found.
          </div>
        )}
      </div>
    </div>
  );
}