import axios from 'axios'

function useCategoriesStore(){
    return {getCategoriesList};
}

async function getCategoriesList() {
    const categoriesList = await axios.get(`http://193.70.1.159:3001/genres`).then(res => res).catch(err => err);
    if (categoriesList.status !== 200) {
        return null;
    }
    return categoriesList.data;
}

export {useCategoriesStore};