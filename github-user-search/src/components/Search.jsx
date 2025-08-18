
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
            const data = await fetchUserData(username, location, minRepos, 1)
            setUsers(data.items)
            setCount(data.total_count)
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false)
        }

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
        <div className='max-w-3xl mx-auto p-4 sm:px-6 lg:px-8 py-6'>
            <form className='flex flex-col gap-4 mb-6 w-full' onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="GitHub username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    className='w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    className='w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <input
                    type="number"
                    value={minRepos}
                    placeholder="Minimum Repos"
                    onChange={(event) => setMinRepos(event.target.value)}
                    className='w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <button className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600-transition"
                type="submit">Search</button>
               
            </form>

            {loading && <p className='text-green-500 mb-4'>Loading...</p>}
            {error && <p className='text-red-500 mb-4'>Looks like we cant find the user</p>}


            { users.length > 0 && (
                <div className='grid grid-cols-1 sm:grid-cols-2 lg: grid-cols-3 gap-6'>
                    {users.map((u) => (
                        <div className='border-rounded p-4 flex flex-col items-center text-center hover: shadow-lg transition' key={u.id}>
                            <img src={u.avatar_url} alt={u.login} className='w-50 h-50 sm:h-60 w-60 rounded-full mb-2' />
                            <h2 className='font-bold text-lg sm:text-xl mb-1'>{u.login}</h2>
                            <p className='text-sm sm:text-base mb-1'>Location: {u.location || "Not Available"}</p>
                            <p className='text-sm sm:text-base mb-1'>Public Repos: {u.public_repos}</p>
                            <a className="text-blue-500 hover:underline" href={u.html_url} target='_blank' rel='noreferrer'>
                                View Profile
                            </a>
                        </div>
                    ))}
                </div>
            )}
 {users.length < count &&(
                    <button className='mt-6 w-full sm:w-auto bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition' onClick={loadMore}>Load More</button>
                )}
        </div>
    )
}

export default Search
