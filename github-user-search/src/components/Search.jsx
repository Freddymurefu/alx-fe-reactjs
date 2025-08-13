import React from 'react'
import { useState } from 'react'
import { fetchUserData } from '../services/GithubService'

function Search() {
    const [username, setUsername] = useState("")
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [location, setLocation] = useState("")
    const [minRepos, setMinRepos] = useState("")
    const[page, setPage] =useState(1)
    const[count, setCount]=useState(0)

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
        setError(null)
        
        // setLocation("")
        // setMinRepos("")
        setPage(1)
        setCount(0)

        try {
            console.log({ username, location, minRepos })
            const data = await fetchUserData(username, location, minRepos, 1)
            setUsers(data.items)
            setCount(data.total_count)
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false)
        }

        console.log("Search for:", username)
    }

        const loadMore = async() => {
        const nextPage = page + 1;
        setPage(nextPage)
        setLoading(true);

        try {
        const data = await fetchUserData(username, location, minRepos, nextPage);
        setUsers(prevUsers => [...prevUsers, ...data.items]); 
        setPage(nextPage);
    } catch (err) {
        setError(true);
    } finally {
        setLoading(false);
    }
      }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="GitHub username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                />
                <input
                    type="number"
                    value={minRepos}
                    placeholder="Minimum Repos"
                    onChange={(event) => setMinRepos(event.target.value)}
                />
                <button type="submit">Search</button>
               
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>Looks like we cant find the user</p>}

            { users.length > 0 && (
                <div>
                    {users.map((u) => (
                        <div key={u.id}>
                            <img src={u.avatar_url} alt={u.login} width="100" />
                            <h2>{u.login}</h2>
                            <a href={u.html_url} target='_blank' rel='noreferrer'>
                                View Profile
                            </a>
                        </div>
                    ))}
                </div>
            )}
 {users.length < count &&(
                    <button onClick={loadMore}>Load More</button>
                )}
        </div>
    )
}

export default Search
