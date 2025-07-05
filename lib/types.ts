// Database schema types for Supabase
export interface Database {
  public: {
    Tables: {
      sermons: {
        Row: {
          id: string
          title: string
          preacher: string
          duration: string
          date: string
          type: 'audio' | 'video'
          category: string
          description: string
          audio_url?: string
          video_url?: string
          thumbnail?: string
          downloads: number
          views: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          preacher: string
          duration: string
          date: string
          type: 'audio' | 'video'
          category: string
          description: string
          audio_url?: string
          video_url?: string
          thumbnail?: string
          downloads?: number
          views?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          preacher?: string
          duration?: string
          date?: string
          type?: 'audio' | 'video'
          category?: string
          description?: string
          audio_url?: string
          video_url?: string
          thumbnail?: string
          downloads?: number
          views?: number
          created_at?: string
          updated_at?: string
        }
      }
      preachers: {
        Row: {
          id: string
          name: string
          title: string
          church: string
          location: string
          bio: string
          avatar?: string
          followers: number
          sermons: number
          specialties: string[]
          join_date: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          title: string
          church: string
          location: string
          bio: string
          avatar?: string
          followers?: number
          sermons?: number
          specialties?: string[]
          join_date?: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          title?: string
          church?: string
          location?: string
          bio?: string
          avatar?: string
          followers?: number
          sermons?: number
          specialties?: string[]
          join_date?: string
          created_at?: string
        }
      }
      users: {
        Row: {
          id: string
          email: string
          name: string
          avatar?: string
          favorites: string[]
          downloads: string[]
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          name: string
          avatar?: string
          favorites?: string[]
          downloads?: string[]
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          avatar?: string
          favorites?: string[]
          downloads?: string[]
          created_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          description?: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          created_at?: string
        }
      }
      analytics: {
        Row: {
          id: string
          user_id?: string
          sermon_id: string
          action: 'view' | 'download' | 'favorite'
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string
          sermon_id: string
          action: 'view' | 'download' | 'favorite'
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          sermon_id?: string
          action?: 'view' | 'download' | 'favorite'
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

// Type aliases for easier use
export type Sermon = Database['public']['Tables']['sermons']['Row']
export type SermonInsert = Database['public']['Tables']['sermons']['Insert']
export type SermonUpdate = Database['public']['Tables']['sermons']['Update']

export type Preacher = Database['public']['Tables']['preachers']['Row']
export type PreacherInsert = Database['public']['Tables']['preachers']['Insert']
export type PreacherUpdate = Database['public']['Tables']['preachers']['Update']

export type User = Database['public']['Tables']['users']['Row']
export type UserInsert = Database['public']['Tables']['users']['Insert']
export type UserUpdate = Database['public']['Tables']['users']['Update']

export type Category = Database['public']['Tables']['categories']['Row']
export type CategoryInsert = Database['public']['Tables']['categories']['Insert']
export type CategoryUpdate = Database['public']['Tables']['categories']['Update']

export type Analytics = Database['public']['Tables']['analytics']['Row']
export type AnalyticsInsert = Database['public']['Tables']['analytics']['Insert']
export type AnalyticsUpdate = Database['public']['Tables']['analytics']['Update']

// API response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    limit: number
    offset: number
    total: number
    hasMore: boolean
  }
}

// Filter types
export interface SermonFilters {
  type?: 'audio' | 'video'
  category?: string
  search?: string
  preacher?: string
  limit?: number
  offset?: number
}

export interface PreacherFilters {
  search?: string
  specialty?: string
  limit?: number
  offset?: number
} 