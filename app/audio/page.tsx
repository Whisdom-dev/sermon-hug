"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Download, Play, Clock, Calendar, User, Headphones, Filter } from "lucide-react"
import Link from "next/link"

export default function AudioPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("recent")

  const audioSermons = [
    {
      id: 1,
      title: "The Power of Faith in Difficult Times",
      preacher: "Pastor John Smith",
      duration: "45:30",
      date: "2024-01-15",
      category: "Faith",
      downloads: 1250,
      description: "A powerful message about maintaining faith during life's challenges and trusting in God's plan.",
    },
    {
      id: 2,
      title: "Divine Healing and Restoration",
      preacher: "Bishop Michael Brown",
      duration: "52:15",
      date: "2024-01-10",
      category: "Healing",
      downloads: 2100,
      description: "An inspiring sermon on God's healing power and how to receive divine restoration in your life.",
    },
    {
      id: 3,
      title: "Grace and Mercy: God's Unending Love",
      preacher: "Pastor David Wilson",
      duration: "42:20",
      date: "2024-01-08",
      category: "Grace",
      downloads: 567,
      description: "Understanding the depth of God's grace and mercy in our daily walk with Him.",
    },
    {
      id: 4,
      title: "Spiritual Warfare: Victory in Christ",
      preacher: "Pastor James Miller",
      duration: "48:30",
      date: "2024-01-03",
      category: "Warfare",
      downloads: 789,
      description: "Learn how to stand firm in spiritual battles and claim victory through Christ.",
    },
    {
      id: 5,
      title: "The Purpose-Driven Life",
      preacher: "Rev. Sarah Johnson",
      duration: "38:45",
      date: "2024-01-01",
      category: "Purpose",
      downloads: 890,
      description: "Discovering God's unique purpose for your life and walking in divine destiny.",
    },
    {
      id: 6,
      title: "Financial Breakthrough and Stewardship",
      preacher: "Pastor Robert Lee",
      duration: "41:15",
      date: "2023-12-28",
      category: "Finance",
      downloads: 634,
      description: "Biblical principles for financial breakthrough and faithful stewardship of resources.",
    },
  ]

  const categories = ["all", "Faith", "Healing", "Grace", "Warfare", "Purpose", "Finance"]

  const filteredSermons = audioSermons.filter((sermon) => {
    const matchesSearch =
      sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.preacher.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || sermon.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleDownload = (sermon: any) => {
    // Simulate download functionality
    const link = document.createElement("a")
    link.href = `/api/download/audio/${sermon.id}`
    link.download = `${sermon.title.replace(/[^a-zA-Z0-9]/g, "_")}.mp3`
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
                  <Headphones className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">SermonHub</span>
              </Link>
            </div>

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

            <div className="flex items-center space-x-4"></div>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Audio Sermons</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Listen to powerful audio messages that will inspire, encourage, and transform your life.
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
                <SelectItem value="title">Title A-Z</SelectItem>
                <SelectItem value="duration">Duration</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t">
            <p className="text-sm text-gray-600">
              Showing {filteredSermons.length} of {audioSermons.length} audio sermons
            </p>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Advanced Filters
            </Button>
          </div>
        </div>

        {/* Audio Sermons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSermons.map((sermon) => (
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
                      <Play className="w-4 h-4 mr-1" />
                      Play
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
            Load More Sermons
          </Button>
        </div>
      </div>
    </div>
  )
}
