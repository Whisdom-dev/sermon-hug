import { type NextRequest, NextResponse } from "next/server"
import { getPreachers } from "@/lib/database"
import type { ApiResponse, Preacher } from "@/lib/types"

export async function GET(request: NextRequest): Promise<NextResponse<ApiResponse<Preacher[]>>> {
  try {
    const { searchParams } = new URL(request.url)
    const search = searchParams.get("search") || undefined
    const specialty = searchParams.get("specialty") || undefined
    const limit = Number.parseInt(searchParams.get("limit") || "20")
    const offset = Number.parseInt(searchParams.get("offset") || "0")

    const preachers = await getPreachers({
      search,
      specialty,
      limit,
      offset,
    })

    return NextResponse.json({
      success: true,
      data: preachers,
    })
  } catch (error) {
    console.error("Error fetching preachers:", error)
    return NextResponse.json(
      { success: false, error: "Failed to fetch preachers" },
      { status: 500 }
    )
  }
} 