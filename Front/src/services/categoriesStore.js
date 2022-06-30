import axios from 'axios'
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmJjYTNiN2U5NzJlNTg0NDM4MGQ0YzAiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwidXNlcm5hbWUiOiJMYW1lZHVyIiwiaXNBZG1pbiI6dHJ1ZSwiY3JlYXRlZEF0IjoxNjU2NTI0ODMyMjAzLCJfX3YiOjAsImlhdCI6MTY1NjUzNTkzNiwiZXhwIjoxNjU2NjIyMzM2fQ.DlH3AXUX2XxMuz0ASIIhPZbR9aE_sJurV6YGTjwwXRY"

function useCategoriesStore(){
    return {getCategoriesList};
}

async function getCategoriesList() {
    const categoriesList = await axios.get(`http://localhost:3001/genres`).then(res => res).catch(err => err);
    if (categoriesList.status !== 200) {
        return null;
    }
    return categoriesList.data;
}

export {useCategoriesStore};