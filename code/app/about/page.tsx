"use client"

import PageIndicator from "@/components/page-indicator"
import { CheckCircle, Award, Users, Zap } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Committed to providing the highest quality healthcare services",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Patient-Centric",
      description: "Your health and well-being is our top priority",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "Using cutting-edge technology for better healthcare",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <PageIndicator currentPage="About Us" />

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">About AMRUTAM</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              AMRUTAM is a leading healthcare platform dedicated to connecting patients with expert doctors for quality
              medical consultations. Our mission is to make healthcare accessible, affordable, and convenient for
              everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white border-y-2 border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-200 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-emerald-600 rounded-lg flex items-center justify-center text-white mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                To revolutionize healthcare by making expert medical consultations accessible to everyone, everywhere.
                We believe that quality healthcare should be within reach of all.
              </p>
              <ul className="space-y-4">
                {["Expert Doctors", "Affordable Pricing", "24/7 Availability", "Secure Platform"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                    <span className="text-slate-700 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl h-96 flex items-center justify-center border-2 border-emerald-200">
              <div className="text-center">
                <Award className="w-24 h-24 text-emerald-600 mx-auto mb-4" />
                <p className="text-slate-700 font-semibold">Quality Healthcare Platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
