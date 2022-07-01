import axios from 'axios'

function useMangaStore(){
    return {getMangaOrAnimeList, addMangaOrAnime, getMangaOrAnimeById,getMangaOrAnimeByUser, deleteMangaOrAnime};
}

//Get a list of MANGANIME
async function getMangaOrAnimeList() {
    
    const response = await axios.get("http://193.70.1.159:3001/manganime").then(res => res).catch(err => err);
    if (response.status !== 200) {
        return null;
    }


    return response.data
    
    
}
//Get list of manganime created by User
async function getMangaOrAnimeByUser(id) {
    
    const response = await axios.get("http://193.70.1.159:3001/manganime/author/" + id).then(res => res).catch(err => err);
    if (response.status !== 200) {
        return null;
    }


    return response.data
    
    
}


// get Manganime by Id
async function getMangaOrAnimeById(id) {
    
    const response = await axios.get("http://193.70.1.159:3001/manganime/" + id).then(res => res).catch(err => err);
    if (response.status !== 200) {
        return null;
    }


    return response.data
    
    
}


// add a manganime
async function addMangaOrAnime(entity)
{
    const response = await axios.post("http://193.70.1.159:3001/manganime", {"name": entity.name,"description": entity.description, "type": entity.type, "imageUrl": entity.imageUrl, "genres": entity.categoriesList}).then(res => res).catch(err => err);
    if (response.status !== 201) {
        return null;
    }
    
    console.log("post réussi")
}


//delete a manganim
async function deleteMangaOrAnime(id) {
    const response = await axios.delete("http://193.70.1.159:3001/manganime/" + id).then(res => res).catch(err => err);
    if (response.status !== 200) {
        return null;
    }
}


export {useMangaStore};