const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Actor, Movie, Review } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('This is root!')
})

// Index route for Movies
app.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.find({})
        res.json(movies)
    } catch (e) {
        console.error(e)
        res.status(500).send('Error retrieving movies')
    }
})

// Show route for Movies
app.get('/movies/:id', async (req, res) => {
    try {
        const { id } = req.params
        const movie = await Movie.findById(id)
        if (!movie) throw Error('404 Movie not found')
        res.json(movie)
    } catch (e) {
        console.error(e)
        res.status(404).send('Movie not found')
    }
})

// Index route for Actors
app.get('/actors', async (req, res) => {
    try {
        const actors = await Actor.find({})
        res.json(actors)
    } catch (e) {
        console.error(e)
        res.status(500).send('Error retrieving actors')
    }
})

// Show route for Actors
app.get('/actors/:id', async (req, res) => {
    try {
        const { id } = req.params
        const actor = await Actor.findById(id)
        if (!actor) throw Error('404 Actor not found')
        res.json(actor)
    } catch (e) {
        console.error(e)
        res.status(404).send('Actor not found')
    }
})

// Index route for Reviews
app.get('/reviews', async (req, res) => {
    try {
        const reviews = await Review.find({})
        res.json(reviews)
    } catch (e) {
        console.error(e)
        res.status(500).send('Error retrieving reviews')
    }
})

// Show route for Reviews
app.get('/reviews/:id', async (req, res) => {
    try {
        const { id } = req.params
        const review = await Review.findById(id)
        if (!review) throw Error('404 Review not found')
        res.json(review)
    } catch (e) {
        console.error(e)
        res.status(404).send('Review not found')
    }
})

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})