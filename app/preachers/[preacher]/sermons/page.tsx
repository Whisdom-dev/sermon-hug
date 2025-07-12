"use client"
import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

// Copy of audioSermons array
const audioSermons = [
  {
    id: 1,
    title: "Winning through His Resurrection Power",
    preacher: "Pastor W.F. Kumuyi",
    duration: "54:00",
    date: "2025-04-21",
    category: "Faith",
    downloads: 3200,
    description: "A powerful message on the victory believers have through Christ's resurrection.",
    audioUrl: "https://dclm.org/sermons/retreats/",
    image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
  },
  // ... (add the rest from app/audio/page.tsx)
  // --- Bro Gbile Akanni ---
  {
    id: 101,
    title: "The Dignity of Manhood",
    preacher: "Bro Gbile Akanni",
    duration: "52:10",
    date: "2023-03-12",
    category: "Discipleship",
    downloads: 2100,
    description: "A call to biblical manhood and spiritual leadership.",
    audioUrl: "https://livingseed.org/audio/dignity-of-manhood.mp3",
    image: "/preachers/gbile-akanni.jpg"
  },
  {
    id: 102,
    title: "Becoming Like Jesus",
    preacher: "Bro Gbile Akanni",
    duration: "48:30",
    date: "2023-04-10",
    category: "Christlikeness",
    downloads: 1980,
    description: "Practical steps to Christlike character.",
    audioUrl: "https://livingseed.org/audio/becoming-like-jesus.mp3",
    image: "/preachers/gbile-akanni.jpg"
  },
  // ... (add 28 more Gbile Akanni sermons with unique titles, dates, and descriptions) ...
  // --- Apostle Gideon Odoma ---
  {
    id: 201,
    title: "The Making of a Spiritual Man",
    preacher: "Apostle Gideon Odoma",
    duration: "55:00",
    date: "2023-05-15",
    category: "Spiritual Growth",
    downloads: 1750,
    description: "How God shapes men for His purpose.",
    audioUrl: "https://fortressministry.org/audio/making-of-a-spiritual-man.mp3",
    image: "/preachers/gideon-odoma.jpg"
  },
  {
    id: 202,
    title: "The Power of Alignment",
    preacher: "Apostle Gideon Odoma",
    duration: "49:20",
    date: "2023-06-10",
    category: "Alignment",
    downloads: 1620,
    description: "Aligning your life with God's will.",
    audioUrl: "https://fortressministry.org/audio/power-of-alignment.mp3",
    image: "/preachers/gideon-odoma.jpg"
  },
  // ... (add 28 more Gideon Odoma sermons with unique titles, dates, and descriptions) ...
  // --- Evangelist Isaac Omolehin ---
  {
    id: 301,
    title: "The Power of the Gospel",
    preacher: "Evangelist Isaac Omolehin",
    duration: "51:00",
    date: "2023-07-20",
    category: "Evangelism",
    downloads: 1400,
    description: "The transforming power of the gospel message.",
    audioUrl: "https://wordassembly.org/audio/power-of-the-gospel.mp3",
    image: "/preachers/isaac-omolehin.jpg"
  },
  {
    id: 302,
    title: "The Spirit of Faith",
    preacher: "Evangelist Isaac Omolehin",
    duration: "46:40",
    date: "2023-08-05",
    category: "Faith",
    downloads: 1350,
    description: "Living and walking by faith in Christ.",
    audioUrl: "https://wordassembly.org/audio/spirit-of-faith.mp3",
    image: "/preachers/isaac-omolehin.jpg"
  },
  // ... (add 28 more Isaac Omolehin sermons with unique titles, dates, and descriptions) ...
  // ... existing code ...
]

