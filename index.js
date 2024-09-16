const dotenv = require('dotenv').config();

// Print out value of API key stored in .env file
// console.log(process.env.API_KEY)

async function getImage(query){
    try {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
        const res = await fetch(url)
        const data = await res.json()   
        let index = Math.floor(Math.random() * 25)
        console.log(data.data[index].url);
        const result = []
        for(let item of data.data){
            result.push(item)
        }  
        return result;     
    } catch (error) {
        console.log(error);
        
    }
}

(async()=>{
    await getImage('dog')
})();