const mongoose = require('mongoose')
const Recipe = require('./models/Recipe')
const connectToDatabase = require('./db.js')
const {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipeById,
    deleteRecipeById
} = require('./Utils/recipeUtils.js')


connectToDatabase()

const newRecipe = {
    name: "Um Ali",
    instructions: "bake at 180C",
    prepTime: 120,
    difficulty: "Medium"
}
//createRecipe(newRecipe)


//getAllRecipes()


//getRecipeById('1')
//getRecipeById('6adf3438ae6cc1a240050ed6')


//updateRecipeById('6adf3438ae6cc1a240050ed6', {prepTime: 120})
//updateRecipeById('6adf3438ae6cc1a240050ed6', {prepTime: 1200})


//deleteRecipeById('6adf37feab8747e0067350a1')
