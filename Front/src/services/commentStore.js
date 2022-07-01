import axios from 'axios'

function useCommentStore(){
    return {postComment, deleteComment, getCommentsByUser};
}

async function postComment(comment) {
    const response = await axios.post("http://193.70.1.159:3001/comments", {"content": comment.content, "manganimeId": comment.manganimeId}).then(res => res).catch(err => err);
    if (response.status !== 201) {
        return null;
    }
}

async function deleteComment(commentId) {
    const response = await axios.delete("http://193.70.1.159:3001/comments/" + commentId).then(res => res).catch(err => err);
    if (response.status !== 200) {
        return null;
    }
}

async function getCommentsByUser(userId) {
    
    const response = await axios.get("http://193.70.1.159:3001/comments/author/" + userId).then(res => res).catch(err => err);
    if (response.status !== 200) {
        return null;
    }
    console.log(response.data)

    return response.data
    
    
}
export {useCommentStore};