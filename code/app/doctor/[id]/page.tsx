"use client"

import { use } from "react"
import DoctorProfileHeader from "@/components/doctor-profile-header"
import DoctorProfileContent from "@/components/doctor-profile-content"
import AppointmentBooking from "@/components/appointment-booking"
import PageIndicator from "@/components/page-indicator"
import { doctors } from "@/lib/mock-data"

export default function DoctorProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const doctor = doctors.find((d) => d.id === String(id))

  if (!doctor) {
    return (
      <main className="min-h-screen bg-slate-50">
        <PageIndicator currentPage="Doctor Profile" />
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-slate-600 text-lg font-semibold">Doctor not found</p>
          <p className="text-slate-500 mt-2">ID: {id}</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <PageIndicator currentPage={doctor.name} />
      <DoctorProfileHeader doctor={doctor} />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <DoctorProfileContent doctor={doctor} />
          </div>
          <div className="lg:col-span-1">
            <AppointmentBooking doctor={doctor} />
          </div>
        </div>
      </div>
    </main>
  )
}
