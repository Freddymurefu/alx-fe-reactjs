import React from 'react'
import { useState } from 'react'
import { fetchUserData } from '../services/GithubService'

function Search(){
    const[username, setUsername] =useState("")
    const [ user, setUser] = useState(null)
    const[ loading, setLoading] = useState(false)
    const[error, setError] = useState(null)


    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
        setError(null)
        setUser(null)

    try {
        const data = await fetchUserData(username)
        setUser(data)
    } catch (error) {
       setError(true) 
    } finally{
        setLoading(false)
    }

        console.log("Search for:", username)
    }
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="GitHub username"
            value={username}
            onChange={(event) =>setUsername(event.target.value)}
            
            />
            <button type="submit">Search</button>
        </form>
                {loading && <p>Loading...</p>}
        {error && <p>Looks like we cant find the user</p>}

        {user && (
            <div>
                <img src={user.avatar_url} alt={user.login} width="100"/>
                <h2>{user.name || user.login}</h2>
                <a href={user.html_url} target='_blank' rel='noreferrer'>
                    View Profile
                </a>
            </div>
        )}
    </div>
    )
}

export default Search