import { type NextRequest, NextResponse } from "next/server"
import { logUserActivity, incrementDownload } from "@/lib/database"
import type { ApiResponse } from "@/lib/types"

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await request.json()
    const { action, sermonId, userId } = body

    // Validate required fields
    if (!action || !sermonId) {
      return NextResponse.json(
        { success: false, error: "Action and sermonId are required" },
        { status: 400 }
      )
    }

    // Validate action
    if (!['view', 'download', 'favorite'].includes(action)) {
      return NextResponse.json(
        { success: false, error: "Action must be 'view', 'download', or 'favorite'" },
        { status: 400 }
      )
    }

    // Log the activity
    await logUserActivity(userId, action, sermonId)

    // If it's a download, also increment the download count
    if (action === 'download') {
      await incrementDownload(sermonId, userId)
    }

    return NextResponse.json({
      success: true,
      message: "Activity logged successfully",
    })
  } catch (error) {
    console.error("Error logging activity:", error)
    return NextResponse.json(
      { success: false, error: "Failed to log activity" },
      { status: 500 }
    )
  }
}
