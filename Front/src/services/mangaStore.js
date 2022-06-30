import axios from 'axios'

function useMangaStore(){
    return {getMangaOrAnimeList, addMangaOrAnime, getMangaOrAnimeById,getMangaOrAnimeByUser, deleteMangaOrAnime};
}
async function getMangaOrAnimeList() {
    
    const response = await axios.get("http://localhost:3001/manganime").then(res => res).catch(err => err);
    if (response.status !== 200) {
        return null;
    }


    return response.data
    
    
}

async function getMangaOrAnimeByUser(id) {
    
    const response = await axios.get("http://localhost:3001/manganime/author/" + id).then(res => res).catch(err => err);
    if (response.status !== 200) {
        return null;
    }


    return response.data
    
    
}



async function getMangaOrAnimeById(id) {
    
    const response = await axios.get("http://localhost:3001/manganime/" + id).then(res => res).catch(err => err);
    if (response.status !== 200) {
        return null;
    }


    return response.data
    
    
}



async function addMangaOrAnime(entity)
{
    console.log(token)
    const response = await axios.post("http://localhost:3001/manganime", {"name": entity.name,"description": entity.description, "type": entity.type, "imageUrl": entity.imageUrl, "genres": entity.categoriesList}).then(res => res).catch(err => err);
    if (response.status !== 201) {
        return null;
    }
    
    console.log("post réussi")
}



async function deleteMangaOrAnime(id) {
    const response = await axios.delete("http://localhost:3001/manganime/" + id).then(res => res).catch(err => err);
    if (response.status !== 200) {
        return null;
    }
}


export {useMangaStore};