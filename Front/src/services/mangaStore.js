import axios from 'axios'
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmJjYTNiN2U5NzJlNTg0NDM4MGQ0YzAiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwidXNlcm5hbWUiOiJMYW1lZHVyIiwiaXNBZG1pbiI6dHJ1ZSwiY3JlYXRlZEF0IjoxNjU2NTI0ODMyMjAzLCJfX3YiOjAsImlhdCI6MTY1NjUzNTkzNiwiZXhwIjoxNjU2NjIyMzM2fQ.DlH3AXUX2XxMuz0ASIIhPZbR9aE_sJurV6YGTjwwXRY"

function useMangaStore(){
    return {getMangasList, getCover, addMangaOrAnime,getCategoriesList, getMangaById};
}
async function getMangasList() {
    
    const response = await axios.get("http://localhost:3001/manganime").then(res => res).catch(err => err);
    if (response.status !== 200) {
        return null;
    }


    return response.data
    
    
}

async function getMangaById(id) {
    
    const response = await axios.get("http://localhost:3001/manganime/" + id).then(res => res).catch(err => err);
    if (response.status !== 200) {
        return null;
    }


    return response.data
    
    
}


async function getCover(mangaId,coverId) {
    const coverLink = await axios.get(`https://api.mangadex.org/cover/${coverId}`).then(res => {
        const coverFileName = res.data.data.attributes.fileName;
        //creation du lien de la cover 
        const coverLink = `https://mangadex.org/covers/${mangaId}/${coverFileName}`;
        return coverLink;
    }).catch(err => err);
    return coverLink;
    
}

async function addMangaOrAnime(entity)
{
    const response = await axios.post("http://localhost:3001/manganime", {"name": entity.name,"description": entity.description, "type": entity.type, "imageUrl": entity.imageUrl, "genres": entity.categoriesList}, {headers: {Authorization: 'Bearer ' + token}}).then(res => res).catch(err => err);
    if (response.status !== 201) {
        return null;
    }
    console.log("post réussi")
}

async function getCategoriesList() {
    const categoriesList = await axios.get(`http://localhost:3001/genres`).then(res => res).catch(err => err);
    if (categoriesList.status !== 200) {
        return null;
    }
    return categoriesList.data;
}


export {useMangaStore};