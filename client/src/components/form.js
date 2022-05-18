import {useState} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getRecipesAsync } from '../redux/recipeSlice';

const Form=()=>{
const [recipe, setRecipe]=useState("");
const [results, setResults]=useState([]);
const dispatch=useDispatch();


const baseRecipeSearchUrl=`https://api.spoonacular.com/recipes/complexSearch?apiKey=a9eba9462eef4ea6a5c567435ab26b01`;

const search=()=>{
    
  /*const url=`${baseRecipeSearchUrl}&query=${recipe}`;
  axios.get(url)
  .then((response)=>{
    const data=response.data.results;
    console.log(data);
    setResults(data);
    setRecipe("");
    console.log('Data has been recieved');
  })
  .catch(()=>{
    alert('Data not recieved');
  });*/
}

    return(
        <div>
        <input value={recipe} onChange={e=>{setRecipe(e.target.value)}} />
        <button onClick={search}>Search</button>
        </div>
    )
}

export default Form;