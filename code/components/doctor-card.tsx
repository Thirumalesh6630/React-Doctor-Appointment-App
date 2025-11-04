"use client"

import Link from "next/link"
import { Star, Users, MessageSquare, Calendar } from "lucide-react"
import Image from "next/image"

interface DoctorCardProps {
  doctor: {
    id: string
    name: string
    specialty: string
    gender: string
    experience: number
    rating: number
    languages: string[]
    consultationTypes: { type: string; price: string }[]
    image: string
  }
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Link href={`/doctor/${doctor.id}`}>
      <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-2 border-amber-100 hover:border-amber-200 group">
        {/* Doctor Image & Rating */}
        <div className="text-center mb-6">
          <div className="relative w-28 h-28 mx-auto mb-4 group">
            <Image
              src={doctor.image || "/placeholder.svg?height=112&width=112&query=doctor"}
              alt={doctor.name}
              fill
              className="rounded-full object-cover border-4 border-white shadow-lg group-hover:shadow-xl transition-shadow"
            />
            <div className="absolute -bottom-1 -right-1 bg-slate-800 text-white rounded-full px-2.5 py-1.5 flex items-center gap-1 text-xs font-bold shadow-lg border-2 border-white">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              {doctor.rating}
            </div>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mt-4">{doctor.name}</h3>
          <p className="text-slate-600 text-sm font-medium mt-1">
            {doctor.gender} • {doctor.specialty}
          </p>
        </div>

        {/* Doctor Info */}
        <div className="space-y-2 mb-6 text-sm text-slate-700">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="font-medium">{doctor.experience} years of Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="font-medium">Speaks: {doctor.languages.join(", ")}</span>
          </div>
        </div>

        {/* Consultation Types */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {doctor.consultationTypes.map((type) => (
            <div
              key={type.type}
              className="border-2 border-slate-300 rounded-lg p-3 text-center hover:border-emerald-500 transition-colors"
            >
              <p className="text-slate-700 font-semibold text-xs">{type.type}</p>
              <p className="text-slate-900 font-bold text-sm mt-1">{type.price}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2">
          <button className="w-full border-2 border-emerald-600 text-emerald-600 font-bold py-2.5 rounded-lg hover:bg-emerald-50 transition-all duration-200 text-sm group-hover:shadow-md">
            View Profile
          </button>
          <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold py-2.5 rounded-lg hover:shadow-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-200 text-sm flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" />
            Book a consultation
          </button>
        </div>
      </div>
    </Link>
  )
}
