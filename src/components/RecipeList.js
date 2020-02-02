import React from 'react';
import Recipe from './Recipe'
import {Link} from 'react-router-dom'

const RecipeList =(props)=>{

    const valueInput = props.valueInput.toLowerCase();

    return(
        <ul className="list__container">
            {props.allRecipes
            .filter(recipe =>  props.valueInput === '' || recipe.strMeal.toLowerCase().includes(valueInput))
            .map(recipe=> {
                return(
                     <li  className="repipe-wrapper" key = {recipe.idMeal}>
                            <Link to={`/recipe/${recipe.idMeal}`} className="recipe__btn">
                                <Recipe
                                mealImg={recipe.strMealThumb}
                                mealName={recipe.strMeal}
                                id={recipe.idMeal}
                                />
                            </Link>
                        </li>
                    
                )}
            )}
        </ul>

    )
}

export default RecipeList;