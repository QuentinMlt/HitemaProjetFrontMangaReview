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

async function getCover(mangaId,coverId) {
    console.log('heyo');
    const coverLink = await axios.get(`https://api.mangadex.org/cover/${coverId}`).then(res => {
        const coverFileName = res.data.data.attributes.fileName;
        //creation du lien de la cover 
        const coverLink = `https://mangadex.org/covers/${mangaId}/${coverFileName}`;
        return coverLink;
    }).catch(err => err);
    return coverLink;
    
}


export {useMangaStore};