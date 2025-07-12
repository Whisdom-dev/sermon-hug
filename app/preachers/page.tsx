'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Calendar, Headphones, Video } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function PreachersPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  const preachers = [
    {
      id: 1,
      name: "Pastor W.F. Kumuyi",
      image: "/preachers/kumuyi.jpg",
      bio: "Founder and General Superintendent of Deeper Christian Life Ministry, renowned for his expository Bible teaching and global evangelism.",
    },
    {
      id: 2,
      name: "Bro Gbile Akanni",
      image: "/preachers/gbileakanni.jpg",
      bio: "A respected teacher and discipler, known for his deep teachings on Christian living and revival, Convener of Peace House, Gboko.",
    },
    {
      id: 3,
      name: "Apostle Gideon Odoma",
      image: "/preachers/gideonodoma.jpg",
      bio: "Apostolic leader and teacher, passionate about equipping believers for spiritual warfare and kingdom advancement.",
    },
    {
      id: 4,
      name: "Evangelist Isaac Omolehin",
      image: "/preachers/omolehin.jpg",
      bio: "Evangelist and founder of Word Assembly Ministries, focused on soul-winning and revival across Africa.",
    },
  ]

  function slugify(name) {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">SermonHub</span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-600">
                Home
              </Link>
              <Link href="/audio" className="text-gray-600 hover:text-blue-600">
                Audio
              </Link>
              <Link href="/video" className="text-gray-600 hover:text-blue-600">
                Video
              </Link>
              <Link href="/preachers" className="text-blue-600 font-medium">
                Preachers
              </Link>
              <Link href="/categories" className="text-gray-600 hover:text-blue-600">
                Categories
              </Link>
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="block md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Open menu"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div className="flex items-center space-x-4"></div>
          </div>
        </div>
        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b shadow-sm">
            <nav className="flex flex-col px-4 py-2 space-y-2">
              <Link href="/" className="text-blue-600 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/audio" className="text-gray-700 hover:text-blue-600 py-2" onClick={() => setMobileMenuOpen(false)}>
                Audio
              </Link>
              <Link href="/video" className="text-gray-700 hover:text-blue-600 py-2" onClick={() => setMobileMenuOpen(false)}>
                Video
              </Link>
              <Link href="/preachers" className="text-blue-600 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                Preachers
              </Link>
              <Link href="/categories" className="text-gray-700 hover:text-blue-600 py-2" onClick={() => setMobileMenuOpen(false)}>
                Categories
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Page Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 md:mb-4">Featured Preachers</h1>
            <p className="text-base md:text-xl text-green-100 max-w-full md:max-w-2xl mx-auto">
              Meet the anointed men and women of God who are sharing powerful messages that transform lives.
            </p>
          </div>
        </div>
      </div>

      {/* Preachers Grid */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {preachers.map((preacher) => (
            <Card key={preacher.id} className="hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-4">
                  <Image
                    src={preacher.image || "/placeholder.svg"}
                    alt={preacher.name}
                    width={150}
                    height={150}
                    className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>

                <CardTitle className="text-xl group-hover:text-green-600 transition-colors">{preacher.name}</CardTitle>

                <CardDescription className="space-y-1">
                  <div className="font-medium text-green-600">{preacher.title}</div>
                  <div>{preacher.church}</div>
                  <div className="flex items-center justify-center space-x-1 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{preacher.location}</span>
                  </div>
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600 text-center line-clamp-3">{preacher.bio}</p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {(preacher.specialties || []).map((specialty) => (
                    <Badge key={specialty} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 py-4 border-t border-b">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{preacher.sermons}</div>
                    <div className="text-xs text-gray-500">Total Sermons</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{(preacher.followers ?? 0).toLocaleString()}</div>
                    <div className="text-xs text-gray-500">Followers</div>
                  </div>
                </div>

                {/* Content Stats */}
                <div className="flex justify-between text-sm text-gray-600">
                  <span className="flex items-center space-x-1">
                    <Headphones className="w-4 h-4" />
                    <span>{(preacher.downloads ?? 0).toLocaleString()}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Video className="w-4 h-4" />
                    <span>{preacher.videoCount} Video</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Since {preacher.joinDate}</span>
                  </span>
                </div>

                {/* Actions */}
                <div className="flex space-x-2 pt-4">
                  <Button className="flex-1" size="sm">
                    <Users className="w-4 h-4 mr-1" />
                    Follow
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent" size="sm" onClick={() => router.push(`/preachers/${slugify(preacher.name)}/sermons`)}>
                    View Sermons
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Preachers
          </Button>
        </div>
      </div>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Are You a Preacher?</h2>
          <p className="text-green-100 mb-8 text-lg">
            Join our platform and share your messages with thousands of believers worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-green-600 hover:bg-green-50">
              Join as Preacher
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
