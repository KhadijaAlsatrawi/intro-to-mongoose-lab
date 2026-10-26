const mongoose = require ('mongoose')
const dotenv = require('dotenv').config()

async function connectToDatabase(){
    try{
        await mongoose.connect(process.env.DATABASE_URI)
        console.log('Connected to the Database')
    }
    catch(err){
        console.log('ERROR:', err)
    }
}

module.exports = connectToDatabase