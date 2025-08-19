import { useState, useEffect } from 'react';
import recipesData from './data.json'



function HomePage() {
    const [recipes, setRecipes] = useState([])

    useEffect(()=> {
        setRecipes(recipesData)
    }, []);

    return(
        <div className='max-w-7xl mx-auto p-6'>
            <h1 className='text-2xl font-bold mb-6'>Recipes</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
             {recipes.map((r)=> 
            <article 
            key={r.id}
            className='bg-white rounded-xl shadow p-4 hover:shadow-lg transition'
              >
              <img 
              src={r.image} 
              alt={r.title} 
              className='w-full h-48 object-cover rounded-lg'
              />
            <h2 className='text-lg font-semibold mt-3'>{r.title}</h2>
            <p className='text-sm text-gray-600 mt-1'>{r.summary}</p>
            <button className='mt-3 px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-800'>View Recipe</button>
            </article>
            )}
            </div>



        </div>
    )
};

export default HomePage;