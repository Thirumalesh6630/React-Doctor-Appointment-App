"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b-4 border-emerald-600">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-2xl font-bold text-emerald-700 tracking-wider hover:text-emerald-800 transition-colors">
              AMRUTAM
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-12 items-center">
            <Link
              href="/"
              className="text-slate-700 hover:text-emerald-700 font-medium transition-colors relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/"
              className="text-slate-700 hover:text-emerald-700 font-medium transition-colors relative group"
            >
              Find Doctors
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/your-appointments"
              className="text-slate-700 hover:text-emerald-700 font-medium transition-colors relative group"
            >
              My Appointments
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/"
              className="text-slate-700 hover:text-emerald-700 font-medium transition-colors relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-700 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex gap-4 items-center">
            <button
              onClick={() => router.push("/login")}
              className="px-6 py-2.5 border-2 border-emerald-700 text-emerald-700 font-semibold rounded-lg hover:bg-emerald-50 transition-all duration-300 hover:shadow-md"
            >
              Login
            </button>
            <button
              onClick={() => router.push("/signup")}
              className="px-6 py-2.5 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Sign-up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-slate-700 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{
                transform: isMobileMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-white to-emerald-50 border-t border-slate-200 p-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <Link
              href="/"
              className="block text-slate-700 hover:text-emerald-700 font-semibold transition-colors py-2 hover:pl-2"
            >
              Home
            </Link>
            <Link
              href="/"
              className="block text-slate-700 hover:text-emerald-700 font-semibold transition-colors py-2 hover:pl-2"
            >
              Find Doctors
            </Link>
            <Link
              href="/your-appointments"
              className="block text-slate-700 hover:text-emerald-700 font-semibold transition-colors py-2 hover:pl-2"
            >
              My Appointments
            </Link>
            <Link
              href="/"
              className="block text-slate-700 hover:text-emerald-700 font-semibold transition-colors py-2 hover:pl-2"
            >
              About Us
            </Link>
            <div className="flex gap-3 pt-4 border-t border-slate-200">
              <button className="flex-1 px-4 py-2.5 border-2 border-emerald-700 text-emerald-700 font-semibold rounded-lg hover:bg-emerald-50 transition-colors">
                Login
              </button>
              <button className="flex-1 px-4 py-2.5 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors">
                Sign-up
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
