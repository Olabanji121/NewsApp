class NewsApi {
    async getNewsData() {

        try{
            const getNewsDataRes = await fetch(
                "https://newsapi.org/v2/top-headlines?" +
                    "country=ng&" +
                    "apiKey=89c245008f9d4b9d83919a3d46b6d65b"
                );
                const newData = await getNewsDataRes.json();
                return newData;
        }catch(err){
            console.log(err)
        }
    }
    async getNewsBysearch(user){
        
        try{
            const searchData = await fetch(`https://newsapi.org/v2/everything?q=${user}&apiKey=89c245008f9d4b9d83919a3d46b6d65b`
            );
            const searchDataRes = await searchData.json();
            return searchDataRes;
        }catch(err){
            console.log(err)
        }
    
    }
}



