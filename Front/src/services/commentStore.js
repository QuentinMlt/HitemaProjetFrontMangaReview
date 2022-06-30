import axios from 'axios'
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmJjYTNiN2U5NzJlNTg0NDM4MGQ0YzAiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwidXNlcm5hbWUiOiJMYW1lZHVyIiwiaXNBZG1pbiI6dHJ1ZSwiY3JlYXRlZEF0IjoxNjU2NTI0ODMyMjAzLCJfX3YiOjAsImlhdCI6MTY1NjUzNTkzNiwiZXhwIjoxNjU2NjIyMzM2fQ.DlH3AXUX2XxMuz0ASIIhPZbR9aE_sJurV6YGTjwwXRY"

function useCommentStore(){
    return {postComment, deleteComment, getCommentsByUser};
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

async function getCommentsByUser(userId) {
    
    const response = await axios.get("http://localhost:3001/comments/author/" + userId).then(res => res).catch(err => err);
    if (response.status !== 200) {
        return null;
    }
    console.log(response.data)

    return response.data
    
    
}
export {useCommentStore};