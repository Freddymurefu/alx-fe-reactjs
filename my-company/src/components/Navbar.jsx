import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <nav style={{ padding: '1rem', backgroundColor:'burgundy', justifyContent:'center'  }}>
            <ul style={{ listStyle:'none', color:'white', display:'flex', gap:'1rem'}}>
                <li><Link to ="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Services">Services</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>

    )
}

export default Navbar




function UserCard(props) {
    return(
        <div>
            <h3>{props.name}</h3>
            <p>Email: {props.email}</p>
            <p>Location: {props.location}</p>
        </div>
    )
}

function App() {
    return(
        <div>
            <h2>User Info</h2>
            <UserCard name="Freddy" email="freddymurefu@gmail.com" location="Nairobi" />
            <UserCard name="Mwende" email="mwende@outlook.com" location="Tharaka Nithi" />
        </div>
    )
}

// import { usestate } from 'react'

// function ToggleMessage() {
//     const[show, setShow] = UseState(true)
//     return(
//      <div>
//         {show && <p>Hello, React!</p>}
//         <button onClick={()=> setShow(!show)}>
//             {show ? 'Hide' : 'Show'}message
//         </button>
//      </div>
//     )
// }

// import { useState } from "react"

// function MoodToggle() {
//     const [show, setShow] = usestate(true)
//     return(
//         <div>
//             {show ? <p>😊 I'm feeling happy!</p>: <p>😐 I'm not in the mood.</p>}
//             <button onClick={()=> setShow(!show)}>
//                 { show ? "Cheer down": "Cheer up"}
//             </button>
//         </div>
//     )
// }

// import { useState, useEffect} from 'react'

// function ClickTracker() {
//  const[click, setClick] = useState(0)

//  useEffect( () =>{ 
//     const clicker = setInterval( ()=>{
//         setClick((prev)=> prev + 1)
//     }, 1000 )

//     return() => clearInterval(clicker)
//  }, [])

//  return <p>{times} Clicked. </p>

// }


// useEffect ( () =>{

// }, [])


// import { useState, useEffect } from "react"

// function WelcomeMessage () {
//     const [message, setMessage] = useState("")


// useEffect(() => {
// const timeout = setTimeout(() => {
//     setMessage("Welcome to the app!")
// }, 3000)
// return () => clearTimeout(timeout)
// }, [])
// return <p>{message}Welcome to the app!</p>
// }

// import { useState, useEffect } from "react"

// function CountdownTimer() {
//     const [count, setCount] = useState(10)

// useEffect(()=>{
// const countdown = setInterval(() => {
//     setCount((prev)=>{ 
//         if (prev>0){
//             return prev - 1
//         }else

//     }
// }, 1000)

// return()=> clearInterval(countdown)
// },[])

// return 
// }


import { useState } from "react"

function Greeting() {
    const [name, setName] = useState("")
    const [click, setClick] =useState("")

    return(
        <div>
        <input type="text"
         placeholder="Enter name" 
         value={name} onChange={(e)=>setName(e.target.value)}
         />

        { name && <p>Hello, {name ? name: null}!</p>}

        </div>
    )
}

import { useState } from "react"



function ContactForm() {
    const handleSubmit = (e) =>{
    e.preventDefault()
    alert("Sent!")
}
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    return(
<form onSubmit={handleSubmit}>
            <input type="text"
              placeholder="Enter name"
            value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})}
            />

            <input
            type="email"
            placeholder='Enter email'
            value ={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})}
            />

            <textarea
            type="text"
            placeholder="enter your message"
            value={formData.message} onChange={(e)=> setFormData({...formData, message: e.target.value})}
            ></textarea>
            
         <button>Send</button>
            </form>
            
    
    )
}