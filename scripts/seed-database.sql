-- Database schema for the sermon platform

-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    avatar_url TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Preachers table
CREATE TABLE preachers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    title VARCHAR(255),
    church VARCHAR(255),
    location VARCHAR(255),
    bio TEXT,
    avatar_url TEXT,
    followers INTEGER DEFAULT 0,
    specialties TEXT[],
    join_date DATE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Categories table
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    icon VARCHAR(50),
    color VARCHAR(50),
    created_at TIMESTAMP DEFAULT NOW()
);

-- Sermons table
CREATE TABLE sermons (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(500) NOT NULL,
    description TEXT,
    preacher_id UUID REFERENCES preachers(id),
    category_id UUID REFERENCES categories(id),
    type VARCHAR(10) CHECK (type IN ('audio', 'video')),
    duration VARCHAR(20),
    audio_url TEXT,
    video_url TEXT,
    thumbnail_url TEXT,
    file_size BIGINT,
    downloads INTEGER DEFAULT 0,
    views INTEGER DEFAULT 0,
    published_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- User favorites
CREATE TABLE user_favorites (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    sermon_id UUID REFERENCES sermons(id),
    created_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(user_id, sermon_id)
);

-- Download logs
CREATE TABLE download_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    sermon_id UUID REFERENCES sermons(id),
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Analytics events
CREATE TABLE analytics_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_type VARCHAR(50) NOT NULL,
    sermon_id UUID REFERENCES sermons(id),
    user_id UUID REFERENCES users(id),
    metadata JSONB,
    ip_address INET,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for better performance
CREATE INDEX idx_sermons_type ON sermons(type);
CREATE INDEX idx_sermons_category ON sermons(category_id);
CREATE INDEX idx_sermons_preacher ON sermons(preacher_id);
CREATE INDEX idx_sermons_published ON sermons(published_at);
CREATE INDEX idx_analytics_events_type ON analytics_events(event_type);
CREATE INDEX idx_analytics_events_sermon ON analytics_events(sermon_id);

-- Insert sample data
INSERT INTO categories (name, description, icon, color) VALUES
('Faith', 'Messages about building unwavering faith', '🙏', 'from-blue-500 to-blue-600'),
('Healing', 'Powerful testimonies and teachings on divine healing', '✨', 'from-green-500 to-green-600'),
('Purpose', 'Discover God''s unique plan for your life', '🎯', 'from-purple-500 to-purple-600');

INSERT INTO preachers (name, title, church, location, bio, specialties, join_date) VALUES
('Pastor John Smith', 'Senior Pastor', 'Grace Community Church', 'Lagos, Nigeria', 
 'Pastor John has been in ministry for over 20 years', 
 ARRAY['Faith', 'Healing', 'Leadership'], '2018-01-01');
