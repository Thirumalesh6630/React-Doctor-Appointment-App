"use client"

import { Globe, Briefcase, MessageSquare, Award } from "lucide-react"
import Image from "next/image"

interface Doctor {
  id: string
  name: string
  about: string
  specializations: string[]
  languages: string[]
  socialLinks?: string[]
  concerns?: string[]
  experience_details: { position: string; hospital: string; years: string }[]
  reviews_data: {
    author: string
    rating: number
    text: string
    date: string
    consultedFor?: string
    avatar?: string
  }[]
}

interface DoctorProfileContentProps {
  doctor: Doctor
}

export default function DoctorProfileContent({ doctor }: DoctorProfileContentProps) {
  return (
    <div className="space-y-8">
      {/* About Section */}
      <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
        <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
          <div className="w-1 h-8 bg-emerald-600 rounded-full"></div>A Little About me
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6 text-justify">{doctor.about}</p>
        <button className="text-emerald-600 font-bold hover:text-emerald-800 transition-colors text-sm uppercase tracking-wide">
          Read More →
        </button>
      </div>

      {/* Languages Section */}
      <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Globe className="w-5 h-5 text-blue-600" />
          </div>
          Languages Spoken
        </h3>
        <div className="flex flex-wrap gap-3 mb-8">
          {doctor.languages.map((lang) => (
            <span
              key={lang}
              className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-5 py-2.5 rounded-full font-semibold border border-blue-200 hover:shadow-md transition-shadow"
            >
              {lang}
            </span>
          ))}
        </div>

        {/* Social Links */}
        {doctor.socialLinks && doctor.socialLinks.length > 0 && (
          <div className="flex gap-4 pt-6 border-t border-slate-200">
            {doctor.socialLinks.map((social) => (
              <button
                key={social}
                className="w-10 h-10 rounded-full bg-slate-100 hover:bg-emerald-100 transition-colors flex items-center justify-center text-slate-600 hover:text-emerald-600"
                title={social}
              >
                <span className="text-lg">
                  {social === "facebook" && "f"}
                  {social === "instagram" && "📷"}
                  {social === "youtube" && "▶"}
                  {social === "twitter" && "𝕏"}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Specializations */}
      <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
            <Award className="w-5 h-5 text-emerald-600" />
          </div>
          I Specialize In
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {doctor.specializations.map((spec) => (
            <div
              key={spec}
              className="text-center p-5 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl border-2 border-emerald-200 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
            >
              <p className="text-slate-700 font-semibold text-sm">{spec}</p>
            </div>
          ))}
        </div>
      </div>

      {doctor.concerns && doctor.concerns.length > 0 && (
        <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">The Concerns I Treat</h3>
          <div className="flex flex-wrap gap-3">
            {doctor.concerns.map((concern, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-700 px-4 py-2.5 rounded-full font-semibold border border-emerald-200 hover:shadow-md transition-shadow text-sm"
              >
                {concern}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Work Experience */}
      <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-purple-600" />
          </div>
          My Work Experience
        </h3>
        <p className="text-emerald-700 font-bold mb-6 text-sm uppercase tracking-widest">
          I HAVE BEEN IN PRACTICE FOR 7+ YEARS
        </p>

        <div className="space-y-0">
          {doctor.experience_details.map((exp, index) => (
            <div
              key={index}
              className="flex gap-6 pb-6 last:pb-0"
              style={{
                borderLeft: index === doctor.experience_details.length - 1 ? "none" : "3px solid #d1d5db",
              }}
            >
              <div className="flex-shrink-0 relative">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center border-3 border-white shadow-md">
                  <Briefcase className="w-5 h-5 text-purple-600" />
                </div>
                {index !== doctor.experience_details.length - 1 && (
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-slate-300 to-transparent"></div>
                )}
              </div>
              <div className="flex-1 pt-1">
                <p className="font-bold text-slate-900 text-lg">{exp.position}</p>
                <p className="text-slate-600 text-sm font-medium mt-1">{exp.hospital}</p>
                <p className="text-slate-500 text-xs mt-2 uppercase tracking-widest font-semibold">{exp.years}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-yellow-600" />
          </div>
          Featured Reviews ({doctor.reviews_data.length})
        </h3>
        <div className="space-y-6">
          {doctor.reviews_data.map((review, index) => (
            <div
              key={index}
              className="pb-6 last:pb-0"
              style={{
                borderBottom: index === doctor.reviews_data.length - 1 ? "none" : "1px solid #e5e7eb",
              }}
            >
              <div className="flex items-start gap-4 mb-3">
                {review.avatar && (
                  <Image
                    src={review.avatar || "/placeholder.svg"}
                    alt={review.author}
                    width={48}
                    height={48}
                    className="rounded-full w-12 h-12 object-cover flex-shrink-0"
                  />
                )}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-slate-900 text-lg">{review.author}</p>
                      {review.consultedFor && (
                        <p className="text-slate-600 text-sm font-medium">Consulted for {review.consultedFor}</p>
                      )}
                    </div>
                    <span className="text-slate-500 text-sm font-medium bg-slate-100 px-3 py-1 rounded-full whitespace-nowrap">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-lg ${i < review.rating ? "text-yellow-400" : "text-slate-300"}`}>
                    ★
                  </span>
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
