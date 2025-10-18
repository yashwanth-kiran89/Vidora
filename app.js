// app.js
const express = require('express')
const { open } = require('sqlite')
const sqlite3 = require('sqlite3')
const path = require('path') 
const cors = require('cors'); 


const app = express()
app.use(express.json()) 
app.use(cors()); 

let db = null

// Initialize DB and Server
const initializeAndStartServer = async () => {
  try {
    db = await open({
      filename: path.join(__dirname, './db/movies.db'),
      driver: sqlite3.Database,
    })

    app.listen(3000, () => {
      console.log('Server running at http://localhost:3000')
    })
  } catch (e) {
    console.error(`DB Error: ${e.message}`)
    process.exit(1)
  }
}

initializeAndStartServer()

// GET all movies
app.get('/movies/', async (req, res) => {
  const query = `SELECT * FROM movies ORDER BY id;`
  const movies = await db.all(query)
  // Convert CSV strings back to arrays
  const formatted = movies.map(m => ({
    ...m,
    genres: m.genres.split(','),
    cast: m.cast.split(','),
  }))
  res.send(formatted)
})

// GET movie by ID
app.get('/movies/:id/', async (req, res) => {
  const { id } = req.params
  const query = `SELECT * FROM movies WHERE id = ?;`
  const movie = await db.get(query, [id])
  if (movie) {
    movie.genres = movie.genres.split(',')
    movie.cast = movie.cast.split(',')
    res.send(movie)
  } else {
    res.status(404).send({ error: 'Movie not found' })
  }
})

// POST a new movie
app.post('/movies/', async (req, res) => {
  const { name, image, year, genres, embed, director, cast, synopsis, language } = req.body
  const query = `
    INSERT INTO movies (name, image, year, genres, embed, director, cast, synopsis, language)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
  `
  await db.run(query, [
    name,
    image,
    year,
    genres.join(','),
    embed,
    director,
    cast.join(','),
    synopsis,
    language,
  ])
  res.send({ message: 'Movie added successfully' })
})

// PUT update a movie
app.put('/movies/:id/', async (req, res) => {
  const { id } = req.params
  const { name, image, year, genres, embed, director, cast, synopsis, language } = req.body
  const query = `
    UPDATE movies
    SET name = ?, image = ?, year = ?, genres = ?, embed = ?, director = ?, cast = ?, synopsis = ?, language = ?
    WHERE id = ?;
  `
  await db.run(query, [
    name,
    image,
    year,
    genres.join(','),
    embed,
    director,
    cast.join(','),
    synopsis,
    language,
    id,
  ])
  res.send({ message: 'Movie updated successfully' })
})

// DELETE a movie
app.delete('/movies/:id/', async (req, res) => {
  const { id } = req.params
  const query = `DELETE FROM movies WHERE id = ?;`
  await db.run(query, [id])
  res.send({ message: 'Movie deleted successfully' })
})

module.exports = app
