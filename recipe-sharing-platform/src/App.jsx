import { useState } from 'react'
import HomePage from './components/HomePage'
import { Routes, Route } from 'react-router-dom';
import RecipeDetail from './components/RecipeDetail'

function App() {
  
  return (
   <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path="/recipe/:id" element={<RecipeDetail />} />
   </Routes>
  )
}

export default App
