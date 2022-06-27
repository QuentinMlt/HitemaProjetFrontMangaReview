import axios from 'axios'


function useMangaStore(){
    return {getMangasList, getCover};
}
async function getMangasList() {
    
    const response = await axios.get("https://api.mangadex.org/manga").then(res => res).catch(err => err);
    if (response.status !== 200) {
        return null;
    }


    return response.data
    
    
}

async function getCover(mangaId) {
    const response = await axios.get(`https://api.mangadex.org/cover/${mangaId}`).then(res => res).catch(err => err);
    const coverFileName = response.attributes.fileName;
    const coverLink = `https://mangadex.org/covers/${mangaId}/${coverFileName}`;
    return coverLink;
}


export {useMangaStore};