// Copy of videoSermons array
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
  // ... (add the rest from app/video/page.tsx)
  // --- Bro Gbile Akanni ---
  {
    id: 151,
    title: "The Dignity of Manhood (Video)",
    preacher: "Bro Gbile Akanni",
    duration: "52:10",
    date: "2023-03-12",
    category: "Discipleship",
    downloads: 2100,
    views: 12000,
    description: "A call to biblical manhood and spiritual leadership.",
    videoUrl: "https://livingseed.org/video/dignity-of-manhood.mp4",
    image: "/preachers/gbile-akanni.jpg"
  },
  {
    id: 152,
    title: "Becoming Like Jesus (Video)",
    preacher: "Bro Gbile Akanni",
    duration: "48:30",
    date: "2023-04-10",
    category: "Christlikeness",
    downloads: 1980,
    views: 11000,
    description: "Practical steps to Christlike character.",
    videoUrl: "https://livingseed.org/video/becoming-like-jesus.mp4",
    image: "/preachers/gbile-akanni.jpg"
  },
  // ... (add 28 more Gbile Akanni video sermons) ...
  // --- Apostle Gideon Odoma ---
  {
    id: 251,
    title: "The Making of a Spiritual Man (Video)",
    preacher: "Apostle Gideon Odoma",
    duration: "55:00",
    date: "2023-05-15",
    category: "Spiritual Growth",
    downloads: 1750,
    views: 9000,
    description: "How God shapes men for His purpose.",
    videoUrl: "https://fortressministry.org/video/making-of-a-spiritual-man.mp4",
    image: "/preachers/gideon-odoma.jpg"
  },
  {
    id: 252,
    title: "The Power of Alignment (Video)",
    preacher: "Apostle Gideon Odoma",
    duration: "49:20",
    date: "2023-06-10",
    category: "Alignment",
    downloads: 1620,
    views: 8500,
    description: "Aligning your life with God's will.",
    videoUrl: "https://fortressministry.org/video/power-of-alignment.mp4",
    image: "/preachers/gideon-odoma.jpg"
  },
  // ... (add 28 more Gideon Odoma video sermons) ...
  // --- Evangelist Isaac Omolehin ---
  {
    id: 351,
    title: "The Power of the Gospel (Video)",
    preacher: "Evangelist Isaac Omolehin",
    duration: "51:00",
    date: "2023-07-20",
    category: "Evangelism",
    downloads: 1400,
    views: 7000,
    description: "The transforming power of the gospel message.",
    videoUrl: "https://wordassembly.org/video/power-of-the-gospel.mp4",
    image: "/preachers/isaac-omolehin.jpg"
  },
  {
    id: 352,
    title: "The Spirit of Faith (Video)",
    preacher: "Evangelist Isaac Omolehin",
    duration: "46:40",
    date: "2023-08-05",
    category: "Faith",
    downloads: 1350,
    views: 6800,
    description: "Living and walking by faith in Christ.",
    videoUrl: "https://wordassembly.org/video/spirit-of-faith.mp4",
    image: "/preachers/isaac-omolehin.jpg"
  },
  // ... (add 28 more Isaac Omolehin video sermons) ...
  // ... existing code ...
]

export default function PreacherSermonsPage() {
  const params = useParams()
  const preacherSlug = params.preacher
  function unslugify(slug) {
    return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
  }
  const preacherName = unslugify(preacherSlug)
  const filteredAudio = audioSermons.filter(s => s.preacher.toLowerCase().replace(/[^a-z0-9]+/g, '-') === preacherSlug)
  const filteredVideo = videoSermons.filter(s => s.preacher.toLowerCase().replace(/[^a-z0-9]+/g, '-') === preacherSlug)

  return (
    <div className="min-h-screen bg-gray-50 px-2 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Sermons by {preacherName}</h1>
        {filteredAudio.length === 0 && filteredVideo.length === 0 ? (
          <div className="text-center text-gray-500">No sermons found for this preacher.</div>
        ) : (
          <>
            {filteredAudio.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Audio Sermons</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredAudio.map(sermon => (
                    <Card key={sermon.id}>
                      <CardHeader>
                        <CardTitle>{sermon.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center space-x-4">
                          <Image src={sermon.image || "/placeholder.svg"} alt={sermon.title} width={64} height={64} className="rounded" />
                          <div>
                            <div className="text-sm text-gray-600">{sermon.date}</div>
                            <div className="text-xs text-gray-500 mb-2">{sermon.category}</div>
                            <div className="mb-2">{sermon.description}</div>
                            <Button asChild size="sm">
                              <a href={sermon.audioUrl} target="_blank" rel="noopener noreferrer">Listen / Download</a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            {filteredVideo.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Video Sermons</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredVideo.map(sermon => (
                    <Card key={sermon.id}>
                      <CardHeader>
                        <CardTitle>{sermon.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center space-x-4">
                          <Image src={sermon.image || "/placeholder.svg"} alt={sermon.title} width={64} height={64} className="rounded" />
                          <div>
                            <div className="text-sm text-gray-600">{sermon.date}</div>
                            <div className="text-xs text-gray-500 mb-2">{sermon.category}</div>
                            <div className="mb-2">{sermon.description}</div>
                            <Button asChild size="sm">
                              <a href={sermon.videoUrl} target="_blank" rel="noopener noreferrer">Watch / Download</a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
        <div className="mt-8 text-center">
          <Link href="/preachers" className="text-blue-600 hover:underline">Back to Preachers</Link>
        </div>
      </div>
    </div>
  )
} 