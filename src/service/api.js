import axios from 'axios';

/* fetch characters data from api. 
async function that will wait for 
data to return first, so that it 
does not break the application */
export const fetchData = async (text) => {
    return await axios.get(`https://www.breakingbadapi.com/api/characters?name=${text}`)
}