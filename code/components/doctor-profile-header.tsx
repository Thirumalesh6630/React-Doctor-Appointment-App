"use client"

import Image from "next/image"
import { Star, Users, MessageCircle, CheckCircle } from "lucide-react"

interface Doctor {
  id: string
  name: string
  qualification: string
  followers: number
  following: number
  reviews: number
  rating: number
  image: string
}

interface DoctorProfileHeaderProps {
  doctor: Doctor
}

export default function DoctorProfileHeader({ doctor }: DoctorProfileHeaderProps) {
  return (
    <section className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-100 py-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Doctor Image */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 flex-shrink-0">
            <Image
              src={doctor.image || "/placeholder.svg?height=192&width=192&query=doctor"}
              alt={doctor.name}
              fill
              className="rounded-2xl object-cover border-4 border-white shadow-2xl"
            />
            <div className="absolute bottom-4 right-4 bg-emerald-600 p-2 rounded-full border-4 border-white shadow-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Doctor Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{doctor.name}</h1>
                <div className="flex items-center gap-3 mb-3">
                  <p className="text-slate-700 text-lg font-semibold">{doctor.qualification}</p>
                  <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <span className="font-bold text-slate-900">{doctor.rating}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-8 py-6 border-y-2 border-slate-200">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">{doctor.followers}</div>
                  <p className="text-sm text-slate-600 font-medium">Followers</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">{doctor.following}</div>
                  <p className="text-sm text-slate-600 font-medium">Following</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">{doctor.reviews}</div>
                  <p className="text-sm text-slate-600 font-medium">Reviews</p>
                </div>
              </div>
            </div>

            {/* Button */}
            <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-3 rounded-lg hover:shadow-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 font-bold shadow-md">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
