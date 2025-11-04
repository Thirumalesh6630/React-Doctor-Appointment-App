"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import PageIndicator from "@/components/page-indicator"
import { Calendar, Clock, Video, MapPin, Phone, ChevronRight, Download } from "lucide-react"

interface Appointment {
  id: string
  doctorName: string
  date: string
  time: string
  mode: string
  fee: number
  status: "upcoming" | "completed" | "cancelled"
  specialty: string
  doctorImage?: string
}

export default function YourAppointmentsPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [activeTab, setActiveTab] = useState<"upcoming" | "completed" | "cancelled">("upcoming")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const mockAppointments: Appointment[] = [
      {
        id: "APT-1",
        doctorName: "Dr. Prerna Narang",
        date: "Tue, 16 Oct 2024",
        time: "10:00 AM",
        mode: "video",
        fee: 899,
        status: "upcoming",
        specialty: "Gynecologist",
        doctorImage: "/female-doctor-stethoscope.png",
      },
      {
        id: "APT-2",
        doctorName: "Dr. Bruce Willis",
        date: "Wed, 17 Oct 2024",
        time: "02:30 PM",
        mode: "in-clinic",
        fee: 999,
        status: "upcoming",
        specialty: "Infertility",
        doctorImage: "/male-doctor-stethoscope.png",
      },
      {
        id: "APT-3",
        doctorName: "Dr. Prerna Narang",
        date: "Sun, 08 Oct 2024",
        time: "09:00 AM",
        mode: "chat",
        fee: 899,
        status: "completed",
        specialty: "Gynecologist",
        doctorImage: "/female-doctor-stethoscope.png",
      },
      {
        id: "APT-4",
        doctorName: "Dr. Bruce Willis",
        date: "Sat, 07 Oct 2024",
        time: "03:00 PM",
        mode: "in-clinic",
        fee: 999,
        status: "cancelled",
        specialty: "Infertility",
        doctorImage: "/male-doctor-stethoscope.png",
      },
    ]

    setAppointments(mockAppointments)
    setIsLoading(false)
  }, [])

  const filteredAppointments = appointments.filter((apt) => apt.status === activeTab)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "upcoming":
        return <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Upcoming</span>
      case "completed":
        return (
          <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
            Completed
          </span>
        )
      case "cancelled":
        return <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">Cancelled</span>
      default:
        return null
    }
  }

  const getModeIcon = (mode: string) => {
    switch (mode) {
      case "video":
        return <Video className="w-5 h-5 text-blue-600" />
      case "in-clinic":
        return <MapPin className="w-5 h-5 text-emerald-600" />
      case "chat":
        return <Phone className="w-5 h-5 text-purple-600" />
      default:
        return null
    }
  }

  const getModeLabel = (mode: string) => {
    return mode.charAt(0).toUpperCase() + mode.slice(1).replace("-", " ")
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-slate-50">
      <PageIndicator currentPage="Your Appointments" />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Your Appointments</h1>
          <p className="text-slate-600 text-lg">Manage and view all your medical appointments</p>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-4 flex-wrap">
          {(["upcoming", "completed", "cancelled"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2 capitalize ${
                activeTab === tab
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-lg"
                  : "bg-white text-slate-700 border-slate-200 hover:border-emerald-400"
              }`}
            >
              {tab === "upcoming" && `Upcoming (${appointments.filter((a) => a.status === "upcoming").length})`}
              {tab === "completed" && `Completed (${appointments.filter((a) => a.status === "completed").length})`}
              {tab === "cancelled" && `Cancelled (${appointments.filter((a) => a.status === "cancelled").length})`}
            </button>
          ))}
        </div>

        {/* Appointments List */}
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">Loading appointments...</p>
          </div>
        ) : filteredAppointments.length > 0 ? (
          <div className="space-y-4">
            {filteredAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="bg-white rounded-xl border-2 border-slate-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                  {/* Doctor Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-slate-200 flex-shrink-0 overflow-hidden">
                      {appointment.doctorImage && (
                        <img
                          src={appointment.doctorImage || "/placeholder.svg"}
                          alt={appointment.doctorName}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{appointment.doctorName}</p>
                      <p className="text-sm text-slate-600">{appointment.specialty}</p>
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-emerald-600" />
                      <span className="font-semibold text-slate-900">{appointment.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-slate-900">{appointment.time}</span>
                    </div>
                  </div>

                  {/* Consultation Type & Fee */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      {getModeIcon(appointment.mode)}
                      <span className="font-semibold text-slate-900">{getModeLabel(appointment.mode)}</span>
                    </div>
                    <div className="text-slate-600 font-medium">₹{appointment.fee}.00</div>
                  </div>

                  {/* Status & Actions */}
                  <div className="flex items-center justify-between">
                    <div>{getStatusBadge(appointment.status)}</div>
                    {appointment.status === "upcoming" && (
                      <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                        <ChevronRight className="w-6 h-6 text-slate-400" />
                      </button>
                    )}
                    {appointment.status === "completed" && (
                      <button
                        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                        title="Download prescription"
                      >
                        <Download className="w-6 h-6 text-emerald-600" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Appointment Details (Expandable) */}
                {appointment.status === "upcoming" && (
                  <div className="mt-6 pt-6 border-t-2 border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-slate-600 font-semibold mb-2">Join Link</p>
                      <p className="text-slate-600 truncate text-sm font-mono">
                        https://meet.amrutam.com/apt-{appointment.id}
                      </p>
                    </div>
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <p className="text-sm text-slate-600 font-semibold mb-2">Call Time</p>
                      <p className="font-semibold text-slate-900">15 mins before the appointment</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors">
                        Reschedule
                      </button>
                      <button className="flex-1 bg-red-100 text-red-700 font-semibold py-2 px-4 rounded-lg hover:bg-red-200 transition-colors">
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border-2 border-dashed border-slate-300">
            <Calendar className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">No {activeTab} appointments</h3>
            <p className="text-slate-600 mb-6">You don't have any {activeTab} appointments at the moment</p>
            <Link href="/find-doctors">
              <button className="bg-emerald-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-emerald-700 transition-colors">
                Book an Appointment
              </button>
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}
