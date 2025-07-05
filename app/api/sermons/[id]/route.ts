import { type NextRequest, NextResponse } from "next/server"
import { getSermonById, updateSermon, deleteSermon } from "@/lib/database"
import type { ApiResponse, Sermon } from "@/lib/types"

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse<ApiResponse<Sermon>>> {
  try {
    const sermon = await getSermonById(params.id)

    if (!sermon) {
      return NextResponse.json(
        { success: false, error: "Sermon not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: sermon,
    })
  } catch (error) {
    console.error("Error fetching sermon:", error)
    return NextResponse.json(
      { success: false, error: "Failed to fetch sermon" },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse<ApiResponse<Sermon>>> {
  try {
    const body = await request.json()

    // Validate type if provided
    if (body.type && !['audio', 'video'].includes(body.type)) {
      return NextResponse.json(
        { success: false, error: "Type must be 'audio' or 'video'" },
        { status: 400 }
      )
    }

    const sermon = await updateSermon(params.id, body)

    if (!sermon) {
      return NextResponse.json(
        { success: false, error: "Sermon not found or update failed" },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: sermon,
      message: "Sermon updated successfully",
    })
  } catch (error) {
    console.error("Error updating sermon:", error)
    return NextResponse.json(
      { success: false, error: "Failed to update sermon" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse<ApiResponse>> {
  try {
    const success = await deleteSermon(params.id)

    if (!success) {
      return NextResponse.json(
        { success: false, error: "Sermon not found or delete failed" },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Sermon deleted successfully",
    })
  } catch (error) {
    console.error("Error deleting sermon:", error)
    return NextResponse.json(
      { success: false, error: "Failed to delete sermon" },
      { status: 500 }
    )
  }
}
