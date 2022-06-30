import axios from 'axios'
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmJjYTNiN2U5NzJlNTg0NDM4MGQ0YzAiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwidXNlcm5hbWUiOiJMYW1lZHVyIiwiaXNBZG1pbiI6dHJ1ZSwiY3JlYXRlZEF0IjoxNjU2NTI0ODMyMjAzLCJfX3YiOjAsImlhdCI6MTY1NjUzNTkzNiwiZXhwIjoxNjU2NjIyMzM2fQ.DlH3AXUX2XxMuz0ASIIhPZbR9aE_sJurV6YGTjwwXRY"

function useMangaStore(){
    return {getMangaOrAnimeList, addMangaOrAnime,getCategoriesList, getMangaOrAnimeById, putReview, postComment,getMangaOrAnimeByUser, getReviewsByUser, getCommentsByUser, deleteComment, deleteMangaOrAnime};
}
async function getMangaOrAnimeList() {
    
    const response = await axios.get("http://localhost:3001/manganime").then(res => res).catch(err => err);
    if (response.status !== 200) {
        return null;
    }


    return response.data
    
    
}

async function getMangaOrAnimeByUser(id) {
    
    const response = await axios.get("http://localhost:3001/manganime/author/" + id, {headers: {Authorization: 'Bearer ' + token}}).then(res => res).catch(err => err);
    if (response.status !== 200) {
        return null;
    }


    return response.data
    
    
}



async function getReviewsByUser(userId) {
    
    const response = await axios.get("http://localhost:3001/reviews/user/" + userId).then(res => res).catch(err => err);
    if (response.status !== 200) {
        return null;
    }
    console.log(response.data)

    return response.data
    
    
}



async function getCommentsByUser(userId) {
    
    const response = await axios.get("http://localhost:3001/comments/author/" + userId).then(res => res).catch(err => err);
    if (response.status !== 200) {
        return null;
    }
    console.log(response.data)

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

async function putReview(review) {
    const response = await axios.put("http://localhost:3001/reviews", {"score": review.score, "manganimeId": review.manganimeId}, {headers: {Authorization: 'Bearer ' + token}}).then(res => res).catch(err => err);
    if (response.status !== 201) {
        return null;
    }
}

async function postComment(comment) {
    const response = await axios.post("http://localhost:3001/comments", {"content": comment.content, "manganimeId": comment.manganimeId}, {headers: {Authorization: 'Bearer ' + token}}).then(res => res).catch(err => err);
    if (response.status !== 201) {
        return null;
    }
}

async function deleteComment(commentId) {
    const response = await axios.delete("http://localhost:3001/comments/" + commentId, {headers: {Authorization: 'Bearer ' + token}}).then(res => res).catch(err => err);
    if (response.status !== 200) {
        return null;
    }
}

async function deleteMangaOrAnime(id) {
    const response = await axios.delete("http://localhost:3001/manganime/" + id, {headers: {Authorization: 'Bearer ' + token}}).then(res => res).catch(err => err);
    if (response.status !== 200) {
        return null;
    }
}


export {useMangaStore};