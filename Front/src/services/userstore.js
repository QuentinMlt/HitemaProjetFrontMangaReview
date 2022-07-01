import axios from "axios";
import { ref } from "vue";

const URL = "http://193.70.1.159:3001"
axios.interceptors.request.use(function (config) {
   // config.headers['x-auth-token'] = localStorage.getItem('token') || "";
   
   if(localStorage.getItem('token')) {
    config.headers['authorization'] = JSON.parse(localStorage.getItem('token')).jwt || "";
   }
   else {
    config.headers['authorization'] = localStorage.getItem('token') || "";
   }

    return config;
});

axios.interceptors.response.use(function (response) {
    return response;
});

const user = ref(null);

function useUserStore() {
    return { user, connect, disconnect, autoConnect, inscription};
}

// récupération des données de l'inscritipn et on l'envoie vers le back afin de vérifier les données + création du token
async function inscription(email, username, password) {
    if (email && password && username) {
        console.log("register !")
        const response = await axios.post(`http://193.70.1.159:3001/users/register`, { "email": email, "password": password, "username": username }).then(res => res).catch(err => err);
        if (response.status !== 201) {
            return null;
        }
        localStorage.setItem('token', response.headers['authorization']);
        console.log(response.data)
        return user.value = { "email": response.data.email, "username": response.data.username };
    }
    else {
        return null;
    }
}

// récupération de l'email et le password et on l'envoie vers le back afin de vérifier les données
async function connect(email, password) {
    if (email && password) {
       //console.log("test",email,password)
        const response = await axios.post(`http://193.70.1.159:3001/login`, { "email": email, "password": password }).then(res => res).catch(err => err);
        if (response.status !== 201) {
            console.log(response)
            return null;
        }
        
      
        console.log(response.headers)
        localStorage.setItem('token', JSON.stringify({ jwt : response.headers['authorization'], user : response.data}));
        
        return user.value = response.data;
        
    }
    else {
        return null;
    }
}

// recupération du token qui a été stocké pour connecter automatiquement le user
async function autoConnect() {
    if (localStorage.getItem('token')) {
        const response = await axios.post('http://193.70.1.159:3001/login').then(res => res).catch(err => err);
        if (response.status !== 200) {
            localStorage.removeItem('token');
            return null;
        }
        user.value = response.data.user;
    }
}

// deconnexion du user et suppression du token stocké
function disconnect() {
    if(user){
        user.value = null;
        localStorage.removeItem('token');
    }
}

export { useUserStore };
