import { createClient } from '@supabase/supabase-js'
import type { Database, Sermon, Preacher, User, Category, Analytics, SermonFilters, PreacherFilters, ApiResponse, PaginatedResponse } from './types'

// Supabase client setup
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

// Sermon functions
export async function getSermons(filters?: SermonFilters): Promise<Sermon[]> {
  try {
    let query = supabase
      .from('sermons')
      .select('*')
      .order('created_at', { ascending: false })

    if (filters?.type) {
      query = query.eq('type', filters.type)
    }

    if (filters?.category) {
      query = query.eq('category', filters.category)
    }

    if (filters?.preacher) {
      query = query.eq('preacher', filters.preacher)
    }

    if (filters?.search) {
      query = query.or(`title.ilike.%${filters.search}%,description.ilike.%${filters.search}%`)
    }

    if (filters?.limit) {
      query = query.limit(filters.limit)
    }

    if (filters?.offset) {
      query = query.range(filters.offset, filters.offset + (filters.limit || 20) - 1)
    }

    const { data, error } = await query

    if (error) {
      console.error('Error fetching sermons:', error)
  return []
    }

    return data || []
  } catch (error) {
    console.error('Error in getSermons:', error)
    return []
  }
}

export async function getSermonById(id: string): Promise<Sermon | null> {
  try {
    const { data, error } = await supabase
      .from('sermons')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      console.error('Error fetching sermon:', error)
      return null
    }

    return data
  } catch (error) {
    console.error('Error in getSermonById:', error)
    return null
  }
}

export async function createSermon(sermon: Omit<Sermon, 'id' | 'created_at' | 'updated_at' | 'downloads' | 'views'>): Promise<Sermon | null> {
  try {
    const { data, error } = await supabase
      .from('sermons')
      .insert({
        ...sermon,
        downloads: 0,
        views: 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) {
      console.error('Error creating sermon:', error)
      return null
    }

    return data
  } catch (error) {
    console.error('Error in createSermon:', error)
    return null
  }
}

export async function updateSermon(id: string, updates: Partial<Sermon>): Promise<Sermon | null> {
  try {
    const { data, error } = await supabase
      .from('sermons')
      .update({
        ...updates,
        updated_at: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating sermon:', error)
      return null
    }

    return data
  } catch (error) {
    console.error('Error in updateSermon:', error)
    return null
  }
}

export async function deleteSermon(id: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('sermons')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting sermon:', error)
      return false
    }

    return true
  } catch (error) {
    console.error('Error in deleteSermon:', error)
    return false
  }
}

// Preacher functions
export async function getPreachers(filters?: PreacherFilters): Promise<Preacher[]> {
  try {
    let query = supabase
      .from('preachers')
      .select('*')
      .order('name', { ascending: true })

    if (filters?.search) {
      query = query.or(`name.ilike.%${filters.search}%,bio.ilike.%${filters.search}%`)
    }

    if (filters?.specialty) {
      query = query.contains('specialties', [filters.specialty])
    }

    if (filters?.limit) {
      query = query.limit(filters.limit)
    }

    if (filters?.offset) {
      query = query.range(filters.offset, filters.offset + (filters.limit || 20) - 1)
    }

    const { data, error } = await query

    if (error) {
      console.error('Error fetching preachers:', error)
      return []
    }

    return data || []
  } catch (error) {
    console.error('Error in getPreachers:', error)
    return []
  }
}

export async function getPreacherById(id: string): Promise<Preacher | null> {
  try {
    const { data, error } = await supabase
      .from('preachers')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      console.error('Error fetching preacher:', error)
      return null
    }

    return data
  } catch (error) {
    console.error('Error in getPreacherById:', error)
    return null
  }
}

// User functions
export async function getUserById(id: string): Promise<User | null> {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      console.error('Error fetching user:', error)
      return null
    }

    return data
  } catch (error) {
    console.error('Error in getUserById:', error)
    return null
  }
}

export async function createUser(user: Omit<User, 'id' | 'created_at' | 'favorites' | 'downloads'>): Promise<User | null> {
  try {
    const { data, error } = await supabase
      .from('users')
      .insert({
        ...user,
        favorites: [],
        downloads: [],
        created_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) {
      console.error('Error creating user:', error)
      return null
    }

    return data
  } catch (error) {
    console.error('Error in createUser:', error)
    return null
  }
}

export async function updateUser(id: string, updates: Partial<User>): Promise<User | null> {
  try {
    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating user:', error)
  return null
}

    return data
  } catch (error) {
    console.error('Error in updateUser:', error)
    return null
  }
}

// Category functions
export async function getCategories(): Promise<Category[]> {
  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name', { ascending: true })

    if (error) {
      console.error('Error fetching categories:', error)
  return []
}

    return data || []
  } catch (error) {
    console.error('Error in getCategories:', error)
    return []
  }
}

// Analytics functions
export async function incrementDownload(sermonId: string, userId?: string): Promise<void> {
  try {
    // Increment download count
    await supabase
      .from('sermons')
      .update({ downloads: supabase.rpc('increment', { row_id: sermonId, column_name: 'downloads' }) })
      .eq('id', sermonId)

    // Log analytics
    await supabase
      .from('analytics')
      .insert({
        sermon_id: sermonId,
        user_id: userId,
        action: 'download',
        created_at: new Date().toISOString(),
      })

    // Add to user's downloads if logged in
    if (userId) {
      await supabase
        .from('users')
        .update({ downloads: supabase.rpc('array_append', { downloads: sermonId }) })
        .eq('id', userId)
    }
  } catch (error) {
    console.error('Error in incrementDownload:', error)
  }
}

export async function logUserActivity(userId: string, action: 'view' | 'download' | 'favorite', sermonId: string): Promise<void> {
  try {
    await supabase
      .from('analytics')
      .insert({
        user_id: userId,
        sermon_id: sermonId,
        action,
        created_at: new Date().toISOString(),
      })

    // Increment view count if action is view
    if (action === 'view') {
      await supabase
        .from('sermons')
        .update({ views: supabase.rpc('increment', { row_id: sermonId, column_name: 'views' }) })
        .eq('id', sermonId)
    }
  } catch (error) {
    console.error('Error in logUserActivity:', error)
  }
}

export async function toggleFavorite(userId: string, sermonId: string): Promise<boolean> {
  try {
    const user = await getUserById(userId)
    if (!user) return false

    const isFavorited = user.favorites.includes(sermonId)
    const newFavorites = isFavorited
      ? user.favorites.filter(id => id !== sermonId)
      : [...user.favorites, sermonId]

    await updateUser(userId, { favorites: newFavorites })

    // Log analytics
    await logUserActivity(userId, 'favorite', sermonId)

    return !isFavorited
  } catch (error) {
    console.error('Error in toggleFavorite:', error)
    return false
  }
}
