

const googleBtn = document.querySelector('#googleBtn')

const logOut = document.querySelector('#logOut')

export function loginCheck(user){

    if(user){
        googleBtn.style.display = 'none';
      
        logOut.style.display = 'block'

    }else{
        googleBtn.style.display = 'block';
        logOut.style.display  ='none'
    }
}