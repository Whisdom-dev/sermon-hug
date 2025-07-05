-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create tables
CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS preachers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  title VARCHAR(255),
  church VARCHAR(255),
  location VARCHAR(255),
  bio TEXT,
  avatar TEXT,
  followers INTEGER DEFAULT 0,
  sermons INTEGER DEFAULT 0,
  specialties TEXT[] DEFAULT '{}',
  join_date DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS sermons (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  preacher VARCHAR(255) NOT NULL,
  duration VARCHAR(50) NOT NULL,
  date DATE NOT NULL,
  type VARCHAR(10) NOT NULL CHECK (type IN ('audio', 'video')),
  category VARCHAR(255) NOT NULL,
  description TEXT,
  audio_url TEXT,
  video_url TEXT,
  thumbnail TEXT,
  downloads INTEGER DEFAULT 0,
  views INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  avatar TEXT,
  favorites UUID[] DEFAULT '{}',
  downloads UUID[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS analytics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  sermon_id UUID REFERENCES sermons(id) ON DELETE CASCADE,
  action VARCHAR(20) NOT NULL CHECK (action IN ('view', 'download', 'favorite')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_sermons_type ON sermons(type);
CREATE INDEX IF NOT EXISTS idx_sermons_category ON sermons(category);
CREATE INDEX IF NOT EXISTS idx_sermons_preacher ON sermons(preacher);
CREATE INDEX IF NOT EXISTS idx_sermons_date ON sermons(date);
CREATE INDEX IF NOT EXISTS idx_sermons_created_at ON sermons(created_at);
CREATE INDEX IF NOT EXISTS idx_analytics_sermon_id ON analytics(sermon_id);
CREATE INDEX IF NOT EXISTS idx_analytics_user_id ON analytics(user_id);
CREATE INDEX IF NOT EXISTS idx_analytics_action ON analytics(action);
CREATE INDEX IF NOT EXISTS idx_analytics_created_at ON analytics(created_at);

-- Create functions for incrementing counters
CREATE OR REPLACE FUNCTION increment_downloads(sermon_id UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE sermons 
  SET downloads = downloads + 1 
  WHERE id = sermon_id;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION increment_views(sermon_id UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE sermons 
  SET views = views + 1 
  WHERE id = sermon_id;
END;
$$ LANGUAGE plpgsql;

-- Create function to add sermon to user's favorites
CREATE OR REPLACE FUNCTION add_to_favorites(user_id UUID, sermon_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  UPDATE users 
  SET favorites = array_append(favorites, sermon_id)
  WHERE id = user_id AND NOT (sermon_id = ANY(favorites));
  
  RETURN FOUND;
END;
$$ LANGUAGE plpgsql;

-- Create function to remove sermon from user's favorites
CREATE OR REPLACE FUNCTION remove_from_favorites(user_id UUID, sermon_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  UPDATE users 
  SET favorites = array_remove(favorites, sermon_id)
  WHERE id = user_id;
  
  RETURN FOUND;
END;
$$ LANGUAGE plpgsql;

-- Create function to add sermon to user's downloads
CREATE OR REPLACE FUNCTION add_to_downloads(user_id UUID, sermon_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  UPDATE users 
  SET downloads = array_append(downloads, sermon_id)
  WHERE id = user_id AND NOT (sermon_id = ANY(downloads));
  
  RETURN FOUND;
END;
$$ LANGUAGE plpgsql;

-- Insert some sample data
INSERT INTO categories (name, description) VALUES
  ('Faith', 'Sermons about faith and belief'),
  ('Purpose', 'Sermons about finding and living your purpose'),
  ('Healing', 'Sermons about divine healing and restoration'),
  ('Grace', 'Sermons about God''s grace and mercy'),
  ('Mission', 'Sermons about the Great Commission and evangelism'),
  ('Warfare', 'Sermons about spiritual warfare and victory')
ON CONFLICT (name) DO NOTHING;

INSERT INTO preachers (name, title, church, location, bio, specialties) VALUES
  ('John Smith', 'Senior Pastor', 'Grace Community Church', 'New York, NY', 'A passionate preacher with over 20 years of ministry experience.', ARRAY['Faith', 'Purpose']),
  ('Sarah Johnson', 'Reverend', 'Hope Fellowship', 'Los Angeles, CA', 'Dedicated to spreading the gospel and helping people find their purpose.', ARRAY['Purpose', 'Healing']),
  ('Michael Brown', 'Bishop', 'Divine Grace Cathedral', 'Chicago, IL', 'Leading a congregation focused on divine healing and restoration.', ARRAY['Healing', 'Grace']),
  ('David Wilson', 'Pastor', 'Mercy Church', 'Houston, TX', 'Teaching about God''s grace and mercy in everyday life.', ARRAY['Grace', 'Faith']),
  ('Mary Davis', 'Reverend', 'Mission Church', 'Phoenix, AZ', 'Committed to fulfilling the Great Commission and spreading the gospel.', ARRAY['Mission', 'Purpose']),
  ('James Miller', 'Pastor', 'Victory Church', 'Philadelphia, PA', 'Helping believers understand and engage in spiritual warfare.', ARRAY['Warfare', 'Faith'])
ON CONFLICT DO NOTHING;

-- Insert sample sermons
INSERT INTO sermons (title, preacher, duration, date, type, category, description, downloads, views) VALUES
  ('The Power of Faith', 'John Smith', '45:30', '2024-01-15', 'audio', 'Faith', 'Discover the transformative power of faith in your daily life.', 1250, 3200),
  ('Walking in Purpose', 'Sarah Johnson', '38:45', '2024-01-12', 'video', 'Purpose', 'Learn how to identify and walk in your God-given purpose.', 890, 2100),
  ('Divine Healing', 'Michael Brown', '52:15', '2024-01-10', 'audio', 'Healing', 'Experience the healing power of God in your life.', 2100, 4500),
  ('Grace and Mercy', 'David Wilson', '42:20', '2024-01-08', 'audio', 'Grace', 'Understanding God''s grace and mercy in difficult times.', 567, 1200),
  ('The Great Commission', 'Mary Davis', '35:10', '2024-01-05', 'video', 'Mission', 'Your role in fulfilling the Great Commission.', 423, 980),
  ('Spiritual Warfare', 'James Miller', '48:30', '2024-01-03', 'audio', 'Warfare', 'Understanding and engaging in spiritual warfare.', 789, 1800)
ON CONFLICT DO NOTHING;

-- Set up Row Level Security (RLS)
ALTER TABLE sermons ENABLE ROW LEVEL SECURITY;
ALTER TABLE preachers ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Sermons: Anyone can read, only authenticated users can create/update/delete
CREATE POLICY "Sermons are viewable by everyone" ON sermons FOR SELECT USING (true);
CREATE POLICY "Users can insert sermons" ON sermons FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Users can update sermons" ON sermons FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Users can delete sermons" ON sermons FOR DELETE USING (auth.role() = 'authenticated');

-- Preachers: Anyone can read, only authenticated users can create/update/delete
CREATE POLICY "Preachers are viewable by everyone" ON preachers FOR SELECT USING (true);
CREATE POLICY "Users can insert preachers" ON preachers FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Users can update preachers" ON preachers FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Users can delete preachers" ON preachers FOR DELETE USING (auth.role() = 'authenticated');

-- Users: Users can only access their own data
CREATE POLICY "Users can view own profile" ON users FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON users FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON users FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can delete own profile" ON users FOR DELETE USING (auth.uid() = id);

-- Analytics: Users can only access their own analytics
CREATE POLICY "Users can view own analytics" ON analytics FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert analytics" ON analytics FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Categories: Anyone can read, only authenticated users can create/update/delete
CREATE POLICY "Categories are viewable by everyone" ON categories FOR SELECT USING (true);
CREATE POLICY "Users can insert categories" ON categories FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Users can update categories" ON categories FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Users can delete categories" ON categories FOR DELETE USING (auth.role() = 'authenticated'); 