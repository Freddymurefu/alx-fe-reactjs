import { UseContext } from 'react'
import { UserContext } from './UserContext'

function UserDetails() {
    const UserData = UseContext(UserContext)

    return(
        <div>
            <p>Name: {UserData.name}</p>
            <p>Email: {UserData.email}</p>
        </div>
    )
}

export default UserDetails;