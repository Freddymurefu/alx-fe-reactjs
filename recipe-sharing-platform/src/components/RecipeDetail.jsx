import { useState, useEffect } from 'react';
import recipesData from '../data.json';

import { useParams } from 'react-router-dom';

function RecipeDetail(){
const { id } = useParams()
const [recipe, setRecipe] = useState(null)

useEffect(()=>{
const found = recipesData.find(r =>r.id ===parseInt(id));
setRecipe(found)
}, [id])

if(!recipe){
    return(
        <div className='p-6'>Recipe not found</div>
    )
}

    return(
        <div className='max-w-3xl mx-auto p-6 bg-white rounded-xl shadow'>
            <img
            src={recipe.image}
            alt={recipe.title}
            className='w-full h-64 object-cover rounded-lg mb-4'
            />
            <h1 className='text-2xl font-bold mb-3'>{recipe.title}</h1>
            <p className='text-gray-600 mb-6'>{recipe.summary} </p>

            <h2 className='text-xl font-semibold mb-2'>Ingredients</h2>
            <ul className='list-disc list-inside mb-6'>{recipe.ingredients.map((item, i)=> (
                <li key={i} className='text-gray-700'>{item}</li>
            )
             )} 
             </ul>

             <h2 className='text-xl font-semibold mb-2'>Instructions</h2>
             <p className='text-gray-600 mb-6'>{recipe.instructions}</p>

        </div>
    )
};

export default RecipeDetail;