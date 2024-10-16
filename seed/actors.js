const db = require('../db')
const { Actor } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    const actors = [
        {
            name: 'Leonardo DiCaprio',
            age: 49,
            isAlive: true,
            image: 'https://www.nme.com/wp-content/uploads/2016/10/2011LeonardoDiCaprioPA030112-2.jpg'
        },
        {
            name: 'Natalie Portman',
            age: 43,
            isAlive: true,
            image: 'https://m.media-amazon.com/images/M/MV5BNjk1M2RmODAtMjE0Ny00N2U0LWIwNWYtZTAxMDFiMzk1MjU5XkEyXkFqcGc@._V1_.jpg'
        },
        {
            name: 'Morgan Freeman',
            age: 87,
            isAlive: true,
            image: 'https://www.looper.com/img/gallery/the-15-best-morgan-freeman-movies-according-to-imdb/l-intro-1646983980.jpg'
        },
        {
            name: 'Meryl Streep',
            age: 75,
            isAlive: true,
            image: 'https://m.media-amazon.com/images/M/MV5BMTU4Mjk5MDExOF5BMl5BanBnXkFtZTcwOTU1MTMyMw@@._V1_.jpg'
        },
        {
            name: 'Tom Hanks',
            age: 68,
            isAlive: true,
            image: 'https://cdn.aarp.net/content/dam/aarp/entertainment/celebrities/2019/10/1140-tom-hanks-atm.jpg'
        }
    ]

    await Actor.insertMany(actors)
    console.log('Created Actors!')
}

const run = async () => {
    await main()
    db.close()
}

run()
