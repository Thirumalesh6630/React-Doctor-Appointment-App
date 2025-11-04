"use client"

import { ChevronDown, X } from "lucide-react"
import { useState } from "react"

interface FilterBarProps {
  activeFilters: string[]
  onRemoveFilter: (filter: string) => void
  onAddFilter: (filter: string) => void
}

export default function FilterBar({ activeFilters, onRemoveFilter, onAddFilter }: FilterBarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const filterOptions = {
    expertise: ["Hair care", "Dermatology", "Orthopedics", "Cardiology", "Gynecology", "Pediatrics"],
    gender: ["Male", "Female", "All"],
    fees: ["Rs.0-Rs.500", "Rs.500-Rs.1000", "Rs.1000-Rs.2000", "Rs.2000+"],
    languages: ["Hindi", "English", "Marathi", "Tamil", "Telugu"],
  }

  const renderDropdown = (label: string, options: string[]) => (
    <div className="relative">
      <button
        onClick={() => setOpenDropdown(openDropdown === label ? null : label)}
        className="flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 rounded-lg transition-all duration-200 text-slate-700 font-semibold text-sm shadow-sm"
      >
        {label}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${openDropdown === label ? "rotate-180" : ""}`}
        />
      </button>

      {openDropdown === label && (
        <div className="absolute top-full left-0 mt-2 bg-white border-2 border-slate-200 rounded-xl shadow-xl z-20 min-w-56 animate-in fade-in slide-in-from-top-2">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onAddFilter(option)
                setOpenDropdown(null)
              }}
              className="w-full text-left px-4 py-3 hover:bg-emerald-50 border-b border-slate-100 last:border-b-0 text-slate-700 font-medium transition-colors hover:text-emerald-700"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <section className="bg-white border-b-2 border-slate-200 py-6 sticky top-16 z-30">
      <div className="container mx-auto px-4">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          {renderDropdown("Expertise", filterOptions.expertise)}
          {renderDropdown("Gender", filterOptions.gender)}
          {renderDropdown("Fees", filterOptions.fees)}
          {renderDropdown("Languages", filterOptions.languages)}
          <button className="flex items-center gap-2 px-4 py-2.5 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 rounded-lg transition-all duration-200 font-semibold text-sm shadow-sm">
            All filters
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Applied Filters */}
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
            {activeFilters.map((filter) => (
              <div
                key={filter}
                className="flex items-center gap-2 px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
              >
                {filter}
                <button
                  onClick={() => onRemoveFilter(filter)}
                  className="hover:text-emerald-900 transition-colors ml-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
