"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Download, Play, Pause, Clock, Calendar, User, Headphones, Filter } from "lucide-react"
import Link from "next/link"
import { audioSermons, classicSermons } from "@/lib/sermons"

export default function AudioPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("recent")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [visibleCount, setVisibleCount] = useState(9)
  const [currentAudio, setCurrentAudio] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Combine classicSermons and audioSermons into one array
  const allSermons = [
    ...audioSermons,
    ...classicSermons.map((sermon) => ({
      ...sermon,
      duration: sermon.duration || "N/A",
      date: sermon.year ? `${sermon.year}-01-01` : "2000-01-01",
      downloads: sermon.downloads || 0,
      category: sermon.category || "Classic",
    })),
  ]
    .filter((sermon) => {
      const matchesSearch =
        sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sermon.preacher.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "all" || sermon.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const handleDownload = (sermon: any) => {
    // Simulate download functionality
    const link = document.createElement("a")
    link.href = sermon.audioUrl
    link.download = `${sermon.title.replace(/[^a-zA-Z0-9]/g, "_")}.mp3`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Show download notification
    alert(`Downloading: ${sermon.title}`)
  }

  const handlePlay = (sermon: any) => {
    if (audioRef.current) {
      if (currentAudio === sermon.audioUrl && isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.src = sermon.audioUrl
        audioRef.current.play()
        setCurrentAudio(sermon.audioUrl)
        setIsPlaying(true)
      }
    }
  }

  const handleAudioEnded = () => {
    setIsPlaying(false)
    setCurrentAudio(null)
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
                  <Headphones className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">SermonHub</span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-600">
                Home
              </Link>
              <Link href="/audio" className="text-blue-600 font-medium">
                Audio
              </Link>
              <Link href="/video" className="text-gray-600 hover:text-blue-600">
                Video
              </Link>
              <Link href="/preachers" className="text-gray-600 hover:text-blue-600">
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
              <Link href="/audio" className="text-blue-600 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                Audio
              </Link>
              <Link href="/video" className="text-gray-700 hover:text-blue-600 py-2" onClick={() => setMobileMenuOpen(false)}>
                Video
              </Link>
              <Link href="/preachers" className="text-gray-700 hover:text-blue-600 py-2" onClick={() => setMobileMenuOpen(false)}>
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
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 md:mb-4">Audio Sermons</h1>
            <p className="text-base md:text-xl text-blue-100 max-w-full md:max-w-2xl mx-auto">
              Listen to powerful audio messages that will inspire, encourage, and transform your life.
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search audio sermons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {["all", "Faith", "Healing", "Grace", "Warfare", "Purpose", "Finance"].map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="title">Title A-Z</SelectItem>
                <SelectItem value="duration">Duration</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t">
            <p className="text-sm text-gray-600">
              Showing {allSermons.length} of {allSermons.length} audio sermons
            </p>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Advanced Filters
            </Button>
          </div>
        </div>

        {/* Audio Sermons Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {allSermons.slice(0, visibleCount).map((sermon) => (
            <Card key={sermon.id} className="hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="default" className="flex items-center space-x-1">
                    <Headphones className="w-3 h-3" />
                    <span>Audio</span>
                  </Badge>
                  <Badge variant="outline">{sermon.category}</Badge>
                </div>

                <CardTitle className="text-lg group-hover:text-blue-600 transition-colors line-clamp-2">
                  {sermon.title}
                </CardTitle>

                <CardDescription className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{sermon.preacher}</span>
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{sermon.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{sermon.duration}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(sermon.date).toISOString().slice(0, 10)}</span>
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center space-x-1">
                    <Download className="w-4 h-4" />
                    <span>{sermon.downloads.toLocaleString()}</span>
                  </span>

                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" onClick={() => handlePlay(sermon)}>
                      {currentAudio === sermon.audioUrl && isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </Button>
                    <Button size="sm" onClick={() => handleDownload(sermon)}>
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < allSermons.length && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" onClick={() => setVisibleCount(visibleCount + 9)}>
              Load More Sermons
            </Button>
          </div>
        )}
      </div>

      {/* Place this at the top level of the returned JSX (e.g., just inside <div className="min-h-screen ...">) */}
      <audio ref={audioRef} onEnded={handleAudioEnded} style={{ display: 'none' }} />
    </div>
  )
}
