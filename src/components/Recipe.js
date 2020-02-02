import React from 'react';

const Recipe =(props)=>{
   return(
        <div >
            <img  className="image-recipe"src={props.mealImg} alt={props.mealName}/>
            <h3 className="recipe__title">{props.mealName}</h3>
        </div>
    )
}




export default Recipe;