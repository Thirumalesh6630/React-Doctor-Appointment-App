"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { Check, Mail, MessageSquare, Clock, DollarSign, ArrowRight, CalendarIcon } from "lucide-react"
import Link from "next/link"
import PageIndicator from "@/components/page-indicator"
import { useEffect, useState } from "react"

export default function AppointmentConfirmationPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [appointment, setAppointment] = useState<any>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const data = searchParams.get("data")
    console.log("[v0] Appointment data from URL:", data)

    if (data) {
      try {
        const parsedData = JSON.parse(decodeURIComponent(data))
        console.log("[v0] Successfully parsed appointment:", parsedData)
        setAppointment(parsedData)
      } catch (error) {
        console.error("[v0] Failed to parse appointment data:", error)
      }
    }
  }, [isClient, searchParams])

  if (!isClient || !appointment) {
    return (
      <main className="min-h-screen bg-slate-50">
        <PageIndicator currentPage="Appointment Confirmation" />
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-slate-600 text-lg">Loading appointment details...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-slate-50">
      <PageIndicator currentPage="Appointment Confirmed" />

      <div className="container mx-auto px-4 py-12">
        {/* Success Header */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Green Success Banner */}
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <Check className="w-12 h-12 text-emerald-600" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Appointment Confirmed!</h1>
              <p className="text-emerald-100 text-lg">Your appointment has been successfully booked</p>
            </div>

            {/* Appointment Details */}
            <div className="p-8 space-y-6">
              {/* Appointment ID */}
              <div className="pb-6 border-b-2 border-slate-200">
                <p className="text-sm text-slate-600 font-semibold mb-2 uppercase tracking-wide">Appointment ID</p>
                <p className="text-2xl font-bold text-slate-900">{appointment.appointmentId}</p>
              </div>

              {/* Doctor & Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Doctor Info */}
                <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200">
                  <p className="text-sm text-slate-600 font-semibold mb-2 uppercase tracking-wide">Doctor</p>
                  <p className="text-xl font-bold text-slate-900 mb-4">{appointment.doctorName}</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-emerald-600" />
                      <span className="text-slate-700 font-medium">{appointment.time}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CalendarIcon className="w-5 h-5 text-emerald-600" />
                      <span className="text-slate-700 font-medium">{appointment.date}</span>
                    </div>
                  </div>
                </div>

                {/* Consultation Type & Fee */}
                <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200">
                  <p className="text-sm text-slate-600 font-semibold mb-2 uppercase tracking-wide">Consultation Type</p>
                  <p className="text-xl font-bold text-slate-900 mb-4 capitalize">{appointment.mode}</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <DollarSign className="w-5 h-5 text-emerald-600" />
                      <span className="text-slate-700 font-medium">₹{appointment.fee}.00</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-emerald-600" />
                      <span className="text-emerald-600 font-semibold">Payment Successful</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notifications Section */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 space-y-4">
                <h3 className="font-bold text-slate-900 text-lg">Confirmation Sent To</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg border-2 border-blue-200">
                    <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-600 font-medium">Email</p>
                      <p className="font-semibold text-slate-900">your.email@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg border-2 border-blue-200">
                    <MessageSquare className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-slate-600 font-medium">SMS</p>
                      <p className="font-semibold text-slate-900">+91 XXXXXXXXXX</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What's Next Section */}
              <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 text-lg mb-4">What's Next?</h3>
                <ul className="space-y-3 text-slate-700 font-medium">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-lg">1.</span>
                    <span>Check your email and SMS for appointment confirmation details</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-lg">2.</span>
                    <span>You'll receive a link to join the video consultation 15 minutes before the appointment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold text-lg">3.</span>
                    <span>Keep your prescription and medical records ready for the consultation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Link href="/your-appointments">
            <button className="w-full bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-emerald-700 transition-all duration-300 flex items-center justify-center gap-2">
              <span>View My Appointments</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
          <Link href="/find-doctors">
            <button className="w-full bg-slate-200 text-slate-900 font-bold py-3 px-6 rounded-xl hover:bg-slate-300 transition-all duration-300">
              Book Another Appointment
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
