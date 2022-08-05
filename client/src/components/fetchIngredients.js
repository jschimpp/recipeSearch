import axios from 'axios';

function fetchIngredients({ident, set}) {
   axios.get(`https://api.spoonacular.com/recipes/${ident}/information?apiKey=a9eba9462eef4ea6a5c567435ab26b01`)
  .then((response)=>{
    const data=response.data.extendedIngredients;
    console.log(data);
    console.log('Data has been recieved');
    let ingredientsList=[];
    for (let i=0; i<data.length; i++) {
      ingredientsList.push(data[i].amount+" "+data[i].unit+" "+data[i].name);
    }
    console.log(ingredientsList);
    set(ingredientsList);
  })
  .catch(()=>{
    alert('Data not recieved');
  });

  return null;
}

export default fetchIngredients