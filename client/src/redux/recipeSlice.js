import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getRecipesAsync=createAsyncThunk(
    /*axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=a9eba9462eef4ea6a5c567435ab26b01&recipe=pasta')
    .then((response)=>{
        const data=response.data.results;
        console.log(data);
        console.log('Data has been recieved');
      })
      .catch(()=>{
        alert('Data not recieved');
      })*/

      /*async ()=>{
        const resp=await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=a9eba9462eef4ea6a5c567435ab26b01&recipe=pasta');
        if (resp.ok) {
			const posts = await resp.json();
      console.log(posts);
			return { posts };
		}
    }*/
);


const recipeSlice=createSlice({
    name: "recipes",
    initialState: {recipes: [], selectedRecipe: {}},
    reducers: {
      getRecipes: (state, action)=>{
        
      }
    }
    /*extraReducers: {
      [getRecipesAsync.fulfilled]: (state, action)=>{
        console.log(action.payload.post)
      }
    }*/
}

)

export default recipeSlice.reducer;