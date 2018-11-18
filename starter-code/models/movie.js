const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: { type: String, unique: true},
    genre: {type: String, default: 'Unknown'},
    plot: String
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;