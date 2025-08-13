import axios from "axios"
export async function fetchUserData(username, location, minRepos, page = 1) {
    

const query = `${username}${location ? `+location:${location}` : ''}${minRepos ? `+repos:>=${minRepos}` : ''}`;
const response = await axios.get(`https://api.github.com/search/users?q=${query}&per_page=10&page=${page}`);

return{ 
    items: response.data.items,  
    total_count: response.data.total_count

}
}