const db = require('../db')
const { Movie, Review } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const movies = await Movie.find({})

    const reviews = [
        {
            score: 9,
            comment: 'An incredible journey through the struggles of life in the slums.',
            movie: movies[0]._id 
        },
        {
            score: 8,
            comment: 'A brilliant depiction of crime and photography.',
            movie: movies[0]._id
        },
        {
            score: 10,
            comment: 'A mind-bending masterpiece that challenges reality.',
            movie: movies[1]._id
        },
        {
            score: 9,
            comment: 'Stunning visuals and an amazing concept!',
            movie: movies[1]._id
        },
        {
            score: 10,
            comment: 'A timeless story of hope and friendship.',
            movie: movies[2]._id
        },
        {
            score: 9,
            comment: 'Brilliantly acted and beautifully written.',
            movie: movies[2]._id
        }
    ]

    await Review.insertMany(reviews)
    console.log('Created Reviews!')
}

const run = async () => {
    await main()
    db.close()
}

run()