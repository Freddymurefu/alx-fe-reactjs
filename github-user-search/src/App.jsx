const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;
console.log("Github Api Key:" , apiKey)

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import  Search  from "./components/Search"




export default function App(){
  return(

       <Routes>
        <Route path="/" element={<Search />} />
      </Routes>

  )
}