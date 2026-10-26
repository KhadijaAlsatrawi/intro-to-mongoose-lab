async function createRecipe(newRecipe) {
    try {
        const createsRecipe = await Recipe.create(newRecipe)
        console.log(createsRecipe)
    }
    catch (err) {
        console.log('ERROR: ', err)
    }
}

async function getAllRecipes() {
    try {
        const allRecipes = await Recipe.find()
        //console.log(allRecipes)

        for (const recipe of allRecipes) {
            console.log(`${recipe.name} is an ${recipe.difficulty} recipe and takes ${recipe.prepTime} minutes to prepare.`)
        }
    } catch (err) {
        console.log('EROOR: ', err)
    }
}

async function getRecipeById(id) {
    try {
        const foundRecipe = await Recipe.findById(id)
        console.log(foundRecipe)
    }
    catch (err) {
        console.log("No recipe with this ID exists.")
    }
}

async function updateRecipeById(recipeId, newRecipeData){
    try{
        const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, newRecipeData, {new: true})
        console.log(updatedRecipe)
    }
    catch(err){
        console.log('ERROR: ', err)
    }
}

async function deleteRecipeById(id){
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(id)
        console.log(deletedRecipe)
    } 
    catch (err) {
        console.log('ERROR: ', err)
    }
}

//exports
module.exports = {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipeById,
    deleteRecipeById
}
