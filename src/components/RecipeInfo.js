import React from 'react';
import {Link} from 'react-router-dom';
import batidor from '../images/batidor.svg';
import kilogramos from '../images/kilogramos.svg';
import dieta from '../images/dieta.svg';
import facebook from '../images/facebook.svg';
import gorjeo from '../images/gorjeo.svg';
import home from '../images/home.svg'



const RecipeInfo =props=>{
    const ingredients =props.recipeInfo;
    const valueIngredients= Object.values(ingredients)
    const ingredientsMeasures= valueIngredients.slice(29,48)
    const ingredientsNames= valueIngredients.slice(9, 28)
    const recipeURL = window.location.href;
    const mesaggeTwitter = encodeURIComponent('Deliciosa receta');
    const twitterHashtag= encodeURIComponent('yummy')
    return(
        <div className="recipe-info-wrapper">
            <div className="header__recipeInfo">
                <h2>{ingredients.strMeal}</h2>
                <div className="social__container">
                    <a className="social__link" href={`https://twitter.com/intent/tweet?text=${mesaggeTwitter}&url=${recipeURL}&hashtags=${twitterHashtag}`} id="twitterBtn" target="_blank" rel="noopener noreferrer"><img  className="image_link"src={gorjeo} alt="compartir en twitter"/></a>
                    <a className="social__link" target="_blank" href={`https://www.facebook.com/sharer.php?u=${recipeURL}`} rel="noopener noreferrer"><img className="image_link" src={facebook} alt="compartir en facebook"/></a>
                    <Link className="recipe-info-btn" to='/' onClick={props.clearInput}><img className="image_link" src={home} alt="volver atras"/></Link>
                </div>
            </div>
                <div className="recipe-info-title">
                    <div className="recipe-image__container">
                        <img className="recipe__info-img"  src={ingredients.strMealThumb} alt={ingredients.strMeal}/>
                    </div>
                <ul className="ingredients__container"> 
                    <li className="ingredients__list">
                    <img className="icon__recipe" src={kilogramos} alt="measures"/>
                    {ingredientsMeasures.map((measure, index)=> <span key={index}>{measure}</span>)}
                    </li>
                    <li className="ingredients__list">
                    <img className="icon__recipe" src={dieta} alt="measures"/>
                    {ingredientsNames.map((ingredient, index)=><span key={index}>{ingredient}</span>)}
                    </li>
                </ul>
                </div>
                <p className="recipe__text"><img className="icon__recipe" src={batidor} alt="measures"/>{ingredients.strInstructions}</p>
        </div>
    )
}



export default RecipeInfo;