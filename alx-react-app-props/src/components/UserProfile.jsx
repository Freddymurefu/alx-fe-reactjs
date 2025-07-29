import { UseContext } from 'react'
import { UserContext } from "./UserContext"



function UserProfile() {
const { name, age, bio} = UseContext(UserContext)

return(
    <div style={{ border: '1px solid grey', fontFamily: 'Trebuchet', fontSize: '16px', margin: '10px'}}>
        <h2 style={{ color: 'skyblue'}}>{props.name}</h2>
        <p>Age: <span style={{ fontWeight: 'bold' }}>  {props.age} </span></p>
        <p>Bio: {props.bio}</p>
    </div>
)
}

export default UserProfile