import { useContext } from 'react'
import { UserContext } from "./UserContext"



function UserProfile() {
const { name, age, bio} = useContext(UserContext)

return(
    <div style={{ border: '1px solid grey', fontFamily: 'Trebuchet', fontSize: '16px', margin: '10px'}}>
        <h2 style={{ color: 'skyblue'}}></h2>
        <p>Age: <span style={{ fontWeight: 'bold' }}>  </span></p>
        <p>Bio: </p>
    </div>
)
}

export default UserProfile