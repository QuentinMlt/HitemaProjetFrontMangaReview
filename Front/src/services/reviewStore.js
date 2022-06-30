import axios from 'axios'
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmJjYTNiN2U5NzJlNTg0NDM4MGQ0YzAiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwidXNlcm5hbWUiOiJMYW1lZHVyIiwiaXNBZG1pbiI6dHJ1ZSwiY3JlYXRlZEF0IjoxNjU2NTI0ODMyMjAzLCJfX3YiOjAsImlhdCI6MTY1NjUzNTkzNiwiZXhwIjoxNjU2NjIyMzM2fQ.DlH3AXUX2XxMuz0ASIIhPZbR9aE_sJurV6YGTjwwXRY"

function useReviewStore(){
    return {getReviewsByUser, putReview, get10BestMangaAndAnime};
}


async function getReviewsByUser(userId) {
    
    const response = await axios.get("http://localhost:3001/reviews/user/" + userId).then(res => res).catch(err => err);
    if (response.status !== 200) {
        return null;
    }

    return response.data
    
    
}

async function putReview(review) {
    const response = await axios.put("http://localhost:3001/reviews", {"score": review.score, "manganimeId": review.manganimeId}, {headers: {Authorization: 'Bearer ' + token}}).then(res => res).catch(err => err);
    if (response.status !== 201) {
        return null;
    }
}

async function get10BestMangaAndAnime() {
    const response = await axios.get("http://localhost:3001/reviews/Top10").then(res => res).catch(err => err);
    if (response.status !== 200) {
        return null;
    }
    return response.data
    
}

export {useReviewStore};