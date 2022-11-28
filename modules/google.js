
import {GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import {auth} from './firebase.js'
import { showMessage } from "./toast.js"


export async function goggleInit (){

    const provider = new GoogleAuthProvider ()
    
    try{ 
        const credentials = await signInWithPopup(auth, provider)
        console.log(credentials)
        showMessage('welcome ' + credentials.user.displayName, 'success')
       
        
    }catch(error){
        console.log(error)
    }

}


