Vidora - Movie Streaming Platform
🎬 Project Overview
Vidora is a modern movie streaming platform that allows users to discover, search, and watch movie trailers with a beautiful yellow-black themed interface.

🛠 Tech Stack
Frontend: HTML5, CSS3 (Flexbox/Grid), JavaScript (ES6+), Bootstrap 5, Font Awesome
Backend: Node.js, Express.js, SQLite
Deployment: Render.com

🚀 Quick Setup
1. Installation
npm install
node setup.js        # Create database
node insertData.js   # Add sample movies
npm start           # Run server

2. File Structure
vidora/
├── public/          # Frontend files
│   ├── index.html   # Main page
│   ├── styles.css   # All styling
│   └── front.js     # Client-side logic
├── app.js           # Express server
├── db/movies.db     # SQLite database
└── package.json     # Dependencies

🎯 Key Features
Movie Discovery - Browse trending movies with filters
Smart Search - Find movies by title
Movie Details - Full info with embedded trailers
Responsive Design - Works on all devices
Subscription Plans - Three pricing tiers

🔧 How It Works
Frontend Rendering
HTML Structure - Semantic layout with Bootstrap components
CSS Styling - Flexbox/Grid with yellow-black theme
JavaScript - Dynamic content loading from API
Carousel - Bootstrap slider with movie highlights

Backend API
javascript
// Endpoints
GET /movies          # Get all movies
GET /movies/:id      # Get specific movie
POST /movies         # Add new movie
PUT /movies/:id      # Update movie
DELETE /movies/:id   # Remove movie

Data Flow
User opens app → Loads index.html
JavaScript fetches movies from /movies API
Movies rendered in grid using template strings
Click movie → Fetches details → Shows movie page
Search/Filter → Filters client-side data

🌐 Deployment
Frontend: Static files served from public/ folder
Backend: Express.js API with SQLite database
Hosting: Render.com (automatically deploys from GitHub)

📱 Responsive Breakpoints
Mobile: < 480px
Tablet: 481px - 768px
Desktop: > 768px