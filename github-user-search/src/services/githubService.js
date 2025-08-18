import axios from "axios"
export async function fetchUserData(username, location, minRepos, page = 1) {
    
const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;


const query = `${username}${location ? `+location:${location}` : ''}${minRepos ? `+repos:>=${minRepos}` : ''}`;

const response = await axios.get(`https://api.github.com/search/users?q=${query}&per_page=10&page=${page}`,
{
 headers: {
    Authorization: `token ${apiKey}`
 }   
});

const users = response.data.items

const detailedUsers = await Promise.all (
    users.map(async(u)=> {
        const detailRes = await axios.get(u.url, {
            headers: {Authorization: `token ${apiKey}`}
        });
        return detailRes.data;
    })
)

return{ 
    items: detailedUsers,  
    total_count: response.data.total_count

}
}