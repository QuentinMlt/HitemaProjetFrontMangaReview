import axios from 'axios'

function useReviewStore(){
    return {getReviewsByUser, putReview, get10BestMangaAndAnime};
}

//get all reviews of a User
async function getReviewsByUser(userId) {
    
    const response = await axios.get("http://193.70.1.159:3001/reviews/user/" + userId).then(res => res).catch(err => err);
    if (response.status !== 200) {
        return null;
    }

    return response.data
    
    
}
// create or update a review on a manganim
async function putReview(review) {
    const response = await axios.put("http://193.70.1.159:3001/reviews", {"score": review.score, "manganimeId": review.manganimeId}).then(res => res).catch(err => err);
    if (response.status !== 201) {
        return null;
    }
}

// get top 10 manganime by reviews
async function get10BestMangaAndAnime() {
    const response = await axios.get("http://193.70.1.159:3001/reviews/Top10").then(res => res).catch(err => err);
    if (response.status !== 200) {
        return null;
    }
    return response.data
    
}

export {useReviewStore};