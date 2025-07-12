"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Download, Play, Pause, Clock, Calendar, User, Headphones, Filter } from "lucide-react"
import Link from "next/link"

export default function AudioPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("recent")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [visibleCount, setVisibleCount] = useState(9)
  const [currentAudio, setCurrentAudio] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const audioSermons = [
    {
      id: 1,
      title: "The Christian and the World",
      preacher: "Pastor W.F. Kumuyi",
      duration: "54:00",
      date: "2025-04-21",
      category: "Faith",
      downloads: 3200,
      description: "A powerful message on the victory believers have through Christ's resurrection.",
      audioUrl: "https://vmlu1.ytmp3free.cc/get.php?cid=687236a15a0fcfb42354e1bd&t=1752315684&i=MTAyLjkwLjEwLjI0Ng==",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 2,
      title: "The Power of a Transformed Life",
      preacher: "Pastor W.F. Kumuyi",
      duration: "48:15",
      date: "2025-04-20",
      category: "Faith",
      downloads: 4100,
      description: "Exploring the significance of Christ's resurrection for every believer.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=17018",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 3,
      title: "Holiness: The True Mark of a Christian",
      preacher: "Pastor W.F. Kumuyi",
      duration: "50:30",
      date: "2025-04-19",
      category: "Holiness",
      downloads: 2950,
      description: "A teaching on healing and wellness through the resurrection power of Christ.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=17019",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 4,
      title: "The Man Indwelt by the Spirit",
      preacher: "Pastor W.F. Kumuyi",
      duration: "44:10",
      date: "2025-06-30",
      category: "Spirit Life",
      downloads: 2100,
      description: "A Bible study on what a man can do by the indwelling of the spirit.",
      audioUrl: "https://vmlu1.ytmp3free.cc/get.php?cid=686f7dbc5a0fcfb423a60b8c&t=1752314250&i=MTAyLjkwLjEwLjI0Ng==",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 5,
      title: "Victory Over Sin",
      preacher: "Pastor W.F. Kumuyi",
      duration: "39:20",
      date: "2023-08-15",
      category: "Victory",
      downloads: 1800,
      description: "A call to evangelism and fulfilling the Great Commission.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=17021",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 6,
      title: "The Spirit-Filled Life",
      preacher: "Pastor W.F. Kumuyi",
      duration: "47:05",
      date: "2023-09-10",
      category: "Holy Spirit",
      downloads: 1670,
      description: "Equipping believers for victory in spiritual battles.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=17022",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 7,
      title: "The Cross and the New Life",
      preacher: "Pastor W.F. Kumuyi",
      duration: "52:10",
      date: "2023-03-12",
      category: "New Life",
      downloads: 2100,
      description: "A call to biblical manhood and spiritual leadership.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=17023",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 8,
      title: "Faith for the Impossible",
      preacher: "Pastor W.F. Kumuyi",
      duration: "48:45",
      date: "2022-11-05",
      category: "Faith",
      downloads: 1980,
      description: "A message on Christlikeness and spiritual growth.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=17024",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 9,
      title: "Preserving Merciful, Peaceful Love while Earnestly Contending for the Faith",
      preacher: "Pastor W.F. Kumuyi",
      duration: "44:10",
      date: "2025-06-30",
      category: "Faith",
      downloads: 2100,
      description: "A Bible study on standing firm in faith and love in challenging times.",
      audioUrl: "https://vmlu1.ytmp3free.cc/get.php?cid=687235185a0fcfb423541071&t=1752315291&i=MTAyLjkwLjEwLjI0Ng==",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg"
    },
    {
      id: 10,
      title: "The Great Commission: Go and Make Disciples",
      preacher: "Bro Gbile Akanni",
      duration: "39:20",
      date: "2023-08-15",
      category: "Mission",
      downloads: 1800,
      description: "A call to evangelism and fulfilling the Great Commission.",
      audioUrl: "https://www.livingseedmedia.org/audio/gbile-akanni-the-great-commission.mp3",
    },
    {
      id: 11,
      title: "Spiritual Warfare: Victory in Christ",
      preacher: "Apostle Gideon Odoma",
      duration: "47:05",
      date: "2023-09-10",
      category: "Warfare",
      downloads: 1670,
      description: "Equipping believers for victory in spiritual battles.",
      audioUrl: "https://download.naijasermons.com.ng/wp-content/uploads/2021/09/Apostle_Gideon_Odoma_-_The_Believers_Authority.mp3",
    },
    {
      id: 201,
      title: "The Dignity of Manhood",
      preacher: "Bro Gbile Akanni",
      duration: "52:10",
      date: "2023-03-12",
      category: "Discipleship",
      downloads: 2100,
      description: "A call to biblical manhood and spiritual leadership.",
      audioUrl: "https://www.livingseedmedia.org/audio/gbile-akanni-the-dignity-of-manhood.mp3",
      image: "/preachers/gbile-akanni.jpg"
    },
    {
      id: 202,
      title: "Becoming Like Jesus",
      preacher: "Bro Gbile Akanni",
      duration: "48:45",
      date: "2022-11-05",
      category: "Sanctification",
      downloads: 1980,
      description: "A message on Christlikeness and spiritual growth.",
      audioUrl: "https://www.livingseedmedia.org/audio/gbile-akanni-becoming-like-jesus.mp3",
      image: "/preachers/gbile-akanni.jpg"
    },
    {
      id: 203,
      title: "Costly Assumptions",
      preacher: "Bro Gbile Akanni",
      duration: "50:20",
      date: "2021-09-18",
      category: "Warning",
      downloads: 1750,
      description: "Avoiding spiritual pitfalls through discernment.",
      audioUrl: "https://www.livingseedmedia.org/audio/gbile-akanni-costly-assumptions.mp3",
      image: "/preachers/gbile-akanni.jpg"
    },
    {
      id: 204,
      title: "Timely Warning",
      preacher: "Bro Gbile Akanni",
      duration: "46:30",
      date: "2020-07-22",
      category: "Warning",
      downloads: 1600,
      description: "A prophetic warning for the church in the end times.",
      audioUrl: "https://www.livingseedmedia.org/audio/gbile-akanni-timely-warning.mp3",
      image: "/preachers/gbile-akanni.jpg"
    },
    {
      id: 205,
      title: "When God Speaks",
      preacher: "Bro Gbile Akanni",
      duration: "55:00",
      date: "2019-05-10",
      category: "Hearing God",
      downloads: 2200,
      description: "Learning to discern and obey the voice of God.",
      audioUrl: "https://www.livingseedmedia.org/audio/gbile-akanni-when-god-speaks.mp3",
      image: "/preachers/gbile-akanni.jpg"
    },
    {
      id: 206,
      title: "Silent Labors",
      preacher: "Bro Gbile Akanni",
      duration: "49:15",
      date: "2018-03-14",
      category: "Service",
      downloads: 1400,
      description: "The value of unseen and uncelebrated service in God's kingdom.",
      audioUrl: "https://www.livingseedmedia.org/audio/gbile-akanni-silent-labors.mp3",
      image: "/preachers/gbile-akanni.jpg"
    },
    {
      id: 207,
      title: "Foundation To Christian Living",
      preacher: "Bro Gbile Akanni",
      duration: "51:30",
      date: "2017-01-28",
      category: "Discipleship",
      downloads: 1850,
      description: "Laying the right foundation for a victorious Christian life.",
      audioUrl: "https://www.livingseedmedia.org/audio/gbile-akanni-foundation-christian-living.mp3",
      image: "/preachers/gbile-akanni.jpg"
    },
    {
      id: 208,
      title: "God's Pattern For Christian Service",
      preacher: "Bro Gbile Akanni",
      duration: "53:40",
      date: "2016-10-19",
      category: "Service",
      downloads: 1700,
      description: "Understanding God's blueprint for effective ministry.",
      audioUrl: "https://www.livingseedmedia.org/audio/gbile-akanni-gods-pattern-service.mp3",
      image: "/preachers/gbile-akanni.jpg"
    },
    {
      id: 209,
      title: "The Making of a Vessel",
      preacher: "Bro Gbile Akanni",
      duration: "47:55",
      date: "2015-08-23",
      category: "Preparation",
      downloads: 1300,
      description: "How God prepares His servants for His work.",
      audioUrl: "https://www.livingseedmedia.org/audio/gbile-akanni-making-of-a-vessel.mp3",
      image: "/preachers/gbile-akanni.jpg"
    },
    {
      id: 210,
      title: "The School of the Spirit",
      preacher: "Bro Gbile Akanni",
      duration: "56:10",
      date: "2014-06-11",
      category: "Holy Spirit",
      downloads: 2000,
      description: "Learning from the Holy Spirit in the journey of faith.",
      audioUrl: "https://www.livingseedmedia.org/audio/gbile-akanni-school-of-the-spirit.mp3",
      image: "/preachers/gbile-akanni.jpg"
    },
    {
      id: 301,
      title: "Spiritual Warfare: Victory in Christ",
      preacher: "Apostle Gideon Odoma",
      duration: "47:05",
      date: "2023-09-10",
      category: "Warfare",
      downloads: 1670,
      description: "Equipping believers for victory in spiritual battles.",
      audioUrl: "https://download.naijasermons.com.ng/wp-content/uploads/2021/09/Apostle_Gideon_Odoma_-_The_Believers_Authority.mp3",
      image: "/preachers/gideon-odoma.jpg"
    },
    {
      id: 302,
      title: "The Believer's Authority",
      preacher: "Apostle Gideon Odoma",
      duration: "50:00",
      date: "2022-08-15",
      category: "Authority",
      downloads: 1500,
      description: "Understanding and exercising spiritual authority in Christ.",
      audioUrl: "https://example.com/audio/gideonodoma-authority.mp3",
      image: "/preachers/gideon-odoma.jpg"
    },
    {
      id: 303,
      title: "The Power of Prayer",
      preacher: "Apostle Gideon Odoma",
      duration: "45:30",
      date: "2021-06-20",
      category: "Prayer",
      downloads: 1400,
      description: "Unlocking the power of prayer for breakthrough.",
      audioUrl: "https://example.com/audio/gideonodoma-prayer.mp3",
      image: "/preachers/gideon-odoma.jpg"
    },
    {
      id: 401,
      title: "The Power of the Gospel",
      preacher: "Evangelist Isaac Omolehin",
      duration: "44:20",
      date: "2023-05-12",
      category: "Evangelism",
      downloads: 1200,
      description: "The transforming power of the gospel message.",
      audioUrl: "https://www.gospelcity.com.ng/files/Isaac_Omolehin_-_The_Power_of_the_Gospel.mp3",
      image: "/preachers/isaac-omolehin.jpg"
    },
    {
      id: 402,
      title: "The Call to Evangelism",
      preacher: "Evangelist Isaac Omolehin",
      duration: "42:10",
      date: "2022-03-18",
      category: "Evangelism",
      downloads: 1100,
      description: "A passionate call to reach the lost with the gospel.",
      audioUrl: "https://example.com/audio/isaacomolehin-evangelism.mp3",
      image: "/preachers/isaac-omolehin.jpg"
    },
    {
      id: 403,
      title: "Faith for the Harvest",
      preacher: "Evangelist Isaac Omolehin",
      duration: "46:00",
      date: "2021-01-22",
      category: "Faith",
      downloads: 1000,
      description: "Trusting God for a great harvest of souls.",
      audioUrl: "https://example.com/audio/isaacomolehin-harvest.mp3",
      image: "/preachers/isaac-omolehin.jpg"
    },
  ]

  const classicSermons = [
    {
      id: 101,
      title: "The Christian and the World",
      preacher: "Pastor W.F. Kumuyi",
      year: 1997,
      description: "A call to live a separated, Christ-centered life in a fallen world.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12345",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
    {
      id: 102,
      title: "The Power of a Transformed Life",
      preacher: "Pastor W.F. Kumuyi",
      year: 1999,
      description: "How the gospel brings radical change to the believer's life.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12346",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
    {
      id: 103,
      title: "Holiness: The True Mark of a Christian",
      preacher: "Pastor W.F. Kumuyi",
      year: 2001,
      description: "Biblical holiness as the foundation of Christian living.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12347",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
    {
      id: 104,
      title: "Walking in the Spirit",
      preacher: "Pastor W.F. Kumuyi",
      year: 2000,
      description: "Practical steps to a Spirit-led life.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12348",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
    {
      id: 105,
      title: "The Believer's Authority in Christ",
      preacher: "Pastor W.F. Kumuyi",
      year: 1998,
      description: "Understanding and exercising spiritual authority.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12349",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
    {
      id: 106,
      title: "The Power of Prayer",
      preacher: "Pastor W.F. Kumuyi",
      year: 1996,
      description: "Unlocking the power of prayer in the believer's life.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12350",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
    {
      id: 107,
      title: "Faith for the Impossible",
      preacher: "Pastor W.F. Kumuyi",
      year: 1995,
      description: "How faith in God brings the impossible to pass.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12351",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
    {
      id: 108,
      title: "The Cross and the New Life",
      preacher: "Pastor W.F. Kumuyi",
      year: 2002,
      description: "The meaning of the cross for the believer's daily walk.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12352",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
    {
      id: 109,
      title: "Victory Over Sin",
      preacher: "Pastor W.F. Kumuyi",
      year: 1994,
      description: "How to live in daily victory over sin.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12353",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
    {
      id: 110,
      title: "The Spirit-Filled Life",
      preacher: "Pastor W.F. Kumuyi",
      year: 2000,
      description: "Living in the fullness of the Holy Spirit.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12354",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
    {
      id: 111,
      title: "The Call to Discipleship",
      preacher: "Pastor W.F. Kumuyi",
      year: 1993,
      description: "What it means to truly follow Christ.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12355",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
    {
      id: 112,
      title: "The Power of the Blood",
      preacher: "Pastor W.F. Kumuyi",
      year: 1998,
      description: "The cleansing and victory found in Christ's blood.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12356",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
    {
      id: 113,
      title: "The Blessedness of Possessing Nothing",
      preacher: "Pastor W.F. Kumuyi",
      year: 1997,
      description: "The blessedness of Possessing Nothing.",
      audioUrl: "https://vmlu1.ytmp3free.cc/get.php?cid=687239905a0fcfb423566c59&t=1752316166&i=MTAyLjkwLjEwLjI0Ng==",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
    {
      id: 114,
      title: "The Power of Forgiveness",
      preacher: "Pastor W.F. Kumuyi",
      year: 1996,
      description: "How forgiveness brings freedom and healing.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12358",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
    {
      id: 115,
      title: "The Second Coming of Christ",
      preacher: "Pastor W.F. Kumuyi",
      year: 1999,
      description: "Living in readiness for Christ's return.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12359",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
    {
      id: 116,
      title: "The Power of the Word",
      preacher: "Pastor W.F. Kumuyi",
      year: 1995,
      description: "How God's Word transforms lives.",
      audioUrl: "https://vmlu1.ytmp3free.cc/get.php?cid=68723e185a0fcfb42358cf0c&t=1752317325&i=MTAyLjkwLjEwLjI0Ng==",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
    {
      id: 117,
      title: "The Christian and Temptation",
      preacher: "Pastor W.F. Kumuyi",
      year: 1998,
      description: "Overcoming temptation through Christ.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12361",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
    {
      id: 118,
      title: "The Power of Faithfulness",
      preacher: "Pastor W.F. Kumuyi",
      year: 1997,
      description: "The rewards of a faithful Christian life.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12362",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
    {
      id: 119,
      title: "The Christian and the Holy Spirit",
      preacher: "Pastor W.F. Kumuyi",
      year: 2001,
      description: "The role of the Holy Spirit in the believer's life.",
      audioUrl: "https://vmlu1.ytmp3free.cc/get.php?cid=687243bb5a0fcfb4235bd61b&t=1752318768&i=MTAyLjkwLjEwLjI0Ng==",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
    {
      id: 120,
      title: "The Power of the Gospel",
      preacher: "Pastor W.F. Kumuyi",
      year: 1996,
      description: "The gospel's power to save and transform.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12364",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
    {
      id: 121,
      title: "The Christian and Suffering",
      preacher: "Pastor W.F. Kumuyi",
      year: 1994,
      description: "Finding purpose in suffering for Christ.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12365",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
    {
      id: 122,
      title: "The Power of Hope",
      preacher: "Pastor W.F. Kumuyi",
      year: 1995,
      description: "Hope as an anchor for the soul.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12366",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
    {
      id: 123,
      title: "The Christian and Evangelism",
      preacher: "Pastor W.F. Kumuyi",
      year: 1993,
      description: "The believer's call to share the gospel.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12367",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
    {
      id: 124,
      title: "The Power of Worship",
      preacher: "Pastor W.F. Kumuyi",
      year: 1997,
      description: "True worship in spirit and truth.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12368",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
    {
      id: 125,
      title: "The Christian and the Church",
      preacher: "Pastor W.F. Kumuyi",
      year: 1996,
      description: "The importance of fellowship and unity.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12369",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
    {
      id: 126,
      title: "The Power of the Resurrection",
      preacher: "Pastor W.F. Kumuyi",
      year: 2000,
      description: "Living in the power of Christ's resurrection.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12370",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
    {
      id: 127,
      title: "The Christian and the End Times",
      preacher: "Pastor W.F. Kumuyi",
      year: 1999,
      description: "Understanding the signs of the times.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12371",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
    {
      id: 128,
      title: "The Power of Love",
      preacher: "Pastor W.F. Kumuyi",
      year: 1998,
      description: "Love as the greatest commandment.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12372",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
    {
      id: 129,
      title: "The Christian and the Great Commission",
      preacher: "Pastor W.F. Kumuyi",
      year: 1995,
      description: "Fulfilling Christ's command to make disciples.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12373",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
    {
      id: 130,
      title: "The Power of the Cross",
      preacher: "Pastor W.F. Kumuyi",
      year: 1997,
      description: "The cross as the center of the Christian faith.",
      audioUrl: "https://www.sermonindex.net/modules/mydownloads/visit.php?lid=12374",
      image: "https://dclm.org/wp-content/uploads/2021/06/pastor-wf-kumuyi.jpg",
      duration: "N/A",
      downloads: 0,
      category: "Classic"
    },
  ]

  const categories = ["all", "Faith", "Healing", "Grace", "Warfare", "Purpose", "Finance"]

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
