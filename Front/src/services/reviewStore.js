import axios from 'axios'

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
    const response = await axios.put("http://localhost:3001/reviews", {"score": review.score, "manganimeId": review.manganimeId}).then(res => res).catch(err => err);
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