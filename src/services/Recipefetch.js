const RECIPEINFO = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='

const fetchSingleRecipe =(id)=> fetch(RECIPEINFO+ id).then(response=> response.json());


export {fetchSingleRecipe}