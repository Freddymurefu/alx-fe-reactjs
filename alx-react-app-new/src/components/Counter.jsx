import { useState } from 'react'

function Counter(){
     const [count, setCount] = useState(0) //set up state starting from zero
    return(
       <div>
        <p>Current Count: {count}</p>
           
        <button onClick={ () => setCount(count + 1)} >Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
       </div>
    )
}

export default Counter