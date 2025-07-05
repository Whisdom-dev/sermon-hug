import { type NextRequest, NextResponse } from "next/server"
import { supabase, createUser } from "@/lib/database"
import type { ApiResponse } from "@/lib/types"

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const { email, password, name } = await request.json()

    if (!email || !password || !name) {
      return NextResponse.json(
        { success: false, error: "Email, password, and name are required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Validate password strength
    if (password.length < 6) {
      return NextResponse.json(
        { success: false, error: "Password must be at least 6 characters long" },
        { status: 400 }
      )
    }

    // Register user with Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    })

    if (error) {
      console.error("Supabase registration error:", error)
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 400 }
      )
    }

    if (!data.user) {
      return NextResponse.json(
        { success: false, error: "Registration failed" },
        { status: 500 }
      )
    }

    // Create user profile in our users table
    const userProfile = await createUser({
      email,
      name,
    })

    if (!userProfile) {
      console.error("Failed to create user profile")
      // Note: In production, you might want to handle this differently
      // For now, we'll still return success since the auth user was created
    }

    return NextResponse.json({
      success: true,
      data: {
        user: {
          id: data.user.id,
          email: data.user.email,
          name: data.user.user_metadata?.name || name,
        },
        message: "Registration successful. Please check your email to verify your account.",
      },
    })
  } catch (error) {
    console.error("Error in registration:", error)
    return NextResponse.json(
      { success: false, error: "Registration failed" },
      { status: 500 }
    )
  }
} 