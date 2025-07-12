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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [visibleClassic, setVisibleClassic] = useState(6)

  const videoSermons = [
    {
      id: 1,
      title: "Winning through His Resurrection Power",
      preacher: "Pastor W.F. Kumuyi",
      duration: "54:00",
      date: "2025-04-21",
      category: "Faith",
      downloads: 3200,
      views: 15420,
      description: "A powerful message on the victory believers have through Christ's resurrection.",
      videoUrl: "https://dclm.org/sermons/retreats/",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 2,
      title: "Risen with Christ",
      preacher: "Pastor W.F. Kumuyi",
      duration: "48:15",
      date: "2025-04-20",
      category: "Faith",
      downloads: 4100,
      views: 8930,
      description: "Exploring the significance of Christ's resurrection for every believer.",
      videoUrl: "https://dclm.org/sermons/retreats/",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 3,
      title: "Wellness in His Resurrection Power",
      preacher: "Pastor W.F. Kumuyi",
      duration: "50:30",
      date: "2025-04-19",
      category: "Healing",
      downloads: 2950,
      views: 12340,
      description: "A teaching on healing and wellness through the resurrection power of Christ.",
      videoUrl: "https://dclm.org/sermons/retreats/",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 4,
      title: "Preserving Merciful, Peaceful Love while Earnestly Contending for the Faith",
      preacher: "Pastor W.F. Kumuyi",
      duration: "44:10",
      date: "2025-06-30",
      category: "Faith",
      downloads: 2100,
      views: 9870,
      description: "A Bible study on standing firm in faith and love in challenging times.",
      videoUrl: "https://dclm.org/sermons/retreats/",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 5,
      title: "The Great Commission: Go and Make Disciples (Video)",
      preacher: "Bro Gbile Akanni",
      duration: "39:30",
      date: "2023-08-15",
      category: "Mission",
      downloads: 892,
      views: 18750,
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "A call to evangelism and fulfilling the Great Commission.",
      videoUrl: "https://example.com/video/gbileakanni-mission.mp4"
    },
    {
      id: 6,
      title: "Victory in Christ: Spiritual Warfare (Video)",
      preacher: "Apostle Gideon Odoma",
      duration: "46:45",
      date: "2023-09-10",
      category: "Warfare",
      downloads: 567,
      views: 11230,
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "Equipping believers for victory in spiritual battles.",
      videoUrl: "https://example.com/video/gideonodoma-warfare.mp4"
    },
    {
      id: 201,
      title: "The Dignity of Manhood",
      preacher: "Bro Gbile Akanni",
      duration: "52:10",
      date: "2023-03-12",
      category: "Discipleship",
      views: 2100,
      description: "A call to biblical manhood and spiritual leadership.",
      videoUrl: "https://livingseed.org/video/dignity-of-manhood.mp4",
      image: "/preachers/gbile-akanni.jpg"
    },
    {
      id: 202,
      title: "Becoming Like Jesus",
      preacher: "Bro Gbile Akanni",
      duration: "48:45",
      date: "2022-11-05",
      category: "Sanctification",
      views: 1980,
      description: "A message on Christlikeness and spiritual growth.",
      videoUrl: "https://livingseed.org/video/becoming-like-jesus.mp4",
      image: "/preachers/gbile-akanni.jpg"
    },
    {
      id: 203,
      title: "Costly Assumptions",
      preacher: "Bro Gbile Akanni",
      duration: "50:20",
      date: "2021-09-18",
      category: "Warning",
      views: 1750,
      description: "Avoiding spiritual pitfalls through discernment.",
      videoUrl: "https://livingseed.org/video/costly-assumptions.mp4",
      image: "/preachers/gbile-akanni.jpg"
    },
    {
      id: 204,
      title: "Timely Warning",
      preacher: "Bro Gbile Akanni",
      duration: "46:30",
      date: "2020-07-22",
      category: "Warning",
      views: 1600,
      description: "A prophetic warning for the church in the end times.",
      videoUrl: "https://livingseed.org/video/timely-warning.mp4",
      image: "/preachers/gbile-akanni.jpg"
    },
    {
      id: 205,
      title: "When God Speaks",
      preacher: "Bro Gbile Akanni",
      duration: "55:00",
      date: "2019-05-10",
      category: "Hearing God",
      views: 2200,
      description: "Learning to discern and obey the voice of God.",
      videoUrl: "https://livingseed.org/video/when-god-speaks.mp4",
      image: "/preachers/gbile-akanni.jpg"
    },
    {
      id: 206,
      title: "Silent Labors",
      preacher: "Bro Gbile Akanni",
      duration: "49:15",
      date: "2018-03-14",
      category: "Service",
      views: 1400,
      description: "The value of unseen and uncelebrated service in God's kingdom.",
      videoUrl: "https://livingseed.org/video/silent-labors.mp4",
      image: "/preachers/gbile-akanni.jpg"
    },
    {
      id: 207,
      title: "Foundation To Christian Living",
      preacher: "Bro Gbile Akanni",
      duration: "51:30",
      date: "2017-01-28",
      category: "Discipleship",
      views: 1850,
      description: "Laying the right foundation for a victorious Christian life.",
      videoUrl: "https://livingseed.org/video/foundation-christian-living.mp4",
      image: "/preachers/gbile-akanni.jpg"
    },
    {
      id: 208,
      title: "God's Pattern For Christian Service",
      preacher: "Bro Gbile Akanni",
      duration: "53:40",
      date: "2016-10-19",
      category: "Service",
      views: 1700,
      description: "Understanding God's blueprint for effective ministry.",
      videoUrl: "https://livingseed.org/video/gods-pattern-service.mp4",
      image: "/preachers/gbile-akanni.jpg"
    },
    {
      id: 209,
      title: "The Making of a Vessel",
      preacher: "Bro Gbile Akanni",
      duration: "47:55",
      date: "2015-08-23",
      category: "Preparation",
      views: 1300,
      description: "How God prepares His servants for His work.",
      videoUrl: "https://livingseed.org/video/making-of-a-vessel.mp4",
      image: "/preachers/gbile-akanni.jpg"
    },
    {
      id: 210,
      title: "The School of the Spirit",
      preacher: "Bro Gbile Akanni",
      duration: "56:10",
      date: "2014-06-11",
      category: "Holy Spirit",
      views: 2000,
      description: "Learning from the Holy Spirit in the journey of faith.",
      videoUrl: "https://livingseed.org/video/school-of-the-spirit.mp4",
      image: "/preachers/gbile-akanni.jpg"
    },
    {
      id: 301,
      title: "Spiritual Warfare: Victory in Christ",
      preacher: "Apostle Gideon Odoma",
      duration: "47:05",
      date: "2023-09-10",
      category: "Warfare",
      views: 1670,
      description: "Equipping believers for victory in spiritual battles.",
      videoUrl: "https://example.com/video/gideonodoma-warfare.mp4",
      image: "/preachers/gideon-odoma.jpg"
    },
    {
      id: 302,
      title: "The Believer's Authority",
      preacher: "Apostle Gideon Odoma",
      duration: "50:00",
      date: "2022-08-15",
      category: "Authority",
      views: 1500,
      description: "Understanding and exercising spiritual authority in Christ.",
      videoUrl: "https://example.com/video/gideonodoma-authority.mp4",
      image: "/preachers/gideon-odoma.jpg"
    },
    {
      id: 303,
      title: "The Power of Prayer",
      preacher: "Apostle Gideon Odoma",
      duration: "45:30",
      date: "2021-06-20",
      category: "Prayer",
      views: 1400,
      description: "Unlocking the power of prayer for breakthrough.",
      videoUrl: "https://example.com/video/gideonodoma-prayer.mp4",
      image: "/preachers/gideon-odoma.jpg"
    },
    {
      id: 401,
      title: "The Power of the Gospel",
      preacher: "Evangelist Isaac Omolehin",
      duration: "44:20",
      date: "2023-05-12",
      category: "Evangelism",
      views: 1200,
      description: "The transforming power of the gospel message.",
      videoUrl: "https://example.com/video/isaacomolehin-gospel.mp4",
      image: "/preachers/isaac-omolehin.jpg"
    },
    {
      id: 402,
      title: "The Call to Evangelism",
      preacher: "Evangelist Isaac Omolehin",
      duration: "42:10",
      date: "2022-03-18",
      category: "Evangelism",
      views: 1100,
      description: "A passionate call to reach the lost with the gospel.",
      videoUrl: "https://example.com/video/isaacomolehin-evangelism.mp4",
      image: "/preachers/isaac-omolehin.jpg"
    },
    {
      id: 403,
      title: "Faith for the Harvest",
      preacher: "Evangelist Isaac Omolehin",
      duration: "46:00",
      date: "2021-01-22",
      category: "Faith",
      views: 1000,
      description: "Trusting God for a great harvest of souls.",
      videoUrl: "https://example.com/video/isaacomolehin-harvest.mp4",
      image: "/preachers/isaac-omolehin.jpg"
    },
  ]

  const classicSermons = [
    {
      id: 201,
      title: "The Christian and the World",
      preacher: "Pastor W.F. Kumuyi",
      year: 1997,
      description: "A call to live a separated, Christ-centered life in a fallen world.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12345",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 202,
      title: "The Power of a Transformed Life",
      preacher: "Pastor W.F. Kumuyi",
      year: 1999,
      description: "How the gospel brings radical change to the believer's life.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12346",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 203,
      title: "Holiness: The True Mark of a Christian",
      preacher: "Pastor W.F. Kumuyi",
      year: 2001,
      description: "Biblical holiness as the foundation of Christian living.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12347",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 204,
      title: "Walking in the Spirit",
      preacher: "Pastor W.F. Kumuyi",
      year: 2000,
      description: "Practical steps to a Spirit-led life.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12348",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 205,
      title: "The Believer's Authority in Christ",
      preacher: "Pastor W.F. Kumuyi",
      year: 1998,
      description: "Understanding and exercising spiritual authority.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12349",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 206,
      title: "The Power of Prayer",
      preacher: "Pastor W.F. Kumuyi",
      year: 1996,
      description: "Unlocking the power of prayer in the believer's life.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12350",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 207,
      title: "Faith for the Impossible",
      preacher: "Pastor W.F. Kumuyi",
      year: 1995,
      description: "How faith in God brings the impossible to pass.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12351",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 208,
      title: "The Cross and the New Life",
      preacher: "Pastor W.F. Kumuyi",
      year: 2002,
      description: "The meaning of the cross for the believer's daily walk.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12352",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 209,
      title: "Victory Over Sin",
      preacher: "Pastor W.F. Kumuyi",
      year: 1994,
      description: "How to live in daily victory over sin.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12353",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 210,
      title: "The Spirit-Filled Life",
      preacher: "Pastor W.F. Kumuyi",
      year: 2000,
      description: "Living in the fullness of the Holy Spirit.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12354",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 211,
      title: "The Call to Discipleship",
      preacher: "Pastor W.F. Kumuyi",
      year: 1993,
      description: "What it means to truly follow Christ.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12355",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 212,
      title: "The Power of the Blood",
      preacher: "Pastor W.F. Kumuyi",
      year: 1998,
      description: "The cleansing and victory found in Christ's blood.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12356",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 213,
      title: "The Christian Home",
      preacher: "Pastor W.F. Kumuyi",
      year: 1997,
      description: "Building a godly home in a secular world.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12357",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 214,
      title: "The Power of Forgiveness",
      preacher: "Pastor W.F. Kumuyi",
      year: 1996,
      description: "How forgiveness brings freedom and healing.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12358",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 215,
      title: "The Second Coming of Christ",
      preacher: "Pastor W.F. Kumuyi",
      year: 1999,
      description: "Living in readiness for Christ's return.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12359",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 216,
      title: "The Power of the Word",
      preacher: "Pastor W.F. Kumuyi",
      year: 1995,
      description: "How God's Word transforms lives.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12360",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 217,
      title: "The Christian and Temptation",
      preacher: "Pastor W.F. Kumuyi",
      year: 1998,
      description: "Overcoming temptation through Christ.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12361",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 218,
      title: "The Power of Faithfulness",
      preacher: "Pastor W.F. Kumuyi",
      year: 1997,
      description: "The rewards of a faithful Christian life.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12362",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 219,
      title: "The Christian and the Holy Spirit",
      preacher: "Pastor W.F. Kumuyi",
      year: 2001,
      description: "The role of the Holy Spirit in the believer's life.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12363",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 220,
      title: "The Power of the Gospel",
      preacher: "Pastor W.F. Kumuyi",
      year: 1996,
      description: "The gospel's power to save and transform.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12364",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 221,
      title: "The Christian and Suffering",
      preacher: "Pastor W.F. Kumuyi",
      year: 1994,
      description: "Finding purpose in suffering for Christ.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12365",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 222,
      title: "The Power of Hope",
      preacher: "Pastor W.F. Kumuyi",
      year: 1995,
      description: "Hope as an anchor for the soul.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12366",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 223,
      title: "The Christian and Evangelism",
      preacher: "Pastor W.F. Kumuyi",
      year: 1993,
      description: "The believer's call to share the gospel.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12367",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 224,
      title: "The Power of Worship",
      preacher: "Pastor W.F. Kumuyi",
      year: 1997,
      description: "True worship in spirit and truth.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12368",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 225,
      title: "The Christian and the Church",
      preacher: "Pastor W.F. Kumuyi",
      year: 1996,
      description: "The importance of fellowship and unity.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12369",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 226,
      title: "The Power of the Resurrection",
      preacher: "Pastor W.F. Kumuyi",
      year: 2000,
      description: "Living in the power of Christ's resurrection.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12370",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 227,
      title: "The Christian and the End Times",
      preacher: "Pastor W.F. Kumuyi",
      year: 1999,
      description: "Understanding the signs of the times.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12371",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 228,
      title: "The Power of Love",
      preacher: "Pastor W.F. Kumuyi",
      year: 1998,
      description: "Love as the greatest commandment.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12372",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 229,
      title: "The Christian and the Great Commission",
      preacher: "Pastor W.F. Kumuyi",
      year: 1995,
      description: "Fulfilling Christ's command to make disciples.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12373",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 230,
      title: "The Power of the Cross",
      preacher: "Pastor W.F. Kumuyi",
      year: 1997,
      description: "The cross as the center of the Christian faith.",
      videoUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12374",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
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

            {/* Desktop Nav */}
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
              <Link href="/video" className="text-blue-600 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
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
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 md:mb-4">Video Sermons</h1>
            <p className="text-base md:text-xl text-purple-100 max-w-full md:max-w-2xl mx-auto">
              Watch inspiring video messages that will transform your perspective and strengthen your faith.
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

        {/* Classic Sermons */}
        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-6 md:mb-8">
          <h2 className="text-2xl font-bold mb-4">Classic Sermons</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {classicSermons.slice(0, visibleClassic).map((sermon) => (
              <Card key={sermon.id} className="hover:shadow-lg transition-all duration-300 group overflow-hidden">
                <div className="relative">
                  <Image
                    src={sermon.image || "/placeholder.svg"}
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
                      {sermon.year}
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
                      <span>N/A views</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      <span>N/A</span>
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
          {visibleClassic < classicSermons.length && (
            <div className="flex justify-center mt-4">
              <Button onClick={() => setVisibleClassic(visibleClassic + 6)}>
                Load More Sermons
              </Button>
            </div>
          )}
        </div>

        {/* Video Sermons Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {filteredSermons.map((sermon) => (
            <Card key={sermon.id} className="hover:shadow-lg transition-all duration-300 group overflow-hidden">
              <div className="relative">
                <Image
                  src={sermon.image || "/placeholder.svg"}
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
                    <span>N/A views</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(sermon.date).toLocaleDateString()}</span>
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center space-x-1">
                    <Download className="w-4 h-4" />
                    <span>N/A</span>
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
