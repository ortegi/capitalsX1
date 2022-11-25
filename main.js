import './modules/sound.js'
import {selectContinent, selectContinentOff}  from './modules/selectContinent.js'
import {winSound, loseSound, startGame, gameOVer, gameWonSound} from './modules/sound.js'
import {heartOn, heartOff, reset, playAgainbtnOn, playAgainbtnOff, WonGameTextOff} from './modules/domFunctions.js'
import './modules/firebase.js'
import {showMessage} from './modules/toast.js'
import {onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import {auth, db} from './modules/firebase.js'
import './modules/google.js'
import {loginCheck} from './modules/loginCheck.js'
import './modules/logOut.js'
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
import { goggleInit} from './modules/google.js'
import {setUpPosts} from './modules/postlist.js'

window.goggleInit = goggleInit
window.selectContinent = selectContinent
window.getContinent = getContinent
window.showScoresOn = showScoresOn 

let continentData= []  //this is the raw data from de api, it contais all countries from the selected continent
let countryData = [] // this has the data of the country randomly selected by the getCountry() function. it has 3 items [countryToGuess, capitalToAnswer, flag]
let score = [] //it has 4 items : 0: lives which is set to 3, 1: good answers, 2: failed answers, 3: continent

async function getContinent(continent){   // this gets the data from the continent from the api
    try{
        const response = await fetch (`https://restcountries.com/v3.1/region/${continent}`)
        if(response.ok){
            const jsonResponse = await response.json()
            continentData = jsonResponse
            console.log(continentData)
            //TO play again : this is for when the user hits the play again button so everythin from the past game is DELETED
            endGameTextOff();   
            WonGameTextOff()
            showScoresOff()
            playAgainbtnOff();
            reset()
            //
            getCountry() 
            selectContinentOff()
            setFlag(); 
            optionBut();
            setInitialScore(continent);
            setLives()
        }
    }catch(error){
        console.log(error)

    }
    
}

window.getContinent = getContinent
window.checkAns = checkAns


function getCountry(){ //this gets a randomly selected country from the list of countries retrieved from the API
    let capitalToAnswer = ''
    let randomNumber = Math.floor(Math.random() * continentData.length)  
    console.log(randomNumber) //QUITAR
    let countryToGuess = continentData[randomNumber].translations.spa.common // it gets the country to gess randomly
    console.log(countryToGuess) //FOR TEST REASONS
    console.log(continentData[randomNumber])              //quitar
    if(continentData[randomNumber].capital){
        capitalToAnswer= continentData[randomNumber].capital  //this if is because some countries dont have an official capital
    }else{
        capitalToAnswer = 'No tiene'
    }
    console.log(capitalToAnswer)
    let flag = continentData[randomNumber].flags.png  //this gets the src from de data obtained of the country
    continentData.splice(randomNumber, 1)  //it deletes a country when is used so it doesnt appear repeated times
    countryData = [countryToGuess, capitalToAnswer, flag]   //it is a list with three items: country, capital , flag
    console.log(countryData)  //quitar
    console.log('countries left' + continentData.length)
}

async function setFlag(){
    let img = document.getElementById('onlyImg')   //gets the img element 
    img.style.display = 'block'  //makes it visible
    img.src = countryData[2]  // countryDATA[2] is the src
    document.getElementById('cat').style.display = 'none'  //takes out the cat
    setQuestion() 
    heartOn();
}

function setInitialScore(continent){  //sets the inital score
    score = [3, 0, 0, continent]
}


function setLives(){   
    let livesP = document.getElementById('lives');
    livesP.innerHTML = score[0]  //make appear the live count 
}


function setQuestion(){
    let questionP = document.getElementById('question')   //set the questions 
    questionP.textContent = `¿Cúal es la capital de ${countryData[0]}?`
}

function optionBut(){
    let randomOptions = shuffleList()
    let first = document.getElementById('firstBtn').style.display = 'none'  //sets the buttons with the different options
    let x = document.getElementsByClassName('btn-asw')
    for (let i =0; i < 3; i++){     //make appear the three buttons and assign them each a different capital option 
        x[i].style.display = "block"  
        x[i].value = randomOptions[i]
        x[i].textContent =  randomOptions[i]
    }

}


function randomOption(){   //gets the 2 false options randomly selectedç
    let falseOption1 =''
    let falseOption2 = ''
    let listOptions = []
    let randomNum1= Math.floor(Math.random() * continentData.length )
    let randomNum2= Math.floor(Math.random() * continentData.length )
    if (randomNum1 === randomNum2){
        randomNum2 =  Math.floor(Math.random() * continentData.length)
    }
    if(continentData[randomNum1].capital){
        falseOption1 = continentData[randomNum1].capital
    }else{
        falseOption1 = 'No tiene'
    }
    if(continentData[randomNum2].capital){
        falseOption2 = continentData[randomNum2].capital
    }else{
        falseOption2 = 'No tiene'
    }
    listOptions.push(falseOption1, falseOption2, countryData[1]) //makes a list of 3 items where one of them is the correct answer
    console.log(falseOption1, falseOption2)
    return listOptions
}


function shuffleList(){       //suffle the list of the three options so it has a random order (alpheb order)
    let list = randomOption()   
    list = list.sort() 
    console.log(list)
    return list
}


function checkAns(id){   //it checks the answer of the user: it has as argument the id of the button pressed
    let x = document.getElementsByClassName('btn-asw')
    for (let i =0; i < 3; i++){
        x[i].disabled = true;   //when the user hits one of the btns the other buttns are disabled
        if(x[i].value == countryData[1]){
            x[i].style.backgroundColor = '#9ef01a'   //if the answer is correct the buttons becomes GREEEN
        }
    }
    let btn = document.getElementById(id)
    let btnValue = btn.value
    if(btnValue == countryData[1]){
        btn.style.backgroundColor = '#9ef01a';   //the right answer is set to green 
        winSound()   
        score[1]+= 1
        setTimeout(script, 1500)
    }else{
        btn.style.backgroundColor = '#ef233c';   //if the user press the fail answers it is set to red
        loseSound()
        score[2]+= 1
        score[0]-= 1;
        setTimeout(script, 1500)
    }
}
 

function script(){   //it sets the next step in the game

    if(score[0] == 0){  //if the lives of the player are 0, game is over
        endGame()
    }else if(continentData.length == 2){
        gameWon()  //if the player gets 25 ok answers, then it wins the game
    }else{
        reset()     //else: game continues
        getCountry(); 
        setFlag();
        optionBut()
        setLives()
    }

}

function endGameTextOn(){   //generates the text then game is over
    document.getElementById('info').style.display = 'none' 
    document.getElementById('question').style.display = 'none'
    let endGameText = document.getElementById('infoCol');
    endGameText.style.display = 'block'
    endGameText.innerHTML = `
    <div class='endGameX'>
        <p> Juego terminado, has perdido.</p>
        <p id='finalScore'> 
        <i class="fa-regular fa-star fa-2xl" id='star'></i> <br>
        <span> ${score[1]} </span> <br>
        Mejor puntuacion en ${score[3]}: <i class="fa-regular fa-star fa-sm"></i> ${localStorage[score[3]]} 
        </p>
        <button type="button" class="btn btn-light btn-lg btn-block" id="showScores" onclick='showScoresOn()'> Show more scores! </button>
    </div>
`
}

function endGameTextOff(){   //turn the game over text OFF
    document.getElementById('info').style.display = 'block';
    document.getElementById('question').style.display = 'block';
    document.getElementById('infoCol').style.display = 'none'
}

function endGame(){  //it is called when the game is oer
    gameOVer()  //the sound of the game when its over
    saveScore()  //sets best score
    saveDataFireBase()
    //getDataFireBase()
    document.getElementById('onlyImg').style.display = 'none'
    document.getElementById('cat').style.display = 'block'
    let x = document.getElementsByClassName('btn-asw')
    for (let i =0; i < 3; i++){
        x[i].style.display = "none"
    }
    endGameTextOn()   
    playAgainbtnOn()
    heartOff()
    
}


function WonGameTextOn(){  //generates the text when the user wins the game
    
    document.getElementById('info').style.display = 'none'
    document.getElementById('question').style.display = 'none'
    let endGameText = document.getElementById('infoCol');
    endGameText.style.display = 'block'
    endGameText.innerHTML = `
    <div class='winGameX'>
        <p> Enhorabuena!!! <br> Lo has conseguido<br> Eres el mejor acertando capitales! <br> Mejor puntuacion en: ${score[3]}: ${localStorage[score[3]]} </p>
        <i class="fa-solid fa-trophy"></i>
        <button type="button" class="btn btn-light btn-lg btn-block" id="showScores"  onclick='showScoresOn()'> Show more scores! </button>
    </div>
`
}


function gameWon(){  //its called when the user wins the game
    gameWonSound()  //play a victory sound
    saveScore() //it saves the best score
    saveDataFireBase()
    //////getDataFireBase()
    document.getElementById('onlyImg').style.display = 'none'
    document.getElementById('cat').style.display = 'block';
    let x = document.getElementsByClassName('btn-asw')
    for (let i =0; i < 3; i++){
        x[i].style.display = "none"
    }
    WonGameTextOn()
    playAgainbtnOn()
    heartOff()
    
}

//Best score Data, it saves the best score in local host
function saveScore(){
        if(localStorage[score[3]]){
            if(score[1] > localStorage[score[3]]){
                localStorage[score[3]]= score[1]
            }
        }else{
            localStorage[score[3]] = score[1]
        }
    console.log(localStorage[score[3]])
}

///firebase

let userName= ''

onAuthStateChanged(auth, async (user) => {

    if (user){
        console.log('userin')
        userName = user.displayName
    }else{
        console.log('nope')
    }
    loginCheck(user)

})


async function saveDataFireBase(){

    try {
        const docRef = await addDoc(collection(db, "score"), {
          name: userName,
          score: score[1],
          continent: score[3]
        });
        console.log('made it bitch');
      } catch (error) {
        console.log(error);
      }

}

async function getDataFireBase(){
    const querySnapshot = await getDocs(collection(db, 'score'));
    setUpPosts(querySnapshot.docs)
    

}

function showScoresOn (){
    let mainContainer = document.querySelector('#mainContainer')
    let postContainer = document.querySelector('#containerPost')
    mainContainer.style.display = 'none'
    postContainer.style.display = 'block'
    getDataFireBase()

}

function showScoresOff(){
    let mainContainer = document.querySelector('#mainContainer')
    let postContainer = document.querySelector('#containerPost')
    mainContainer.style.display = 'block'
    postContainer.style.display = 'none'


}