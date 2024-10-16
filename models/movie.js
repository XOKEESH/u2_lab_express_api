const { Schema } = require('mongoose')

const Movie = new Schema(
    {
        title: { type: String, required: true },
        runtime: { type: Number, required: true }, 
        rating: { type: Number, required: true, min: 0, max: 10 },
        yearReleased: { type: Number, required: true }, 
        description: { type: String },
        posterImage: { type: String }, 
        reviews: { type: Schema.Types.ObjectId, ref: 'Review' },
        actors: { type: Schema.Types.ObjectId, ref: 'Actor' }
    },
    { timestamps: true }
)

module.exports = Movie
