"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Calendar, Clock, Check, AlertCircle } from "lucide-react"

interface Doctor {
  id: string
  name: string
  consultationFee?: number
}

interface AppointmentBookingProps {
  doctor: Doctor
}

export default function AppointmentBooking({ doctor }: AppointmentBookingProps) {
  const router = useRouter()
  const [selectedMode, setSelectedMode] = useState("video")
  const [selectedDate, setSelectedDate] = useState("tue")
  const [selectedTime, setSelectedTime] = useState("10:00 AM")
  const [isLoading, setIsLoading] = useState(false)

  const consultationModes = [
    { id: "in-clinic", label: "In-Clinic", time: "45 mins", icon: "🏥" },
    { id: "video", label: "Video", time: "45 mins", icon: "📹" },
    { id: "chat", label: "Chat", time: "10 mins", icon: "💬" },
  ]

  const dateOptions = [
    { id: "mon", label: "Mon, 15 Oct", slots: 10, color: "slate" },
    { id: "tue", label: "Tue, 16 Oct", slots: 22, color: "red", isHighlighted: true },
    { id: "wed", label: "Wed, 17 Oct", slots: 10, color: "slate" },
  ]

  const morningSlots = ["08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM"]
  const eveningSlots = ["04:15 PM", "04:30 PM", "04:45 PM", "05:00 PM", "05:15 PM"]

  const handleBookAppointment = async () => {
    setIsLoading(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Create appointment object
    const appointmentData = {
      doctorId: doctor.id,
      doctorName: doctor.name,
      mode: selectedMode,
      date: dateOptions.find((d) => d.id === selectedDate)?.label || selectedDate,
      time: selectedTime,
      fee: doctor.consultationFee || 899,
      appointmentId: `APT-${Date.now()}`,
    }

    // Navigate to confirmation page with appointment data
    router.push(`/appointment-confirmation?data=${encodeURIComponent(JSON.stringify(appointmentData))}`)
  }

  return (
    <div className="bg-white rounded-2xl border-2 border-slate-200 p-8 sticky top-24 shadow-lg hover:shadow-xl transition-shadow">
      {/* Fee Section */}
      <div className="mb-8 pb-8 border-b-2 border-slate-200">
        <p className="text-slate-600 text-sm font-semibold uppercase tracking-wide mb-2">Consultation Fee</p>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-slate-900">₹{doctor.consultationFee || 899}</span>
          <span className="text-slate-500 text-sm">.00</span>
        </div>
      </div>

      {/* Mode Selection */}
      <div className="mb-8">
        <h4 className="font-bold text-slate-900 mb-4 text-lg">Select your mode of session</h4>
        <div className="space-y-3">
          {consultationModes.map((mode) => (
            <label
              key={mode.id}
              className={`flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                selectedMode === mode.id
                  ? "border-emerald-600 bg-emerald-50 shadow-md"
                  : "border-slate-200 hover:border-emerald-400 hover:bg-slate-50"
              }`}
            >
              <input
                type="radio"
                name="mode"
                value={mode.id}
                checked={selectedMode === mode.id}
                onChange={(e) => setSelectedMode(e.target.value)}
                className="w-5 h-5 cursor-pointer accent-emerald-600"
              />
              <div className="flex-1">
                <p className="font-semibold text-slate-900">{mode.label}</p>
                <p className="text-sm text-slate-600 font-medium">{mode.time}</p>
              </div>
              {selectedMode === mode.id && <Check className="w-5 h-5 text-emerald-600 flex-shrink-0" />}
            </label>
          ))}
        </div>
      </div>

      {/* Date Selection */}
      <div className="mb-8">
        <h4 className="font-bold text-slate-900 mb-4 text-lg flex items-center gap-2">
          <Calendar className="w-5 h-5 text-emerald-600" />
          Pick a time slot
        </h4>
        <div className="grid grid-cols-3 gap-2 mb-6">
          {dateOptions.map((date) => (
            <button
              key={date.id}
              onClick={() => setSelectedDate(date.id)}
              className={`p-3 rounded-lg transition-all duration-300 border-2 font-medium text-sm transform hover:-translate-y-1 ${
                selectedDate === date.id
                  ? "border-emerald-600 bg-emerald-50 shadow-md"
                  : date.isHighlighted
                    ? `border-red-300 bg-red-50 hover:shadow-md`
                    : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <div className="text-slate-900 font-semibold">{date.label}</div>
              <div
                className={`text-xs mt-1 font-semibold ${
                  selectedDate === date.id ? "text-emerald-600" : date.isHighlighted ? "text-red-600" : "text-slate-500"
                }`}
              >
                {date.slots} slots
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Time Selection */}
      <div className="mb-8">
        {/* Morning Section */}
        <div className="mb-6">
          <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-3 flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Morning
          </p>
          <div className="grid grid-cols-3 gap-2">
            {morningSlots.slice(0, 3).map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-2.5 rounded-lg text-sm font-semibold transition-all duration-300 border-2 ${
                  selectedTime === time
                    ? "border-emerald-600 bg-emerald-600 text-white shadow-lg"
                    : "border-slate-200 text-slate-700 hover:border-emerald-400 hover:bg-emerald-50"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Evening Section */}
        <div>
          <p className="text-xs font-bold text-slate-600 uppercase tracking-widest mb-3 flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Evening
          </p>
          <div className="grid grid-cols-3 gap-2">
            {eveningSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-2.5 rounded-lg text-sm font-semibold transition-all duration-300 border-2 ${
                  selectedTime === time
                    ? "border-emerald-600 bg-emerald-600 text-white shadow-lg"
                    : "border-slate-200 text-slate-700 hover:border-emerald-400 hover:bg-emerald-50"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Alert Info */}
      <div className="mb-8 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg flex gap-3">
        <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-blue-700 font-medium">
          Your appointment details will be sent to your registered email and mobile number.
        </p>
      </div>

      {/* CTA Button */}
      <button
        onClick={handleBookAppointment}
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold py-3 rounded-xl hover:shadow-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 text-base uppercase tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isLoading ? "Processing..." : "Make An Appointment"}
      </button>

      {/* Additional Info */}
      <p className="text-xs text-slate-600 text-center mt-4 font-medium">Cancel anytime, no questions asked</p>
    </div>
  )
}
