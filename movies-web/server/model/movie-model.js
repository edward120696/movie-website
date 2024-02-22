const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movie = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        rating: { type: Number, required: true },
        youtube: {type: String,required: true},
    },
    { timestamps: true },
)

module.exports = mongoose.model('210359345_movies', Movie)