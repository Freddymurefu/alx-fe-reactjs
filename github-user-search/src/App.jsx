const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;
console.log("Github Api Key:" , apiKey)

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Search } from "./components/Search"
function Home(){
  return(
    <h1>Welcome to My Home Page</h1>
  )
}

function About(){
  return(
  <h1>This my About Page</h1>
  )
}

function Services(){
  return(
    <h1>This is My Services Page</h1>
  )
}

export default function App(){
  return(
    <Router>
      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/">About</Link>
        <Link to="/">Services</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </Router>
  )
}