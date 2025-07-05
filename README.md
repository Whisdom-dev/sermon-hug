# Sermon Hug - Sermon Download Platform

A modern web application for downloading and streaming audio and video sermons from renowned preachers worldwide.

## Features

- **Sermon Library**: Browse thousands of audio and video sermons
- **Search & Filter**: Find sermons by preacher, category, or keyword
- **User Authentication**: Secure login and registration with Supabase Auth
- **User Profiles**: Track favorites, downloads, and activity
- **Analytics**: Monitor sermon views, downloads, and user engagement
- **Responsive Design**: Modern UI that works on all devices
- **Real-time Updates**: Live data with Supabase real-time subscriptions

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **Backend**: Next.js API routes
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **File Storage**: Supabase Storage (for audio/video files)
- **State Management**: React Query (planned)

## Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm
- Supabase account

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd sermon-hug
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Set Up Supabase

1. Create a new project at [https://supabase.com/](https://supabase.com/)
2. Go to Project Settings > API
3. Copy your Project URL and anon public key
4. Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url-here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key-here
```

### 4. Set Up Database Schema

1. In your Supabase dashboard, go to the SQL Editor
2. Copy and paste the contents of `supabase/schema.sql`
3. Run the SQL script to create all tables, indexes, and sample data

### 5. Configure Authentication

1. In Supabase dashboard, go to Authentication > Settings
2. Configure your site URL (e.g., `http://localhost:3000` for development)
3. Set up email templates if desired
4. Configure any additional auth providers (Google, GitHub, etc.) if needed

### 6. Set Up Storage (Optional)

1. In Supabase dashboard, go to Storage
2. Create a new bucket called `sermons`
3. Set up RLS policies for the bucket:

```sql
-- Allow authenticated users to upload files
CREATE POLICY "Users can upload sermons" ON storage.objects
FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Allow everyone to view files
CREATE POLICY "Anyone can view sermons" ON storage.objects
FOR SELECT USING (true);
```

### 7. Run the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
sermon-hug/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication endpoints
│   │   ├── sermons/       # Sermon management
│   │   ├── preachers/     # Preacher data
│   │   ├── categories/    # Category management
│   │   └── analytics/     # User activity tracking
│   ├── audio/             # Audio sermon pages
│   ├── video/             # Video sermon pages
│   ├── preachers/         # Preacher profile pages
│   └── categories/        # Category listing pages
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── audio-player.tsx  # Audio playback component
│   └── video-player.tsx  # Video playback component
├── lib/                  # Utility functions
│   ├── database.ts       # Supabase client and queries
│   ├── types.ts          # TypeScript type definitions
│   └── utils.ts          # Helper functions
├── hooks/                # Custom React hooks
├── supabase/             # Database schema and migrations
│   └── schema.sql        # Complete database schema
└── public/               # Static assets
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout

### Sermons
- `GET /api/sermons` - List sermons with filtering
- `POST /api/sermons` - Create new sermon (admin)
- `GET /api/sermons/[id]` - Get sermon details
- `PUT /api/sermons/[id]` - Update sermon (admin)
- `DELETE /api/sermons/[id]` - Delete sermon (admin)

### Preachers
- `GET /api/preachers` - List preachers with filtering

### Categories
- `GET /api/categories` - List all categories

### Analytics
- `POST /api/analytics` - Log user activity

## Database Schema

The application uses the following main tables:

- **sermons**: Store sermon metadata and file URLs
- **preachers**: Preacher profiles and information
- **users**: User profiles and preferences
- **categories**: Sermon categories
- **analytics**: User activity tracking

See `supabase/schema.sql` for the complete schema with indexes and sample data.

## Development

### Adding New Features

1. **Database Changes**: Update `supabase/schema.sql` and run in Supabase
2. **API Routes**: Add new routes in `app/api/`
3. **Types**: Update `lib/types.ts` for new data structures
4. **Components**: Create reusable components in `components/`

### Code Style

- Use TypeScript for all new code
- Follow the existing component patterns
- Use Tailwind CSS for styling
- Implement proper error handling
- Add loading states for async operations

### Testing

```bash
# Run linting
pnpm lint

# Run type checking
pnpm type-check

# Run tests (when implemented)
pnpm test
```

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please open an issue in the GitHub repository or contact the development team. 