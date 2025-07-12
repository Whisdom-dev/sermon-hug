"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Headphones, Calendar, User } from "lucide-react"
import { audioSermons, classicSermons } from "@/lib/sermons"

// Combine audioSermons and classicSermons from the audio page
const allSermons = [
  ...audioSermons,
  ...classicSermons.map((sermon) => ({
    ...sermon,
    date: sermon.year ? `${sermon.year}-01-01` : "2000-01-01",
    duration: sermon.duration || "N/A",
    downloads: sermon.downloads || 0,
    category: sermon.category || "Classic",
  })),
]

export default function CategoryPage() {
  const params = useParams()
  const categoryParam = params.category?.toString().toLowerCase() || ""

  // Filter sermons/messages by category (case-insensitive)
  const filteredSermons = allSermons.filter(
    (sermon) => sermon.category?.toLowerCase() === categoryParam
  )

  return (
    <div className="min-h-screen bg-gray-50 px-2 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center capitalize">
          {categoryParam} Messages
        </h1>
        {filteredSermons.length === 0 ? (
          <div className="text-center text-gray-500">No messages found for this category.</div>
        ) : (
          <div className="space-y-4">
            {filteredSermons.map((sermon) => (
              <Card key={sermon.id} className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
                    <div className="flex flex-row items-center gap-4 flex-1">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                        <Headphones className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 hover:text-blue-600 cursor-pointer text-base md:text-lg">
                          {sermon.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-500 flex items-center gap-1">
                          <User className="w-4 h-4" /> {sermon.preacher}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="text-xs md:text-sm text-gray-500 flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {sermon.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        <div className="text-center mt-8">
          <Link href="/categories" className="text-blue-600 hover:underline">
            &larr; Back to Categories
          </Link>
        </div>
      </div>
    </div>
  )
} 