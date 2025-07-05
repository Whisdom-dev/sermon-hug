"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Download, Play, Calendar, User, Video, Filter, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function VideoPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("recent")

  const videoSermons = [
    {
      id: 1,
      title: "Walking in Purpose and Destiny",
      preacher: "Rev. Sarah Johnson",
      duration: "38:45",
      date: "2024-01-12",
      category: "Purpose",
      downloads: 890,
      views: 15420,
      thumbnail: "/placeholder.svg?height=200&width=300",
      description:
        "Discover God's unique purpose for your life and learn how to walk confidently in your divine destiny.",
    },
    {
      id: 2,
      title: "The Great Commission: Go and Make Disciples",
      preacher: "Rev. Mary Davis",
      duration: "35:10",
      date: "2024-01-05",
      category: "Mission",
      downloads: 423,
      views: 8930,
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "Understanding our calling to spread the Gospel and make disciples in all nations.",
    },
    {
      id: 3,
      title: "Breakthrough Prayer and Fasting",
      preacher: "Pastor Michael Thompson",
      duration: "44:20",
      date: "2024-01-02",
      category: "Prayer",
      downloads: 756,
      views: 12340,
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "Learn the power of prayer and fasting for breakthrough in every area of your life.",
    },
    {
      id: 4,
      title: "Marriage and Family God's Way",
      preacher: "Pastor Jennifer Adams",
      duration: "41:15",
      date: "2023-12-30",
      category: "Family",
      downloads: 634,
      views: 9870,
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "Biblical principles for building strong marriages and raising godly families.",
    },
    {
      id: 5,
      title: "Youth Revival: Igniting the Next Generation",
      preacher: "Pastor Daniel Rodriguez",
      duration: "39:30",
      date: "2023-12-28",
      category: "Youth",
      downloads: 892,
      views: 18750,
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "A powerful message to inspire and equip young people for God's kingdom work.",
    },
    {
      id: 6,
      title: "Prophetic Worship and Intercession",
      preacher: "Minister Grace Williams",
      duration: "46:45",
      date: "2023-12-25",
      category: "Worship",
      downloads: 567,
      views: 11230,
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "Understanding the power of prophetic worship and its role in spiritual breakthrough.",
    },
  ]

  const categories = ["all", "Purpose", "Mission", "Prayer", "Family", "Youth", "Worship"]

  const filteredSermons = videoSermons.filter((sermon) => {
    const matchesSearch =
      sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.preacher.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || sermon.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleDownload = (sermon: any) => {
    // Simulate download functionality
    const link = document.createElement("a")
    link.href = `/api/download/video/${sermon.id}`
    link.download = `${sermon.title.replace(/[^a-zA-Z0-9]/g, "_")}.mp4`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Show download notification
    alert(`Downloading: ${sermon.title}`)
  }

  const handlePlay = (sermon: any) => {
    // Simulate play functionality
    alert(`Playing: ${sermon.title}`)
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
                  <Video className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">SermonHub</span>
              </Link>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-600">
                Home
              </Link>
              <Link href="/audio" className="text-gray-600 hover:text-blue-600">
                Audio
              </Link>
              <Link href="/video" className="text-blue-600 font-medium">
                Video
              </Link>
              <Link href="/preachers" className="text-gray-600 hover:text-blue-600">
                Preachers
              </Link>
              <Link href="/categories" className="text-gray-600 hover:text-blue-600">
                Categories
              </Link>
            </nav>

            <div className="flex items-center space-x-4"></div>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Video Sermons</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Watch inspiring video messages that will transform your perspective and strengthen your faith.
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search video sermons..."
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
                {categories.map((category) => (
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
                <SelectItem value="views">Most Viewed</SelectItem>
                <SelectItem value="title">Title A-Z</SelectItem>
                <SelectItem value="duration">Duration</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t">
            <p className="text-sm text-gray-600">
              Showing {filteredSermons.length} of {videoSermons.length} video sermons
            </p>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Advanced Filters
            </Button>
          </div>
        </div>

        {/* Video Sermons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSermons.map((sermon) => (
            <Card key={sermon.id} className="hover:shadow-lg transition-all duration-300 group overflow-hidden">
              <div className="relative">
                <Image
                  src={sermon.thumbnail || "/placeholder.svg"}
                  alt={sermon.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={() => handlePlay(sermon)}
                  >
                    <Play className="w-6 h-6 mr-2" />
                    Play Video
                  </Button>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="flex items-center space-x-1 bg-black/70 text-white">
                    <Video className="w-3 h-3" />
                    <span>Video</span>
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-white/90">
                    {sermon.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Badge variant="outline" className="bg-black/70 text-white border-white/30">
                    {sermon.duration}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg group-hover:text-purple-600 transition-colors line-clamp-2">
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
                    <Eye className="w-4 h-4" />
                    <span>{sermon.views.toLocaleString()} views</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(sermon.date).toLocaleDateString()}</span>
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center space-x-1">
                    <Download className="w-4 h-4" />
                    <span>{sermon.downloads.toLocaleString()}</span>
                  </span>

                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" onClick={() => handlePlay(sermon)}>
                      <Play className="w-4 h-4 mr-1" />
                      Watch
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
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Videos
          </Button>
        </div>
      </div>
    </div>
  )
}
