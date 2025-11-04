"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface PageIndicatorProps {
  currentPage: string
}

export default function PageIndicator({ currentPage }: PageIndicatorProps) {
  return (
    <div className="bg-white border-b-2 border-slate-200 sticky top-16 z-40 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <span className="text-slate-900 font-bold">{currentPage}</span>
        </div>
      </div>
    </div>
  )
}
