import './App.css';
import Results from './components/results';
import DisplayedRecipe from './components/displayedRecipe';
import {useState} from 'react';
import fetchIngredients from './components/fetchIngredients';
import axios from 'axios';

function App() {
const [recipe, setRecipe]=useState("");
const [results, setResults]=useState([]);
const [displayedRecipe, setDisplayedRecipe]=useState({0:{title: ""}});
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
  fetchIngredients({ident: id, set: setDisplayedRecipeIngredients});
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
