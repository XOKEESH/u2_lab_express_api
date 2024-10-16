const db = require('../db')
const { Movie } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const movies = [
        {
            title: 'City of God',
            runtime: 130,
            rating: 8.6,
            yearReleased: 2002,
            description: 'In the slums of Rio, two kids paths diverge as one struggles to become a photographer and the other a kingpin.',
            posterImage: 'https://media.s-bol.com/gLkOzkj2GovG/550x795.jpg'
        }, 
        {
            title: 'Inception',
            runtime: 148,
            rating: 8.8,
            yearReleased: 2010,
            description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
            posterImage: 'https://m.media-amazon.com/images/I/912AErFSBHL._AC_UF894,1000_QL80_.jpg'
        }, 
        {
            title: 'The Shawshank Redemption',
            runtime: 142,
            rating: 9.3,
            yearReleased: 1994,
            description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
            posterImage: 'https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg'
        }, 
        {
            title: 'Forrest Gump',
            runtime: 142,
            rating: 8.8,
            yearReleased: 1994,
            description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold through the perspective of an Alabama man.',
            posterImage: 'https://resizing.flixster.com/hqcqFfWf1syt2OrGlbW7LDvfj9Y=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15829_v_v13_aa.jpg'
        },
        {
            title: 'The Parent Trap',
            runtime: 128,
            rating: 6.5,
            yearReleased: 1998,
            description: 'Identical twins Annie and Hallie, separated at birth, meet at a summer camp and plot to reunite their divorced parents.',
            posterImage: 'https://m.media-amazon.com/images/M/MV5BNTRkYmY3Y2QtMGM2Ny00MTNmLTk4NjYtNjMwNTNmMGY5ZDllXkEyXkFqcGc@._V1_.jpg'
        }
    ]

    await Movie.insertMany(movies)
    console.log('Created Movies!')
}

const run = async () => {
    await main()
    
    db.close()
}

run()