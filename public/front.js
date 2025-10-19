const API_BASE = window.location.hostname === 'localhost' 
    ? 'http://localhost:3000' 
    : 'https://vidorabyyashwanth89.onrender.com';

// DOM Elements
const homeEl = document.getElementById("Home");
const aboutPageEl = document.getElementById("aboutPage");
const moviePageEl = document.getElementById("moviePage");
const subscribePageEl = document.getElementById("subscribePage");
const thankYouPageEl = document.getElementById("thankYouPage");
const moviesDisplayEl = document.getElementById("movieCon");

// Movie detail elements
const movieLogo = document.getElementById("movieLogo");
const movieName = document.getElementById("movieName");
const movieYear = document.getElementById("movieYear");
const movieGenre = document.getElementById("movieGenre");
const castName = document.getElementById("castName");
const directorName = document.getElementById("directorName");
const embedTrailer = document.getElementById("embedTrailer");
const movieDescEl = document.getElementById("movieDesc");

// Filter and navigation elements
const searchEl = document.getElementById("searchInput");
const genreFilterEl = document.getElementById("genreFilter");
const languageFilterEl = document.getElementById("languageFilter");
const filterBtnEl = document.getElementById("filterBtn");
const backHomeEl = document.getElementById("backHome");
const homeIconEl = document.getElementById("homeIcon");

// State
let allMovies = [];

// Show/hide pages
function showPage(pageToShow) {
    const pages = [homeEl, moviePageEl, aboutPageEl, subscribePageEl, thankYouPageEl];
    pages.forEach(page => page.classList.add('hidden'));
    pageToShow.classList.remove('hidden');
}

// Fetch all movies
async function fetchMovies() {
    try {
        showLoading(true);
        const response = await fetch(`${API_BASE}/movies`);
        if (!response.ok) throw new Error('Failed to fetch movies');
        
        const movies = await response.json();
        allMovies = movies;
        renderMovies(movies);
    } catch (error) {
        console.error("Error fetching movies:", error);
        showError("Failed to load movies. Please refresh the page.");
    } finally {
        showLoading(false);
    }
}

// Render movies to the grid
function renderMovies(movies) {
    if (!movies.length) {
        moviesDisplayEl.innerHTML = '<p class="no-movies">No movies found</p>';
        return;
    }

    moviesDisplayEl.innerHTML = movies.map(movie => `
        <div class="movie-container" onclick="openMovie(${movie.id})">
            <img src="${movie.image}" alt="${movie.name}" loading="lazy">
            <p class="movie-name">${movie.name}</p>
            <div class="year">${movie.year}</div>
        </div>
    `).join('');
}

// Open movie details
async function openMovie(id) {
    try {
        showLoading(true);
        const movie = await fetchMovieById(id);
        if (!movie) return;

        document.title = movie.name;
        showPage(moviePageEl);
        
        // Update movie details
        movieLogo.src = movie.image;
        movieLogo.alt = movie.name;
        movieName.textContent = movie.name;
        movieYear.textContent = movie.year;
        castName.textContent = `Cast: ${movie.cast.join(", ")}`;
        directorName.textContent = `Director: ${movie.director}`;
        movieGenre.textContent = movie.genres.join(" / ");
        embedTrailer.src = movie.embed;
        movieDescEl.textContent = movie.synopsis;
        
    } catch (error) {
        console.error("Error opening movie:", error);
        alert("Failed to load movie details.");
    } finally {
        showLoading(false);
    }
}

// Fetch single movie by ID
async function fetchMovieById(id) {
    try {
        const response = await fetch(`${API_BASE}/movies/${id}`);
        if (!response.ok) throw new Error('Failed to fetch movie');
        return await response.json();
    } catch (error) {
        console.error("Error fetching movie:", error);
        return null;
    }
}

// Search functionality
async function searchMovie() {
    const searchValue = searchEl.value.trim().toLowerCase();
    if (!searchValue) {
        alert("Please enter a movie name to search");
        return;
    }

    const movie = allMovies.find(m => 
        m.name.toLowerCase().includes(searchValue)
    );
    
    if (movie) {
        openMovie(movie.id);
        searchEl.value = "";
    } else {
        alert(`No results found for "${searchValue}"`);
    }
}

// Filter movies
async function onFilter() {
    const genre = genreFilterEl.value;
    const language = languageFilterEl.value;

    const filtered = allMovies.filter(movie => 
        (genre === "" || movie.genres.includes(genre)) &&
        (language === "" || movie.language === language)
    );
    
    renderMovies(filtered);
    document.getElementById("filteredMovies").textContent = 
        filtered.length ? "Filtered Movies" : "No Movies Found";
}

// Navigation functions
function backHome() {
    document.title = "Vidora";
    showPage(homeEl);
    searchEl.value = "";
    // Reset filters and show all movies
    genreFilterEl.value = "";
    languageFilterEl.value = "";
    renderMovies(allMovies);
    document.getElementById("filteredMovies").textContent = "Trending Movies";
}

function onAbout() {
    document.title = "About - Vidora";
    showPage(aboutPageEl);
}

function onSubscribe() {
    document.title = "Subscribe - Vidora";
    showPage(subscribePageEl);
}

function buyPlan(plan) {
    alert(`Thank you for choosing ${plan} plan!`);
    document.title = "Welcome to Vidora!";
    showPage(thankYouPageEl);
}

// UI helpers
function showLoading(show) {
    // Simple loading state - you can enhance this with a spinner
    if (show) {
        moviesDisplayEl.innerHTML = '<p>Loading movies...</p>';
    }
}

function showError(message) {
    moviesDisplayEl.innerHTML = `<p style="color: #ff6b6b; text-align: center; padding: 20px;">${message}</p>`;
}

// Event listeners when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    backHomeEl.addEventListener('click', backHome);
    homeIconEl.addEventListener('click', backHome);
    
    // Search
    searchEl.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') searchMovie();
    });
    
    // Filters
    filterBtnEl.addEventListener('click', onFilter);
    
    // Load movies
    fetchMovies();
});

// Make functions available globally
window.openMovie = openMovie;
window.onAbout = onAbout;
window.onSubscribe = onSubscribe;
window.buyPlan = buyPlan;
window.backHome = backHome;
window.searchMovie = searchMovie;