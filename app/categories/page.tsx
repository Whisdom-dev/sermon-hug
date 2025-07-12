import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Headphones, Video, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function CategoriesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const categories = [
    {
      id: 1,
      name: "Faith",
      description: "Messages on building and sustaining faith in Christ.",
      icon: "📖"
    },
    {
      id: 2,
      name: "Healing",
      description: "Teachings and testimonies on divine healing and restoration.",
      icon: "🩺"
    },
    {
      id: 3,
      name: "Purpose",
      description: "Sermons about discovering and fulfilling God's purpose.",
      icon: "🎯"
    },
    {
      id: 4,
      name: "Grace",
      description: "Exploring the riches of God's grace and salvation.",
      icon: "🕊️"
    },
    {
      id: 5,
      name: "Mission",
      description: "Messages on evangelism, discipleship, and the Great Commission.",
      icon: "🌍"
    },
    {
      id: 6,
      name: "Warfare",
      description: "Equipping believers for spiritual warfare and victory.",
      icon: "🛡️"
    },
  ]

  const trendingCategories = categories.filter((cat) => cat.trending)
  const popularCategories = categories.sort((a, b) => b.totalSermons - a.totalSermons).slice(0, 6)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <div className="w-5 h-5 text-white font-bold">📂</div>
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
              <Link href="/preachers" className="text-gray-600 hover:text-blue-600">
                Preachers
              </Link>
              <Link href="/categories" className="text-blue-600 font-medium">
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
              <Link href="/categories" className="text-blue-600 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                Categories
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Page Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 md:mb-4">Sermon Categories</h1>
            <p className="text-base md:text-xl text-indigo-100 max-w-full md:max-w-2xl mx-auto">
              Explore a wide range of sermon topics to grow your faith and understanding.
            </p>
          </div>
        </div>
      </div>

      {/* Trending Categories */}
      <section className="py-8 md:py-12 px-2 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Trending Categories</h2>
            <p className="text-gray-600 text-sm md:text-base">Check out the most popular sermon categories right now.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 md:gap-6">
            {trendingCategories.map((category) => (
              <Link key={category.id} href={`/category/${category.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}>
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group border-0 shadow-md">
                  <div className={`h-2 bg-gradient-to-r ${category.color} rounded-t-lg`}></div>
                  <CardHeader className="text-center pb-4">
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg group-hover:text-indigo-600 transition-colors">
                      {category.name}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-2">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="flex items-center space-x-1">
                          <Headphones className="w-4 h-4" />
                          <span>{category.audioCount}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Video className="w-4 h-4" />
                          <span>{category.videoCount}</span>
                        </span>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-600">{category.totalSermons}</div>
                        <div className="text-xs text-gray-500">Total Sermons</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Categories */}
      <section className="py-8 md:py-12 px-2 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">All Categories</h2>
            <p className="text-gray-600 text-sm md:text-base">Browse all available sermon categories</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={`/category/${category.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}>
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300`}
                        >
                          {category.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg group-hover:text-indigo-600 transition-colors">
                            {category.name}
                          </CardTitle>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                            <span>{category.totalSermons} sermons</span>
                            {category.trending && (
                              <Badge variant="secondary" className="text-xs">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                Trending
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <CardDescription className="mb-4 line-clamp-2">{category.description}</CardDescription>

                    <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                      <span className="flex items-center space-x-1">
                        <Headphones className="w-4 h-4" />
                        <span>{category.audioCount} Audio</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Video className="w-4 h-4" />
                        <span>{category.videoCount} Video</span>
                      </span>
                    </div>

                    <div className="border-t pt-3">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span className="line-clamp-1">Latest: {category.recentSermon}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Most Popular */}
      <section className="py-8 md:py-12 px-2 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Most Popular</h2>
            <p className="text-gray-600 text-sm md:text-base">Categories with the most sermon content</p>
          </div>
          <div className="space-y-4">
            {popularCategories.map((category, index) => (
              <Link key={category.id} href={`/category/${category.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}>
                <Card className="hover:shadow-md transition-shadow duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full text-sm font-bold text-gray-600">
                          {index + 1}
                        </div>
                        <div
                          className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white text-lg`}
                        >
                          {category.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 hover:text-indigo-600 transition-colors">
                            {category.name}
                          </h3>
                          <p className="text-sm text-gray-500 line-clamp-1">{category.description}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <div className="text-lg font-bold text-indigo-600">{category.totalSermons}</div>
                          <div className="text-xs text-gray-500">Sermons</div>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center space-x-1">
                            <Headphones className="w-4 h-4" />
                            <span>{category.audioCount}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Video className="w-4 h-4" />
                            <span>{category.videoCount}</span>
                          </span>
                        </div>
                        {category.trending && (
                          <Badge variant="secondary">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Trending
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-indigo-100 mb-8 text-lg">
            Request a specific topic or suggest a new category for our sermon collection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50">
              Request Topic
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-indigo-600 bg-transparent"
            >
              Suggest Category
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
