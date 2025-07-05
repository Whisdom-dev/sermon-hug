import { type NextRequest, NextResponse } from "next/server"
import { getCategories } from "@/lib/database"
import type { ApiResponse, Category } from "@/lib/types"

export async function GET(request: NextRequest): Promise<NextResponse<ApiResponse<Category[]>>> {
  try {
    const categories = await getCategories()

    return NextResponse.json({
      success: true,
      data: categories,
    })
  } catch (error) {
    console.error("Error fetching categories:", error)
    return NextResponse.json(
      { success: false, error: "Failed to fetch categories" },
      { status: 500 }
    )
  }
} 