const { Schema } = require('mongoose')

const Actor = new Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        isAlive: { type: Boolean, default: true },
        biography: { type: String },
        profileImage: { type: String }, 
        movies: { type: Schema.Types.ObjectId, ref: 'Movie' }
    },
    { timestamps: true }
)

module.exports = Actor
