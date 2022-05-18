import React, {useState} from 'react';

const DisplayedRecipe=({displayedRecipe, displayedRecipeIngredients})=>{

    return (<div>
        <p>{displayedRecipe[0].title}</p>
        <img src={displayedRecipe[0].image}></img>
        <ul>
        {displayedRecipeIngredients.map((item)=>(
            <li>{item}</li>
        ))}
        </ul>
        </div>)
   
}

export default DisplayedRecipe;