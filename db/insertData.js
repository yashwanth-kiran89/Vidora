// db/seed.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./movies.db');

const movies = [
  {
    id: 1,
    name: "Hi Nanna",
    image: "https://resizing.flixster.com/Z_sVCiKKoq71XF9N70SUjQjLqys=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzNkZjkxYWVjLTdkMzktNGQ3Yy1iMzljLTM4NWI0MTFmZjM0Zi5qcGc=",
    year: 2023,
    genres: "Family,Drama,Romance",
    embed: "https://www.youtube.com/embed/Iz97_kxHaSc",
    director: "Shouryuv",
    cast: "Nani,Mrunal Thakur,Kiara Khanna",
    synopsis: "A single father's life turns upside down when his daughter insists on finding her missing mother. As their journey unfolds through nostalgic memories, a mysterious woman enters their lives, revealing unexpected connections. This emotional drama explores the unbreakable bond between parent and child.",
    language: "Telugu"
  },
  {
    id: 2,
    name: "Squid Game 3",
    image: "https://static.posters.cz/image/750/posters/squid-game-crowd-i120012.jpg",
    year: 2025,
    genres: "Thriller,Action,Survival",
    embed: "https://www.youtube.com/embed/zgGTVaG2UiQ",
    director: "Hwang Dong-hyuk",
    cast: "Lee Jung-jae,Wi Ha-joon",
    language: "Telugu",
    synopsis: "The deadly games continue as survivors face new challenges in this dystopian thriller. Contestants must navigate more brutal competitions while uncovering the organization's dark origins. As alliances form and betrayals unfold, players discover the game's connections to global power structures."
  },
  {
    id: 3,
    name: "F1",
    image: "https://missionpodcast.co.uk/wp-content/uploads/2025/07/f1-the-movie-2.jpeg",
    year: 2025,
    genres: "Sports,Drama",
    embed: "https://www.youtube.com/embed/8yh9BPUBbbQ",
    director: "Joseph Kosinski",
    cast: "Brad Pitt,Damson Idris",
    language: "Telugu",
    synopsis: "An aging F1 champion mentors a talented rookie while facing his final racing season. Behind the glamour of the circuit, they confront corporate politics, personal demons, and life-threatening risks. High-speed action meets human drama in this adrenaline-fueled story of legacy and rivalry."
  },
  {
    id: 4,
    name: "Final Destination: Bloodlines",
    image: "https://www.dolby.com/siteassets/xf-site/content-detail-pages/fnlblo_insta_vert_dolby_1638x2048_dom.jpg",
    year: 2025,
    genres: "Horror,Thriller",
    embed: "https://www.youtube.com/embed/UWMzKXsY9A4",
    director: "Zach Lipovsky, Adam B. Stein",
    cast: "Tony Todd,Brec Bassinger",
    language: "Telugu",
    synopsis: "Death's design returns with terrifying new twists as survivors discover their fates are connected through ancestral bloodlines. A family uncovers their dark inheritance while trying to escape elaborate, gruesome demises. The iconic horror franchise evolves with interconnected destinies and creative kills."
  },
  {
    id: 5,
    name: "Mission Impossible – The Final Reckoning",
    image: "https://upload.wikimedia.org/wikipedia/en/1/1f/Mission_Impossible_%E2%80%93_The_Final_Reckoning_Poster.jpg",
    year: 2025,
    genres: "Action,Spy,Thriller",
    embed: "https://www.youtube.com/embed/2m1drlOZSDw",
    director: "Christopher McQuarrie",
    cast: "Tom Cruise,Hayley Atwell",
    language: "Telugu",
    synopsis: "Ethan Hunt faces his most personal mission yet when a global conspiracy implicates his past. The IMF team races against time to prevent worldwide catastrophe while confronting ghosts from their histories. Death-defying stunts and high-stakes espionage conclude this epic saga."
  },
  {
    id: 6,
    name: "Kannappa",
    image: "https://m.media-amazon.com/images/M/MV5BNzgzMTQ0NTgtOGRjMi00YWIxLTk0MjYtMjYwNjM4Y2I0MThjXkEyXkFqcGc@.V1.jpg",
    year: 2025,
    genres: "Mythology,Drama,Fantasy",
    embed: "https://www.youtube.com/embed/VnPFQ7nNu0U",
    director: "Mukesh Kumar Singh",
    cast: "Vishnu Manchu,Mohanlal,Prabhas",
    language: "Telugu",
    synopsis: "A divine epic following the journey of Kannappa, the legendary devotee who offered his eyes to Lord Shiva. Set in mystical ancient India, this spiritual saga blends human devotion with celestial intervention. The film explores faith, sacrifice, and the cosmic battle between divine forces."
  },
  {
    id: 7,
    name: "Kubera",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsWlfYbxVRsD0vnAAXVejJebkaOzcceEJA4w&s",
    year: 2025,
    genres: "Fantasy,Drama",
    embed: "https://www.youtube.com/embed/i2UTXe4M97Q",
    director: "Sekhar Kammula",
    cast: "Dhanush,Rashmika Mandanna,Jim Sarbh",
    language: "Telugu",
    synopsis: "In a world where wealth is magically distributed, a common man inherits the powers of the God of Wealth. As he navigates his newfound abilities, he discovers that true prosperity comes at a moral cost. This modern fable examines greed, inequality, and the meaning of true wealth."
  },
  {
    id: 8,
    name: "Eleven",
    image: "https://m.media-amazon.com/images/M/MV5BNzNkMGU4YzYtNTY1MC00MmIzLWI0ZjctMzhlMzYwZjQ3MjZjXkEyXkFqcGc@.V1.jpg",
    year: 2025,
    genres: "Sci-Fi,Thriller",
    embed: "https://www.youtube.com/embed/m-9Rj_NIztc",
    director: "TBA",
    cast: "Millie Bobby Brown (assumed),New Cast",
    language: "Telugu",
    synopsis: "A genetically enhanced young woman with telekinetic powers escapes a secret facility, only to discover her abilities are evolving dangerously. Pursued by shadowy forces, she uncovers a global conspiracy while learning to control her growing powers. This sci-fi thriller explores the ethics of human augmentation."
  },
  {
    id: 9,
    name: "Padakkalam",
    image: "https://m.media-amazon.com/images/M/MV5BODdmMGNhZTItMWZkZi00N2MwLWE5N2YtNmE5M2I0MTE3OGU4XkEyXkFqcGc@.V1.jpg",
    year: 2025,
    genres: "Action,Drama",
    embed: "https://www.youtube.com/embed/ubVjt3eIDqA",
    director: "TBA",
    cast: "TBA",
    language: "Telugu",
    synopsis: "In a rural South Indian village, a war veteran returns home to find his community terrorized by corrupt forces. When peaceful methods fail, he organizes local youth to reclaim their rights through strategic resistance. This gritty drama celebrates grassroots revolution and social justice."
  },
  {
    id: 10,
    name: "HIT 3",
    image: "https://upload.wikimedia.org/wikipedia/en/0/09/HIT_-_The_Third_Case.jpg",
    year: 2025,
    genres: "Crime,Mystery,Thriller",
    embed: "https://www.youtube.com/embed/kAtfaaUgDRU",
    director: "Sailesh Kolanu",
    cast: "Adivi Sesh,Ruhani Sharma",
    language: "Telugu",
    synopsis: "Investigator Vikram Rudra faces his most complex case yet when a series of ritualistic murders point to a sophisticated criminal network. As clues reveal connections to his past cases, he must confront his own demons while racing against time. This psychological thriller tests the limits of justice."
  },
  {
    id: 11,
    name: "Retro",
    image: "https://m.media-amazon.com/images/M/MV5BNmE5MjE5ZmMtOTMzMi00OWE3LWFlN2YtMjhiNDI3NmYzYzIzXkEyXkFqcGc@.V1.jpg",
    year: 2025,
    genres: "Romance,Drama",
    embed: "https://www.youtube.com/embed/m-9Rj_NIztc",
    director: "TBA",
    cast: "TBA",
    language: "Telugu",
    synopsis: "A vintage radio connects two lonely souls across different time periods in this magical realism romance. Through mysterious broadcasts, they help each other navigate heartbreak and rediscover love. This unconventional love story explores how human connection transcends time and technology."
  },
  {
    id: 12,
    name: "Court",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr6JxqQvzxgg3CW1ObG2PAi9KWiFTbyupTNw&s",
    year: 2025,
    genres: "Drama,Legal",
    embed: "https://www.youtube.com/embed/0f1sgQSdoDE",
    director: "Chaitanya Tamhane",
    cast: "Vira Sathidar,Vivek Gomber",
    language: "Telugu",
    synopsis: "An idealistic lawyer takes on an unjust system when she defends a folk singer accused of inciting violence through his art. This courtroom drama exposes institutional biases while examining free speech in modern India. The film questions where justice truly resides - in courts or public conscience."
  },
  {
    id: 13,
    name: "Daaku Maharaaj",
    image: "https://m.media-amazon.com/images/M/MV5BOTFjYWUwOGEtZjhkNS00MmZhLWE3NTMtNzhlMTE3MDRjOWYzXkEyXkFqcGc@.V1.jpg",
    year: 2025,
    genres: "Action,Historical,Drama",
    embed: "https://www.youtube.com/embed/fNDRSver0uM",
    director: "TBA",
    cast: "TBA",
    language: "Telugu",
    synopsis: "Set in pre-independence India, this historical epic follows the legendary bandit king who robbed colonial officials to fund rebellion. As British forces close in, he must choose between personal freedom and national liberation. A gripping tale of resistance against imperial oppression."
  },
  {
    id: 14,
    name: "Aay",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPDYhe69gc-0Z0gPxuBcuMlOEwfpnCEVpAaA&s",
    year: 2024,
    genres: "Thriller,Action",
    embed: "https://www.youtube.com/embed/rrpBEIuiyKU",
    director: "TBA",
    cast: "TBA",
    language: "Telugu",
    synopsis: "A special forces operative goes rogue after discovering his unit's involvement in civilian massacres. Hunted by former allies, he races to expose the conspiracy while protecting evidence. This high-octane thriller blurs lines between patriotism and war crimes."
  },
  {
    id: 15,
    name: "Premalu",
    image: "https://popcornreviewss.com/wp-content/uploads/2024/02/Premalu-2024-Malayalam-Movie-Review.jpg",
    year: 2024,
    genres: "Romantic Comedy",
    embed: "https://www.youtube.com/embed/tQyEDwnwwsA",
    director: "Girish A.D.",
    cast: "Naslen,Mamitha Baiju",
    language: "Telugu",
    synopsis: "Two commitment-phobic millennials navigate modern dating when they accidentally become neighbors. Their hilarious misunderstandings evolve into genuine connection as they help each other through career crises and family pressures. This fresh rom-com celebrates love in the age of dating apps."
  },
  {
    id: 16,
    name: "Amaran",
    image: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/amaran-et00417203-1729696593.jpg",
    year: 2024,
    genres: "Action,Biography,Drama",
    embed: "https://www.youtube.com/embed/U3aPapvUihg",
    director: "Rajkumar Periasamy",
    cast: "Sivakarthikeyan,Sai Pallavi",
    language: "Telugu",
    synopsis: "Based on the true story of Major Mukund Varadarajan, a hero of the 2010 anti-terror operations in Kashmir. The film portrays his courageous final stand against terrorists to protect civilians. A tribute to military sacrifice and valor that honors India's armed forces."
  },
  {
    id: 17,
    name: "Manamey",
    image: "https://m.media-amazon.com/images/M/MV5BZmE2YWUyZmYtZWM4Ni00NTgxLWI2MmQtZjdlODNiYjUxNDRiXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg",
    year: 2024,
    genres: "Romance,Comedy,Drama",
    embed: "https://www.youtube.com/embed/3zOCInbXzy8",
    director: "Sriram Adittya",
    cast: "Sharwanand,Krithi Shetty",
    language: "Telugu",
    synopsis: "A divorced man's life complicates when he falls for his daughter's teacher while co-parenting with his ex-wife. This mature romantic comedy explores second chances at love, modern family dynamics, and parenting in contemporary India. Heartwarming and relatable."
  },
  {
    id: 18,
    name: "Salaar",
    image: "https://m.media-amazon.com/images/M/MV5BNTU0ZjYxOWItOWViMC00YWVlLWJlMGUtZjc1YWU0NTlhY2ZhXkEyXkFqcGc@.V1.jpg",
    year: 2023,
    genres: "Action,Thriller,Drama",
    embed: "https://www.youtube.com/embed/b0fPciW_uco",
    director: "Prashanth Neel",
    cast: "Prabhas,Shruti Haasan,Jagapathi Babu",
    language: "Telugu",
    synopsis: "A violent gang leader's promise to a dying friend draws him back into the criminal underworld he abandoned. As old rivalries reignite, he must protect a childhood friend now caught in the crossfire. Epic action sequences drive this story of loyalty and redemption."
  },
  {
    id: 19,
    name: "Kalki 2898 AD",
    image: "https://m.media-amazon.com/images/M/MV5BMGRjZTQ0YzUtYWJjMS00OGY1LTkwNjMtYjYwZmFmNTY3MGZkXkEyXkFqcGc@._V1_.jpg",
    year: 2024,
    genres: "Action,Sci‑Fi,Thriller,Epic",
    embed: "https://www.youtube.com/embed/y1-w1kUGuz8",
    director: "Nag Ashwin",
    cast: "Prabhas,Amitabh Bachchan,Kamal Haasan,Deepika Padukone,Disha Patani",
    language: "Telugu",
    synopsis: "Set in a dystopian 2898 AD, a group must protect the unborn avatar Kalki—carried by a lab subject—against oppressive forces, leading to an epic war blending mythology and futuristic warfare."
  }
];

db.serialize(() => {
  const stmt = db.prepare(`INSERT INTO movies 
    (name, image, year, genres, embed, director, cast, synopsis, language)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`);

  movies.forEach(movie => {
    stmt.run(
      movie.name,
      movie.image,
      movie.year,
      movie.genres,
      movie.embed,
      movie.director,
      movie.cast,
      movie.synopsis,
      movie.language
    );
  });

  stmt.finalize();
});

console.log("Seed data inserted!");
db.close();
