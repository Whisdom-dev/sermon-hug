"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Download, Play, Clock, Calendar, User, Headphones, Video } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const featuredContent = [
    {
      id: 1,
      title: "The Christian and the World",
      preacher: "Pastor W.F. Kumuyi",
      duration: "54:00",
      date: "2025-04-21",
      type: "audio",
      category: "Faith",
      downloads: 3200,
      thumbnail: "/kumuyi2.jpg",
    },
    {
      id: 2,
      title: "The Believer's Authority",
      preacher: "Apostle Gideon Odoma",
      duration: "50:00",
      date: "2022-08-15",
      type: "audio",
      category: "Authority",
      downloads: 1500,
      thumbnail: "/gideon-odoma.jpg",
    },
    {
      id: 3,
      title: "Holiness: The True Mark of a Christian",
      preacher: "Pastor W.F. Kumuyi",
      duration: "50:30",
      date: "2025-04-19",
      type: "audio",
      category: "Holiness",
      downloads: 2950,
      thumbnail: "/kumuyi2.jpg",
    },
  ]

  const recentSermons = [
    {
      id: 1,
      title: "Winning through His Resurrection Power",
      preacher: "Pastor W.F. Kumuyi",
      date: "2025-04-21",
      category: "Faith",
      description: "A powerful message on the victory believers have through Christ's resurrection.",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      link: "https://dclm.org/sermons/retreats/",
      type: "audio",
      duration: "54:00",
      downloads: 3200,
    },
    {
      id: 2,
      title: "Risen with Christ",
      preacher: "Pastor W.F. Kumuyi",
      date: "2025-04-20",
      category: "Faith",
      description: "Exploring the significance of Christ's resurrection for every believer.",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      link: "https://dclm.org/sermons/retreats/",
      type: "audio",
      duration: "48:15",
      downloads: 4100,
    },
    {
      id: 3,
      title: "Wellness in His Resurrection Power",
      preacher: "Pastor W.F. Kumuyi",
      date: "2025-04-19",
      category: "Healing",
      description: "A teaching on healing and wellness through the resurrection power of Christ.",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      link: "https://dclm.org/sermons/retreats/",
      type: "audio",
      duration: "50:30",
      downloads: 2950,
    },
    {
      id: 4,
      title: "Preserving Merciful, Peaceful Love while Earnestly Contending for the Faith",
      preacher: "Pastor W.F. Kumuyi",
      date: "2025-06-30",
      category: "Faith",
      description: "A Bible study on standing firm in faith and love in challenging times.",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      link: "https://dclm.org/sermons/retreats/",
      type: "audio",
      duration: "44:10",
      downloads: 2100,
    },
  ]

  const categories = [
    { name: "Faith", count: 45, icon: "🙏" },
    { name: "Healing", count: 32, icon: "✨" },
    { name: "Purpose", count: 28, icon: "🎯" },
    { name: "Grace", count: 38, icon: "💝" },
    { name: "Mission", count: 22, icon: "🌍" },
    { name: "Warfare", count: 19, icon: "⚔️" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">SermonHub</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/audio" className="text-gray-600 hover:text-blue-600">
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
              <Link href="/audio" className="text-gray-700 hover:text-blue-600 py-2" onClick={() => setMobileMenuOpen(false)}>
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

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Download Inspiring
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Sermons</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Access thousands of powerful audio and video sermons from renowned preachers worldwide. Download, listen,
            and be transformed.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search sermons, preachers, or topics..."
                className="pl-12 pr-4 py-4 text-lg rounded-full border-2 border-gray-200 focus:border-blue-500"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full">Search</Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">5,000+</div>
              <div className="text-gray-600">Audio Sermons</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">2,500+</div>
              <div className="text-gray-600">Video Messages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">500+</div>
              <div className="text-gray-600">Preachers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Sermons</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular and impactful messages that are transforming lives around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredContent.map((sermon) => (
              <Card key={sermon.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={sermon.thumbnail || "/placeholder.svg"}
                    alt={sermon.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant={sermon.type === "audio" ? "default" : "secondary"}
                      className="flex items-center space-x-1"
                    >
                      {sermon.type === "audio" ? <Headphones className="w-3 h-3" /> : <Video className="w-3 h-3" />}
                      <span className="capitalize">{sermon.type}</span>
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90">
                      {sermon.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">{sermon.title}</CardTitle>
                  <CardDescription className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{sermon.preacher}</span>
                    </span>
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
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
                      <span>{sermon.downloads.toLocaleString()} downloads</span>
                    </span>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Play className="w-4 h-4 mr-1" />
                        Play
                      </Button>
                      <Button size="sm">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-gray-600">Find sermons that speak to your heart and spiritual needs.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link key={category.name} href={`/category/${category.name.toLowerCase()}`}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 cursor-pointer group border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.count} sermons</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Sermons */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 md:mb-12 gap-4 md:gap-0">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-4">Recent Sermons</h2>
              <p className="text-gray-600 text-sm md:text-base">Stay updated with the latest messages from our featured preachers.</p>
            </div>
            <Button variant="outline" className="w-full md:w-auto">View All</Button>
          </div>
          <div className="space-y-4">
            {recentSermons.map((sermon) => (
              <Card key={sermon.id} className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
                    <div className="flex flex-row md:flex-row items-center gap-4 flex-1">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                        {sermon.type === "audio" ? (
                          <Headphones className="w-6 h-6 text-white" />
                        ) : (
                          <Video className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 hover:text-blue-600 cursor-pointer text-base md:text-lg">
                          {sermon.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-500">{sermon.preacher}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge variant="outline">{sermon.category}</Badge>
                          <span className="text-xs md:text-sm text-gray-500">{sermon.duration}</span>
                          <span className="text-xs md:text-sm text-gray-500">{sermon.downloads} downloads</span>
                        </div>
                      </div>
                    </div>
                    {/* Action Buttons: stack below on mobile, right on desktop */}
                    <div className="flex flex-row md:flex-col gap-2 md:gap-2 w-full md:w-auto justify-end mt-2 md:mt-0">
                      <Button size="sm" variant="outline" className="w-1/2 md:w-auto">
                        <Play className="w-4 h-4" />
                      </Button>
                      <Button size="sm" className="w-1/2 md:w-auto">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Connected</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Get notified when new sermons are uploaded and receive weekly spiritual insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200"
            />
            <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">SermonHub</span>
              </div>
              <p className="text-gray-400">
                Your trusted source for inspiring audio and video sermons from around the world.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/audio" className="hover:text-white">
                    Audio Sermons
                  </Link>
                </li>
                <li>
                  <Link href="/video" className="hover:text-white">
                    Video Messages
                  </Link>
                </li>
                <li>
                  <Link href="/preachers" className="hover:text-white">
                    Preachers
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="hover:text-white">
                    Categories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    YouTube
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SermonHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
