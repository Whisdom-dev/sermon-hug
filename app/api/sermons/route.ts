import { type NextRequest, NextResponse } from "next/server"
import { getSermons, createSermon } from "@/lib/database"
import type { ApiResponse, PaginatedResponse, Sermon } from "@/lib/types"

export async function GET(request: NextRequest): Promise<NextResponse<ApiResponse<Sermon[]> | PaginatedResponse<Sermon>>> {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get("type") as "audio" | "video" | undefined
    const category = searchParams.get("category") || undefined
    const search = searchParams.get("search") || undefined
    const preacher = searchParams.get("preacher") || undefined
    const limit = Number.parseInt(searchParams.get("limit") || "20")
    const offset = Number.parseInt(searchParams.get("offset") || "0")

    const sermons = await getSermons({
      type,
      category,
      search,
      preacher,
      limit,
      offset,
    })

    return NextResponse.json({
      success: true,
      data: sermons,
      pagination: {
        limit,
        offset,
        total: sermons.length, // In real app, get total count from database
        hasMore: sermons.length === limit,
      },
    })
  } catch (error) {
    console.error("Error fetching sermons:", error)
    return NextResponse.json(
      { success: false, error: "Failed to fetch sermons" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = ['title', 'preacher', 'duration', 'date', 'type', 'category', 'description']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Validate type
    if (!['audio', 'video'].includes(body.type)) {
      return NextResponse.json(
        { success: false, error: "Type must be 'audio' or 'video'" },
        { status: 400 }
      )
    }

    // Create sermon
    const sermon = await createSermon({
      title: body.title,
      preacher: body.preacher,
      duration: body.duration,
      date: body.date,
      type: body.type,
      category: body.category,
      description: body.description,
      audio_url: body.audio_url,
      video_url: body.video_url,
      thumbnail: body.thumbnail,
    })

    if (!sermon) {
      return NextResponse.json(
        { success: false, error: "Failed to create sermon" },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      data: sermon,
      message: "Sermon created successfully",
    })
  } catch (error) {
    console.error("Error creating sermon:", error)
    return NextResponse.json(
      { success: false, error: "Failed to create sermon" },
      { status: 500 }
    )
  }
}
