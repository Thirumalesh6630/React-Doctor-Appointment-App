"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Mail, Lock, User, Phone, Eye, EyeOff } from "lucide-react"
import PageIndicator from "@/components/page-indicator"

export default function SignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    if (!formData.fullName || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
      setError("Please fill in all fields")
      setLoading(false)
      return
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email")
      setLoading(false)
      return
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters")
      setLoading(false)
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setLoading(false)
      return
    }

    if (formData.phone.length < 10) {
      setError("Please enter a valid phone number")
      setLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      try {
        const user = {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          signupTime: new Date().toLocaleString(),
        }

        // Store user in localStorage
        localStorage.setItem("amrutam_user", JSON.stringify(user))
        setSuccess(true)

        // Redirect after success
        setTimeout(() => {
          router.push("/")
        }, 1500)
      } catch (err) {
        setError("Signup failed. Please try again.")
      }
      setLoading(false)
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <PageIndicator currentPage="Sign Up" />

      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border-2 border-emerald-100">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Create Account</h1>
              <p className="text-slate-600">Join AMRUTAM to book appointments</p>
            </div>

            {/* Success Message */}
            {success && (
              <div className="mb-6 p-4 bg-emerald-100 border-2 border-emerald-500 rounded-lg">
                <p className="text-emerald-700 font-semibold text-center">Account created! Redirecting...</p>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-100 border-2 border-red-500 rounded-lg">
                <p className="text-red-700 font-semibold">{error}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSignup} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-slate-700 font-semibold mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-600 w-5 h-5" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full pl-12 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 transition-colors"
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-slate-700 font-semibold mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-600 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full pl-12 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 transition-colors"
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-slate-700 font-semibold mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-600 w-5 h-5" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXXXXXXX"
                    className="w-full pl-12 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 transition-colors"
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-slate-700 font-semibold mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-600 w-5 h-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-12 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 transition-colors"
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-600 hover:text-emerald-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-slate-700 font-semibold mb-2">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-600 w-5 h-5" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className="w-full pl-12 pr-12 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 transition-colors"
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-600 hover:text-emerald-600"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-emerald-600 rounded" required />
                <span className="text-slate-700 text-sm">
                  I agree to the{" "}
                  <Link href="#" className="text-emerald-600 hover:text-emerald-700 font-semibold">
                    Terms & Conditions
                  </Link>
                </span>
              </label>

              {/* Signup Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Creating Account...
                  </>
                ) : (
                  "Sign Up"
                )}
              </button>
            </form>

            {/* Login Link */}
            <p className="text-center text-slate-600 mt-6">
              Already have an account?{" "}
              <Link href="/login" className="text-emerald-600 hover:text-emerald-700 font-bold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
