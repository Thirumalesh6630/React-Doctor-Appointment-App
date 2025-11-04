"use client"

import Link from "next/link"
import { Heart, Stethoscope, Calendar } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Expert Doctors",
      description: "Highly qualified healthcare professionals with years of experience",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Easy Scheduling",
      description: "Book appointments at your convenient time with instant confirmation",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Quality Care",
      description: "Receive personalized medical consultation and support",
    },
  ]

  const stats = [
    { number: "10K+", label: "Happy Patients" },
    { number: "500+", label: "Certified Doctors" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support Available" },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Your Health, Our Priority</h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-10">
              Connect with expert doctors and get quality healthcare from the comfort of your home
            </p>
            <Link href="/">
              <button className="bg-white text-emerald-600 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                Find a Doctor Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y-2 border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                <p className="text-slate-600 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-4">Why Choose AMRUTAM?</h2>
          <p className="text-center text-slate-600 text-lg mb-16 max-w-2xl mx-auto">
            Experience healthcare like never before with our comprehensive platform
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-emerald-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 text-emerald-600">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-50 to-teal-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to take charge of your health?</h2>
          <Link href="/">
            <button className="bg-emerald-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:bg-emerald-700 transition-all duration-300">
              Start Your Journey Today
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
