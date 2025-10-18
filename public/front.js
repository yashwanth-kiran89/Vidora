const API_BASE = "http://localhost:3000"; // replace with your backend URL

let homeEl = document.getElementById("Home");  
let aboutPageEl = document.getElementById("aboutPage"); 
let moviePageEl = document.getElementById("moviePage");  
let subscribePageEl = document.getElementById("subscribePage");
let thankYouPageEl = document.getElementById("thankYouPage");
let moviesDisplayEl = document.getElementById("movieCon");

let movieLogo = document.getElementById("movieLogo") ; 
let movieName = document.getElementById("movieName"); 
let movieYear = document.getElementById("movieYear"); 
let movieGenre = document.getElementById("movieGenre"); 
let castName = document.getElementById("castName"); 
let directorName = document.getElementById("directorName"); 
let embedTrailer = document.getElementById("embedTrailer"); 
let movieDescEl = document.getElementById("movieDesc"); 

let searchEl = document.getElementById("searchInput");  
let genreFilterEl = document.getElementById("genreFilter"); 
let languageFilterEl = document.getElementById("languageFilter"); 
let filterBtnEl = document.getElementById("filterBtn"); 
let backHomeEl = document.getElementById("backHome"); 
let homeIconEl = document.getElementById("homeIcon"); 

// ---------------- FETCH ALL MOVIES ----------------
async function fetchMovies() {
    try {
        const res = await fetch(`${API_BASE}/movies`);
        const movies = await res.json();
        renderMovies(movies);
    } catch (err) {
        console.error("Error fetching movies:", err);
        moviesDisplayEl.innerHTML = "<p style='color:red'>Failed to load movies.</p>";
    }
}

// ---------------- RENDER MOVIES ----------------
function renderMovies(movies) {
    moviesDisplayEl.textContent = "";
    movies.forEach(movie => {
        const divEl = document.createElement("div");
        divEl.classList.add("movie-container");
        divEl.id = "movie" + movie.id;

        const imgEl = document.createElement("img");
        imgEl.src = movie.image;

        const pEl = document.createElement("p");
        pEl.classList.add("movie-name");
        pEl.textContent = movie.name;

        const innerCon = document.createElement("div");
        innerCon.classList.add("year");
        innerCon.textContent = movie.year;

        divEl.append(imgEl, pEl, innerCon);
        moviesDisplayEl.appendChild(divEl);

        divEl.onclick = () => openMovie(movie.id);
    });
}

// ---------------- OPEN MOVIE PAGE ----------------
async function openMovie(id) {  
    try {
        const res = await fetch(`${API_BASE}/movies/${id}`);
        const movie = await res.json();
        if (!movie) return;

        document.title = movie.name;
        homeEl.style.display = "none"; 
        moviePageEl.style.display = "block";  
        aboutPageEl.style.display = "none"; 

        movieLogo.src = movie.image;  
        movieName.textContent = movie.name; 
        movieYear.textContent = movie.year;   
        castName.textContent = "Cast : " + movie.cast.join(", ");  
        directorName.textContent = "Director : " + movie.director;
        movieGenre.textContent = movie.genres.join("/ ");
        embedTrailer.src = movie.embed;   
        movieDescEl.textContent = movie.synopsis;  

    } catch (err) {
        console.error("Error fetching movie:", err);
        alert("Failed to load movie details.");
    }
}

// ---------------- BACK HOME ----------------
function backHome(){
    homeEl.style.display = "flex"; 
    moviePageEl.style.display = "none"; 
    aboutPageEl.style.display = "none";  
    subscribePageEl.style.display = "none";
    thankYouPageEl.style.display = "none";
    document.title = "Vidora"; 
}
backHomeEl.onclick = backHome;
homeIconEl.onclick = backHome;

// ---------------- SEARCH MOVIE ----------------
async function searchMovie() {
    const searchValue = searchEl.value.trim().toLowerCase();
    if (!searchValue) return alert("OOPS! enter something to search..");

    try {
        const res = await fetch(`${API_BASE}/movies`);
        const movies = await res.json();
        const movie = movies.find(m => m.name.toLowerCase() === searchValue);
        if (movie) openMovie(movie.id);
        else alert(`OOPS! No results available for "${searchValue}"`);
        searchEl.value = "";
    } catch (err) {
        console.error("Search failed:", err);
    }
}
searchEl.addEventListener("keydown", e => e.key === "Enter" && searchMovie());

// ---------------- ABOUT PAGE ----------------
function onAbout() {
    aboutPageEl.style.display = "block"; 
    homeEl.style.display = "none"; 
    moviePageEl.style.display = "none"; 
    subscribePageEl.style.display = "none";
    thankYouPageEl.style.display = "none";
    document.title = "Vidora";
}

// ---------------- SUBSCRIBE PAGE ----------------
function onSubscribe() {
    homeEl.style.display = "none";
    moviePageEl.style.display = "none";
    aboutPageEl.style.display = "none";
    subscribePageEl.style.display = "block";
    thankYouPageEl.style.display = "none";
    document.title = "Subscribe - Vidora";
}

function buyPlan(plan) {
    alert(`You selected ${plan} plan`);
    subscribePageEl.style.display = "none";
    thankYouPageEl.style.display = "block";
    document.title = "Thank You - Vidora";
}

// ---------------- FILTER MOVIES ----------------
async function produceFilteredArray() { 
    const genre = genreFilterEl.value; 
    const language = languageFilterEl.value; 

    try {
        const res = await fetch(`${API_BASE}/movies`);
        const movies = await res.json();
        return movies.filter(m => 
            (genre === "" || m.genres.includes(genre)) &&
            (language === "" || m.language === language)
        );
    } catch (err) {
        console.error("Filter failed:", err);
        return [];
    }
}

async function onFilter(){ 
    const filtered = await produceFilteredArray();
    renderMovies(filtered);  
    document.getElementById("filteredMovies").textContent = "Filtered Movies";
}
filterBtnEl.addEventListener("click", onFilter);

// ---------------- INITIALIZE ----------------
fetchMovies();
