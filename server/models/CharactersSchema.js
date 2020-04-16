// characters schema

// reference mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define CharactersSchema
const CharactersSchema = new Schema(
    {
        name : String,
        gender : String,
        age :Number
    }
);

// export
module.exports = mongoose.model('characters200416',CharactersSchema);