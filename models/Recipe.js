const mongoose = require ('mongoose')

//schema
const newSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100
    },
    instructions:{
        type: [String],
    },
    prepTime:{
        type: Number,
        required: true,
        min: 5,
        max: 500
    },
    difficulty:{
        type: String,
        enum: ['Easy', 'Medium', 'Hard']
    }
},{timestamps: true})

//model
const Recipe = mongoose.model('Recipe', newSchema)

module.exports = Recipe