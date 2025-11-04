"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"
import PageIndicator from "@/components/page-indicator"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    if (!email || !password) {
      setError("Please fill in all fields")
      setLoading(false)
      return
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email")
      setLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      try {
        const user = {
          email,
          name: email.split("@")[0],
          loginTime: new Date().toLocaleString(),
        }

        // Store user in localStorage
        localStorage.setItem("amrutam_user", JSON.stringify(user))
        setSuccess(true)

        // Redirect after success
        setTimeout(() => {
          router.push("/")
        }, 1500)
      } catch (err) {
        setError("Login failed. Please try again.")
      }
      setLoading(false)
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <PageIndicator currentPage="Login" />

      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border-2 border-emerald-100">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h1>
              <p className="text-slate-600">Login to your AMRUTAM account</p>
            </div>

            {/* Success Message */}
            {success && (
              <div className="mb-6 p-4 bg-emerald-100 border-2 border-emerald-500 rounded-lg">
                <p className="text-emerald-700 font-semibold text-center">Login successful! Redirecting...</p>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-100 border-2 border-red-500 rounded-lg">
                <p className="text-red-700 font-semibold">{error}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              {/* Email Input */}
              <div className="relative">
                <label className="block text-slate-700 font-semibold mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-600 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full pl-12 pr-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 transition-colors"
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="relative">
                <label className="block text-slate-700 font-semibold mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-600 w-5 h-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-12 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-emerald-600 transition-colors"
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-600 hover:text-emerald-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-emerald-600 rounded" />
                  <span className="text-slate-700 text-sm">Remember me</span>
                </label>
                <Link href="#" className="text-emerald-600 hover:text-emerald-700 text-sm font-semibold">
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center gap-4">
              <div className="flex-1 h-px bg-slate-300"></div>
              <span className="text-slate-500 text-sm">or</span>
              <div className="flex-1 h-px bg-slate-300"></div>
            </div>

            {/* Demo Credentials */}
            <div className="p-4 bg-slate-50 rounded-lg mb-6 border border-slate-200">
              <p className="text-slate-700 font-semibold text-sm mb-2">Demo Credentials:</p>
              <p className="text-slate-600 text-sm">Email: demo@example.com</p>
              <p className="text-slate-600 text-sm">Password: demo123</p>
            </div>

            {/* Sign Up Link */}
            <p className="text-center text-slate-600">
              Don't have an account?{" "}
              <Link href="/signup" className="text-emerald-600 hover:text-emerald-700 font-bold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
