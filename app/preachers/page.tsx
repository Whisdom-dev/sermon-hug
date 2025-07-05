import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Calendar, Headphones, Video } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PreachersPage() {
  const preachers = [
    {
      id: 1,
      name: "Pastor John Smith",
      title: "Senior Pastor",
      church: "Grace Community Church",
      location: "Lagos, Nigeria",
      bio: "Pastor John has been in ministry for over 20 years, touching lives across Africa with his powerful messages of faith and hope.",
      followers: 45000,
      sermons: 156,
      audioCount: 98,
      videoCount: 58,
      joinDate: "2018",
      avatar: "/placeholder.svg?height=150&width=150",
      specialties: ["Faith", "Healing", "Leadership"],
    },
    {
      id: 2,
      name: "Rev. Sarah Johnson",
      title: "Evangelist",
      church: "New Life Ministry",
      location: "Abuja, Nigeria",
      bio: "Rev. Sarah is known for her inspiring messages on purpose and destiny, helping thousands discover their calling in God.",
      followers: 32000,
      sermons: 89,
      audioCount: 45,
      videoCount: 44,
      joinDate: "2019",
      avatar: "/placeholder.svg?height=150&width=150",
      specialties: ["Purpose", "Destiny", "Women's Ministry"],
    },
    {
      id: 3,
      name: "Bishop Michael Brown",
      title: "Bishop",
      church: "Restoration Cathedral",
      location: "Port Harcourt, Nigeria",
      bio: "Bishop Michael's ministry focuses on divine healing and restoration, with countless testimonies of miraculous healings.",
      followers: 67000,
      sermons: 234,
      audioCount: 145,
      videoCount: 89,
      joinDate: "2017",
      avatar: "/placeholder.svg?height=150&width=150",
      specialties: ["Healing", "Miracles", "Restoration"],
    },
    {
      id: 4,
      name: "Pastor David Wilson",
      title: "Lead Pastor",
      church: "Victory Chapel",
      location: "Kano, Nigeria",
      bio: "Pastor David's teachings on grace and mercy have transformed countless lives, bringing hope to the hopeless.",
      followers: 28000,
      sermons: 67,
      audioCount: 42,
      videoCount: 25,
      joinDate: "2020",
      avatar: "/placeholder.svg?height=150&width=150",
      specialties: ["Grace", "Mercy", "Forgiveness"],
    },
    {
      id: 5,
      name: "Pastor James Miller",
      title: "Senior Pastor",
      church: "Warrior's Assembly",
      location: "Ibadan, Nigeria",
      bio: "Known for his powerful teachings on spiritual warfare, Pastor James equips believers for victory in Christ.",
      followers: 39000,
      sermons: 112,
      audioCount: 78,
      videoCount: 34,
      joinDate: "2019",
      avatar: "/placeholder.svg?height=150&width=150",
      specialties: ["Spiritual Warfare", "Victory", "Deliverance"],
    },
    {
      id: 6,
      name: "Rev. Mary Davis",
      title: "Missionary",
      church: "Global Harvest Mission",
      location: "Kaduna, Nigeria",
      bio: "Rev. Mary's heart for missions has led her to plant churches across West Africa, spreading the Gospel to unreached areas.",
      followers: 21000,
      sermons: 78,
      audioCount: 56,
      videoCount: 22,
      joinDate: "2021",
      avatar: "/placeholder.svg?height=150&width=150",
      specialties: ["Missions", "Church Planting", "Evangelism"],
    },
  ]

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

            <div className="flex items-center space-x-4"></div>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Featured Preachers</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Meet the anointed men and women of God who are sharing powerful messages that transform lives.
            </p>
          </div>
        </div>
      </div>

      {/* Preachers Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {preachers.map((preacher) => (
            <Card key={preacher.id} className="hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-4">
                  <Image
                    src={preacher.avatar || "/placeholder.svg"}
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
                  {preacher.specialties.map((specialty) => (
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
                    <div className="text-2xl font-bold text-blue-600">{preacher.followers.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">Followers</div>
                  </div>
                </div>

                {/* Content Stats */}
                <div className="flex justify-between text-sm text-gray-600">
                  <span className="flex items-center space-x-1">
                    <Headphones className="w-4 h-4" />
                    <span>{preacher.audioCount} Audio</span>
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
                  <Button variant="outline" className="flex-1 bg-transparent" size="sm">
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
