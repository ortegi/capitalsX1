import {signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import {auth} from './firebase.js'

const logOut = document.querySelector('#logOut');

logOut.addEventListener('click', async() =>{

    await signOut(auth)
    console.log('user sign out')
})


//to sign out