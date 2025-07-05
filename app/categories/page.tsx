import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Headphones, Video, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"

export default function CategoriesPage() {
  const categories = [
    {
      id: 1,
      name: "Faith & Trust",
      description: "Messages about building unwavering faith and trusting in God's promises",
      icon: "🙏",
      color: "from-blue-500 to-blue-600",
      audioCount: 145,
      videoCount: 89,
      totalSermons: 234,
      trending: true,
      recentSermon: "The Power of Faith in Difficult Times",
    },
    {
      id: 2,
      name: "Healing & Miracles",
      description: "Powerful testimonies and teachings on divine healing and miraculous interventions",
      icon: "✨",
      color: "from-green-500 to-green-600",
      audioCount: 98,
      videoCount: 67,
      totalSermons: 165,
      trending: true,
      recentSermon: "Divine Healing and Restoration",
    },
    {
      id: 3,
      name: "Purpose & Destiny",
      description: "Discover God's unique plan and purpose for your life journey",
      icon: "🎯",
      color: "from-purple-500 to-purple-600",
      audioCount: 87,
      videoCount: 54,
      totalSermons: 141,
      trending: false,
      recentSermon: "Walking in Purpose and Destiny",
    },
    {
      id: 4,
      name: "Grace & Mercy",
      description: "Understanding God's unmerited favor and compassionate love",
      icon: "💝",
      color: "from-pink-500 to-pink-600",
      audioCount: 76,
      videoCount: 43,
      totalSermons: 119,
      trending: false,
      recentSermon: "Grace and Mercy: God's Unending Love",
    },
    {
      id: 5,
      name: "Spiritual Warfare",
      description: "Equipping believers for victory in spiritual battles through Christ",
      icon: "⚔️",
      color: "from-red-500 to-red-600",
      audioCount: 65,
      videoCount: 38,
      totalSermons: 103,
      trending: true,
      recentSermon: "Spiritual Warfare: Victory in Christ",
    },
    {
      id: 6,
      name: "Marriage & Family",
      description: "Biblical principles for strong marriages and godly family relationships",
      icon: "👨‍👩‍👧‍👦",
      color: "from-orange-500 to-orange-600",
      audioCount: 54,
      videoCount: 41,
      totalSermons: 95,
      trending: false,
      recentSermon: "Marriage and Family God's Way",
    },
    {
      id: 7,
      name: "Prayer & Worship",
      description: "Deepening your relationship with God through prayer and worship",
      icon: "🎵",
      color: "from-indigo-500 to-indigo-600",
      audioCount: 89,
      videoCount: 56,
      totalSermons: 145,
      trending: false,
      recentSermon: "Breakthrough Prayer and Fasting",
    },
    {
      id: 8,
      name: "Youth & Young Adults",
      description: "Inspiring messages specifically for the next generation of believers",
      icon: "🌟",
      color: "from-yellow-500 to-yellow-600",
      audioCount: 43,
      videoCount: 67,
      totalSermons: 110,
      trending: true,
      recentSermon: "Youth Revival: Igniting the Next Generation",
    },
    {
      id: 9,
      name: "Leadership & Ministry",
      description: "Developing godly leadership and effective ministry principles",
      icon: "👑",
      color: "from-teal-500 to-teal-600",
      audioCount: 67,
      videoCount: 34,
      totalSermons: 101,
      trending: false,
      recentSermon: "Leadership in the Kingdom of God",
    },
    {
      id: 10,
      name: "Evangelism & Missions",
      description: "Spreading the Gospel and reaching the lost for Christ",
      icon: "🌍",
      color: "from-cyan-500 to-cyan-600",
      audioCount: 45,
      videoCount: 29,
      totalSermons: 74,
      trending: false,
      recentSermon: "The Great Commission: Go and Make Disciples",
    },
    {
      id: 11,
      name: "Financial Breakthrough",
      description: "Biblical principles for financial stewardship and breakthrough",
      icon: "💰",
      color: "from-emerald-500 to-emerald-600",
      audioCount: 38,
      videoCount: 22,
      totalSermons: 60,
      trending: false,
      recentSermon: "Financial Breakthrough and Stewardship",
    },
    {
      id: 12,
      name: "Prophetic Ministry",
      description: "Understanding and operating in prophetic gifts and ministry",
      icon: "🔮",
      color: "from-violet-500 to-violet-600",
      audioCount: 52,
      videoCount: 31,
      totalSermons: 83,
      trending: false,
      recentSermon: "Prophetic Worship and Intercession",
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

            <div className="flex items-center space-x-4"></div>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Sermon Categories</h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              Explore sermons organized by topics that matter most to your spiritual journey.
            </p>
          </div>
        </div>
      </div>

      {/* Trending Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Trending Categories</h2>
              <p className="text-gray-600">Most popular sermon topics this week</p>
            </div>
            <Badge variant="secondary" className="flex items-center space-x-1">
              <TrendingUp className="w-4 h-4" />
              <span>Hot</span>
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">All Categories</h2>
            <p className="text-gray-600">Browse all available sermon categories</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Popular Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Most Popular</h2>
            <p className="text-gray-600">Categories with the most sermon content</p>
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
