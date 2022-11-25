

const googleBtn = document.querySelector('#googleBtn')
const playBtn = document.querySelector('#firstBtn')
const logOut = document.querySelector('#logOut')

export function loginCheck(user){

    if(user){
        googleBtn.style.display = 'none';
        playBtn.style.display = 'block'
        logOut.style.display = 'block'

    }else{
        googleBtn.style.display = 'block';
        logOut.style.display  ='none'
        playBtn.style.display ='none'
    }
}