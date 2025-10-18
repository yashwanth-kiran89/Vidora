// db/setup.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./movies.db');

db.serialize(() => {
  // Create the movies table
  db.run(`CREATE TABLE IF NOT EXISTS movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    image TEXT,
    year INTEGER,
    genres TEXT,
    embed TEXT,
    director TEXT,
    cast TEXT,
    synopsis TEXT,
    language TEXT
  )`);

  console.log("Database and movies table created!");
});

db.close();
