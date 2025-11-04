"use client"

import { useState } from "react"
import SearchHero from "@/components/search-hero"
import FilterBar from "@/components/filter-bar"
import DoctorCard from "@/components/doctor-card"
import { doctors } from "@/lib/mock-data"
import PageIndicator from "@/components/page-indicator"

export default function DoctorSearchPage() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  const handleRemoveFilter = (filter: string) => {
    setSelectedFilters(selectedFilters.filter((f) => f !== filter))
  }

  const handleAddFilter = (filter: string) => {
    if (!selectedFilters.includes(filter)) {
      setSelectedFilters([...selectedFilters, filter])
    }
  }

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-slate-50">
      <PageIndicator currentPage="Find Doctors" />

      <SearchHero onSearch={setSearchQuery} />
      <FilterBar activeFilters={selectedFilters} onRemoveFilter={handleRemoveFilter} onAddFilter={handleAddFilter} />

      <section className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Available Doctors</h2>
          <p className="text-slate-600 mt-2">{filteredDoctors.length} doctors found</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-slate-500 text-lg">No doctors found matching your criteria</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
