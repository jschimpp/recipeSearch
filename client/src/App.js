import './App.css';
import Form from './components/form';
import Results from './components/results';
import DisplayedRecipe from './components/displayedRecipe';
import {useState} from 'react';
import axios from 'axios';

function App() {
const [recipe, setRecipe]=useState("");
const [results, setResults]=useState([]);
const [displayedRecipe, setDisplayedRecipe]=useState({title: ""});
const [displayedRecipeIngredients, setDisplayedRecipeIngredients]=useState([]);

const baseRecipeSearchUrl=`https://api.spoonacular.com/recipes/complexSearch?apiKey=a9eba9462eef4ea6a5c567435ab26b01`;

const search=()=>{
    
  const url=`${baseRecipeSearchUrl}&query=${recipe}`;
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
  });
}

const handleFinalRecipe=(id)=>{
  axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=a9eba9462eef4ea6a5c567435ab26b01`)
  .then((response)=>{
    const data=response.data.extendedIngredients;
    console.log(data);
    console.log('Data has been recieved');
    let ingredientsList=[];
    for (let i=0; i<data.length; i++) {
      ingredientsList.push(data[i].amount+" "+data[i].unit+" "+data[i].name);
    }
    console.log(ingredientsList);
    setDisplayedRecipeIngredients(ingredientsList);
  })
  .catch(()=>{
    alert('Data not recieved');
  });
  const newResults=results;
  setDisplayedRecipe(newResults.filter((item)=>{
    return item.id===id
  }));
  console.log(displayedRecipe[0].title);
}

    return(
        <div>
        <input value={recipe} onChange={e=>{setRecipe(e.target.value)}} />
        <button onClick={search}>Search</button>
        <Results results={results} handleFinalRecipe={handleFinalRecipe} />
        <DisplayedRecipe displayedRecipe={displayedRecipe} displayedRecipeIngredients={displayedRecipeIngredients} />
        </div>
    )
}

export default App;
